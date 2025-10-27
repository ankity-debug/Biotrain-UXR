import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import QASpreadsheet from './components/QASpreadsheet'
import Insights from './components/Insights'
import FeaturePriorityMatrix from './components/FeaturePriorityMatrix'
import ExecutiveSummary from './components/ExecutiveSummary'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'executive-summary', label: 'Executive Summary', icon: '📑' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'participants', label: 'Participants & Q&A', icon: '👥' },
    { id: 'insights', label: 'Insights', icon: '💡' },
    { id: 'priority-matrix', label: 'Priority Matrix', icon: '🎯' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BT</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">BioTrain Dashboard</h1>
            </div>
            <div className="text-sm text-gray-500">
              UX Research Analytics
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'executive-summary' && <ExecutiveSummary />}
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'participants' && <QASpreadsheet />}
        {activeTab === 'insights' && <Insights />}
        {activeTab === 'priority-matrix' && <FeaturePriorityMatrix />}
      </main>
    </div>
  )
}

export default App
