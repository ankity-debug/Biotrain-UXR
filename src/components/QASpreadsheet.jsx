import React, { useState } from 'react'
import { Download, Search, Filter, ChevronDown, ChevronUp } from 'lucide-react'
import {
  questionnaire,
  interviewResponses,
  getResponsesByQuestion,
  categories,
  journeyStages
} from '../data/qaData.js'

const QASpreadsheet = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedJourneyStage, setSelectedJourneyStage] = useState('All')
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [viewMode, setViewMode] = useState('by-question') // 'by-question' or 'by-participant'

  // Filter questions based on search and filters
  const filteredQuestions = questionnaire.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory
    const matchesStage = selectedJourneyStage === 'All' || q.journeyStage === selectedJourneyStage

    return matchesSearch && matchesCategory && matchesStage
  })

  const toggleQuestion = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId)
  }

  const exportToCSV = () => {
    // Create CSV header
    let csv = 'Question ID,Category,Journey Stage,Question,Ramesh (27M Advanced),Aniket (Mid-20sM Intermediate),Majid (Late 20s-30sM Intermediate),Jessica (36F Intermediate),Dr. Dhananjay Kumar (40s-50sM Intermediate),Dhruv (24-25M Power User),Shubham (Late 20s-30sM Power User)\n'

    // Add each question and responses
    questionnaire.forEach(q => {
      const responses = getResponsesByQuestion(q.id)
      const row = [
        q.id,
        q.category,
        q.journeyStage,
        `"${q.question.replace(/"/g, '""')}"`,
        ...responses.map(r => `"${r.response.replace(/"/g, '""')}"`)
      ]
      csv += row.join(',') + '\n'
    })

    // Download
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'bioTrain_interview_qa_data.csv'
    a.click()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Q&A Spreadsheet</h2>
          <p className="text-gray-600 mt-1">Comprehensive interview questions and responses from all 4 participants</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={exportToCSV}
            className="btn-secondary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{questionnaire.length}</div>
            <div className="text-sm text-gray-600">Total Questions</div>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{interviewResponses.length}</div>
            <div className="text-sm text-gray-600">Participants</div>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{categories.length}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{journeyStages.length}</div>
            <div className="text-sm text-gray-600">Journey Stages</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Filters Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Category Filter */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="All">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Journey Stage Filter */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Journey Stage</label>
                <select
                  value={selectedJourneyStage}
                  onChange={(e) => setSelectedJourneyStage(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="All">All Stages</option>
                  {journeyStages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">View Mode</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('by-question')}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      viewMode === 'by-question'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    By Question
                  </button>
                  <button
                    onClick={() => setViewMode('by-participant')}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      viewMode === 'by-participant'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    By Participant
                  </button>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              Showing {filteredQuestions.length} of {questionnaire.length} questions
            </div>
          </div>
        </div>
      </div>

      {/* Q&A Display - By Question View */}
      {viewMode === 'by-question' && (
        <div className="space-y-3">
          {filteredQuestions.map((question) => {
            const responses = getResponsesByQuestion(question.id)
            const isExpanded = expandedQuestion === question.id

            return (
              <div key={question.id} className="card">
                {/* Question Header */}
                <div
                  className="flex items-start justify-between cursor-pointer hover:bg-gray-50 -m-6 p-6 rounded-lg"
                  onClick={() => toggleQuestion(question.id)}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-mono text-primary-600">{question.id}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {question.category}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        {question.journeyStage}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{question.question}</h3>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Responses */}
                {isExpanded && (
                  <div className="mt-6 space-y-4 pt-6 border-t border-gray-200">
                    {responses.map((resp, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-gray-900">{resp.participant}</span>
                            <span className="text-sm text-gray-600">
                              ({resp.age}, {resp.gender}, {resp.userType})
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{resp.response}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Q&A Display - By Participant View */}
      {viewMode === 'by-participant' && (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-64">
                    Question
                  </th>
                  {interviewResponses.map(p => (
                    <th key={p.participant} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-64">
                      {p.participant}
                      <div className="text-xs font-normal text-gray-400 mt-1">
                        {p.age}, {p.gender}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredQuestions.map((q) => {
                  const responses = getResponsesByQuestion(q.id)
                  return (
                    <tr key={q.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-mono text-primary-600">
                        {q.id}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col space-y-1">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full inline-block">
                            {q.category}
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full inline-block">
                            {q.journeyStage}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {q.question}
                      </td>
                      {responses.map((resp, idx) => (
                        <td key={idx} className="px-4 py-3 text-sm text-gray-700">
                          <div className="max-h-32 overflow-y-auto">
                            {resp.response}
                          </div>
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default QASpreadsheet
