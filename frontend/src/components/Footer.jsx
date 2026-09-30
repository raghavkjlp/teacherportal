import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section" style={{ paddingRight: '2rem' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '800' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            TutorConnect
          </h4>
          <p style={{ fontSize: '0.85rem' }}>Empowering academic excellence through certified home and online tuition. Rigorous verification, personalized learning journeys, and transparent tutor credentials.</p>
          <div className="flex gap-2 mt-3 text-xs">
            <span className="pill pill-outline">100% Verified Identity</span>
            <span className="pill pill-outline">100% Background Screened</span>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Stay Informed: Parenting & Exam Tips</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email address..." className="form-control" style={{ padding: '0.5rem', fontSize: '0.85rem' }} />
              <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4>FOR PARENTS</h4>
          <Link to="/">Find Tutors</Link>
          <Link to="/how-it-works">How it Works</Link>
          <Link to="/safety">Safety & Verification</Link>
          <Link to="/register?role=student">Request a Demo</Link>
        </div>
        <div className="footer-section">
          <h4>FOR TEACHERS</h4>
          <Link to="/register?role=teacher">Become a Tutor</Link>
          <Link to="/how-it-works">Tutor Onboarding Flow</Link>
          <Link to="/safety">Background Check Standards</Link>
          <Link to="/login">Teacher Login</Link>
        </div>
        <div className="footer-section">
          <h4>COMPANY & LEGAL</h4>
          <Link to="/how-it-works">About Platform</Link>
          <Link to="/safety">Trust & Safety Policy</Link>
          <Link to="/safety">Student Protection</Link>
          <Link to="/admin">Admin Portal</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} TutorConnect Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-muted">TW</a>
          <a href="#" className="text-muted">IN</a>
          <a href="#" className="text-muted">FB</a>
        </div>
      </div>
    </footer>
  );
}
