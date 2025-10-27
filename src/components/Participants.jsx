import React, { useState } from 'react'
import { User, MapPin, Briefcase, Target, DollarSign, Smartphone, Activity, Calendar, Clock } from 'lucide-react'
import { participants } from '../data/participants.js'

const Participants = () => {
  const [selectedParticipant, setSelectedParticipant] = useState(0)
  const [activeTab, setActiveTab] = useState('profile')

  const currentParticipant = participants[selectedParticipant]

  const getFitnessLevelColor = (level) => {
    switch (level) {
      case 'High': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getBudgetColor = (budget) => {
    switch (budget) {
      case 'High': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getTechSavvyColor = (techSavvy) => {
    return techSavvy ? 'text-green-600 bg-green-100' : 'text-orange-600 bg-orange-100'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Participants</h2>
          <p className="text-gray-600 mt-1">Detailed profiles and interview insights</p>
        </div>
        <div className="text-sm text-gray-500">
          {participants.length} participants interviewed
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Participants List */}
        <div className="lg:col-span-1">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Participants</h3>
            <div className="space-y-3">
              {participants.map((participant, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedParticipant(index)}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedParticipant === index
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{participant.profile.name}</h4>
                      <p className="text-sm text-gray-600">{participant.profile.occupation}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFitnessLevelColor(participant.profile.fitnessLevel)}`}>
                          {participant.profile.fitnessLevel}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBudgetColor(participant.profile.budget)}`}>
                          {participant.profile.budget}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Participant Details */}
        <div className="lg:col-span-2">
          <div className="card">
            {/* Participant Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{currentParticipant.profile.name}</h3>
                  <p className="text-gray-600">{currentParticipant.profile.occupation} • {currentParticipant.profile.age} years old</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{currentParticipant.interview.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{currentParticipant.interview.duration}</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-6">
              {['profile', 'interview', 'insights'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">Location</p>
                        <p className="text-gray-900">{currentParticipant.profile.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">Occupation</p>
                        <p className="text-gray-900">{currentParticipant.profile.occupation}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Activity className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">Fitness Level</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFitnessLevelColor(currentParticipant.profile.fitnessLevel)}`}>
                          {currentParticipant.profile.fitnessLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">Budget</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBudgetColor(currentParticipant.profile.budget)}`}>
                          {currentParticipant.profile.budget}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">Tech Savvy</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTechSavvyColor(currentParticipant.profile.techSavvy)}`}>
                          {currentParticipant.profile.techSavvy ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-600">User Type</p>
                        <p className="text-gray-900">{currentParticipant.profile.userType}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Goals</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentParticipant.profile.goals.map((goal, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentParticipant.profile.challenges.map((challenge, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Preferred Activities</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentParticipant.profile.preferredActivities.map((activity, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Pain Points</h4>
                  <ul className="space-y-2">
                    {currentParticipant.profile.painPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Interview Tab */}
            {activeTab === 'interview' && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Interview Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Date:</span> {currentParticipant.interview.date}
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Duration:</span> {currentParticipant.interview.duration}
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Interviewer:</span> {currentParticipant.interview.interviewer}
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">ID:</span> {currentParticipant.interview.id}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {Object.entries(currentParticipant.interview.transcript).map(([key, qa], index) => (
                    <div key={key} className="border-l-4 border-primary-200 pl-4">
                      <h5 className="font-medium text-gray-900 mb-2">Q{index + 1}: {qa.question}</h5>
                      <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Insights Tab */}
            {activeTab === 'insights' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Pain Points</h4>
                  <ul className="space-y-2">
                    {currentParticipant.interview.insights.keyPainPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Opportunities</h4>
                  <ul className="space-y-2">
                    {currentParticipant.interview.insights.opportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-medium text-blue-900 mb-2">User Type</h5>
                    <p className="text-blue-700">{currentParticipant.interview.insights.userType}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-medium text-green-900 mb-2">Willingness to Pay</h5>
                    <p className="text-green-700">{currentParticipant.interview.insights.willingnessToPay}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h5 className="font-medium text-purple-900 mb-2">Tech Adoption</h5>
                    <p className="text-purple-700">{currentParticipant.interview.insights.techAdoption}</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h5 className="font-medium text-orange-900 mb-2">Motivation Drivers</h5>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {currentParticipant.interview.insights.motivationDrivers.map((driver, index) => (
                        <span key={index} className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">
                          {driver}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Participants
