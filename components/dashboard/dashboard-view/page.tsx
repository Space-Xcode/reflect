"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Brain,
  LogOut,
  Settings,
  User,
  PenTool,
  BarChart3,
  Calendar,
  Lightbulb,
  MessageSquare,
  Plus,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react"

type UserType = {
  name?: string;
  email?: string;
  image?: string;
};

export default function DashboardView({ user }: { user: UserType }) {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    await login()
    router.push("/")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">ReflectAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-purple-400">
              <Settings className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-purple-400"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              <LogOut className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border-2 border-purple-500">
                <AvatarImage src={user.image || ""} alt={user.name || "User"} />
                <AvatarFallback className="bg-purple-700 text-white">
                  {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-slate-400">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white">Dashboard</CardTitle>
                <CardDescription className="text-slate-400">Navigate your reflection journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1 p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-slate-700 hover:text-purple-400 pl-6"
                >
                  <BarChart3 className="w-5 h-5 mr-3" />
                  Overview
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-slate-700 hover:text-purple-400 pl-6"
                >
                  <PenTool className="w-5 h-5 mr-3" />
                  Reflections
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-slate-700 hover:text-purple-400 pl-6"
                >
                  <Lightbulb className="w-5 h-5 mr-3" />
                  Insights
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-slate-700 hover:text-purple-400 pl-6"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Journal
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-slate-700 hover:text-purple-400 pl-6"
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  AI Chat
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-slate-700 hover:text-purple-400 pl-6"
                >
                  <User className="w-5 h-5 mr-3" />
                  Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Recent Reflections</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-300 hover:text-purple-400">
                    <Plus className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "Morning Thoughts", time: "2 hours ago" },
                  { title: "Career Goals", time: "Yesterday" },
                  { title: "Weekly Review", time: "3 days ago" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <div className="flex-1">
                      <p className="text-sm text-white group-hover:text-purple-400 transition-colors">{item.title}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.time}
                      </p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-sm text-purple-400 hover:text-purple-300 mt-2">
                  View all reflections
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard */}
          <div className="flex-1">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-slate-800/50 border border-slate-700">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="insights"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Insights
                </TabsTrigger>
                <TabsTrigger
                  value="progress"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Progress
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Welcome Card */}
                <Card className="bg-gradient-to-r from-purple-900 to-indigo-900 border-none text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl">Welcome back, {user.name?.split(" ")[0] || "there"}!</CardTitle>
                    <CardDescription className="text-purple-200">
                      Continue your reflection journey with ReflectAI
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Your reflection streak: <span className="font-bold">7 days</span> 🔥
                    </p>
                    <Button className="bg-white text-purple-900 hover:bg-purple-100">
                      <PenTool className="w-4 h-4 mr-2" />
                      New Reflection
                    </Button>
                  </CardContent>
                </Card>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg flex items-center gap-2">
                        <PenTool className="w-5 h-5 text-purple-400" />
                        Reflections
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-white">24</div>
                      <p className="text-sm text-slate-400">Total reflections</p>
                      <div className="flex items-center gap-1 text-green-400 text-xs mt-2">
                        <TrendingUp className="w-3 h-3" />
                        <span>+12% from last month</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-purple-400" />
                        Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-white">18</div>
                      <p className="text-sm text-slate-400">AI-generated insights</p>
                      <div className="flex items-center gap-1 text-green-400 text-xs mt-2">
                        <TrendingUp className="w-3 h-3" />
                        <span>+8% from last month</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        Mood Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-white">7.8</div>
                      <p className="text-sm text-slate-400">Average mood (1-10)</p>
                      <div className="flex items-center gap-1 text-green-400 text-xs mt-2">
                        <TrendingUp className="w-3 h-3" />
                        <span>+0.5 from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                    <CardDescription className="text-slate-400">
                      Your latest interactions with ReflectAI
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          icon: PenTool,
                          title: "New reflection created",
                          description: "Morning Thoughts",
                          time: "2 hours ago",
                        },
                        {
                          icon: Lightbulb,
                          title: "New insight generated",
                          description: "Pattern detected in your work reflections",
                          time: "Yesterday",
                        },
                        {
                          icon: MessageSquare,
                          title: "AI Chat session",
                          description: "15 minute conversation about career goals",
                          time: "Yesterday",
                        },
                        {
                          icon: Calendar,
                          title: "Weekly review completed",
                          description: "Progress on personal goals",
                          time: "3 days ago",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 pb-4 border-b border-slate-700 last:border-0 last:pb-0">
                          <div className="bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center text-purple-400">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-sm font-medium">{item.title}</p>
                            <p className="text-slate-400 text-sm">{item.description}</p>
                            <p className="text-slate-500 text-xs mt-1">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="insights" className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">AI Insights</CardTitle>
                    <CardDescription className="text-slate-400">
                      Patterns and observations from your reflections
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-slate-300">Your insights will appear here as you continue to use ReflectAI.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="progress" className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Progress Tracking</CardTitle>
                    <CardDescription className="text-slate-400">Monitor your personal growth journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-slate-300">
                        Your progress metrics will appear here as you continue to use ReflectAI.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
function login() {
    throw new Error("Function not implemented.")
}

