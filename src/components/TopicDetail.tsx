import { useState } from 'react'
import { ArrowLeft, Bookmark, Share2, Clock, Calendar, Tag, ExternalLink, ChevronRight, Brain, Users, BookOpen } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import { ScrollArea } from './ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { PsychologyTopic } from '../types/psychology'
import { Quiz } from './Quiz'
import { AIStudyAssistant } from './AIStudyAssistant'
import { psychologyTopics, quizzes } from '../data/mockData'

interface TopicDetailProps {
  topic: PsychologyTopic
  onBack: () => void
  onBookmarkToggle: (topicId: string) => void
}

export function TopicDetail({ topic, onBack, onBookmarkToggle }: TopicDetailProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [activeTab, setActiveTab] = useState('content')

  const getFieldClass = (field: string) => `field-${field}`
  const getDifficultyClass = (difficulty: string) => `difficulty-${difficulty}`

  const relatedTopics = psychologyTopics.filter(t => {
    if (!t || !topic) return false
    
    // Check if topic has relatedTopics array and if current topic is in it
    const isRelated = topic.relatedTopics && Array.isArray(topic.relatedTopics) && topic.relatedTopics.includes(t.id)
    
    // Or if it's in the same field but not the same topic
    const isSameField = t.field === topic.field && t.id !== topic.id
    
    return isRelated || isSameField
  }).slice(0, 3)

  // Get quiz for this topic
  const topicQuiz = quizzes.find(q => q.topicId === topic.id)

  // Parse content sections for table of contents
  const contentSections = topic.content.split('\n').filter(line => 
    line.startsWith('##') && !line.startsWith('###')
  ).map(line => ({
    id: line.replace('## ', '').toLowerCase().replace(/\s+/g, '-'),
    title: line.replace('## ', '')
  }))

  const handleQuizComplete = (score: number) => {
    console.log(`Quiz completed with score: ${score}%`)
    // Could show a success message or update progress
  }

  return (
    <div className="flex h-full">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-6xl mx-auto p-6 h-full">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className={`topic-badge ${getFieldClass(topic.field)}`}>
                  {topic.field.charAt(0).toUpperCase() + topic.field.slice(1).replace('-', ' ')}
                </Badge>
                <Badge className={`topic-badge ${getDifficultyClass(topic.difficulty)}`}>
                  {topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1)}
                </Badge>
                <Badge variant="outline" className="topic-badge">
                  {topic.contentType.charAt(0).toUpperCase() + topic.contentType.slice(1).replace('-', ' ')}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
              <p className="text-lg text-muted-foreground">{topic.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => onBookmarkToggle(topic.id)}
              >
                <Bookmark 
                  className={`h-4 w-4 ${topic.isBookmarked ? 'fill-current text-primary' : ''}`} 
                />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{topic.readingTime} min read</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Updated {new Date(topic.lastUpdated).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Tag className="h-4 w-4" />
              <span>{topic.tags.length} tags</span>
            </div>
          </div>

          <Separator className="mb-6" />

          {/* Tabbed Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-[calc(100vh-300px)]">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="content" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Quiz ({topicQuiz ? topicQuiz.questions.length : 0})
              </TabsTrigger>
              <TabsTrigger value="ai-assistant" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                AI Assistant
              </TabsTrigger>
              <TabsTrigger value="study-groups" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Study Groups
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="h-full mt-6">
              <div className="flex h-full gap-6">
                {/* Content */}
                <div className="flex-1">
                  <ScrollArea className="h-full pr-4">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: topic.content
                            .replace(/^# /gm, '<h1 class="text-2xl font-bold mb-4 mt-8">')
                            .replace(/^## /gm, '<h2 class="text-xl font-semibold mb-3 mt-6">')
                            .replace(/^### /gm, '<h3 class="text-lg font-medium mb-2 mt-4">')
                            .replace(/^\*\*(.*?)\*\*/gm, '<strong>$1</strong>')
                            .replace(/^\*(.*?)\*/gm, '<em>$1</em>')
                            .replace(/\n\n/g, '</p><p class="mb-4">')
                            .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>')
                            .replace(/^- (.+)$/gm, '<li class="mb-1">$1</li>')
                            .replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 mb-4">$1</ul>')
                        }} 
                      />
                    </div>

                    {/* Tags */}
                    {topic.tags && Array.isArray(topic.tags) && topic.tags.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-3">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {topic.tags.map((tag, index) => (
                            <Badge key={`${tag}-${index}`} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Citations */}
                    {topic.citations && Array.isArray(topic.citations) && topic.citations.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-3">References</h3>
                        <div className="space-y-2">
                          {topic.citations.map((citation, index) => (
                            <div key={`citation-${index}`} className="text-sm text-muted-foreground">
                              {citation}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </ScrollArea>
                </div>

                {/* Sidebar */}
                <div className="w-80 space-y-4">
                  {/* Table of Contents */}
                  {contentSections.length > 0 && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">Table of Contents</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 space-y-1">
                        {contentSections.map((section) => (
                          <Button
                            key={section.id}
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-xs h-8"
                            onClick={() => {
                              const element = document.getElementById(section.id)
                              element?.scrollIntoView({ behavior: 'smooth' })
                              setActiveSection(section.id)
                            }}
                          >
                            <ChevronRight className="mr-1 h-3 w-3" />
                            {section.title}
                          </Button>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* Related Topics */}
                  {relatedTopics.length > 0 && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">Related Topics</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 space-y-3">
                        {relatedTopics.map((relatedTopic) => (
                          <div key={relatedTopic.id} className="space-y-2">
                            <h4 className="text-sm font-medium line-clamp-2 hover:text-primary cursor-pointer">
                              {relatedTopic.title}
                            </h4>
                            <div className="flex items-center space-x-2">
                              <Badge className={`topic-badge ${getFieldClass(relatedTopic.field)} text-xs`}>
                                {relatedTopic.field}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {relatedTopic.readingTime} min
                              </span>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* Progress */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Your Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Reading Progress</span>
                          <span className="font-medium">0%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }} />
                        </div>
                        <Button size="sm" className="w-full">
                          Mark as Complete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="quiz" className="h-full mt-6">
              <div className="h-full flex items-center justify-center">
                {topicQuiz ? (
                  <Quiz 
                    quiz={topicQuiz}
                    onComplete={handleQuizComplete}
                  />
                ) : (
                  <Card className="w-full max-w-md text-center">
                    <CardContent className="pt-6">
                      <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Quiz Available</h3>
                      <p className="text-muted-foreground mb-4">
                        Quiz questions for this topic are coming soon. Check back later!
                      </p>
                      <Button variant="outline" onClick={() => setActiveTab('ai-assistant')}>
                        Try AI Assistant Instead
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="ai-assistant" className="h-full mt-6">
              <div className="h-full flex items-center justify-center">
                <AIStudyAssistant 
                  topicId={topic.id}
                  topicTitle={topic.title}
                />
              </div>
            </TabsContent>

            <TabsContent value="study-groups" className="h-full mt-6">
              <div className="h-full flex items-center justify-center">
                <Card className="w-full max-w-md text-center">
                  <CardContent className="pt-6">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Study Groups</h3>
                    <p className="text-muted-foreground mb-4">
                      Find study groups related to {topic.title} and collaborate with other students.
                    </p>
                    <Button onClick={() => {
                      // Navigate to study groups page
                      console.log('Navigate to study groups')
                    }}>
                      Browse Study Groups
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}