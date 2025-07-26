import { useState, useEffect, useMemo } from 'react'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { TopicCard } from './components/TopicCard'
import { TopicDetail } from './components/TopicDetail'
import { StudyGroups } from './components/StudyGroups'
import { QuizBookmarks } from './components/QuizBookmarks'
import { ErrorBoundary } from './components/ErrorBoundary'
import { blink } from './blink/client'
import { psychologyTopics, searchTopics, getTopicsByField, getTopicsByDifficulty } from './data/mockData'
import { PsychologyTopic, PsychologyField, DifficultyLevel, ContentType, SearchFilters } from './types/psychology'

type ViewType = 'topics' | 'study-groups' | 'quiz-bookmarks' | 'topic-detail'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentView, setCurrentView] = useState<ViewType>('topics')
  const [selectedTopic, setSelectedTopic] = useState<PsychologyTopic | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [topics, setTopics] = useState<PsychologyTopic[]>(psychologyTopics)
  
  // Filter states
  const [selectedFields, setSelectedFields] = useState<PsychologyField[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel[]>([])
  const [selectedContentTypes, setSelectedContentTypes] = useState<ContentType[]>([])

  // Auth state management
  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
    
    setIsDarkMode(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newTheme)
  }

  // Filter and search logic
  const filteredTopics = useMemo(() => {
    if (!Array.isArray(topics)) {
      console.error('Topics is not an array:', topics)
      return []
    }

    return topics.filter(topic => {
      // Ensure topic is valid
      if (!topic || typeof topic !== 'object') {
        console.error('Invalid topic:', topic)
        return false
      }

      // Ensure required fields exist
      if (!topic.title || !topic.field || !topic.difficulty || !topic.contentType) {
        console.error('Topic missing required fields:', topic)
        return false
      }

      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = topic.title && topic.title.toLowerCase().includes(query)
        const matchesDescription = topic.description && topic.description.toLowerCase().includes(query)
        const matchesTags = topic.tags && Array.isArray(topic.tags) && topic.tags.some(tag => tag.toLowerCase().includes(query))
        const matchesContent = topic.content && topic.content.toLowerCase().includes(query)
        
        if (!matchesTitle && !matchesDescription && !matchesTags && !matchesContent) {
          return false
        }
      }

      // Field filter
      if (selectedFields.length > 0 && !selectedFields.includes(topic.field)) {
        return false
      }

      // Difficulty filter
      if (selectedDifficulty.length > 0 && !selectedDifficulty.includes(topic.difficulty)) {
        return false
      }

      // Content type filter
      if (selectedContentTypes.length > 0 && !selectedContentTypes.includes(topic.contentType)) {
        return false
      }

      return true
    })
  }, [topics, searchQuery, selectedFields, selectedDifficulty, selectedContentTypes])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setSelectedTopic(null) // Return to topic list when searching
  }

  const handleTopicClick = (topic: PsychologyTopic) => {
    setSelectedTopic(topic)
    setCurrentView('topic-detail')
  }

  const handleBackToTopics = () => {
    setSelectedTopic(null)
    setCurrentView('topics')
  }

  const handleNavigate = (view: string) => {
    setCurrentView(view as ViewType)
    setSelectedTopic(null)
  }

  const handleBookmarkToggle = (topicId: string) => {
    setTopics(prevTopics =>
      prevTopics.map(topic =>
        topic.id === topicId
          ? { ...topic, isBookmarked: !topic.isBookmarked }
          : topic
      )
    )
  }

  const handleProgressToggle = (topicId: string) => {
    setTopics(prevTopics =>
      prevTopics.map(topic =>
        topic.id === topicId
          ? { 
              ...topic, 
              progress: topic.progress === 'completed' ? 'not-started' : 'completed'
            }
          : topic
      )
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 psychology-gradient rounded-lg flex items-center justify-center mx-auto">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-muted-foreground">Loading PsychLearn...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto p-6">
          <div className="w-16 h-16 psychology-gradient rounded-lg flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome to PsychLearn</h1>
            <p className="text-muted-foreground">
              The ultimate psychology learning platform with 1000+ topics, interactive content, and personalized study tools.
            </p>
          </div>
          <button
            onClick={() => blink.auth.login()}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md font-medium transition-colors"
          >
            Sign In to Get Started
          </button>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header 
          onSearch={handleSearch}
          onToggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          currentView={currentView}
          onNavigate={handleNavigate}
        />
        
        <div className="flex h-[calc(100vh-4rem)]">
        {currentView === 'topics' && (
          <Sidebar
            selectedFields={selectedFields}
            selectedDifficulty={selectedDifficulty}
            selectedContentTypes={selectedContentTypes}
            onFieldChange={setSelectedFields}
            onDifficultyChange={setSelectedDifficulty}
            onContentTypeChange={setSelectedContentTypes}
          />
        )}
        
        <main className="flex-1 overflow-hidden">
          {currentView === 'topic-detail' && selectedTopic ? (
            <TopicDetail
              topic={selectedTopic}
              onBack={handleBackToTopics}
              onBookmarkToggle={handleBookmarkToggle}
            />
          ) : currentView === 'study-groups' ? (
            <div className="h-full overflow-y-auto">
              <div className="container mx-auto p-6">
                <StudyGroups />
              </div>
            </div>
          ) : currentView === 'quiz-bookmarks' ? (
            <div className="h-full overflow-y-auto">
              <div className="container mx-auto p-6">
                <QuizBookmarks onQuizSelect={(quiz) => {
                  // Find the topic for this quiz and navigate to it
                  const topic = psychologyTopics.find(t => t.id === quiz.topicId)
                  if (topic) {
                    setSelectedTopic(topic)
                    setCurrentView('topic-detail')
                  }
                }} />
              </div>
            </div>
          ) : (
            <div className="h-full overflow-y-auto">
              <div className="container mx-auto p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'Explore Psychology Topics'}
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredTopics.length} topics found
                    {selectedFields.length > 0 || selectedDifficulty.length > 0 || selectedContentTypes.length > 0 
                      ? ' with current filters' 
                      : ''
                    }
                  </p>
                </div>

                {filteredTopics.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1.306m8 0V7a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2v1.306z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No topics found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or filters to find more content.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('')
                        setSelectedFields([])
                        setSelectedDifficulty([])
                        setSelectedContentTypes([])
                      }}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 rounded-md font-medium transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTopics.map((topic) => (
                      <TopicCard
                        key={topic.id}
                        topic={topic}
                        onTopicClick={handleTopicClick}
                        onBookmarkToggle={handleBookmarkToggle}
                        onProgressToggle={handleProgressToggle}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
    </ErrorBoundary>
  )
}

export default App