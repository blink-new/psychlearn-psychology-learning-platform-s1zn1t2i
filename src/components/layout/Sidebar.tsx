import { useState } from 'react'
import { ChevronDown, ChevronRight, Filter, BookOpen, Brain, Users, Baby, Zap, Heart, Scale, BarChart3, Smile, Shield } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { psychologyFields } from '../../data/mockData'
import { PsychologyField, DifficultyLevel, ContentType } from '../../types/psychology'

interface SidebarProps {
  selectedFields: PsychologyField[]
  selectedDifficulty: DifficultyLevel[]
  selectedContentTypes: ContentType[]
  onFieldChange: (fields: PsychologyField[]) => void
  onDifficultyChange: (difficulty: DifficultyLevel[]) => void
  onContentTypeChange: (types: ContentType[]) => void
}

const fieldIcons = {
  cognitive: Brain,
  clinical: Heart,
  social: Users,
  developmental: Baby,
  neuropsychology: Zap,
  behavioral: BarChart3,
  abnormal: Shield,
  'research-methods': BarChart3,
  positive: Smile,
  forensic: Scale
}

const difficultyLevels = [
  { id: 'introductory', name: 'Introductory', color: 'green' },
  { id: 'intermediate', name: 'Intermediate', color: 'yellow' },
  { id: 'advanced', name: 'Advanced', color: 'red' },
  { id: 'graduate', name: 'Graduate', color: 'purple' }
] as const

const contentTypes = [
  { id: 'theory', name: 'Theory' },
  { id: 'case-study', name: 'Case Study' },
  { id: 'experiment', name: 'Experiment' },
  { id: 'disorder', name: 'Disorder' },
  { id: 'treatment', name: 'Treatment' },
  { id: 'biography', name: 'Biography' },
  { id: 'statistical-method', name: 'Statistical Method' }
] as const

export function Sidebar({
  selectedFields,
  selectedDifficulty,
  selectedContentTypes,
  onFieldChange,
  onDifficultyChange,
  onContentTypeChange
}: SidebarProps) {
  const [isFieldsOpen, setIsFieldsOpen] = useState(true)
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(true)
  const [isContentTypesOpen, setIsContentTypesOpen] = useState(true)

  const toggleField = (field: PsychologyField) => {
    if (selectedFields.includes(field)) {
      onFieldChange(selectedFields.filter(f => f !== field))
    } else {
      onFieldChange([...selectedFields, field])
    }
  }

  const toggleDifficulty = (difficulty: DifficultyLevel) => {
    if (selectedDifficulty.includes(difficulty)) {
      onDifficultyChange(selectedDifficulty.filter(d => d !== difficulty))
    } else {
      onDifficultyChange([...selectedDifficulty, difficulty])
    }
  }

  const toggleContentType = (type: ContentType) => {
    if (selectedContentTypes.includes(type)) {
      onContentTypeChange(selectedContentTypes.filter(t => t !== type))
    } else {
      onContentTypeChange([...selectedContentTypes, type])
    }
  }

  const clearAllFilters = () => {
    onFieldChange([])
    onDifficultyChange([])
    onContentTypeChange([])
  }

  const hasActiveFilters = selectedFields.length > 0 || selectedDifficulty.length > 0 || selectedContentTypes.length > 0

  return (
    <div className="w-80 border-r bg-background/50 p-4 space-y-4 overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <h2 className="font-semibold">Filters</h2>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All
          </Button>
        )}
      </div>

      {/* Psychology Fields */}
      <Card>
        <Collapsible open={isFieldsOpen} onOpenChange={setIsFieldsOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="pb-3 cursor-pointer hover:bg-muted/50 transition-colors">
              <CardTitle className="text-sm flex items-center justify-between">
                <span>Psychology Fields</span>
                {isFieldsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0 space-y-2">
              {psychologyFields.map((field) => {
                const Icon = fieldIcons[field.id as keyof typeof fieldIcons]
                const isSelected = selectedFields.includes(field.id as PsychologyField)
                
                return (
                  <Button
                    key={field.id}
                    variant={isSelected ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => toggleField(field.id as PsychologyField)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span className="flex-1 text-left">{field.name}</span>
                    {isSelected && <Badge variant="secondary" className="ml-2">✓</Badge>}
                  </Button>
                )
              })}
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Difficulty Level */}
      <Card>
        <Collapsible open={isDifficultyOpen} onOpenChange={setIsDifficultyOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="pb-3 cursor-pointer hover:bg-muted/50 transition-colors">
              <CardTitle className="text-sm flex items-center justify-between">
                <span>Difficulty Level</span>
                {isDifficultyOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0 space-y-2">
              {difficultyLevels.map((level) => {
                const isSelected = selectedDifficulty.includes(level.id as DifficultyLevel)
                
                return (
                  <Button
                    key={level.id}
                    variant={isSelected ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => toggleDifficulty(level.id as DifficultyLevel)}
                  >
                    <div className={`mr-2 w-3 h-3 rounded-full difficulty-${level.id}`} />
                    <span className="flex-1 text-left">{level.name}</span>
                    {isSelected && <Badge variant="secondary" className="ml-2">✓</Badge>}
                  </Button>
                )
              })}
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Content Types */}
      <Card>
        <Collapsible open={isContentTypesOpen} onOpenChange={setIsContentTypesOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="pb-3 cursor-pointer hover:bg-muted/50 transition-colors">
              <CardTitle className="text-sm flex items-center justify-between">
                <span>Content Type</span>
                {isContentTypesOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0 space-y-2">
              {contentTypes.map((type) => {
                const isSelected = selectedContentTypes.includes(type.id as ContentType)
                
                return (
                  <Button
                    key={type.id}
                    variant={isSelected ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => toggleContentType(type.id as ContentType)}
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span className="flex-1 text-left">{type.name}</span>
                    {isSelected && <Badge variant="secondary" className="ml-2">✓</Badge>}
                  </Button>
                )
              })}
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      <Separator />

      {/* Quick Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Topics</span>
            <span className="font-medium">1,247</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Your Progress</span>
            <span className="font-medium">23%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Bookmarked</span>
            <span className="font-medium">42</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}