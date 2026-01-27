*Smart Automation Platform*
A modern, high-performance web application designed for managing automated test execution, user administration, and framework configuration. This project features a streamlined UI/UX built for engineers to monitor test cycles and manage repositories with ease.

*Features*
Advanced Dashboard: Real-time visualization of test run statistics, including pass/fail rates and retry counts.

User Management: Centralized administration for project roles, sub-projects, and user access control.

Test Case Creator: Intuitive interface for building test cases with integrated Object and Function repository lookups.

Framework Configuration: Granular control over execution parameters like thread counts, browser selection, and database logging.

Modern UI: Responsive split-screen login and a persistent sidebar navigation system built with React Router.

🛠️ Tech Stack
Frontend: React.js, React Router DOM.

Styling: Modern CSS3 (utilizing CSS Variables for a dynamic Design System).

Icons: FontAwesome 6.

Backend (Planned): Java Spring Boot.

📦 Installation & Setup
Clone the repository:

Bash

git clone https://github.com/yourusername/sopra-frontend.git
Install dependencies:

Bash

npm install
Start the development server:

Bash

npm start
The application will be available at http://localhost:3000
*Project Structure*
src/
├── components/     # Reusable UI components (StatCards, DataTables)
├── pages/          # Page-level components (Dashboard, Login, Profile)
├── styles/         # Global design system and shared CSS variables
├── App.js          # Routing and application entry point
└── index.js        # React DOM rendering