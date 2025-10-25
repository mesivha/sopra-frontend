import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';

// Import all our pages
import Dashboard from './pages/Dashboard/Dashboard';
import UserManagement from './pages/UserManagement/UserManagement';
import Profile from './pages/Profile/Profile';
import CreateTestCase from './pages/CreateTestCase/CreateTestCase';
import FrameworkConfig from './pages/FrameworkConfig/FrameworkConfig';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          
          {/* NEW: Add the new page routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/test-cases" element={<CreateTestCase />} />
          <Route path="/devtools" element={<FrameworkConfig />} />

          {/* Add other routes here as you build them */}
          {/* <Route path="/test-runs" element={...} /> */}
          {/* <Route path="/repositories" element={...} /> */}
          {/* <Route path="/docs" element={...} /> */}

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;