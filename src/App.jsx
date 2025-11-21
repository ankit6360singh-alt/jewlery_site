import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-soft-white font-sans text-secondary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here as we build them */}
          <Route path="/shop" element={<div className="pt-20 text-center">Shop Page Coming Soon</div>} />
          <Route path="/about" element={<div className="pt-20 text-center">About Page Coming Soon</div>} />
          <Route path="/contact" element={<div className="pt-20 text-center">Contact Page Coming Soon</div>} />
        </Routes>

        {/* Simple Footer Placeholder */}
        <footer className="bg-secondary text-white py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2024 LuxeGems. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
