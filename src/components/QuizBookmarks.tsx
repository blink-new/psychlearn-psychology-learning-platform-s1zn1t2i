import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Bookmark, BookmarkCheck, Clock, Brain, Trash2 } from 'lucide-react'
import { blink } from '../blink/client'
import { Quiz, QuizBookmark } from '../types/psychology'
import { quizzes } from '../data/mockData'

interface QuizBookmarksProps {
  onQuizSelect?: (quiz: Quiz) => void
}

export function QuizBookmarks({ onQuizSelect }: QuizBookmarksProps) {
  const [bookmarkedQuizzes, setBookmarkedQuizzes] = useState<(QuizBookmark & { quiz: Quiz })[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const loadBookmarkedQuizzes = async (userId: string) => {
    try {
      setLoading(true)
      const bookmarks = await blink.db.quiz_bookmarks.list({
        where: { user_id: userId },
        orderBy: { bookmarked_at: 'desc' }
      })

      const bookmarkedWithQuizzes = bookmarks
        .map(bookmark => {
          const quiz = quizzes.find(q => q.id === bookmark.quiz_id)
          return quiz ? { ...bookmark, quiz } : null
        })
        .filter(Boolean) as (QuizBookmark & { quiz: Quiz })[]

      setBookmarkedQuizzes(bookmarkedWithQuizzes)
    } catch (error) {
      console.error('Failed to load bookmarked quizzes:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      if (state.user) {
        loadBookmarkedQuizzes(state.user.id)
      } else {
        setBookmarkedQuizzes([])
        setLoading(false)
      }
    })
    return unsubscribe
  }, [])

  const handleRemoveBookmark = async (bookmarkId: string) => {
    try {
      await blink.db.quiz_bookmarks.delete(bookmarkId)
      setBookmarkedQuizzes(prev => prev.filter(b => b.id !== bookmarkId))
    } catch (error) {
      console.error('Failed to remove bookmark:', error)
    }
  }

  const handleQuizClick = (quiz: Quiz) => {
    onQuizSelect?.(quiz)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading bookmarked quizzes...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="text-center py-12">
        <BookmarkCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">Sign In Required</h3>
        <p className="text-muted-foreground mb-4">
          Sign in to bookmark quizzes and track your progress.
        </p>
        <Button onClick={() => blink.auth.login()}>
          Sign In
        </Button>
      </div>
    )
  }

  if (bookmarkedQuizzes.length === 0) {
    return (
      <div className="text-center py-12">
        <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No Bookmarked Quizzes</h3>
        <p className="text-muted-foreground mb-4">
          Bookmark quizzes to easily access them later and track your learning progress.
        </p>
        <p className="text-sm text-muted-foreground">
          Look for the bookmark icon on quiz pages to save them here.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Bookmarked Quizzes</h2>
        <p className="text-muted-foreground">
          {bookmarkedQuizzes.length} quiz{bookmarkedQuizzes.length !== 1 ? 'es' : ''} bookmarked
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bookmarkedQuizzes.map((bookmark) => (
          <Card key={bookmark.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg line-clamp-2 mb-2">
                    {bookmark.quiz.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {bookmark.quiz.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveBookmark(bookmark.id)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Brain className="h-4 w-4" />
                  {bookmark.quiz.questions.length} questions
                </div>
                {bookmark.quiz.timeLimit && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {Math.floor(bookmark.quiz.timeLimit / 60)} min
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  Bookmarked {new Date(bookmark.bookmarked_at).toLocaleDateString()}
                </Badge>
                <Button
                  size="sm"
                  onClick={() => handleQuizClick(bookmark.quiz)}
                >
                  Take Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}