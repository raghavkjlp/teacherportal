import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('parents');
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(180deg, #e6f0ff 0%, #f4f7fb 100%)', padding: '4rem 20px 5rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#e6f0ff', color: 'var(--primary)', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(0, 77, 230, 0.2)' }}>
          <span>⚡</span> Transparent, Fast & AI-Verified Learning
        </div>
        <h1 style={{ fontSize: '2.75rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '800' }}>
          How TutorConnect Works
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
          Discover how our seamless platform connects students with thoroughly vetted, top-rated educators for personalized home and online tuition across India.
        </p>

        {/* Tab Toggle */}
        <div style={{ display: 'inline-flex', background: '#ffffff', padding: '6px', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <button
            onClick={() => setActiveTab('parents')}
            style={{
              padding: '10px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: activeTab === 'parents' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'parents' ? '#ffffff' : 'var(--text-regular)'
            }}
          >
            👨‍👩‍👧 For Parents & Students
          </button>
          <button
            onClick={() => setActiveTab('teachers')}
            style={{
              padding: '10px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: activeTab === 'teachers' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'teachers' ? '#ffffff' : 'var(--text-regular)'
            }}
          >
            👨‍🏫 For Teachers & Tutors
          </button>
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem' }}>
        {activeTab === 'parents' ? (
          /* PARENTS & STUDENTS FLOW */
          <div>
            <div className="text-center mb-5">
              <span className="pill mb-2">Simple 4-Step Process</span>
              <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Your Journey to Better Grades & Confidence</h2>
              <p className="text-muted mt-1">From finding the right tutor to scheduling trial classes in just a few clicks.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                {
                  step: '01',
                  icon: '🔍',
                  title: 'Search & Filter Tutors',
                  desc: 'Browse through AI-screened teachers specializing in CBSE, ICSE, IIT-JEE, NEET, and language learning. Filter by location, subject, and mode (Home or Online).'
                },
                {
                  step: '02',
                  icon: '📅',
                  title: 'Book a Free Demo Class',
                  desc: 'Select a suitable teacher and request a 1-on-1 trial session. Evaluate their teaching style, curriculum alignment, and communication with zero upfront risk.'
                },
                {
                  step: '03',
                  icon: '🎯',
                  title: 'Personalized Study Plan',
                  desc: 'Once satisfied, collaborate with your verified tutor to create a structured weekly schedule focusing on exam preparation, weak areas, and concept mastery.'
                },
                {
                  step: '04',
                  icon: '📈',
                  title: 'Track Growth & Safety',
                  desc: 'Enjoy safe learning with background-screened tutors, escrow payment protection, and transparent monthly progress reports for parents.'
                }
              ].map((item, idx) => (
                <div key={idx} className="card card-hover" style={{ position: 'relative', overflow: 'hidden', padding: '2rem' }}>
                  <div style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '4.5rem', fontWeight: '900', color: '#f1f5f9', zIndex: 0, lineHeight: 1 }}>{item.step}</div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: '1.25rem' }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center', background: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Find the perfect tutor for your child today</h3>
              <p className="text-muted mb-4" style={{ maxWidth: '550px', margin: '0 auto 1.5rem' }}>Join thousands of students who improved their grades with verified educators.</p>
              <div className="flex justify-center gap-3">
                <button className="btn btn-primary" onClick={() => navigate('/register?role=student')} style={{ padding: '12px 24px' }}>
                  Book Free Demo Class
                </button>
                <button className="btn btn-outline" onClick={() => navigate('/')} style={{ padding: '12px 24px' }}>
                  Browse All Teachers
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* TEACHERS FLOW */
          <div>
            <div className="text-center mb-5">
              <span className="pill mb-2">Teacher Onboarding</span>
              <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>How to Join as a Verified Teacher</h2>
              <p className="text-muted mt-1">Grow your tutoring career with genuine students, flexible schedules, and fast verification.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                {
                  step: '01',
                  icon: '📝',
                  title: 'Register & Fill Profile',
                  desc: 'Provide your details including honorific title (Mr./Mrs./Ms./Dr.), academic qualifications, CGPA/percentage, teaching subjects, and teaching mode preferences.'
                },
                {
                  step: '02',
                  icon: '🤖',
                  title: 'AI Verification & Screening',
                  desc: 'Our AI verification engine instantly audits your submitted credentials, educational background, and ID authenticity to ensure high trust standards.'
                },
                {
                  step: '03',
                  icon: '🛡️',
                  title: 'Admin Approval',
                  desc: 'The platform admin reviews your profile in the Admin Portal and marks you as Verified, making your profile instantly visible to nearby parents.'
                },
                {
                  step: '04',
                  icon: '💼',
                  title: 'Receive Student Requests',
                  desc: 'Get direct tuition inquiries for home visits or online sessions. Set your own schedule and conduct trial classes to build a steady student base.'
                }
              ].map((item, idx) => (
                <div key={idx} className="card card-hover" style={{ position: 'relative', overflow: 'hidden', padding: '2rem' }}>
                  <div style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '4.5rem', fontWeight: '900', color: '#f1f5f9', zIndex: 0, lineHeight: 1 }}>{item.step}</div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: '1.25rem' }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center', background: '#0a192f', color: '#ffffff', padding: '3.5rem', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem' }}>Ready to start teaching with TutorConnect?</h3>
              <p style={{ color: '#94a3b8', maxWidth: '550px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
                Join India's most trusted network of verified home & online educators. Fill your profile and get verified in under 24 hours.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/register?role=teacher')} style={{ padding: '14px 28px', fontSize: '1.05rem' }}>
                Register as a Teacher
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
