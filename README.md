# ⚡ Developer Portfolio Builder

A full-stack web application that lets developers instantly generate a professional portfolio website by filling out a simple form.

---

## ✨ Features

- **Form-driven**: Enter your name, role, about, skills, projects, GitHub, LinkedIn, and email
- **Live preview**: Instantly see your portfolio after submitting
- **Professional design**: Dark-themed, modern UI with a green accent palette
- **Responsive**: Looks great on desktop and mobile
- **Full-stack**: React frontend + Node.js/Express backend communicating via REST API

---

## 🗂 Project Structure

```
developer-portfolio-builder/
├── frontend/                   # React app
│   ├── public/
│   │   └── index.html          # HTML entry point + Tailwind CDN
│   └── src/
│       ├── components/         # Reusable UI components
│       │   ├── InputField.jsx      # Labeled text input
│       │   ├── TagInput.jsx        # Skill tags input
│       │   ├── ProjectInput.jsx    # Add/remove projects form
│       │   ├── NavBar.jsx          # Portfolio navigation bar
│       │   ├── HeroSection.jsx     # Hero / home section
│       │   ├── AboutSection.jsx    # About section
│       │   ├── SkillsSection.jsx   # Skills section
│       │   ├── ProjectsSection.jsx # Projects grid
│       │   └── ContactSection.jsx  # Contact section
│       ├── pages/
│       │   ├── FormPage.jsx        # The form page
│       │   └── PreviewPage.jsx     # The portfolio preview
│       ├── App.jsx             # Root component (controls which page shows)
│       └── index.js            # React entry point
│
└── backend/                    # Node.js Express API
    ├── server.js               # Entry point — starts the server
    ├── routes/
    │   └── portfolioRoutes.js  # API route definitions
    └── controllers/
        └── portfolioController.js  # Business logic
```

---

## 🚀 Setup Instructions

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

---

### Step 1: Clone or download the project

```bash
git clone <your-repo-url>
cd developer-portfolio-builder
```

---

### Step 2: Set up and run the Backend

```bash
# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Start the server
npm start
```

You should see:
```
✅ Server is running on http://localhost:5000
```

---

### Step 3: Set up and run the Frontend

Open a **new terminal window**, then:

```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
```

The React app will open automatically at:
```
http://localhost:3000
```

---

### Step 4: Use the app

1. Fill in your details in the form (name, role, skills, projects, links)
2. Click **"⚡ Generate Portfolio"**
3. Your portfolio preview will appear instantly!
4. Click **"✏ Edit"** to go back and update any information

---

## 🔌 API Endpoints

| Method | Endpoint         | Description                     |
|--------|------------------|---------------------------------|
| POST   | `/api/portfolio` | Save portfolio data from form   |
| GET    | `/api/portfolio` | Retrieve the saved portfolio    |

### Example POST body:

```json
{
  "name": "Alex Johnson",
  "role": "Full-Stack Developer",
  "about": "I build scalable web applications...",
  "skills": ["React", "Node.js", "PostgreSQL"],
  "projects": [
    {
      "title": "My App",
      "description": "A cool app I built",
      "tech": "React, Express",
      "link": "https://github.com/alex/myapp"
    }
  ],
  "github": "https://github.com/alexj",
  "linkedin": "https://linkedin.com/in/alexj",
  "email": "alex@example.com"
}
```

---

## 🛠 Tech Stack

| Layer     | Technology         |
|-----------|--------------------|
| Frontend  | React 18           |
| Styling   | Tailwind CSS (CDN) |
| Backend   | Node.js + Express  |
| Fonts     | Syne + Space Mono  |
| API       | REST               |

---

## 📦 Dependencies

**Backend:**
- `express` — web framework
- `cors` — enables cross-origin requests from the frontend
- `nodemon` (dev) — auto-restarts server on file changes

**Frontend:**
- `react`, `react-dom` — UI library
- `react-scripts` — Create React App scripts
- Tailwind CSS via CDN (no build step needed)

---

## 💡 Future Improvements

- [ ] Add a database (MongoDB / PostgreSQL) for persistent storage
- [ ] Allow multiple portfolios per session
- [ ] Add export to PDF or share link feature
- [ ] Add more portfolio themes/color options
- [ ] Add image upload for projects

---

## 👨‍💻 Built With

Developer Portfolio Builder — built with React + Node.js ⚡
