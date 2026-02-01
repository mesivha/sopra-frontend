import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import UserManagement from './pages/UserManagement/UserManagement';
import Profile from './pages/Profile/Profile';
import CreateTestCase from './pages/CreateTestCase/CreateTestCase';
import FrameworkConfig from './pages/FrameworkConfig/FrameworkConfig';
import LoginPage from './pages/LoginPage/LoginPage';
function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health/")
      .then(res => res.json())
      .then(data => console.log("Django:", data));
  }, []);
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test-cases" element={<CreateTestCase />} />
          <Route path="/devtools" element={<FrameworkConfig />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
export default App;
