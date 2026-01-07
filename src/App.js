import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';

// Import all our pages
import Dashboard from './pages/Dashboard/Dashboard';
import UserManagement from './pages/UserManagement/UserManagement';
import Profile from './pages/Profile/Profile';
import CreateTestCase from './pages/CreateTestCase/CreateTestCase';
import FrameworkConfig from './pages/FrameworkConfig/FrameworkConfig';
import LoginPage from './pages/LoginPage/LoginPage'; // Ensure this path matches your folder

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. PUBLIC ROUTE: No Sidebar or Topbar here */}
        <Route path="/login" element={<LoginPage />} />

        {/* 2. PRIVATE ROUTES: Wrapped in MainLayout */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                {/* Dashboard is the default page when logged in */}
                <Route path="/" element={<Dashboard />} />
                
                <Route path="/users" element={<UserManagement />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/test-cases" element={<CreateTestCase />} />
                <Route path="/devtools" element={<FrameworkConfig />} />
                
                {/* Placeholders */}
                <Route path="/repositories" element={<div>Repositories Page Coming Soon</div>} />
                <Route path="/docs" element={<div>Documentation Coming Soon</div>} />
                <Route path="/test-runs" element={<div>Test Runs Page Coming Soon</div>} />

                {/* Redirect any unknown routes to dashboard */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;