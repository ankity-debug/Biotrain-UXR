import React from 'react'
import { User, Activity, TrendingUp, Target, Users, DollarSign, Smartphone, Brain, AlertCircle, CheckCircle2 } from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { analyticsData, keyInsights, painPointAnalysis } from '../data/insights.js'

const Dashboard = () => {
  // Prepare data for charts
  const userTypeData = Object.entries(analyticsData.userTypes).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0)
  }))

  const genderData = Object.entries(analyticsData.gender).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0)
  }))

  const fitnessLevelData = Object.entries(analyticsData.fitnessLevels).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0)
  }))

  const budgetData = Object.entries(analyticsData.budgets).map(([name, value]) => ({
    name: name.length > 20 ? name.substring(0, 20) + '...' : name,
    fullName: name,
    value,
    percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0)
  }))

  const techAdoptionData = Object.entries(analyticsData.techAdoption).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0)
  }))

  const topGoalsData = Object.entries(analyticsData.commonGoals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, value]) => ({
      name,
      value,
      percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0)
    }))

  const topChallengesData = Object.entries(analyticsData.commonChallenges)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, value]) => ({
      name,
      value,
      percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0)
    }))

  // Use Soft Pop theme colors
  const COLORS = {
    primary: 'oklch(0.5106 0.2301 276.9656)', // Purple
    secondary: 'oklch(0.7038 0.1230 182.5025)', // Cyan
    accent: 'oklch(0.7686 0.1647 70.0804)', // Lime
    destructive: 'oklch(0.6368 0.2078 25.3313)', // Red
    chart1: 'oklch(0.5106 0.2301 276.9656)', // Primary purple
    chart2: 'oklch(0.7038 0.1230 182.5025)', // Secondary cyan
    chart3: 'oklch(0.7686 0.1647 70.0804)', // Accent lime
    chart4: 'oklch(0.6559 0.2118 354.3084)', // Pink
    chart5: 'oklch(0.7227 0.1920 149.5793)'  // Teal
  }

  const PIE_COLORS = [
    'oklch(0.5106 0.2301 276.9656)', // Primary purple
    'oklch(0.7038 0.1230 182.5025)', // Secondary cyan
    'oklch(0.7686 0.1647 70.0804)', // Accent lime
    'oklch(0.6559 0.2118 354.3084)', // Pink
    'oklch(0.7227 0.1920 149.5793)', // Teal
    'oklch(0.6801 0.1583 276.9349)'  // Light purple
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-muted-foreground mt-2">Real user interview insights from {analyticsData.totalParticipants} participants</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Activity className="w-4 h-4" />
          <span>Updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Critical Alert */}
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Critical Finding</AlertTitle>
        <AlertDescription>
          <strong>83% of participants (5/{analyticsData.totalParticipants})</strong> struggle with nutrition tracking - the #1 pain point across all user types
        </AlertDescription>
      </Alert>

      {/* Key Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalParticipants}</div>
            <p className="text-xs text-muted-foreground">Real user interviews conducted</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Types</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.keys(analyticsData.userTypes).length}</div>
            <p className="text-xs text-muted-foreground">
              {analyticsData.userTypes.Advanced || 0} Advanced, {analyticsData.userTypes.Intermediate || 0} Intermediate, {analyticsData.userTypes['Power User'] || 0} Power
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gender Split</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.gender.Male}M / {analyticsData.gender.Female}F</div>
            <p className="text-xs text-muted-foreground">Male and Female participants</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Price Range</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">60-96x</div>
            <p className="text-xs text-muted-foreground">$2.50 to $240/month WTP variance</p>
          </CardContent>
        </Card>
      </div>

      {/* Top 3 Critical Insights */}
      <Card className="shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Top 3 Critical Insights
          </CardTitle>
          <CardDescription>Highest priority findings from interviews</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {keyInsights.slice(0, 3).map((insight, idx) => (
            <div key={insight.id} className="flex items-start gap-4 p-4 rounded-lg border bg-card">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">{idx + 1}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-sm">{insight.title}</h4>
                  <Badge variant={insight.priority?.toLowerCase() === 'critical' ? 'critical' : insight.priority?.toLowerCase() === 'high' ? 'high' : insight.priority?.toLowerCase() === 'medium' ? 'medium' : 'low'}>
                    {insight.priority}
                  </Badge>
                  <Badge variant="outline">{insight.percentage}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Demographics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Types */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>User Types</CardTitle>
            <CardDescription>Experience level distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={userTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {userTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gender Distribution */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Gender Distribution</CardTitle>
            <CardDescription>Participant demographics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Fitness Levels */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Fitness Levels</CardTitle>
            <CardDescription>Activity frequency</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={fitnessLevelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fitnessLevelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Goals and Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Goals */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Top Fitness Goals</CardTitle>
            <CardDescription>Most common participant goals</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topGoalsData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.secondary} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Challenges */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Top Challenges</CardTitle>
            <CardDescription>Most frequent pain points</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topChallengesData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.destructive} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Budget and Tech Adoption */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Distribution */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Willingness to Pay</CardTitle>
            <CardDescription>Monthly budget distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} fontSize={11} />
                <YAxis />
                <Tooltip content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border rounded-lg shadow-lg">
                        <p className="font-semibold">{payload[0].payload.fullName}</p>
                        <p className="text-sm text-muted-foreground">
                          {payload[0].value} participant{payload[0].value > 1 ? 's' : ''} ({payload[0].payload.percentage}%)
                        </p>
                      </div>
                    )
                  }
                  return null
                }} />
                <Bar dataKey="value" fill={COLORS.accent} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tech Adoption */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Tech Adoption</CardTitle>
            <CardDescription>Technology comfort level</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={techAdoptionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.primary} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Pain Point Frequency */}
      <Card className="shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle>Pain Point Frequency</CardTitle>
          <CardDescription>How many participants face each challenge</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(analyticsData.painPointFrequency)
              .sort((a, b) => b[1] - a[1])
              .map(([painPoint, count], idx) => {
                const percentage = ((count / analyticsData.totalParticipants) * 100).toFixed(0)
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{painPoint}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant={percentage === '100' ? 'critical' : percentage >= '75' ? 'high' : percentage >= '50' ? 'medium' : 'low'}>
                            {count}/{analyticsData.totalParticipants}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{percentage}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${percentage === '100' ? 'bg-destructive' : percentage >= '75' ? 'bg-accent' : 'bg-secondary'}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </CardContent>
      </Card>

      {/* Success Alert */}
      <Alert>
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>Dashboard Updated</AlertTitle>
        <AlertDescription>
          All data now reflects real interviews from {analyticsData.totalParticipants} participants: Amish, Aniket, Majid, Jessica, Dr. Dhananjay Kumar, and Dhruv.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Dashboard
