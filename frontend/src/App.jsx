import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ParentDashboard from './pages/ParentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import HowItWorks from './pages/HowItWorks';
import SafetyVerification from './pages/SafetyVerification';
import Footer from './components/Footer';
import './index.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setMenuOpen(false);
    navigate('/login');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          TutorConnect
        </Link>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Find a Teacher</Link>
          <Link to="/register?role=teacher" className={location.pathname === '/register' && location.search.includes('teacher') ? 'active' : ''} onClick={closeMenu}>Become a Teacher</Link>
          <Link to="/how-it-works" className={location.pathname === '/how-it-works' ? 'active' : ''} onClick={closeMenu}>How it Works</Link>
          <Link to="/safety" className={location.pathname === '/safety' ? 'active' : ''} onClick={closeMenu}>Safety & Verification</Link>

          <div className="nav-divider" style={{ width: '1px', height: '24px', backgroundColor: 'var(--border)', margin: '0 8px' }}></div>

          <Link to="/safety" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)' }} onClick={closeMenu}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Support
          </Link>

          {user ? (
            <>
              {user.role === 'parent' && <Link to="/parent" onClick={closeMenu}>Find Tutors</Link>}
              {user.role === 'admin' && <Link to="/admin" onClick={closeMenu}>Admin Panel</Link>}
              <button className="btn btn-outline" onClick={handleLogout} style={{ marginLeft: '15px' }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ fontWeight: '600', color: 'var(--text-dark)' }} onClick={closeMenu}>Login</Link>
              <Link to="/register?role=teacher" className="btn btn-primary" style={{ marginLeft: '8px' }} onClick={closeMenu}>Register as Teacher</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 350px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/safety" element={<SafetyVerification />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parent" element={<ParentDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

