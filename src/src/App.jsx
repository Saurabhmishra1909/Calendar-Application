import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/admin/AdminDashboard'; // Import AdminDashboard
import CompanyForm from './components/admin/CompanyForm';
import CommunicationManager from './components/Communication/CommunicationManager';
import CalendarView from './components/Calendar/CalenderView'; // Import CalendarView

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/company/new" element={<CompanyForm />} />
            <Route path="/communications" element={<CommunicationManager />} />
            <Route path="/calendar" element={<CalendarView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
