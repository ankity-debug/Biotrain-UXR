import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import QASpreadsheet from './components/QASpreadsheet'
import Insights from './components/Insights'
import FeaturePriorityMatrix from './components/FeaturePriorityMatrix'
import ExecutiveSummary from './components/ExecutiveSummary'
import Visualizations from './components/Visualizations'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'executive-summary', label: 'Executive Summary', icon: '📑' },
    { id: 'visualizations', label: 'Dive Deep (Graphs)', icon: '📈' },
    { id: 'participants', label: 'Participants & Q&A', icon: '👥' },
    { id: 'insights', label: 'Insights', icon: '💡' },
    { id: 'priority-matrix', label: 'Feature Priority', icon: '🎯' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md transition-all hover:shadow-lg hover:scale-105">
                <span className="text-primary-foreground font-bold text-sm">BT</span>
              </div>
              <h1 className="text-xl font-semibold text-foreground">BioTrain Dashboard</h1>
            </div>
            <div className="text-sm text-muted-foreground">
              UX Research Analytics
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-[72px] z-40 shadow-sm backdrop-blur-sm bg-card/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-4 border-b-2 font-medium text-sm transition-all whitespace-nowrap rounded-t-lg ${
                  activeTab === tab.id
                    ? 'border-primary text-primary bg-primary/10'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-accent/50'
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
        {activeTab === 'visualizations' && <Visualizations />}
        {activeTab === 'participants' && <QASpreadsheet />}
        {activeTab === 'insights' && <Insights />}
        {activeTab === 'priority-matrix' && <FeaturePriorityMatrix />}
      </main>
    </div>
  )
}

export default App
