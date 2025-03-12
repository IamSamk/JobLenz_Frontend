# JobLenz Frontend

This is the frontend for JobLenz, an AI-powered job analysis platform. The application allows users to upload resumes and analyze LinkedIn profiles for career insights.

## 🚀 Features
- Resume Upload & AI Processing
- LinkedIn Profile Analysis
- Real-time Job Market Insights
- Interactive Data Visualization

## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/IamSamk/JobLenz_Frontend.git
   cd JobLenz_Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## 🛠️ Running the Development Server
```sh
npm run dev
```

## 🌍 Deployment on Netlify
1. Push code to GitHub
2. Deploy via [Netlify](https://netlify.com/)
3. Set build command: `npm run build`
4. Publish directory: `dist/`

## 📂 Folder Structure
```
JobLenz_Frontend/
│── src/
│   │── config.js  # Stores backend URL
│   │── api.js  # Handles API requests
│   │── App.js  # Main frontend component
│   │── components/
│   │   │── UploadResume.js  # Resume Upload
│   │   │── AnalyzeLinkedIn.js  # LinkedIn Analysis
│── public/
│   │── index.html  # Main HTML entry point
│   │── styles.css  # Basic styling
│── package.json  # Dependencies
│── README.md  # Documentation
│── .gitignore  # Prevents unnecessary files
```

## 🔗 API Integration
- **Backend URL**: `https://joblenz.onrender.com/`
- **Endpoints**:
  - `POST /upload` → Resume Upload
  - `POST /linkedin` → LinkedIn Analysis

## License
This project is open-source and licensed under **MIT License**.

---
🚀 **Developed by [IamSamk](https://github.com/IamSamk)**
