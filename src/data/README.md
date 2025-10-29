# Data Directory Structure

This directory contains all structured data for the BioTrain UX Research Dashboard.

## Directory Organization

```
data/
├── interviews/           # Individual interview data files
│   ├── interview1_ramesh.js
│   ├── interview2_aniket.js
│   ├── interview3_majid.js
│   ├── interview4_jessica.js
│   ├── interview5_dhananjay.js
│   ├── interview6_dhruv.js
│   └── interview7_shubham.js
├── participants.js       # Aggregated participant data & exports
├── insights.js          # Analyzed insights, personas, opportunities
└── qaData.js           # Q&A spreadsheet data

```

## File Descriptions

### interviews/
Contains individual structured interview files. Each file exports:
- `{name}Profile` - User profile object with demographics, goals, challenges
- `{name}Interview` - Interview object with metadata, transcript, and insights

### participants.js
Central export file that:
- Imports all individual interview data
- Exports combined `participants` array
- Provides helper functions for filtering/querying participants

### insights.js
Analyzed research data including:
- **Analytics**: User demographics, fitness levels, tech adoption, budgets
- **Key Insights**: Top 10 prioritized findings based on impact/priority
- **Pain Points**: Frequency analysis and severity rankings
- **Opportunities**: Feature ideas with affected user percentages
- **User Personas**: 4 consolidated strategic persona categories

### qaData.js
Q&A spreadsheet format:
- `questionnaire` - Standardized 33 questions used across all interviews
- `interviewResponses` - Each participant's answers mapped to question IDs

## Usage

Import aggregated data:
```javascript
import { participants } from './data/participants.js'
import { analyticsData, keyInsights, userPersonas } from './data/insights.js'
import { questionnaire, interviewResponses } from './data/qaData.js'
```

Import individual interviews:
```javascript
import { rameshProfile, rameshInterview } from './data/interviews/interview1_ramesh.js'
```

## Data Flow

1. **Raw Transcripts** (`/interviews/transcripts/*.txt`) 
   ↓
2. **Structured Interview Files** (`interviews/interview*.js`)
   ↓
3. **Aggregated Data** (`participants.js`)
   ↓
4. **Analyzed Insights** (`insights.js`, `qaData.js`)
   ↓
5. **Dashboard Components** (visualizations, charts, reports)

