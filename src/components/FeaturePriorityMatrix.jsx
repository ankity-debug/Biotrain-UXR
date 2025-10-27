import { useState } from 'react'
import { TrendingUp, Target, Zap, Users, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { opportunityAnalysis } from '../data/insights'

// Simplified Feature Priority Matrix
const FeaturePriorityMatrix = () => {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const features = opportunityAnalysis.topOpportunities

  // Group features by quadrant
  const getQuadrant = (effort, impact) => {
    const isHighImpact = impact === 'Very High' || impact === 'High'
    const isLowEffort = effort === 'Low' || effort === 'Medium'

    if (isHighImpact && isLowEffort) return 'quick-wins'
    if (isHighImpact && !isLowEffort) return 'strategic'
    if (!isHighImpact && isLowEffort) return 'low-priority'
    return 'risky'
  }

  const quadrants = {
    'quick-wins': {
      title: 'Quick Wins',
      description: 'High Impact, Low Effort - Do These First!',
      color: 'bg-green-50 border-green-200',
      badgeColor: 'bg-green-600',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
      features: features.filter(f => getQuadrant(f.effort, f.impact) === 'quick-wins')
    },
    'strategic': {
      title: 'Strategic Bets',
      description: 'High Impact, High Effort - Plan & Execute',
      color: 'bg-blue-50 border-blue-200',
      badgeColor: 'bg-blue-600',
      icon: <Target className="h-5 w-5 text-blue-600" />,
      features: features.filter(f => getQuadrant(f.effort, f.impact) === 'strategic')
    },
    'low-priority': {
      title: 'Nice to Have',
      description: 'Low Impact, Low Effort - Consider Later',
      color: 'bg-yellow-50 border-yellow-200',
      badgeColor: 'bg-yellow-600',
      icon: <AlertCircle className="h-5 w-5 text-yellow-600" />,
      features: features.filter(f => getQuadrant(f.effort, f.impact) === 'low-priority')
    },
    'risky': {
      title: 'Risky',
      description: 'Low Impact, High Effort - Avoid',
      color: 'bg-red-50 border-red-200',
      badgeColor: 'bg-red-600',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      features: features.filter(f => getQuadrant(f.effort, f.impact) === 'risky')
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold mb-2">Feature Priority Matrix</h2>
        <p className="text-gray-600">Strategic roadmap prioritization by impact and effort</p>
      </div>

      {/* Simple Explanation Card */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            How to Read This Matrix
          </CardTitle>
          <CardDescription>
            Features are organized into 4 categories based on their impact (value to users) and effort (time/resources to build)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
              <div className="text-xs">
                <div className="font-semibold text-green-900">Quick Wins</div>
                <div className="text-green-700">Build first</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg border border-blue-200">
              <Target className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <div className="text-xs">
                <div className="font-semibold text-blue-900">Strategic</div>
                <div className="text-blue-700">Plan carefully</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
              <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" />
              <div className="text-xs">
                <div className="font-semibold text-yellow-900">Nice to Have</div>
                <div className="text-yellow-700">Maybe later</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
              <div className="text-xs">
                <div className="font-semibold text-red-900">Risky</div>
                <div className="text-red-700">Avoid</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quadrant Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.entries(quadrants).map(([key, quadrant]) => (
          <Card key={key} className={`border-2 ${quadrant.color}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {quadrant.icon}
                  <div>
                    <CardTitle className="text-lg">{quadrant.title}</CardTitle>
                    <CardDescription className="text-xs mt-1">{quadrant.description}</CardDescription>
                  </div>
                </div>
                <Badge variant="outline">{quadrant.features.length} features</Badge>
              </div>
            </CardHeader>
            <CardContent>
              {quadrant.features.length === 0 ? (
                <p className="text-sm text-muted-foreground">No features in this quadrant</p>
              ) : (
                <div className="space-y-3">
                  {quadrant.features.map((feature, idx) => (
                    <Card
                      key={idx}
                      className="border cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFeature(feature)}
                    >
                      <CardContent className="pt-4 pb-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm leading-tight mb-1">
                                {feature.opportunity}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {feature.users.join(' • ')}
                              </p>
                            </div>
                            <Badge className={`${quadrant.badgeColor} text-white text-sm px-2 py-1`}>
                              {feature.priorityScore}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-2 text-xs">
                            <div className="flex items-center gap-1 px-2 py-1 bg-white rounded border">
                              <TrendingUp className="h-3 w-3" />
                              <span className="font-medium">{feature.marketSize}</span>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-1 bg-white rounded border">
                              <Target className="h-3 w-3" />
                              <span className="font-medium">{feature.effort}</span>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-1 bg-white rounded border">
                              <Zap className="h-3 w-3" />
                              <span className="font-medium">{feature.impact}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* All Features Sorted by Priority */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5" />
            All Features Ranked by Priority Score
          </CardTitle>
          <CardDescription>Higher score = Higher priority (Impact × Market Size / Effort)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {features
              .sort((a, b) => b.priorityScore - a.priorityScore)
              .map((feature, index) => {
                const quadrant = getQuadrant(feature.effort, feature.impact)
                const quadrantInfo = quadrants[quadrant]

                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedFeature === feature
                        ? 'border-primary shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedFeature(feature)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${quadrantInfo.badgeColor} text-white flex items-center justify-center font-bold text-lg`}>
                        {index + 1}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{feature.opportunity}</h4>
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <Badge variant="outline" className="text-xs">
                            <Users className="w-3 h-3 mr-1" />
                            {feature.affectedUsers} users ({feature.percentage})
                          </Badge>
                          <Badge variant="secondary">{quadrantInfo.title}</Badge>
                          <span className="text-muted-foreground">{feature.users.join(' • ')}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">Score</div>
                          <div className="text-xl font-bold text-primary">{feature.priorityScore}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </CardContent>
      </Card>

      {/* Selected Feature Details */}
      {selectedFeature && (
        <Card className="border-2 border-primary">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{selectedFeature.opportunity}</CardTitle>
                <CardDescription className="mt-1">Selected Feature Details</CardDescription>
              </div>
              <button
                onClick={() => setSelectedFeature(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-900">Market Size</span>
                </div>
                <div className="text-lg font-bold text-blue-900">{selectedFeature.marketSize}</div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-900">Effort</span>
                </div>
                <div className="text-lg font-bold text-purple-900">{selectedFeature.effort}</div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-orange-600" />
                  <span className="text-xs font-semibold text-orange-900">Impact</span>
                </div>
                <div className="text-lg font-bold text-orange-900">{selectedFeature.impact}</div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-semibold text-green-900">Priority Score</span>
                </div>
                <div className="text-lg font-bold text-green-900">{selectedFeature.priorityScore}</div>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold mb-2">Affected Users ({selectedFeature.percentage})</h5>
              <div className="flex flex-wrap gap-2">
                {selectedFeature.users.map((user, idx) => (
                  <Badge key={idx} variant="secondary">{user}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default FeaturePriorityMatrix
