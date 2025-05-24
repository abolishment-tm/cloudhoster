import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import SharedHostingPage from './pages/SharedHostingPage';
import EmailHostingPage from './pages/EmailHostingPage';
import DomainPage from './pages/DomainPage';
import DomainTransferPage from './pages/DomainTransferPage';
import WhoisLookupPage from './pages/WhoisLookupPage';
import PricingPage from './pages/PricingPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import LoginPage from './pages/LoginPage';
import CloudDashboardPage from './pages/CloudDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LegalPage from './pages/LegalPage';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/shared-hosting" element={<Layout><SharedHostingPage /></Layout>} />
            <Route path="/email-hosting" element={<Layout><EmailHostingPage /></Layout>} />
            <Route path="/daftar-domain" element={<Layout><DomainPage /></Layout>} />
            <Route path="/transfer-domain" element={<Layout><DomainTransferPage /></Layout>} />
            <Route path="/whois-lookup" element={<Layout><WhoisLookupPage /></Layout>} />
            <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
            <Route path="/pusat-bantuan" element={<Layout><KnowledgeBasePage /></Layout>} />
            <Route path="/legal/:type" element={<Layout><LegalPage /></Layout>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cloud-dashboard" element={
              <ProtectedRoute>
                <CloudDashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/admin/*" element={
              <ProtectedRoute requireAdmin>
                <AdminDashboardPage />
              </ProtectedRoute>
            } />
          </Routes>
          <Toaster position="top-right" />
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;