import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Users, Plus, Search, Calendar, Lock, Globe } from 'lucide-react'
import { StudyGroup } from '../types/psychology'
import { studyGroups } from '../data/mockData'
import { blink } from '../blink/client'

export function StudyGroups() {
  const [groups, setGroups] = useState<StudyGroup[]>(studyGroups)
  const [searchQuery, setSearchQuery] = useState('')
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [newGroup, setNewGroup] = useState({
    name: '',
    description: '',
    topic: '',
    maxMembers: 20,
    isPublic: true,
    tags: ''
  })

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleCreateGroup = async () => {
    try {
      const user = await blink.auth.me()
      if (!user) return

      const group: StudyGroup = {
        id: `group-${Date.now()}`,
        name: newGroup.name,
        description: newGroup.description,
        topic: newGroup.topic,
        members: 1,
        maxMembers: newGroup.maxMembers,
        isPublic: newGroup.isPublic,
        createdBy: user.displayName || user.email,
        createdAt: new Date().toISOString(),
        tags: newGroup.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      }

      // Save to database
      await blink.db.study_groups.create({
        id: group.id,
        name: group.name,
        description: group.description,
        topic: group.topic,
        members: group.members,
        max_members: group.maxMembers,
        is_public: group.isPublic,
        created_by: group.createdBy,
        created_at: group.createdAt,
        tags: group.tags.join(','),
        user_id: user.id
      })

      setGroups([group, ...groups])
      setShowCreateDialog(false)
      setNewGroup({
        name: '',
        description: '',
        topic: '',
        maxMembers: 20,
        isPublic: true,
        tags: ''
      })
    } catch (error) {
      console.error('Failed to create study group:', error)
    }
  }

  const handleJoinGroup = async (groupId: string) => {
    try {
      const user = await blink.auth.me()
      if (!user) return

      // Update group members count
      setGroups(groups.map(group => 
        group.id === groupId 
          ? { ...group, members: group.members + 1 }
          : group
      ))

      // Save membership to database
      await blink.db.study_group_members.create({
        id: `member-${Date.now()}`,
        group_id: groupId,
        user_id: user.id,
        joined_at: new Date().toISOString()
      })
    } catch (error) {
      console.error('Failed to join study group:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Study Groups</h2>
          <p className="text-muted-foreground">
            Join study groups to collaborate with fellow psychology students
          </p>
        </div>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Group
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create Study Group</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Group Name</label>
                <Input
                  value={newGroup.name}
                  onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                  placeholder="e.g., Memory & Cognition Study Circle"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={newGroup.description}
                  onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
                  placeholder="Describe what your group will focus on..."
                  rows={3}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Topic/Subject</label>
                <Input
                  value={newGroup.topic}
                  onChange={(e) => setNewGroup({ ...newGroup, topic: e.target.value })}
                  placeholder="e.g., Cognitive Psychology"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Max Members</label>
                <Input
                  type="number"
                  value={newGroup.maxMembers}
                  onChange={(e) => setNewGroup({ ...newGroup, maxMembers: parseInt(e.target.value) || 20 })}
                  min="2"
                  max="100"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Tags (comma-separated)</label>
                <Input
                  value={newGroup.tags}
                  onChange={(e) => setNewGroup({ ...newGroup, tags: e.target.value })}
                  placeholder="e.g., memory, cognition, study group"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={newGroup.isPublic}
                    onChange={() => setNewGroup({ ...newGroup, isPublic: true })}
                  />
                  <Globe className="h-4 w-4" />
                  Public
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={!newGroup.isPublic}
                    onChange={() => setNewGroup({ ...newGroup, isPublic: false })}
                  />
                  <Lock className="h-4 w-4" />
                  Private
                </label>
              </div>
              <Button 
                onClick={handleCreateGroup} 
                className="w-full"
                disabled={!newGroup.name || !newGroup.description || !newGroup.topic}
              >
                Create Group
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search study groups..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredGroups.map((group) => (
          <Card key={group.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg line-clamp-2">{group.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{group.topic}</p>
                </div>
                <div className="flex items-center gap-1">
                  {group.isPublic ? (
                    <Globe className="h-4 w-4 text-green-600" />
                  ) : (
                    <Lock className="h-4 w-4 text-gray-600" />
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {group.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {group.members}/{group.maxMembers}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(group.createdAt).toLocaleDateString()}
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {group.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {group.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{group.tags.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-muted-foreground">
                  Created by {group.createdBy}
                </p>
                <Button
                  size="sm"
                  onClick={() => handleJoinGroup(group.id)}
                  disabled={group.members >= group.maxMembers}
                >
                  {group.members >= group.maxMembers ? 'Full' : 'Join'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No study groups found</h3>
          <p className="text-muted-foreground mb-4">
            {searchQuery 
              ? 'Try adjusting your search terms or create a new group.'
              : 'Be the first to create a study group for your topic of interest!'
            }
          </p>
          <Button onClick={() => setShowCreateDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create First Group
          </Button>
        </div>
      )}
    </div>
  )
}