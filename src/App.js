import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { theme } from 'antd';
import './App.css';

// Layout and Pages
import MainLayout from './components/layout/MainLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import JobsPage from './pages/JobsPage';
import ClientsPage from './pages/ClientsPage';
import ReportsPage from './pages/ReportsPage';
import ShipmentTrackingPage from './pages/ShipmentTrackingPage';
import ShipmentsPage from './pages/ShipmentsPage';
import InvoicesPage from './pages/InvoicesPage';
import PaymentsPage from './pages/PaymentsPage';
import DutyCalculatorPage from './pages/DutyCalculatorPage';

import AdminDashboardPage from './pages/AdminDashboardPage';
import PublicTrackingPage from './pages/PublicTrackingPage';

// Auth Components
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

const { defaultAlgorithm } = theme;

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: defaultAlgorithm,
        token: {
          colorPrimary: '#2FA2EE',
          colorSuccess: '#4caf50',
          colorWarning: '#ff5722',
          colorError: '#f44336',
          colorInfo: '#2196f3',
          borderRadius: 6,
        },
      }}
    >
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/track" element={<PublicTrackingPage />} />
              
              {/* Protected Routes */}
              <Route path="/" element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="enquiries" element={<JobsPage />} />
                <Route path="shipments" element={<ShipmentsPage />} />
                <Route path="clients" element={<ClientsPage />} />
                <Route path="invoices" element={<InvoicesPage />} />
                <Route path="payments" element={<PaymentsPage />} />
                <Route path="duty-calculator" element={<DutyCalculatorPage />} />
                <Route path="tracking" element={<ShipmentTrackingPage />} />

                <Route path="reports" element={<ReportsPage />} />
                <Route path="admin" element={<AdminDashboardPage />} />
              </Route>
              
              {/* Catch all route - redirect to dashboard */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
