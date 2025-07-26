import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { ThumbsUp, ThumbsDown, MessageSquare, Plus, User, Clock, Edit, Trash2 } from 'lucide-react'
import { blink } from '../blink/client'
import { QAEntry } from '../types/psychology'

interface QASectionProps {
  topicId: string
  topicTitle: string
}

export function QASection({ topicId, topicTitle }: QASectionProps) {
  const [qaEntries, setQAEntries] = useState<QAEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [newQuestion, setNewQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [userVotes, setUserVotes] = useState<Record<string, 'upvote' | 'downvote'>>({})

  const loadQAEntries = useCallback(async () => {
    try {
      setLoading(true)
      const entries = await blink.db.qa_entries.list({
        where: { topic_id: topicId },
        orderBy: { created_at: 'desc' }
      })
      setQAEntries(entries)

      // Load user votes if authenticated
      if (user) {
        const votes = await blink.db.qa_votes.list({
          where: { user_id: user.id }
        })
        const voteMap = votes.reduce((acc, vote) => {
          acc[vote.qa_entry_id] = vote.vote_type as 'upvote' | 'downvote'
          return acc
        }, {} as Record<string, 'upvote' | 'downvote'>)
        setUserVotes(voteMap)
      }
    } catch (error) {
      console.error('Failed to load Q&A entries:', error)
    } finally {
      setLoading(false)
    }
  }, [topicId, user])

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    loadQAEntries()
  }, [topicId, user, loadQAEntries])

  const handleSubmitQA = async () => {
    if (!user || !newQuestion.trim() || !newAnswer.trim()) return

    try {
      setSubmitting(true)
      const qaEntry: QAEntry = {
        id: `qa_${Date.now()}`,
        topic_id: topicId,
        user_id: user.id,
        question: newQuestion.trim(),
        answer: newAnswer.trim(),
        is_public: isPublic,
        upvotes: 0,
        downvotes: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      await blink.db.qa_entries.create({
        id: qaEntry.id,
        topic_id: qaEntry.topic_id,
        user_id: qaEntry.user_id,
        question: qaEntry.question,
        answer: qaEntry.answer,
        is_public: qaEntry.is_public ? 1 : 0,
        upvotes: qaEntry.upvotes,
        downvotes: qaEntry.downvotes,
        created_at: qaEntry.created_at,
        updated_at: qaEntry.updated_at
      })

      setQAEntries([qaEntry, ...qaEntries])
      setNewQuestion('')
      setNewAnswer('')
      setShowAddDialog(false)
    } catch (error) {
      console.error('Failed to submit Q&A:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleVote = async (entryId: string, voteType: 'upvote' | 'downvote') => {
    if (!user) return

    try {
      const currentVote = userVotes[entryId]
      
      // Remove existing vote if same type
      if (currentVote === voteType) {
        await blink.db.qa_votes.delete(`${entryId}_${user.id}`)
        setUserVotes(prev => {
          const newVotes = { ...prev }
          delete newVotes[entryId]
          return newVotes
        })
        
        // Update entry vote count
        setQAEntries(prev => prev.map(entry => {
          if (entry.id === entryId) {
            return {
              ...entry,
              [voteType === 'upvote' ? 'upvotes' : 'downvotes']: entry[voteType === 'upvote' ? 'upvotes' : 'downvotes'] - 1
            }
          }
          return entry
        }))
        return
      }

      // Update or create vote
      await blink.db.qa_votes.create({
        id: `${entryId}_${user.id}`,
        qa_entry_id: entryId,
        user_id: user.id,
        vote_type: voteType,
        created_at: new Date().toISOString()
      })

      setUserVotes(prev => ({ ...prev, [entryId]: voteType }))

      // Update entry vote counts
      setQAEntries(prev => prev.map(entry => {
        if (entry.id === entryId) {
          const updates: Partial<QAEntry> = {}
          
          if (currentVote) {
            // Remove previous vote
            updates[currentVote === 'upvote' ? 'upvotes' : 'downvotes'] = 
              entry[currentVote === 'upvote' ? 'upvotes' : 'downvotes'] - 1
          }
          
          // Add new vote
          updates[voteType === 'upvote' ? 'upvotes' : 'downvotes'] = 
            (entry[voteType === 'upvote' ? 'upvotes' : 'downvotes'] || 0) + 1

          return { ...entry, ...updates }
        }
        return entry
      }))

      // Update database entry
      const entry = qaEntries.find(e => e.id === entryId)
      if (entry) {
        const newUpvotes = currentVote === 'upvote' ? entry.upvotes - 1 : 
                          voteType === 'upvote' ? entry.upvotes + 1 : entry.upvotes
        const newDownvotes = currentVote === 'downvote' ? entry.downvotes - 1 : 
                            voteType === 'downvote' ? entry.downvotes + 1 : entry.downvotes

        await blink.db.qa_entries.update(entryId, {
          upvotes: newUpvotes,
          downvotes: newDownvotes,
          updated_at: new Date().toISOString()
        })
      }
    } catch (error) {
      console.error('Failed to vote:', error)
    }
  }

  const handleDeleteEntry = async (entryId: string) => {
    if (!user) return

    try {
      await blink.db.qa_entries.delete(entryId)
      setQAEntries(prev => prev.filter(entry => entry.id !== entryId))
    } catch (error) {
      console.error('Failed to delete entry:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading Q&A...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">Questions & Answers</h3>
          <p className="text-muted-foreground">
            Community-driven Q&A for {topicTitle}
          </p>
        </div>
        {user && (
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Q&A
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add Question & Answer</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Question</label>
                  <Input
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="What would you like to know about this topic?"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Answer</label>
                  <Textarea
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Provide a detailed answer..."
                    rows={6}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={isPublic}
                      onChange={() => setIsPublic(true)}
                    />
                    Public (visible to everyone)
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={!isPublic}
                      onChange={() => setIsPublic(false)}
                    />
                    Private (only visible to you)
                  </label>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmitQA}
                    disabled={!newQuestion.trim() || !newAnswer.trim() || submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Q&A'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {!user && (
        <Card className="border-dashed">
          <CardContent className="pt-6 text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Join the Discussion</h3>
            <p className="text-muted-foreground mb-4">
              Sign in to ask questions, provide answers, and vote on community contributions.
            </p>
            <Button onClick={() => blink.auth.login()}>
              Sign In to Participate
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {qaEntries.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Questions Yet</h3>
              <p className="text-muted-foreground mb-4">
                Be the first to ask a question about {topicTitle}!
              </p>
              {user && (
                <Button onClick={() => setShowAddDialog(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Ask First Question
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          qaEntries.map((entry) => (
            <Card key={entry.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{entry.question}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        Anonymous User
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {new Date(entry.created_at).toLocaleDateString()}
                      </div>
                      {!entry.is_public && (
                        <Badge variant="secondary" className="text-xs">
                          Private
                        </Badge>
                      )}
                    </div>
                  </div>
                  {user && user.id === entry.user_id && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none">
                  <p className="whitespace-pre-wrap">{entry.answer}</p>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleVote(entry.id, 'upvote')}
                      disabled={!user}
                      className={userVotes[entry.id] === 'upvote' ? 'text-green-600' : ''}
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {entry.upvotes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleVote(entry.id, 'downvote')}
                      disabled={!user}
                      className={userVotes[entry.id] === 'downvote' ? 'text-red-600' : ''}
                    >
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      {entry.downvotes}
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Score: {entry.upvotes - entry.downvotes}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}