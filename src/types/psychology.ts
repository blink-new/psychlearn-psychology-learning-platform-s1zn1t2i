export interface PsychologyTopic {
  id: string
  title: string
  description: string
  content: string
  field: PsychologyField
  difficulty: DifficultyLevel
  contentType: ContentType
  timePeriod: TimePeriod
  readingTime: number
  tags: string[]
  relatedTopics: string[]
  citations: Citation[]
  lastUpdated: string
  isBookmarked?: boolean
  progress?: 'not-started' | 'in-progress' | 'completed'
}

export type PsychologyField = 
  | 'cognitive'
  | 'clinical'
  | 'social'
  | 'developmental'
  | 'neuropsychology'
  | 'behavioral'
  | 'abnormal'
  | 'research-methods'
  | 'positive'
  | 'forensic'

export type DifficultyLevel = 'introductory' | 'intermediate' | 'advanced' | 'graduate'

export type ContentType = 
  | 'theory'
  | 'case-study'
  | 'experiment'
  | 'disorder'
  | 'treatment'
  | 'biography'
  | 'statistical-method'

export type TimePeriod = 'historical' | 'classical' | 'modern' | 'contemporary'

export interface Citation {
  authors: string[]
  title: string
  journal?: string
  year: number
  doi?: string
  url?: string
}

export interface SearchFilters {
  query?: string
  fields?: PsychologyField[]
  difficulty?: DifficultyLevel[]
  contentType?: ContentType[]
  timePeriod?: TimePeriod[]
  tags?: string[]
}

export interface User {
  id: string
  email: string
  displayName?: string
  preferences: UserPreferences
  progress: UserProgress
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  fontSize: 'small' | 'medium' | 'large'
  highContrast: boolean
  reducedMotion: boolean
}

export interface UserProgress {
  completedTopics: string[]
  inProgressTopics: string[]
  bookmarkedTopics: string[]
  studyStreak: number
  totalReadingTime: number
}

export interface QuizQuestion {
  id: string
  topicId: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface StudyGroup {
  id: string
  name: string
  description: string
  topic: string
  members: number
  maxMembers: number
  isPublic: boolean
  createdBy: string
  createdAt: string
  tags: string[]
}

export interface QuizAttempt {
  id: string
  topicId: string
  userId: string
  score: number
  totalQuestions: number
  answers: number[]
  completedAt: string
}