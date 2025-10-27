# BioTrain UX Research Dashboard

A comprehensive React dashboard for analyzing fitness & wellness user interviews and research data.

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The dashboard will be available at `http://localhost:5173`

## 📁 Project Structure

```
biotrain-dashboard/
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── index.html                  # Main HTML file
├── src/
│   ├── main.jsx                # React app entry point
│   ├── App.jsx                 # Main app component with navigation
│   ├── index.css               # Global styles and Tailwind imports
│   ├── data/                   # Data files (participants, insights)
│   │   ├── ramesh.js           # Ramesh's profile and interview data
│   │   ├── aniket.js           # Aniket's profile and interview data
│   │   ├── majid.js            # Majid's profile and interview data
│   │   ├── participants.js     # Aggregated participant data
│   │   └── insights.js         # Analytics and insights data
│   └── components/             # React components
│       ├── Dashboard.jsx       # Main dashboard with charts and stats
│       ├── Participants.jsx    # Participant profiles and interview details
│       ├── Insights.jsx        # Research insights and analysis
│       └── Spreadsheet.jsx     # Data spreadsheet view
```

## 🎯 Features

### Dashboard
- **Overview Statistics**: Key metrics and participant counts
- **Interactive Charts**: User types, fitness levels, budgets, and goals distribution
- **Visual Analytics**: Pie charts and bar charts for data visualization

### Participants
- **Detailed Profiles**: Complete participant information including demographics, goals, and challenges
- **Interview Transcripts**: Full Q&A sessions with searchable content
- **Insights Analysis**: Key pain points, opportunities, and user behavior patterns

### Insights
- **Key Findings**: Prioritized insights with impact and priority ratings
- **Pain Point Analysis**: Common challenges across participants
- **Opportunity Mapping**: Market opportunities with effort and impact analysis
- **User Personas**: Detailed persona definitions with key characteristics

### Spreadsheet
- **Data Grid**: Comprehensive tabular view of all participant data
- **Search & Filter**: Advanced filtering and search capabilities
- **Export Functionality**: CSV export for data analysis
- **Bulk Operations**: Select and manage multiple participants

## 🔧 Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, customizable icons
- **Recharts**: Composable charting library for data visualization

## 📊 Data Structure

### Participant Data
Each participant has two main data structures:

1. **Profile**: Demographics, goals, challenges, preferences
2. **Interview**: Transcript, insights, pain points, opportunities

### Key Data Points
- **Demographics**: Age, location, occupation
- **Fitness Profile**: Level, goals, preferred activities
- **Behavioral**: Tech adoption, budget, motivation drivers
- **Interview Data**: Transcripts, insights, pain points

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for main actions and highlights
- **Success**: Green for positive metrics and achievements
- **Warning**: Orange for attention and caution
- **Danger**: Red for errors and critical issues

### Components
- **Cards**: Consistent card layouts for content sections
- **Buttons**: Primary and secondary button styles
- **Charts**: Responsive charts with consistent color schemes
- **Tables**: Sortable, filterable data tables

## 🚀 Adding New Participants

### 1. Create Participant File
Create a new file in `src/data/` (e.g., `participant4.js`):

```javascript
export const participant4Profile = {
  name: 'Participant Name',
  age: 25,
  location: 'City',
  occupation: 'Job Title',
  userType: 'Beginner/Intermediate/Advanced',
  fitnessLevel: 'Low/Medium/High',
  goals: ['Goal 1', 'Goal 2'],
  challenges: ['Challenge 1', 'Challenge 2'],
  preferredActivities: ['Activity 1', 'Activity 2'],
  techSavvy: true/false,
  budget: 'Low/Medium/High',
  painPoints: ['Pain point 1', 'Pain point 2']
}

export const participant4Interview = {
  id: 'participant4-001',
  date: '2024-01-25',
  duration: '45 minutes',
  interviewer: 'UX Team',
  transcript: {
    q1: {
      question: "Question 1",
      answer: "Answer 1"
    },
    // ... more questions
  },
  insights: {
    keyPainPoints: ['Pain point 1', 'Pain point 2'],
    opportunities: ['Opportunity 1', 'Opportunity 2'],
    userType: 'User Type',
    willingnessToPay: 'Budget Range',
    techAdoption: 'High/Low',
    motivationDrivers: ['Driver 1', 'Driver 2']
  }
}
```

### 2. Update Participants Index
Add the new participant to `src/data/participants.js`:

```javascript
import { participant4Profile, participant4Interview } from './participant4.js'

export const participants = [
  // ... existing participants
  {
    profile: participant4Profile,
    interview: participant4Interview
  }
]

// Export the new participant
export {
  participant4Profile,
  participant4Interview
}
```

### 3. Update Analytics (Optional)
If needed, update `src/data/insights.js` to include new participant data in analytics.

## 📈 Analytics and Insights

### Key Metrics
- **User Segmentation**: Advanced, Intermediate, Beginner users
- **Fitness Levels**: High, Medium, Low fitness levels
- **Budget Distribution**: High, Medium, Low budget ranges
- **Tech Adoption**: High vs Low tech adoption rates

### Pain Point Analysis
- **Frequency**: How many users experience each pain point
- **Severity**: Impact level of each pain point
- **User Mapping**: Which users are affected by each pain point

### Opportunity Mapping
- **Market Size**: Large, Medium, Small market opportunities
- **Effort Required**: High, Medium, Low development effort
- **Impact Potential**: High, Medium, Low business impact

## 🔍 Usage Examples

### Viewing Participant Data
1. Navigate to the "Participants" tab
2. Click on any participant to view their details
3. Switch between Profile, Interview, and Insights tabs
4. Explore interview transcripts and key insights

### Analyzing Insights
1. Go to the "Insights" tab
2. Review key insights with priority and impact ratings
3. Explore pain points and opportunities
4. Study user personas for product development

### Data Export
1. Visit the "Spreadsheet" tab
2. Use search and filters to find specific data
3. Select rows for bulk operations
4. Export data as CSV for external analysis

## 🛠️ Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Customization
- **Styling**: Modify `src/index.css` and `tailwind.config.js`
- **Components**: Update components in `src/components/`
- **Data**: Modify data files in `src/data/`
- **Charts**: Customize charts in `src/components/Dashboard.jsx`

## 📝 Notes

- All participant data is stored in separate files for easy maintenance
- The dashboard is fully responsive and works on all device sizes
- Charts are interactive and provide detailed tooltips
- Data can be easily exported for further analysis
- The modular structure makes it easy to add new features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**BioTrain Dashboard** - Making fitness research data accessible and actionable.
