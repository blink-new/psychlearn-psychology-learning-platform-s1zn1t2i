import { useState } from 'react'
import { Search, Menu, User, BookOpen, Settings, Moon, Sun, Users, Home, Bookmark } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Badge } from '../ui/badge'

interface HeaderProps {
  onSearch: (query: string) => void
  onToggleTheme: () => void
  isDarkMode: boolean
  currentView?: string
  onNavigate?: (view: string) => void
}

export function Header({ onSearch, onToggleTheme, isDarkMode, currentView, onNavigate }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="py-4">
                <h2 className="text-lg font-semibold mb-4">Navigation</h2>
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Topics
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Search className="mr-2 h-4 w-4" />
                    Advanced Search
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    My Progress
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 psychology-gradient rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">PsychLearn</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Psychology Learning Platform</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {onNavigate && (
          <nav className="hidden lg:flex items-center space-x-1 mx-6">
            <Button
              variant={currentView === 'topics' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onNavigate('topics')}
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Topics
            </Button>
            <Button
              variant={currentView === 'study-groups' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onNavigate('study-groups')}
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Study Groups
            </Button>
            <Button
              variant={currentView === 'quiz-bookmarks' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onNavigate('quiz-bookmarks')}
              className="flex items-center gap-2"
            >
              <Bookmark className="h-4 w-4" />
              Quiz Bookmarks
            </Button>
          </nav>
        )}

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8 hidden md:block">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search psychology topics, theories, experiments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 w-full"
            />
          </form>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            className="hidden sm:flex"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookOpen className="mr-2 h-4 w-4" />
                My Progress
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Badge variant="secondary" className="hidden sm:inline-flex">
            Pro
          </Badge>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search psychology topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 w-full"
          />
        </form>
      </div>
    </header>
  )
}