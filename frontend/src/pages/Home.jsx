import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [featuredTeachers, setFeaturedTeachers] = useState([]);
  const navigate = useNavigate();

  // Mock data for display based on design
  const mockTeachers = [
    {
      _id: '1',
      name: 'Elena Rostova',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      price: 45,
      rating: 5.0,
      reviews: 120,
      education: 'M.Sc. Pure Mathematics, Columbia Univ.',
      exp: '12 Yrs Exp',
      location: '2.4 miles (Brooklyn Heights)',
      subjects: ['AP Calculus AB/BC', 'Algebra II', 'SAT Math'],
      modes: ['Home Tuition', 'Online 1-on-1']
    },
    {
      _id: '2',
      name: 'Dr. Marcus Sterling',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      price: 60,
      rating: 4.9,
      reviews: 84,
      education: 'Ph.D. Applied Physics, MIT Graduate',
      exp: '15+ Yrs Exp',
      location: '3.8 miles (Park Slope)',
      subjects: ['AP Physics 1 & 2', 'AP Physics C', 'Thermodynamics'],
      modes: ['Home Tuition', 'Online 1-on-1']
    },
    {
      _id: '3',
      name: 'Priya Sharma',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      price: 38,
      rating: 4.8,
      reviews: 56,
      education: 'B.Tech CS, Ex-Lead Instructor at CodeCo',
      exp: '5+ Yrs Exp',
      location: 'Nationwide (Online)',
      subjects: ['Python for Kids & HS', 'AP Computer Science A', 'Java'],
      modes: ['Online Live 1-on-1']
    }
  ];

  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <div className="hero-section" style={{ background: 'linear-gradient(180deg, #e6f0ff 0%, #f4f7fb 100%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#e6f0ff', color: '#004de6', padding: '8px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '2rem', border: '1px solid rgba(0, 77, 230, 0.2)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          100% Background-Screened Academic Mentors
        </div>

        <h1 style={{ color: '#0f172a', marginBottom: '1.5rem', lineHeight: '1.2', fontWeight: '800', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Find the Right Teacher for Your Learning Journey
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Connect with verified teachers for online and home tuition tailored to your needs. Personalized 1-on-1 sessions designed to build confidence and top exam scores.
        </p>
      </div>

      <div className="container" style={{ marginTop: '-4rem', marginBottom: '4rem', zIndex: 10, position: 'relative' }}>
        <div className="grid-4">
          {[
            { title: '500+ Verified Tutors', desc: 'Government ID and criminal background checked rigorously.', icon: '🛡️' },
            { title: '1,000+ Students', desc: '98.4% recorded grade improvement within 8 weeks.', icon: '📈' },
            { title: 'Online & In-Home', desc: 'Learn face to face in your living room or via interactive HD video.', icon: '💻' },
            { title: 'Safe Escrow Pay', desc: 'Funds released only after session completion & approval.', icon: '🔒' }
          ].map((stat, idx) => (
            <div key={idx} className="card card-hover" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary-light)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                {stat.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>{stat.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: '1.4' }}>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teachers List Section */}
      <div className="container mb-5">
        <div className="section-header">
          <div>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>■</span> Find Teachers Near You
            </h2>
            <p className="text-muted mt-1">Showing <strong>85 Top Verified Tutors</strong> near <span style={{ color: 'var(--primary)', cursor: 'pointer' }}>New Delhi, India</span></p>
          </div>
          <div className="flex gap-4 items-center text-sm font-medium">
            <span>Sort by: <span style={{ color: 'var(--primary)', cursor: 'pointer' }}>Highest Rated (4.8+) ▼</span></span>
            <div className="flex gap-2">
              <div style={{ padding: '6px', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '4px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
              <div style={{ padding: '6px', color: 'var(--text-light)', borderRadius: '4px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-4" style={{ flexWrap: 'wrap' }}>
          <span className="text-xs text-muted" style={{ padding: '4px 0' }}>FILTERS:</span>
          <span className="pill pill-outline">Mode: All (Home & Online) ✕</span>
          <span className="pill pill-outline">Curriculum: CBSE / ICSE ✕</span>
          <span className="text-xs" style={{ color: 'var(--primary)', padding: '4px 8px', cursor: 'pointer' }}>Clear all</span>
        </div>

        <div className="grid-3">
          {mockTeachers.map(teacher => (
            <div key={teacher._id} className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="flex justify-between mb-4">
                <div style={{ position: 'relative' }}>
                  <img src={teacher.photo} alt={teacher.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '0', right: '0', background: 'var(--primary)', color: 'white', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', background: 'var(--primary-light)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '4px', fontWeight: '600', display: 'inline-block', marginTop: '4px' }}>Free Trial</div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-2">
                <h3 style={{ fontSize: '1.1rem' }}>{teacher.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#fffbeb', color: '#d97706', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>
                  ★ {teacher.rating} ({teacher.reviews})
                </div>
              </div>

              <p className="text-sm text-muted mb-2">{teacher.education}</p>

              <div className="flex gap-4 text-xs text-muted mb-3 font-medium">
                <div className="flex items-center gap-1">⏱️ {teacher.exp}</div>
              </div>

              <div className="flex gap-2 flex-wrap mb-4">
                {teacher.subjects.map(s => <span key={s} className="pill" style={{ background: '#f1f5f9', color: 'var(--text-regular)' }}>{s}</span>)}
              </div>

              <div className="mt-auto pt-3" style={{ borderTop: '1px dashed var(--border)', display: 'flex', gap: '12px', fontSize: '0.85rem', fontWeight: '500' }}>
                {teacher.modes.map((m, i) => (
                  <div key={m} className="flex items-center gap-1">
                    <span style={{ color: i === 0 ? '#d97706' : 'var(--primary)' }}>■</span> {m}
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-4">
                <button className="btn btn-outline" onClick={() => navigate('/register?role=student')} style={{ flex: 1, padding: '10px' }}>View Profile</button>
                <button className="btn btn-primary" onClick={() => navigate('/register?role=student')} style={{ flex: 1, padding: '10px' }}>Request Tuition</button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-bar">
          <div className="text-sm text-muted">Showing 1 - 3 of 85 Teachers</div>
          <div className="flex gap-1">
            <button className="btn btn-outline text-sm" style={{ padding: '6px 12px' }}>Previous</button>
            <button className="btn btn-primary text-sm" style={{ padding: '6px 12px' }}>1</button>
            <button className="btn btn-outline text-sm" style={{ padding: '6px 12px', border: 'none' }}>2</button>
            <button className="btn btn-outline text-sm" style={{ padding: '6px 12px', border: 'none' }}>3</button>
            <button className="btn btn-outline text-sm" style={{ padding: '6px 12px' }}>Next</button>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div id="how-it-works" style={{ background: '#f8fafc', padding: '5rem 0', marginTop: '2rem' }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="text-xs font-bold" style={{ color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Simplicity & Transparency</div>
            <h2>How TutorConnect Works (AI Verified)</h2>
            <p className="text-muted mt-2">Teachers submit their credentials, which are rigorously verified by our AI and admin team before they appear on the platform.</p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {[
              { num: '01', title: 'Teacher Fills Details', desc: 'Tutors create a profile with their education, location, subjects, and ID proof for verification.', link: 'Secure registration', icon: '📝' },
              { num: '02', title: 'Admin & AI Verification', desc: 'Our advanced AI cross-checks credentials and an Admin manually approves the profile to ensure 100% safety and quality.', link: 'Trust and safety first', icon: '🛡️' },
              { num: '03', title: 'Published & Ready', desc: 'Once verified, the teacher is listed on the platform for parents and students to connect and book a free trial.', link: 'Start learning today', icon: '🚀' }
            ].map((step, i) => (
              <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '6rem', fontWeight: '900', color: '#f1f5f9', zIndex: 0, lineHeight: 1 }}>{step.num}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'white', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    {step.icon}
                  </div>
                  <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>{step.title}</h3>
                  <p className="text-muted text-sm mb-4" style={{ lineHeight: '1.6' }}>{step.desc}</p>
                  <Link to="/how-it-works" className="text-xs font-semibold" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {step.link} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mt-5">
        <div className="cta-flex" style={{ background: '#0a192f', borderRadius: '24px', overflow: 'hidden', color: 'white', position: 'relative' }}>
          
          <div className="cta-text">
            <h2 style={{ color: 'white', marginBottom: '1.5rem', lineHeight: '1.2' }}>Ready to Start Your Learning Journey?</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '500px' }}>
              Whether you're looking to share your knowledge as a verified tutor or want to experience our interactive learning platform firsthand, we have the right path for you.
            </p>

            <div className="flex gap-4 mt-4">
              <button className="btn btn-primary" onClick={() => navigate('/register?role=student')} style={{ padding: '14px 28px', fontSize: '1.1rem' }}>
                Book a Free Demo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <button className="btn" onClick={() => navigate('/register?role=teacher')} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '14px 28px', fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                Become a Tutor
              </button>
            </div>
          </div>

          <div className="cta-image">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Student taking online class" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} 
            />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, #0a192f 0%, transparent 100%)' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
