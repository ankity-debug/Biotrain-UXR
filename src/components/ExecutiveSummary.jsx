import React from 'react'
import { Download, AlertCircle, TrendingUp, Users, Target, CheckCircle2, DollarSign } from 'lucide-react'
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

  const COLORS = {
    chart1: '#818cf8',
    chart2: '#34d399',
    chart3: '#fbbf24',
    chart4: '#f87171',
    chart5: '#a78bfa'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Executive Summary</h1>
          <p className="text-muted-foreground mt-2 text-lg">BioTrain UX Research Findings</p>
          <p className="text-sm text-muted-foreground mt-1">{analyticsData.totalParticipants} Real User Interviews • {new Date().toLocaleDateString()}</p>
        </div>
        <Button onClick={downloadPDF} className="print:hidden">
          <Download className="w-4 h-4 mr-2" />
          Export PDF
        </Button>
      </div>

      {/* Key Metrics Overview */}
      <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0 shadow-lg">
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold">{analyticsData.totalParticipants}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{keyInsights.length}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">Key Insights</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{Object.keys(userPersonas).length}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">User Personas</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{opportunityAnalysis.topOpportunities.length}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">Opportunities</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Critical Findings - Top 3 */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6" style={{ color: COLORS.chart4 }} />
            <CardTitle className="text-2xl">Critical Findings</CardTitle>
          </div>
          <CardDescription>Top pain points and user needs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {keyInsights.slice(0, 3).map((insight, index) => (
            <div key={index} className="border-l-4 pl-4 py-2" style={{ borderLeftColor: COLORS.chart4 }}>
              <h4 className="font-semibold text-foreground">{insight.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline" style={{ borderColor: COLORS.chart4, color: COLORS.chart4 }}>
                  {insight.percentage}
                </Badge>
                <Badge variant="outline">{insight.priority}</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* User Personas - Simplified */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6" style={{ color: COLORS.chart1 }} />
            <CardTitle className="text-2xl">User Personas</CardTitle>
          </div>
          <CardDescription>{Object.keys(userPersonas).length} strategic segments identified</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(userPersonas).slice(0, 4).map(([name, data], index) => (
              <div key={name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">{name}</h4>
                  <Badge variant="secondary">{data.percentage}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{data.description.substring(0, 120)}...</p>
                <div className="flex flex-wrap gap-1">
                  {data.representatives.map(rep => (
                    <Badge key={rep} variant="outline" className="text-xs">
                      {rep.split(' ')[0]}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Willingness to Pay</p>
                  <p className="text-xs">{data.willingnessToPay}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Opportunities */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6" style={{ color: COLORS.chart5 }} />
            <CardTitle className="text-2xl">Top Strategic Opportunities</CardTitle>
          </div>
          <CardDescription>Highest impact features ranked by priority</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {opportunityAnalysis.topOpportunities.slice(0, 5).map((opp, index) => (
              <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" 
                     style={{ backgroundColor: COLORS[`chart${(index % 5) + 1}`], color: 'white' }}>
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{opp.opportunity}</h4>
                    <Badge variant={opp.impact === 'Critical' ? 'destructive' : 'secondary'} className="flex-shrink-0">
                      {opp.impact}
                    </Badge>
                  </div>
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span>• {opp.percentage}</span>
                    <span>• Effort: {opp.effort}</span>
                    <span>• Market: {opp.marketSize}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <AlertCircle className="h-4 w-4" style={{ color: COLORS.chart4 }} />
              #1 Pain Point
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: COLORS.chart4 }}>78%</div>
            <p className="text-sm text-muted-foreground mt-1">Struggle with nutrition tracking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <DollarSign className="h-4 w-4" style={{ color: COLORS.chart5 }} />
              Pricing Range
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: COLORS.chart5 }}>$2-240</div>
            <p className="text-sm text-muted-foreground mt-1">Monthly willingness to pay</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" style={{ color: COLORS.chart2 }} />
              Tech Adoption
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: COLORS.chart2 }}>67%</div>
            <p className="text-sm text-muted-foreground mt-1">High-Very High tech users</p>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Actions */}
      <Alert>
        <TrendingUp className="h-4 w-4" />
        <AlertTitle>Recommended Next Steps</AlertTitle>
        <AlertDescription>
          <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
            <li><strong>Build MVP with raw ingredient nutrition tracking</strong> - Critical differentiator (78% need)</li>
            <li><strong>Implement tiered pricing</strong> - Free, $5-10, $20-50, $100+ to capture full market</li>
            <li><strong>Integrate mental + physical + nutrition</strong> - Holistic wellness is unmet market need</li>
            <li><strong>Target fitness professionals first</strong> - B2B2C model for client management + personal use</li>
            <li><strong>Develop India-specific food database</strong> - Regional food awareness critical for adoption</li>
          </ol>
        </AlertDescription>
      </Alert>

      {/* Footer Note */}
      <div className="text-center text-sm text-muted-foreground pt-4 border-t">
        <p>This summary represents findings from {analyticsData.totalParticipants} in-depth user interviews conducted with fitness enthusiasts across various experience levels, demographics, and geographic locations.</p>
        <p className="mt-2">For detailed insights, analytics, and user quotes, please refer to the Dashboard and Deep Dive tabs.</p>
      </div>
    </div>
  )
}

export default ExecutiveSummary
