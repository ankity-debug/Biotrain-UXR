import React from 'react'
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Zap, Calendar, MessageSquare, Brain, Heart, Award, BarChart3, AlertCircle, CheckCircle2, Clock } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { analyticsData, painPointAnalysis, userPersonas } from '../data/insights.js'

const Visualizations = () => {
  // Soft Pop theme colors - using actual color values for Recharts
  const COLORS = {
    chart1: '#818cf8', // Purple - oklch(0.5106 0.2301 276.9656)
    chart2: '#22d3ee', // Teal - oklch(0.7038 0.1230 182.5025)
    chart3: '#fde047', // Yellow - oklch(0.7686 0.1647 70.0804)
    chart4: '#fb7185', // Pink - oklch(0.6559 0.2118 354.3084)
    chart5: '#34d399', // Green - oklch(0.7227 0.1920 149.5793)
  }

  // 1. PAIN POINTS - Simple horizontal bar chart (most important)
  const painPointsData = painPointAnalysis.topPainPoints.slice(0, 6).map((pp, index) => ({
    name: pp.painPoint.length > 45 ? pp.painPoint.substring(0, 45) + '...' : pp.painPoint,
    value: pp.frequency,
    percentage: parseFloat(pp.percentage),
    color: index === 0 ? COLORS.chart4 : index === 1 ? COLORS.chart1 : index === 2 ? COLORS.chart3 : COLORS.chart2
  }))

  // 2. USER SEGMENTS - Simple donut chart
  const segmentData = Object.entries(userPersonas).map(([name, data], index) => ({
    name: name.split(' ')[0] + ' ' + name.split(' ')[1], // Shorten names
    value: data.count,
    percentage: parseFloat(data.percentage),
    fill: [COLORS.chart1, COLORS.chart2, COLORS.chart3, COLORS.chart4][index]
  }))

  // 3. MOTIVATION DROP - Simple area chart
  const motivationData = [
    { week: 'Week 1', motivation: 85 },
    { week: 'Week 2', motivation: 80 },
    { week: 'Week 4', motivation: 60 },
    { week: 'Week 6', motivation: 50 },
    { week: 'Week 8', motivation: 45 },
    { week: 'Week 12', motivation: 35 },
  ]

  // 4. FEATURE PRIORITIES - Simple bar chart
  const featurePriorityData = [
    { name: 'Raw ingredient tracking', impact: 95, color: COLORS.chart1 },
    { name: 'Cycle-aware workouts', impact: 90, color: COLORS.chart2 },
    { name: 'Cultural nutrition DB', impact: 90, color: COLORS.chart1 },
    { name: 'Workout compensation', impact: 80, color: COLORS.chart3 },
    { name: 'AI meal suggestions', impact: 75, color: COLORS.chart2 },
    { name: 'Recovery tracking', impact: 70, color: COLORS.chart5 },
  ]

  // 5. WILLINGNESS TO PAY - Grouped bar chart
  const pricingData = [
    { tier: 'Free', users: 1, color: COLORS.chart5 },
    { tier: '$2.50-4', users: 1, color: COLORS.chart5 },
    { tier: '$20-50', users: 3, color: COLORS.chart1 },
    { tier: '$60/yr', users: 1, color: COLORS.chart3 },
    { tier: '$180-240', users: 1, color: COLORS.chart4 },
  ]

  // 6. TECH COMFORT - Radar chart
  const techComfortData = [
    { feature: 'AI Recs', comfort: 85 },
    { feature: 'Voice', comfort: 71 },
    { feature: 'Video', comfort: 71 },
    { feature: 'Social', comfort: 43 },
    { feature: 'Data Share', comfort: 71 },
  ]

  // 7. TOP QUOTES
  const impactQuotes = [
    {
      quote: "I need to track raw ingredients, not just 'one bowl of dal'",
      author: "Shubham",
      impact: "Critical",
      color: COLORS.chart4
    },
    {
      quote: "Apps don't understand dal, roti, sabzi portions properly",
      author: "Majid",
      impact: "High",
      color: COLORS.chart1
    },
    {
      quote: "When I miss a workout, adjust my next sessions automatically",
      author: "Shubham",
      impact: "High",
      color: COLORS.chart2
    },
    {
      quote: "I'd pay $180-240/month for something that actually works",
      author: "Ramesh",
      impact: "Critical",
      color: COLORS.chart4
    },
    {
      quote: "Notifications are annoying. Don't spam me.",
      author: "Shubham",
      impact: "High",
      color: COLORS.chart3
    },
    {
      quote: "The pump addiction is real. That's what keeps me going.",
      author: "Shubham",
      impact: "Medium",
      color: COLORS.chart5
    }
  ]

  // 8. ROADMAP DATA
  const roadmapQuarters = [
    {
      quarter: 'Q1 2024',
      label: 'MVP Foundation',
      features: [
        { name: 'Raw ingredient tracking', status: 'critical', weeks: 8 },
        { name: 'Cultural nutrition DB', status: 'critical', weeks: 10 },
        { name: 'Basic workout tracking', status: 'critical', weeks: 6 },
      ]
    },
    {
      quarter: 'Q2 2024',
      label: 'Differentiation',
      features: [
        { name: 'Cycle-aware workouts', status: 'high', weeks: 7 },
        { name: 'Workout compensation', status: 'high', weeks: 6 },
        { name: 'AI recipe generator', status: 'high', weeks: 8 },
      ]
    },
    {
      quarter: 'Q3 2024',
      label: 'Enhancement',
      features: [
        { name: 'Trainer dashboard', status: 'medium', weeks: 9 },
        { name: 'Recovery tracking', status: 'medium', weeks: 5 },
        { name: 'Social features v1', status: 'low', weeks: 7 },
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <BarChart3 className="h-8 w-8" style={{ color: COLORS.chart1 }} />
            Research Deep Dive
          </h2>
          <p className="text-muted-foreground mt-2">
            Clear insights from {analyticsData.totalParticipants} user interviews
          </p>
        </div>
        <Badge variant="outline" className="text-sm" style={{ borderColor: COLORS.chart1, color: COLORS.chart1 }}>
          10 Key Visualizations
        </Badge>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">📊 Overview</TabsTrigger>
          <TabsTrigger value="users">👥 Users</TabsTrigger>
          <TabsTrigger value="features">💡 Features</TabsTrigger>
          <TabsTrigger value="insights">✨ Insights</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          
          {/* Pain Points - THE MOST IMPORTANT CHART */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Target className="h-5 w-5" style={{ color: COLORS.chart4 }} />
                    Top Pain Points
                  </CardTitle>
                  <CardDescription className="mt-1">
                    What frustrates users the most - ranked by frequency
                  </CardDescription>
                </div>
                <Badge style={{ backgroundColor: COLORS.chart4, color: 'white' }}>
                  Critical Priority
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={painPointsData} layout="vertical" margin={{ top: 5, right: 80, left: 200, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 7]}
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={190}
                    tick={{ fontSize: 12 }}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-card p-3 rounded-lg border shadow-lg">
                            <p className="font-semibold text-sm">{payload[0].payload.name}</p>
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
              <div className="flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4" style={{ color: COLORS.chart4 }} />
                <span className="font-medium">86% struggle with nutrition tracking</span>
                <span className="text-muted-foreground">- #1 opportunity</span>
              </div>
            </CardFooter>
          </Card>

          {/* Grid: Motivation Drop + User Segments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Motivation Lifecycle */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingDown className="h-5 w-5" style={{ color: COLORS.chart4 }} />
                  Motivation Drop
                </CardTitle>
                <CardDescription>
                  Users lose 59% motivation by week 12
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={motivationData}>
                    <defs>
                      <linearGradient id="motivationGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS.chart1} stopOpacity={0.3}/>
                        <stop offset="95%" stopColor={COLORS.chart1} stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="week" 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fontSize: 11 }}
                    />
                    <YAxis 
                      domain={[0, 100]}
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fontSize: 11 }}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-card p-2 rounded-lg border shadow-lg">
                              <p className="text-sm font-medium">{payload[0].payload.week}</p>
                              <p className="text-sm" style={{ color: COLORS.chart1 }}>
                                {payload[0].value}% motivation
                              </p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="motivation" 
                      stroke={COLORS.chart1}
                      strokeWidth={3}
                      fill="url(#motivationGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Week 8-12 = critical intervention zone</span>
                </div>
              </CardFooter>
            </Card>

            {/* User Segments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" style={{ color: COLORS.chart2 }} />
                  User Segments
                </CardTitle>
                <CardDescription>
                  4 strategic personas identified
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-card p-3 rounded-lg border shadow-lg">
                              <p className="font-semibold text-sm">{payload[0].payload.name}</p>
                              <p className="text-sm mt-1">
                                <span style={{ color: payload[0].payload.fill }}>●</span> {payload[0].value} users ({payload[0].payload.percentage}%)
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
                  <TrendingUp className="h-4 w-4" />
                  <span>43% Power Users - premium segment</span>
                </div>
              </CardFooter>
            </Card>
          </div>

        </TabsContent>

        {/* USERS TAB */}
        <TabsContent value="users" className="space-y-6 mt-6">
          
          {/* Persona Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(userPersonas).map(([name, data], index) => {
              const icons = [Zap, Target, Heart, Brain]
              const colors = [COLORS.chart1, COLORS.chart2, COLORS.chart3, COLORS.chart4]
              const Icon = icons[index]
              return (
                <Card key={name} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: colors[index] + '20' }}
                      >
                        <Icon className="h-7 w-7" style={{ color: colors[index] }} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base leading-tight">{name}</CardTitle>
                        <CardDescription className="mt-1">
                          {data.count} user{data.count > 1 ? 's' : ''} • {data.percentage}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {data.representatives.map(rep => (
                        <Badge key={rep} variant="secondary" style={{ borderColor: colors[index] + '40' }}>
                          {rep}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                        Key Traits
                      </p>
                      {index === 0 && (
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: colors[index] }} />
                            <span>Very high fitness level & tech adoption</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: colors[index] }} />
                            <span>$20-240/month willingness to pay</span>
                          </li>
                        </ul>
                      )}
                      {index === 1 && (
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: colors[index] }} />
                            <span>Goal-oriented, need accountability</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: colors[index] }} />
                            <span>$2.50-50/month budget range</span>
                          </li>
                        </ul>
                      )}
                      {index === 2 && (
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: colors[index] }} />
                            <span>Time-constrained professional</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: colors[index] }} />
                            <span>Needs cycle-aware programming</span>
                          </li>
                        </ul>
                      )}
                      {index === 3 && (
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: colors[index] }} />
                            <span>Health-focused, experienced</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: colors[index] }} />
                            <span>Premium tier: $180-240/month</span>
                          </li>
                        </ul>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Tech Comfort Radar */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Brain className="h-5 w-5" style={{ color: COLORS.chart5 }} />
                Technology Comfort Levels
              </CardTitle>
              <CardDescription>
                How comfortable users are with different tech features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={techComfortData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis 
                    dataKey="feature" 
                    tick={{ fontSize: 12, fill: 'hsl(var(--foreground))' }}
                  />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                  <Radar 
                    name="Comfort Level" 
                    dataKey="comfort" 
                    stroke={COLORS.chart5}
                    fill={COLORS.chart5}
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-card p-2 rounded-lg border shadow-lg">
                            <p className="text-sm font-medium">{payload[0].payload.feature}</p>
                            <p className="text-sm" style={{ color: COLORS.chart5 }}>
                              {payload[0].value}% comfortable
                            </p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4" />
                <span>High comfort with AI (85%) - lean into intelligent features</span>
              </div>
            </CardFooter>
          </Card>

        </TabsContent>

        {/* FEATURES TAB */}
        <TabsContent value="features" className="space-y-6 mt-6">
          
          {/* Feature Priorities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5" style={{ color: COLORS.chart1 }} />
                Feature Priority Ranking
              </CardTitle>
              <CardDescription>
                Top 6 features by user impact score
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={340}>
                <BarChart data={featurePriorityData} layout="vertical" margin={{ top: 5, right: 80, left: 190, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 100]}
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={180}
                    tick={{ fontSize: 11 }}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-card p-3 rounded-lg border shadow-lg">
                            <p className="font-semibold text-sm">{payload[0].payload.name}</p>
                            <p className="text-sm mt-1" style={{ color: payload[0].payload.color }}>
                              Impact Score: {payload[0].value}%
                            </p>
                          </div>
                        )
                      }
                      return null
                    }}
                    cursor={{ fill: 'hsl(var(--muted))' }}
                  />
                  <Bar dataKey="impact" radius={[0, 8, 8, 0]}>
                    {featurePriorityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="h-4 w-4" />
                <span>Focus Q1 development on top 3 features</span>
              </div>
            </CardFooter>
          </Card>

          {/* Roadmap Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" style={{ color: COLORS.chart3 }} />
                Feature Roadmap
              </CardTitle>
              <CardDescription>
                Development timeline across 3 quarters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {roadmapQuarters.map((quarter, qIndex) => (
                  <div key={quarter.quarter} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={qIndex === 0 ? 'default' : 'outline'}
                        style={qIndex === 0 ? { backgroundColor: COLORS.chart4, borderColor: COLORS.chart4 } : {}}
                      >
                        {quarter.quarter}
                      </Badge>
                      <span className="font-semibold text-sm">{quarter.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {quarter.features.reduce((sum, f) => sum + f.weeks, 0)} weeks total
                      </span>
                    </div>
                    <div className="grid gap-2">
                      {quarter.features.map((feature, fIndex) => (
                        <div 
                          key={fIndex} 
                          className="p-3 rounded-lg border hover:shadow-md transition-all"
                          style={{ 
                            borderLeftWidth: '4px',
                            borderLeftColor: feature.status === 'critical' ? COLORS.chart4 : 
                                           feature.status === 'high' ? COLORS.chart1 : 
                                           feature.status === 'medium' ? COLORS.chart3 : COLORS.chart5
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{feature.name}</span>
                            <span className="text-xs text-muted-foreground">{feature.weeks} weeks</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Willingness to Pay */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5" style={{ color: COLORS.chart5 }} />
                Willingness to Pay
              </CardTitle>
              <CardDescription>
                Price distribution - 60-96x variance between markets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={pricingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis 
                    dataKey="tier" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    domain={[0, 4]}
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-card p-3 rounded-lg border shadow-lg">
                            <p className="font-semibold text-sm">{payload[0].payload.tier}/month</p>
                            <p className="text-sm mt-1" style={{ color: payload[0].payload.color }}>
                              {payload[0].value} user{payload[0].value > 1 ? 's' : ''}
                            </p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Bar dataKey="users" radius={[8, 8, 0, 0]}>
                    {pricingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>43% willing to pay $20-50/month - viable premium tier</span>
              </div>
            </CardFooter>
          </Card>

        </TabsContent>

        {/* INSIGHTS TAB */}
        <TabsContent value="insights" className="space-y-6 mt-6">
          
          {/* Quote Wall */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5" style={{ color: COLORS.chart2 }} />
                User Voice - Key Quotes
              </CardTitle>
              <CardDescription>
                Most impactful insights directly from users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {impactQuotes.map((quote, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl border-l-4 bg-gradient-to-r from-card to-transparent hover:shadow-lg transition-all"
                    style={{ borderLeftColor: quote.color }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <MessageSquare className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: quote.color }} />
                      <blockquote className="text-sm font-medium leading-relaxed">
                        "{quote.quote}"
                      </blockquote>
                    </div>
                    <div className="flex items-center justify-between pl-8">
                      <p className="text-xs font-semibold">— {quote.author}</p>
                      <Badge 
                        variant="outline" 
                        className="text-xs"
                        style={{ borderColor: quote.color, color: quote.color }}
                      >
                        {quote.impact}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-xs uppercase tracking-wide">Critical Finding</CardDescription>
                <CardTitle className="text-3xl font-bold" style={{ color: COLORS.chart4 }}>
                  86%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Users struggle with nutrition tracking - the #1 pain point across all segments
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-xs uppercase tracking-wide">Opportunity</CardDescription>
                <CardTitle className="text-3xl font-bold" style={{ color: COLORS.chart1 }}>
                  43%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Power Users willing to pay premium ($20-240/month) for the right solution
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-xs uppercase tracking-wide">Risk</CardDescription>
                <CardTitle className="text-3xl font-bold" style={{ color: COLORS.chart3 }}>
                  Week 8-12
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Critical dropoff window - 59% motivation loss requires intervention features
                </p>
              </CardContent>
            </Card>
          </div>

        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Visualizations
