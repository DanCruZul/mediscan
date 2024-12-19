import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import { HomePage } from './pages/HomePage';
import { SkinScanPage } from './pages/SkinScanPage';
import { AuthProvider } from './components/auth/AuthProvider';
import { useAuthStore } from './stores/authStore';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthStore();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
}

export default function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route 
            path="/" 
            element={user ? <Navigate to="/home" replace /> : <WelcomePage />} 
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/scan"
            element={
              <PrivateRoute>
                <SkinScanPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}