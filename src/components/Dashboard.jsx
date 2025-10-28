import React from 'react'
import { User, Activity, TrendingUp, Target, Users, DollarSign, Smartphone, Brain, AlertCircle, CheckCircle2, Zap } from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { analyticsData, keyInsights } from '../data/insights.js'

const Dashboard = () => {
  // Soft Pop theme colors - using actual color values for Recharts
  const COLORS = {
    chart1: '#818cf8', // Purple - oklch(0.5106 0.2301 276.9656)
    chart2: '#22d3ee', // Teal - oklch(0.7038 0.1230 182.5025)
    chart3: '#fde047', // Yellow - oklch(0.7686 0.1647 70.0804)
    chart4: '#fb7185', // Pink - oklch(0.6559 0.2118 354.3084)
    chart5: '#34d399', // Green - oklch(0.7227 0.1920 149.5793)
  }

  // 1. USER TYPES - Donut chart (3 segments, works well)
  const userTypeData = Object.entries(analyticsData.userTypes).map(([name, value], index) => ({
    name,
    value,
    percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0),
    fill: [COLORS.chart1, COLORS.chart2, COLORS.chart3][index]
  }))

  // 2. FITNESS LEVELS - Horizontal bar (better than pie for multiple items)
  const fitnessLevelData = Object.entries(analyticsData.fitnessLevels)
    .sort((a, b) => b[1] - a[1])
    .map(([name, value], index) => ({
      name,
      value,
      percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0),
      color: [COLORS.chart1, COLORS.chart2, COLORS.chart5, COLORS.chart3][index]
    }))

  // 3. TOP GOALS - Horizontal bar with colors
  const topGoalsData = Object.entries(analyticsData.commonGoals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, value], index) => ({
      name: name.length > 25 ? name.substring(0, 25) + '...' : name,
      value,
      percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0),
      color: [COLORS.chart2, COLORS.chart1, COLORS.chart5, COLORS.chart3, COLORS.chart4][index]
    }))

  // 4. TOP CHALLENGES - Horizontal bar with red/pink tones
  const topChallengesData = Object.entries(analyticsData.commonChallenges)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, value], index) => ({
      name: name.length > 30 ? name.substring(0, 30) + '...' : name,
      fullName: name,
      value,
      percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0),
      color: index === 0 ? COLORS.chart4 : index === 1 ? COLORS.chart1 : COLORS.chart2
    }))

  // 5. BUDGET/PRICING - Simplified categories
  const budgetSimplified = [
    { name: 'Free', value: analyticsData.budgets['Would pay $0 (free only)'] || 0 },
    { name: 'Low ($2-5)', value: (analyticsData.budgets['Low ($2.50-10/month)'] || 0) },
    { name: 'Medium ($20-50)', value: (analyticsData.budgets['Medium ($20-50/month)'] || 0) + (analyticsData.budgets['Medium ($60/year = $5/month)'] || 0) },
    { name: 'High ($100+)', value: (analyticsData.budgets['High ($100-250/month - Elite tier)'] || 0) + (analyticsData.budgets['Premium (AED 180-240/month)'] || 0) }
  ].map((item, index) => ({
    ...item,
    color: [COLORS.chart5, COLORS.chart2, COLORS.chart1, COLORS.chart4][index]
  }))

  // 6. TECH ADOPTION - Simple vertical bars
  const techAdoptionData = Object.entries(analyticsData.techAdoption).map(([name, value], index) => ({
    name,
    value,
    percentage: ((value / analyticsData.totalParticipants) * 100).toFixed(0),
    color: [COLORS.chart1, COLORS.chart5][index]
  }))

  // 7. PAIN POINTS - Top 6 as horizontal bars
  const painPointsData = Object.entries(analyticsData.painPointFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([painPoint, count], index) => ({
      name: painPoint.length > 40 ? painPoint.substring(0, 40) + '...' : painPoint,
      fullName: painPoint,
      value: count,
      percentage: parseFloat(((count / analyticsData.totalParticipants) * 100).toFixed(1)),
      color: index === 0 ? COLORS.chart4 : index === 1 ? COLORS.chart1 : index === 2 ? COLORS.chart3 : COLORS.chart2
    }))

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
      <Alert className="border-l-4" style={{ borderLeftColor: COLORS.chart4 }}>
        <AlertCircle className="h-4 w-4" style={{ color: COLORS.chart4 }} />
        <AlertTitle>Critical Finding</AlertTitle>
        <AlertDescription>
          <strong>86% of participants (6/{analyticsData.totalParticipants})</strong> struggle with nutrition tracking - the #1 pain point across all user types
        </AlertDescription>
      </Alert>

      {/* Key Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm hover:shadow-md transition-shadow border-t-4" style={{ borderTopColor: COLORS.chart1 }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            <Users className="h-4 w-4" style={{ color: COLORS.chart1 }} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{analyticsData.totalParticipants}</div>
            <p className="text-xs text-muted-foreground mt-1">Real user interviews</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow border-t-4" style={{ borderTopColor: COLORS.chart2 }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Types</CardTitle>
            <User className="h-4 w-4" style={{ color: COLORS.chart2 }} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{Object.keys(analyticsData.userTypes).length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {analyticsData.userTypes.Advanced || 0} Advanced, {analyticsData.userTypes.Intermediate || 0} Intermediate, {analyticsData.userTypes['Power User'] || 0} Power
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow border-t-4" style={{ borderTopColor: COLORS.chart3 }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gender Split</CardTitle>
            <Activity className="h-4 w-4" style={{ color: COLORS.chart3 }} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{analyticsData.gender.Male}M / {analyticsData.gender.Female}F</div>
            <p className="text-xs text-muted-foreground mt-1">Male and Female participants</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow border-t-4" style={{ borderTopColor: COLORS.chart4 }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Price Range</CardTitle>
            <DollarSign className="h-4 w-4" style={{ color: COLORS.chart4 }} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">60-96x</div>
            <p className="text-xs text-muted-foreground mt-1">$2.50 to $240/month WTP</p>
          </CardContent>
        </Card>
      </div>

      {/* Top 3 Critical Insights */}
      <Card className="shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" style={{ color: COLORS.chart1 }} />
            Top 3 Critical Insights
          </CardTitle>
          <CardDescription>Highest priority findings from interviews</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {keyInsights.slice(0, 3).map((insight, idx) => {
            const colors = [COLORS.chart4, COLORS.chart1, COLORS.chart2]
            return (
              <div 
                key={insight.id} 
                className="flex items-start gap-4 p-4 rounded-lg border-l-4 bg-gradient-to-r from-card to-transparent hover:shadow-md transition-all"
                style={{ borderLeftColor: colors[idx] }}
              >
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: colors[idx] }}
                >
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h4 className="font-semibold text-sm">{insight.title}</h4>
                    <Badge 
                      variant="outline"
                      style={{ borderColor: colors[idx], color: colors[idx] }}
                    >
                      {insight.percentage}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Pain Points - Most Important */}
      <Card className="shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" style={{ color: COLORS.chart4 }} />
                Top Pain Points
              </CardTitle>
              <CardDescription className="mt-1">What frustrates users most - ranked by frequency</CardDescription>
            </div>
            <Badge style={{ backgroundColor: COLORS.chart4, color: 'white' }}>
              Critical Priority
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={painPointsData} layout="vertical" margin={{ top: 5, right: 80, left: 180, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
              <XAxis 
                type="number" 
                domain={[0, 7]}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 11 }}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={170}
                tick={{ fontSize: 11 }}
                stroke="hsl(var(--muted-foreground))"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-card p-3 rounded-lg border shadow-lg">
                        <p className="font-semibold text-sm">{payload[0].payload.fullName}</p>
                        <p className="text-sm mt-1">
                          <span style={{ color: payload[0].payload.color }}>●</span> {payload[0].value}/7 users ({payload[0].payload.percentage}%)
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
                cursor={{ fill: 'hsl(var(--muted))' }}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {painPointsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertCircle className="h-4 w-4" />
            <span>Nutrition tracking affects 86% of users - highest priority opportunity</span>
          </div>
        </CardFooter>
      </Card>

      {/* User Distribution: User Types + Fitness Levels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* User Types - Donut Chart */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" style={{ color: COLORS.chart1 }} />
              User Types
            </CardTitle>
            <CardDescription>Experience level distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={userTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {userTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card p-3 rounded-lg border shadow-lg">
                          <p className="font-semibold text-sm">{payload[0].payload.name}</p>
                          <p className="text-sm" style={{ color: payload[0].payload.fill }}>
                            {payload[0].value} users ({payload[0].payload.percentage}%)
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4" />
              <span>57% Intermediate, 29% Power Users, 14% Advanced</span>
            </div>
          </CardFooter>
        </Card>

        {/* Fitness Levels - Horizontal Bar */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" style={{ color: COLORS.chart2 }} />
              Fitness Levels
            </CardTitle>
            <CardDescription>Activity frequency distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={fitnessLevelData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis 
                  type="number" 
                  domain={[0, 4]}
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 11 }}
                />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={90}
                  tick={{ fontSize: 11 }}
                  stroke="hsl(var(--muted-foreground))"
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card p-3 rounded-lg border shadow-lg">
                          <p className="font-semibold text-sm">{payload[0].payload.name}</p>
                          <p className="text-sm" style={{ color: payload[0].payload.color }}>
                            {payload[0].value} users ({payload[0].payload.percentage}%)
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {fitnessLevelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span>43% Very High, 43% High fitness levels</span>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Goals and Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Top Goals */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" style={{ color: COLORS.chart2 }} />
              Top Fitness Goals
            </CardTitle>
            <CardDescription>Most common participant goals</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={topGoalsData} layout="vertical" margin={{ top: 5, right: 30, left: 140, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis 
                  type="number" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 11 }}
                />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={130}
                  tick={{ fontSize: 11 }}
                  stroke="hsl(var(--muted-foreground))"
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card p-3 rounded-lg border shadow-lg">
                          <p className="font-semibold text-sm">{payload[0].payload.name}</p>
                          <p className="text-sm" style={{ color: payload[0].payload.color }}>
                            {payload[0].value} users ({payload[0].payload.percentage}%)
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {topGoalsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4" />
              <span>Weight loss & muscle building are top priorities</span>
            </div>
          </CardFooter>
        </Card>

        {/* Top Challenges */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" style={{ color: COLORS.chart4 }} />
              Top Challenges
            </CardTitle>
            <CardDescription>Most frequent pain points</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={topChallengesData} layout="vertical" margin={{ top: 5, right: 30, left: 160, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis 
                  type="number" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 11 }}
                />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={150}
                  tick={{ fontSize: 11 }}
                  stroke="hsl(var(--muted-foreground))"
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card p-3 rounded-lg border shadow-lg">
                          <p className="font-semibold text-sm">{payload[0].payload.fullName}</p>
                          <p className="text-sm" style={{ color: payload[0].payload.color }}>
                            {payload[0].value} users ({payload[0].payload.percentage}%)
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {topChallengesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertCircle className="h-4 w-4" />
              <span>Consistency & time management are key blockers</span>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Budget and Tech Adoption */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Budget Distribution */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" style={{ color: COLORS.chart5 }} />
              Willingness to Pay
            </CardTitle>
            <CardDescription>Monthly budget distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={budgetSimplified}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 11 }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 11 }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card p-3 rounded-lg border shadow-lg">
                          <p className="font-semibold text-sm">{payload[0].payload.name}/month</p>
                          <p className="text-sm" style={{ color: payload[0].payload.color }}>
                            {payload[0].value} user{payload[0].value !== 1 ? 's' : ''}
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {budgetSimplified.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span>43% willing to pay medium-high tiers ($20-50+)</span>
            </div>
          </CardFooter>
        </Card>

        {/* Tech Adoption */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" style={{ color: COLORS.chart1 }} />
              Tech Adoption
            </CardTitle>
            <CardDescription>Technology comfort level</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={techAdoptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 11 }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 11 }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card p-3 rounded-lg border shadow-lg">
                          <p className="font-semibold text-sm">{payload[0].payload.name}</p>
                          <p className="text-sm" style={{ color: payload[0].payload.color }}>
                            {payload[0].value} users ({payload[0].payload.percentage}%)
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {techAdoptionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Smartphone className="h-4 w-4" />
              <span>86% high tech adoption - ready for smart features</span>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Success Alert */}
      <Alert className="border-l-4" style={{ borderLeftColor: COLORS.chart5 }}>
        <CheckCircle2 className="h-4 w-4" style={{ color: COLORS.chart5 }} />
        <AlertTitle>Dashboard Updated</AlertTitle>
        <AlertDescription>
          All data reflects real interviews from {analyticsData.totalParticipants} participants: Amish, Aniket, Majid, Jessica, Dr. Dhananjay Kumar, Dhruv, and Shubham.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Dashboard
