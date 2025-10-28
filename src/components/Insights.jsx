import React, { useState } from 'react'
import { Lightbulb, TrendingUp, Target, Users, DollarSign, AlertTriangle, CheckCircle, Star, TrendingDown, Zap, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { analyticsData, keyInsights, painPointAnalysis, opportunityAnalysis, userPersonas } from '../data/insights.js'

const Insights = () => {
  const getPriorityVariant = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'critical': return 'critical'
      case 'high': return 'high'
      case 'medium': return 'medium'
      case 'low': return 'low'
      default: return 'outline'
    }
  }

  const getSeverityIcon = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'critical': return <AlertTriangle className="h-5 w-5 text-red-600" />
      case 'high': return <TrendingDown className="h-5 w-5 text-orange-600" />
      case 'medium': return <Target className="h-5 w-5 text-yellow-600" />
      default: return <CheckCircle className="h-5 w-5 text-green-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Research Insights</h2>
          <p className="text-muted-foreground mt-2">Key findings and actionable insights from 7 user interviews</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-sm">
            <Lightbulb className="w-4 h-4 mr-1" />
            Top {keyInsights.length} Insights
          </Badge>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="insights" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="insights">Key Insights</TabsTrigger>
          <TabsTrigger value="pain-points">Pain Points</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="personas">Personas</TabsTrigger>
        </TabsList>

        {/* Key Insights Tab */}
        <TabsContent value="insights" className="space-y-4 mt-6">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Top 10 Key Insights
              </CardTitle>
              <CardDescription>Critical findings ranked by priority and impact</CardDescription>
            </CardHeader>
            <CardContent>
              {keyInsights && keyInsights.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {keyInsights.map((insight, index) => (
                    <AccordionItem key={insight.id} value={insight.id}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-start gap-3 w-full text-left">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                            <span className="text-sm font-bold text-primary">{index + 1}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 flex-wrap">
                              <h4 className="font-semibold text-sm break-words flex-1 min-w-0">{insight.title}</h4>
                              <div className="flex gap-1 flex-shrink-0">
                                <Badge variant={getPriorityVariant(insight.priority)} className="text-xs">
                                  {insight.priority}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {insight.percentage}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-11 space-y-3">
                          <p className="text-sm text-muted-foreground leading-relaxed break-words">
                            {insight.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">
                              <Users className="w-3 h-3 mr-1" />
                              {insight.affectedUsers} users affected
                            </Badge>
                            <Badge variant="outline">{insight.category}</Badge>
                            <Badge variant="outline">{insight.impact} Impact</Badge>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No insights available</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pain Points Tab */}
        <TabsContent value="pain-points" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Top Pain Points by Severity
              </CardTitle>
              <CardDescription>
                Ranked by frequency and impact on user experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {painPointAnalysis.topPainPoints.map((painPoint, index) => {
                const percentage = parseFloat(((painPoint.frequency / analyticsData.totalParticipants) * 100).toFixed(1))
                return (
                  <Card key={index} className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {getSeverityIcon(painPoint.severity)}
                        </div>
                        <div className="flex-1 min-w-0 space-y-3">
                          <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="space-y-1 flex-1 min-w-0">
                              <h4 className="font-semibold text-base break-words">{painPoint.painPoint}</h4>
                              <p className="text-sm text-muted-foreground break-words">
                                Affects: <span className="font-medium">{painPoint.users.join(', ')}</span>
                              </p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                              <Badge variant={getPriorityVariant(painPoint.severity)}>
                                {painPoint.severity}
                              </Badge>
                              <Badge variant="outline">
                                {painPoint.percentage}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 w-full">
                            <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden min-w-0">
                              <div
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                  percentage >= 80 ? 'bg-red-600' :
                                  percentage >= 60 ? 'bg-orange-500' :
                                  percentage >= 40 ? 'bg-yellow-500' :
                                  'bg-blue-500'
                                }`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap flex-shrink-0">
                              {painPoint.frequency}/{analyticsData.totalParticipants} users
                            </span>
                          </div>

                          <Badge variant="secondary" className="w-fit">
                            {painPoint.journeyStage} Stage
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Opportunities Tab */}
        <TabsContent value="opportunities" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-600" />
                Strategic Opportunities
              </CardTitle>
              <CardDescription>
                Product opportunities ranked by priority score (impact × market size / effort)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {opportunityAnalysis.topOpportunities.map((opportunity, index) => (
                  <Card key={index} className="border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-base mb-1">{opportunity.opportunity}</h4>
                              <p className="text-sm text-muted-foreground">
                                {opportunity.users.join(' • ')}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-end flex-shrink-0">
                            <Badge variant="default" className="bg-green-600 text-lg px-3 py-1">
                              {opportunity.priorityScore}
                            </Badge>
                            <span className="text-xs text-muted-foreground">Priority</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-blue-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <TrendingUp className="w-4 h-4 text-blue-600" />
                              <span className="text-xs font-medium text-blue-900">Market</span>
                            </div>
                            <p className="text-sm font-semibold text-blue-900">{opportunity.marketSize}</p>
                          </div>

                          <div className="bg-purple-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Target className="w-4 h-4 text-purple-600" />
                              <span className="text-xs font-medium text-purple-900">Effort</span>
                            </div>
                            <p className="text-sm font-semibold text-purple-900">{opportunity.effort}</p>
                          </div>

                          <div className="bg-orange-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Zap className="w-4 h-4 text-orange-600" />
                              <span className="text-xs font-medium text-orange-900">Impact</span>
                            </div>
                            <p className="text-sm font-semibold text-orange-900">{opportunity.impact}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            <Users className="w-3 h-3 mr-1" />
                            {opportunity.affectedUsers} users ({opportunity.percentage})
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Personas Tab */}
        <TabsContent value="personas" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                User Personas (Data-Driven)
              </CardTitle>
              <CardDescription>
                4 validated personas from real interview data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Object.entries(userPersonas).map(([personaName, persona]) => (
                  <Card key={personaName} className="border-2">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{personaName}</CardTitle>
                          <CardDescription>{persona.representative} • {persona.percentage}</CardDescription>
                        </div>
                        <Badge variant="outline">{persona.count} user{persona.count > 1 ? 's' : ''}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {persona.description}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Needs</h5>
                          <div className="flex flex-wrap gap-1">
                            {persona.keyNeeds.map((need, needIndex) => (
                              <Badge key={needIndex} variant="secondary" className="text-xs">
                                {need}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                            <div className="flex items-center gap-1 mb-1">
                              <DollarSign className="w-3 h-3 text-green-700" />
                              <span className="text-xs font-semibold text-green-900">Willingness to Pay</span>
                            </div>
                            <p className="text-xs font-medium text-green-900 leading-tight">
                              {persona.willingnessToPay}
                            </p>
                          </div>

                          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                            <div className="flex items-center gap-1 mb-1">
                              <Zap className="w-3 h-3 text-blue-700" />
                              <span className="text-xs font-semibold text-blue-900">Tech Adoption</span>
                            </div>
                            <p className="text-xs font-medium text-blue-900">
                              {persona.techAdoption}
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <h5 className="text-xs font-semibold text-gray-700 mb-2">Fitness Level</h5>
                          <p className="text-xs text-gray-600">{persona.fitnessLevel}</p>
                        </div>

                        <div>
                          <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Top Challenges</h5>
                          <div className="space-y-1">
                            {persona.challenges.slice(0, 3).map((challenge, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-gray-400 mt-1.5" />
                                <span className="text-xs text-muted-foreground">{challenge}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Insights
