import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { HomePage } from './pages/HomePage';
import { SkinScanPage } from './pages/SkinScanPage';
import { WelcomePage } from './pages/WelcomePage';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/" element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          } />
          <Route path="/scan" element={
            <AuthGuard>
              <SkinScanPage />
            </AuthGuard>
          } />
          <Route path="/history" element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          } />
          <Route path="/profile" element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          } />
          <Route path="/settings" element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          } />
          <Route path="/chat" element={
            <AuthGuard>
              <HomePage />
            </AuthGuard>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}