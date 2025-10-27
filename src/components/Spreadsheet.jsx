import React, { useState } from 'react'
import { Download, Search, Filter, Plus, Edit, Trash2, Eye } from 'lucide-react'
import { participants } from '../data/participants.js'

const Spreadsheet = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRows, setSelectedRows] = useState([])
  const [sortField, setSortField] = useState('name')
  const [sortDirection, setSortDirection] = useState('asc')

  // Flatten participant data for spreadsheet view
  const spreadsheetData = participants.map((participant, index) => ({
    id: index + 1,
    name: participant.profile.name,
    age: participant.profile.age,
    location: participant.profile.location,
    occupation: participant.profile.occupation,
    userType: participant.profile.userType,
    fitnessLevel: participant.profile.fitnessLevel,
    budget: participant.profile.budget,
    techSavvy: participant.profile.techSavvy ? 'Yes' : 'No',
    goals: participant.profile.goals.join(', '),
    challenges: participant.profile.challenges.join(', '),
    preferredActivities: participant.profile.preferredActivities.join(', '),
    interviewDate: participant.interview.date,
    interviewDuration: participant.interview.duration,
    interviewer: participant.interview.interviewer,
    willingnessToPay: participant.interview.insights.willingnessToPay,
    techAdoption: participant.interview.insights.techAdoption
  }))

  // Filter and sort data
  const filteredData = spreadsheetData
    .filter(row => 
      Object.values(row).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]
      
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const handleSelectRow = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(filteredData.map(row => row.id))
    }
  }

  const columns = [
    { key: 'name', label: 'Name', width: 'w-24' },
    { key: 'age', label: 'Age', width: 'w-16' },
    { key: 'location', label: 'Location', width: 'w-24' },
    { key: 'occupation', label: 'Occupation', width: 'w-32' },
    { key: 'userType', label: 'User Type', width: 'w-24' },
    { key: 'fitnessLevel', label: 'Fitness Level', width: 'w-24' },
    { key: 'budget', label: 'Budget', width: 'w-20' },
    { key: 'techSavvy', label: 'Tech Savvy', width: 'w-20' },
    { key: 'goals', label: 'Goals', width: 'w-40' },
    { key: 'challenges', label: 'Challenges', width: 'w-40' },
    { key: 'preferredActivities', label: 'Activities', width: 'w-40' },
    { key: 'interviewDate', label: 'Interview Date', width: 'w-24' },
    { key: 'interviewDuration', label: 'Duration', width: 'w-20' },
    { key: 'willingnessToPay', label: 'WTP', width: 'w-32' },
    { key: 'techAdoption', label: 'Tech Adoption', width: 'w-24' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Data Spreadsheet</h2>
          <p className="text-gray-600 mt-1">Comprehensive view of all participant data</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Participant</span>
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search participants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <button className="btn-secondary flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {filteredData.length} of {spreadsheetData.length} participants
          </div>
        </div>
      </div>

      {/* Spreadsheet Table */}
      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === filteredData.length && filteredData.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                </th>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 ${column.width}`}
                    onClick={() => handleSort(column.key)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{column.label}</span>
                      {sortField === column.key && (
                        <span className="text-primary-600">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((row) => (
                <tr
                  key={row.id}
                  className={`hover:bg-gray-50 ${selectedRows.includes(row.id) ? 'bg-primary-50' : ''}`}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleSelectRow(row.id)}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                  </td>
                  {columns.map((column) => (
                    <td key={column.key} className={`px-4 py-3 text-sm text-gray-900 ${column.width}`}>
                      <div className="truncate" title={row[column.key]}>
                        {row[column.key]}
                      </div>
                    </td>
                  ))}
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Rows Actions */}
      {selectedRows.length > 0 && (
        <div className="card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {selectedRows.length} row{selectedRows.length > 1 ? 's' : ''} selected
              </span>
              <button className="btn-secondary text-sm">
                Export Selected
              </button>
              <button className="btn-secondary text-sm">
                Delete Selected
              </button>
            </div>
            <button
              onClick={() => setSelectedRows([])}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear Selection
            </button>
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{spreadsheetData.length}</div>
            <div className="text-sm text-gray-600">Total Participants</div>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {spreadsheetData.filter(row => row.techSavvy === 'Yes').length}
            </div>
            <div className="text-sm text-gray-600">Tech Savvy</div>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {spreadsheetData.filter(row => row.budget === 'High').length}
            </div>
            <div className="text-sm text-gray-600">High Budget</div>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {spreadsheetData.filter(row => row.fitnessLevel === 'High').length}
            </div>
            <div className="text-sm text-gray-600">High Fitness</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spreadsheet
