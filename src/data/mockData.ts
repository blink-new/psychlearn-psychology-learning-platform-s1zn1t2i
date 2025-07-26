import { PsychologyTopic, Quiz, StudyGroup } from '../types/psychology'
import { realPsychologyTopics, realQuizzes } from './realPsychologyData'

// Export the real psychology data
export const psychologyTopics: PsychologyTopic[] = realPsychologyTopics

export const quizzes: Quiz[] = realQuizzes

// Study groups data (keeping as mock for now since this is user-generated content)
export const studyGroups: StudyGroup[] = [
  {
    id: 'cognitive-psych-study',
    name: 'Cognitive Psychology Masters',
    description: 'Advanced study group focusing on cognitive psychology research and applications. We meet weekly to discuss current research papers and prepare for comprehensive exams.',
    topic: 'Cognitive Psychology',
    members: 24,
    maxMembers: 30,
    isPublic: true,
    createdBy: 'Dr. Sarah Chen',
    createdAt: '2024-01-15',
    tags: ['cognitive', 'research', 'graduate-level', 'weekly-meetings']
  },
  {
    id: 'clinical-disorders-group',
    name: 'Clinical Disorders Study Circle',
    description: 'Comprehensive study group covering DSM-5 disorders, diagnostic criteria, and evidence-based treatments. Perfect for students preparing for clinical psychology programs.',
    topic: 'Clinical Psychology',
    members: 18,
    maxMembers: 25,
    isPublic: true,
    createdBy: 'Dr. Michael Rodriguez',
    createdAt: '2024-01-20',
    tags: ['clinical', 'DSM-5', 'diagnosis', 'treatment']
  },
  {
    id: 'developmental-research',
    name: 'Developmental Psychology Research Hub',
    description: 'Research-focused group exploring attachment theory, cognitive development, and lifespan psychology. We analyze classic studies and discuss contemporary research.',
    topic: 'Developmental Psychology',
    members: 15,
    maxMembers: 20,
    isPublic: true,
    createdBy: 'Dr. Lisa Park',
    createdAt: '2024-01-10',
    tags: ['developmental', 'attachment', 'research', 'lifespan']
  },
  {
    id: 'social-psych-lab',
    name: 'Social Psychology Lab Discussion',
    description: 'Interactive group discussing social psychology experiments, theories, and real-world applications. We focus on understanding human behavior in social contexts.',
    topic: 'Social Psychology',
    members: 22,
    maxMembers: 28,
    isPublic: true,
    createdBy: 'Dr. Emma Thompson',
    createdAt: '2024-01-25',
    tags: ['social', 'experiments', 'behavior', 'applications']
  },
  {
    id: 'neuropsych-brain-study',
    name: 'Neuropsychology & Brain Sciences',
    description: 'Advanced study group exploring brain-behavior relationships, neuroanatomy, and neuropsychological assessment. Ideal for students interested in neuropsychology careers.',
    topic: 'Neuropsychology',
    members: 12,
    maxMembers: 15,
    isPublic: false,
    createdBy: 'Dr. Robert Kim',
    createdAt: '2024-01-18',
    tags: ['neuropsychology', 'brain', 'assessment', 'advanced']
  },
  {
    id: 'behavioral-analysis-group',
    name: 'Applied Behavior Analysis Study Group',
    description: 'Focused on learning principles, behavior modification techniques, and ABA applications. Great for students pursuing BCBA certification or working with special populations.',
    topic: 'Behavioral Psychology',
    members: 16,
    maxMembers: 20,
    isPublic: true,
    createdBy: 'Dr. Jennifer Walsh',
    createdAt: '2024-01-12',
    tags: ['ABA', 'behavior-modification', 'BCBA', 'applications']
  }
]

// Helper functions for filtering and searching
export const getTopicsByField = (field: string): PsychologyTopic[] => {
  return psychologyTopics.filter(topic => topic.field === field)
}

export const getTopicsByDifficulty = (difficulty: string): PsychologyTopic[] => {
  return psychologyTopics.filter(topic => topic.difficulty === difficulty)
}

export const searchTopics = (query: string): PsychologyTopic[] => {
  const lowercaseQuery = query.toLowerCase()
  return psychologyTopics.filter(topic => 
    topic.title.toLowerCase().includes(lowercaseQuery) ||
    topic.description.toLowerCase().includes(lowercaseQuery) ||
    topic.content.toLowerCase().includes(lowercaseQuery) ||
    topic.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export const getQuizByTopicId = (topicId: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.topicId === topicId)
}

export const getRelatedTopics = (currentTopicId: string, limit: number = 3): PsychologyTopic[] => {
  const currentTopic = psychologyTopics.find(topic => topic.id === currentTopicId)
  if (!currentTopic) return []
  
  // Find topics in the same field or with overlapping tags
  const related = psychologyTopics
    .filter(topic => topic.id !== currentTopicId)
    .filter(topic => 
      topic.field === currentTopic.field || 
      topic.tags.some(tag => currentTopic.tags.includes(tag))
    )
    .slice(0, limit)
  
  return related
}

// Psychology field colors for consistent theming
export const fieldColors = {
  'Cognitive': '#3B82F6', // Blue
  'Clinical': '#10B981', // Green
  'Social': '#F59E0B', // Amber
  'Developmental': '#8B5CF6', // Purple
  'Neuropsychology': '#EF4444', // Red
  'Behavioral': '#06B6D4', // Cyan
  'Positive': '#84CC16', // Lime
  'Forensic': '#6B7280', // Gray
  'Health': '#EC4899', // Pink
  'Educational': '#F97316' // Orange
}

// Difficulty level colors
export const difficultyColors = {
  'Introductory': '#22C55E', // Green
  'Intermediate': '#F59E0B', // Amber
  'Advanced': '#EF4444', // Red
  'Graduate': '#8B5CF6' // Purple
}

// Content type icons (using Lucide React icon names)
export const contentTypeIcons = {
  'Theory': 'BookOpen',
  'Experiment': 'FlaskConical',
  'Case Study': 'FileText',
  'Disorder': 'Heart',
  'Treatment': 'Stethoscope',
  'Biography': 'User',
  'Statistical Method': 'BarChart3'
}

// Psychology fields for filtering
export const psychologyFields = [
  'All Fields',
  'Cognitive',
  'Clinical', 
  'Social',
  'Developmental',
  'Neuropsychology',
  'Behavioral',
  'Positive',
  'Forensic',
  'Health',
  'Educational'
]

// Difficulty levels for filtering
export const difficultyLevels = [
  'All Levels',
  'Introductory',
  'Intermediate', 
  'Advanced',
  'Graduate'
]

// Content types for filtering
export const contentTypes = [
  'All Types',
  'Theory',
  'Experiment',
  'Case Study',
  'Disorder',
  'Treatment',
  'Biography',
  'Statistical Method'
]