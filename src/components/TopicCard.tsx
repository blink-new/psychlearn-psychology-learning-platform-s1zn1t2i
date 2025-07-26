import { Clock, BookOpen, Bookmark, CheckCircle, Circle } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { PsychologyTopic } from '../types/psychology'

interface TopicCardProps {
  topic: PsychologyTopic
  onTopicClick: (topic: PsychologyTopic) => void
  onBookmarkToggle: (topicId: string) => void
  onProgressToggle: (topicId: string) => void
}

export function TopicCard({ topic, onTopicClick, onBookmarkToggle, onProgressToggle }: TopicCardProps) {
  const getFieldClass = (field: string) => `field-${field}`
  const getDifficultyClass = (difficulty: string) => `difficulty-${difficulty}`

  // Safety check for topic
  if (!topic || typeof topic !== 'object') {
    return null
  }

  return (
    <Card className="content-card cursor-pointer group" onClick={() => onTopicClick(topic)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
              {topic.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {topic.description}
            </p>
          </div>
          <div className="flex flex-col items-end space-y-2 ml-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.stopPropagation()
                onBookmarkToggle(topic.id)
              }}
            >
              <Bookmark 
                className={`h-4 w-4 ${topic.isBookmarked ? 'fill-current text-primary' : ''}`} 
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.stopPropagation()
                onProgressToggle(topic.id)
              }}
            >
              {topic.progress === 'completed' ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <Circle className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-3">
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

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{topic.readingTime} min read</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-3 w-3" />
              <span>{topic.contentType}</span>
            </div>
          </div>
          
          {topic.progress && (
            <div className="flex items-center space-x-1">
              {topic.progress === 'completed' && (
                <span className="text-green-600 text-xs font-medium">Completed</span>
              )}
              {topic.progress === 'in-progress' && (
                <span className="text-yellow-600 text-xs font-medium">In Progress</span>
              )}
            </div>
          )}
        </div>

        {topic.tags && Array.isArray(topic.tags) && topic.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {topic.tags.slice(0, 4).map((tag, index) => (
              <Badge key={`${tag}-${index}`} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {topic.tags.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{topic.tags.length - 4} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}