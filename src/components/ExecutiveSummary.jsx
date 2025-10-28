import React from 'react'
import { Download, AlertCircle, TrendingUp, Users, Target, CheckCircle2, XCircle, Award, Zap, DollarSign, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { analyticsData, keyInsights, userPersonas, opportunityAnalysis, painPointAnalysis } from '../data/insights.js'

const ExecutiveSummary = () => {
  const downloadPDF = () => {
    window.print()
  }

  // Persona validation results
  const personaValidation = {
    totalOriginalPersonas: 3,
    validated: 0,
    invalidated: 3,
    newPersonasIdentified: 4,
    originalPersonas: [
      { name: 'Ramesh (Advanced)', status: 'replaced', reason: 'Replaced with "Power Users & Fitness Professionals" - consolidates Amish, Dhruv, Shubham (43% of sample)' },
      { name: 'Aniket (Intermediate)', status: 'replaced', reason: 'Split into "Intermediate Enthusiasts" (Aniket, Majid 29%) and "Busy Professionals" (Jessica 14%)' },
      { name: 'Majid (Beginner)', status: 'invalidated', reason: 'Real data shows Majid is INTERMEDIATE, not beginner. Added "Health-Conscious Experienced Professionals" for 40s-50s+ demographic' }
    ]
  }

  return (
    <div className="space-y-6 print:space-y-4">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Executive Summary</h1>
          <p className="text-muted-foreground mt-2 text-lg">BioTrain UX Research Findings - {analyticsData.totalParticipants} Real User Interviews</p>
          <p className="text-sm text-muted-foreground mt-1">Report Generated: {new Date().toLocaleDateString()}</p>
        </div>
        <Button onClick={downloadPDF} className="print:hidden">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Key Metrics Overview */}
      <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-primary-foreground text-2xl">Research Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold">{analyticsData.totalParticipants}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">Participants Interviewed</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{keyInsights.length}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">Key Insights Identified</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{opportunityAnalysis.topOpportunities.length}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">Opportunities Mapped</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{Object.keys(userPersonas).length}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">User Personas Created</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Persona Validation Results */}
      <Card className="border-2 border-orange-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            <div>
              <CardTitle className="text-2xl">Persona Validation: Critical Finding</CardTitle>
              <CardDescription className="mt-1">Original assumptions did not match reality</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>0 out of 3 Original Personas Validated</AlertTitle>
            <AlertDescription>
              All original personas were based on assumptions that did not match real user data. This highlights the importance of conducting actual user interviews before building product features.
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            {personaValidation.originalPersonas.map((persona, idx) => (
              <Card key={idx} className="bg-gray-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{persona.name}</h4>
                      <div className="text-sm text-gray-700 mt-1">
                        <Badge variant="destructive" className="mr-2">{persona.status}</Badge>
                        <span className="text-gray-600">{persona.reason}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">4 New Data-Driven Personas Created</AlertTitle>
            <AlertDescription className="text-green-700">
              Based on real user interviews, we identified 4 distinct user personas with validated needs, pain points, and willingness to pay.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Top 3 Critical Insights */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            <div>
              <CardTitle className="text-2xl">Top 3 Critical Insights</CardTitle>
              <CardDescription>Highest priority findings requiring immediate action</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {keyInsights.slice(0, 3).map((insight, idx) => (
            <Card key={insight.id} className="border-l-4 border-l-red-500 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{insight.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={insight.priority?.toLowerCase() === 'critical' ? 'critical' : insight.priority?.toLowerCase() === 'high' ? 'high' : insight.priority?.toLowerCase() === 'medium' ? 'medium' : 'low'}>{insight.priority}</Badge>
                    <Badge variant="outline">{insight.percentage}</Badge>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">{insight.description}</p>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">
                    <Users className="w-3 h-3 mr-1" />
                    {insight.affectedUsers} users affected
                  </Badge>
                  <Badge variant="outline">{insight.category}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* New User Personas */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-purple-600" />
            <div>
              <CardTitle className="text-2xl">4 Validated User Personas</CardTitle>
              <CardDescription>Data-driven personas from real interviews</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(userPersonas).map(([personaName, persona]) => (
              <Card key={personaName} className="border-2">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{personaName}</CardTitle>
                        <CardDescription className="text-xs">{persona.representative} • {persona.percentage}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">{persona.count}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {persona.description}
                  </p>

                  <Separator />

                  <div className="space-y-2">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase">Key Needs</h5>
                    <div className="flex flex-wrap gap-1">
                      {persona.keyNeeds.slice(0, 3).map((need, needIndex) => (
                        <Badge key={needIndex} variant="secondary" className="text-xs">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                      <div className="flex items-center gap-1 mb-1">
                        <DollarSign className="w-3 h-3 text-green-700" />
                        <span className="text-xs font-semibold text-green-900">WTP</span>
                      </div>
                      <p className="text-xs font-medium text-green-900 leading-tight">
                        {persona.willingnessToPay.split(' ')[0] + ' ' + persona.willingnessToPay.split(' ')[1]}
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                      <div className="flex items-center gap-1 mb-1">
                        <Zap className="w-3 h-3 text-blue-700" />
                        <span className="text-xs font-semibold text-blue-900">Tech</span>
                      </div>
                      <p className="text-xs font-medium text-blue-900">
                        {persona.techAdoption.split(' ')[0]}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top 5 Pain Points */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            <div>
              <CardTitle className="text-2xl">Top 5 Pain Points by Frequency</CardTitle>
              <CardDescription>Most common challenges across all users</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {painPointAnalysis.topPainPoints.slice(0, 5).map((pain, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-400">#{idx + 1}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{pain.painPoint}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-600">{pain.users.join(', ')}</span>
                      <Badge variant="secondary" className="text-xs">{pain.journeyStage}</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-600">{pain.percentage}</div>
                  <div className="text-xs text-gray-500">{pain.frequency}/4 users</div>
                </div>
                <Badge variant={pain.severity === 'Critical' ? 'destructive' : 'default'}>
                  {pain.severity}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Top 5 Strategic Opportunities */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-green-600" />
            <div>
              <CardTitle className="text-2xl">Top 5 Strategic Opportunities</CardTitle>
              <CardDescription>Ranked by priority score (impact × market / effort)</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {opportunityAnalysis.topOpportunities.slice(0, 5).map((opp, idx) => (
            <Card key={idx} className="border-l-4 border-l-green-500">
              <CardContent className="pt-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1">{opp.opportunity}</h3>
                      <div className="flex flex-wrap gap-2 text-xs mt-2">
                        <Badge variant="outline" className="bg-blue-50">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {opp.marketSize}
                        </Badge>
                        <Badge variant="outline" className="bg-purple-50">
                          <Target className="w-3 h-3 mr-1" />
                          {opp.effort}
                        </Badge>
                        <Badge variant="outline" className="bg-orange-50">
                          <Zap className="w-3 h-3 mr-1" />
                          {opp.impact}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">{opp.priorityScore}</div>
                    <div className="text-xs text-gray-500">Score</div>
                  </div>
                </div>
                <div className="mt-3">
                  <Badge variant="secondary">
                    <Users className="w-3 h-3 mr-1" />
                    {opp.affectedUsers} users ({opp.percentage})
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* Actionable Recommendations */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <div>
              <CardTitle className="text-2xl">Immediate Action Items</CardTitle>
              <CardDescription>Top 5 priorities for product development</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: '1. URGENT: Implement Nutrition Tracking Solution',
              desc: '100% of users (4/4) struggle with nutrition tracking. This is the highest-impact feature you can build. Focus on: systematic accountability, easy input methods, personalized guidance, and accuracy transparency.',
              priority: 'CRITICAL',
              affected: '100%'
            },
            {
              title: '2. CRITICAL: Implement Tiered Pricing Strategy',
              desc: 'Willingness to pay ranges from $2.50/month to $240/month (60-96x difference). MUST have 5 pricing tiers: Free, $5-10, $20-30, $50-100, $150-250 to capture entire market.',
              priority: 'CRITICAL',
              affected: '100%'
            },
            {
              title: '3. HIGH: Build Flexible Social Settings',
              desc: 'Social preferences are completely polarized: Amish wants solo/private, Aniket wants partner features, Majid wants community, Jessica wants group classes. Solution: Private/Community toggle with granular controls.',
              priority: 'HIGH',
              affected: '100%'
            },
            {
              title: '4. HIGH: Female-Specific Features (50% Market Opportunity)',
              desc: 'Jessica revealed unique female needs: menstrual cycle awareness, social validation, group classes, meal prep for singles. Building these features captures 50% of total addressable market.',
              priority: 'HIGH',
              affected: '50% market'
            },
            {
              title: '5. MEDIUM: Fix Notification Fatigue (75% Issue)',
              desc: '75% of users (3/4) find notifications annoying. Amish has internal clock, Aniket keeps them OFF, Jessica does not engage. Solution: Opt-in only, context-aware, flexible time windows, no pressure.',
              priority: 'MEDIUM',
              affected: '75%'
            }
          ].map((action, idx) => (
            <Card key={idx} className={`border-l-4 ${idx < 2 ? 'border-l-red-600' : idx < 4 ? 'border-l-orange-500' : 'border-l-yellow-500'} bg-white`}>
              <CardContent className="pt-4">
                <h3 className="font-bold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{action.desc}</p>
                <div className="flex gap-2">
                  <Badge variant={action.priority === 'CRITICAL' ? 'destructive' : action.priority === 'HIGH' ? 'default' : 'secondary'}>
                    {action.priority}
                  </Badge>
                  <Badge variant="outline">{action.affected} affected</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* Key Statistics Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Key Statistics Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Demographics</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Participants:</span>
                  <span className="font-semibold">{analyticsData.totalParticipants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Male / Female:</span>
                  <span className="font-semibold">{analyticsData.gender.Male} / {analyticsData.gender.Female}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Advanced Users:</span>
                  <span className="font-semibold">{analyticsData.userTypes.Advanced}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Intermediate Users:</span>
                  <span className="font-semibold">{analyticsData.userTypes.Intermediate}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Key Findings</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nutrition Tracking Pain:</span>
                  <Badge variant="critical">100%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Notification Fatigue:</span>
                  <Badge variant="high">75%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prefer Gym vs Home:</span>
                  <Badge variant="success">100%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Range:</span>
                  <span className="font-semibold">$2.50 - $240/mo</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <Card className="bg-gray-50 print:hidden">
        <CardContent className="pt-6">
          <div className="text-center text-sm text-gray-600">
            <p>This report is based on 4 in-depth user interviews conducted in January 2024.</p>
            <p className="mt-1">Interview duration ranged from 24 to 72 minutes with an average of ~50 minutes per participant.</p>
            <p className="mt-3 font-semibold text-gray-900">
              Next Steps: Continue interviewing users to validate findings and refine personas (target: 10-15 interviews)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ExecutiveSummary
