import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Activity, Users, TrendingUp, Server, Globe, Bell, Settings, Share } from "lucide-react"

export default function LiveDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Live Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">Real-time monitoring and analytics</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch id="auto-refresh" defaultChecked />
              <Label htmlFor="auto-refresh" className="text-sm">
                Auto-refresh
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">Live</span>
            </div>

            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Configure
            </Button>

            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Live Metrics Overview */}
        <Suspense fallback={<div>Loading metrics...</div>}>
          <></>
        </Suspense>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <Server className="w-4 h-4" />
              System
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Alerts
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Real-time Activity Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Real-time Activity
                  </CardTitle>
                  <CardDescription>Live user activity and system events</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading chart...</div>}>
                    <> type="activity" height={300} updateInterval={1000} </>
                  </Suspense>
                </CardContent>
              </Card>

              {/* Activity Feed */}
              <Card>
                <CardHeader>
                  <CardTitle>Live Activity Feed</CardTitle>
                  <CardDescription>Recent user actions and system events</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading feed...</div>}>
                    <> maxItems={10} </>
                  </Suspense>
                </CardContent>
              </Card>
            </div>

            {/* User Activity Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Global User Activity
                </CardTitle>
                <CardDescription>Real-time user locations and activity heatmap</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<div>Loading map...</div>}>
                  
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Users</CardTitle>
                  <CardDescription>Real-time active user count and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <> type="users" height={300} updateInterval={5000} </>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Registrations</CardTitle>
                  <CardDescription>Live registration tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <>type="registrations" height={300} updateInterval={10000} </>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>User Engagement Metrics</CardTitle>
                <CardDescription>Real-time engagement and feature usage</CardDescription>
              </CardHeader>
              <CardContent>
                <> type="engagement" height={400} updateInterval={2000} </>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Response Time</CardTitle>
                  <CardDescription>API response time trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <> type="response-time" height={200} updateInterval={1000} </>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Throughput</CardTitle>
                  <CardDescription>Requests per second</CardDescription>
                </CardHeader>
                <CardContent>
                  <> type="throughput" height={200} updateInterval={1000} </>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error Rate</CardTitle>
                  <CardDescription>Error percentage over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <> type="error-rate" height={200} updateInterval={1000} </>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Database Performance</CardTitle>
                <CardDescription>Real-time database metrics and query performance</CardDescription>
              </CardHeader>
              <CardContent>
                <> type="database" height={300} updateInterval={2000} </>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Tab */}
          <TabsContent value="system" className="space-y-6">
            <Suspense fallback={<div>Loading system health...</div>}>
            </Suspense>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Suspense fallback={<div>Loading alerts...</div>}>
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
