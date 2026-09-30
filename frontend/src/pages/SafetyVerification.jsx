import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SafetyVerification() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Hero Header */}
      <div style={{ background: 'linear-gradient(180deg, #e6f0ff 0%, #f4f7fb 100%)', padding: '4.5rem 20px 5rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#e6f0ff', color: 'var(--primary)', padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(0, 77, 230, 0.2)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          100% Trust, Safety & Verification
        </div>
        <h1 style={{ fontSize: '2.85rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '800' }}>
          Safety & AI Verification at TutorConnect
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', maxWidth: '680px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
          Child safety and academic integrity are our highest priorities. Every tutor undergoes multi-stage AI and manual Admin screening before entering your home or virtual classroom.
        </p>
        <div className="flex justify-center gap-3">
          <button className="btn btn-primary" onClick={() => navigate('/register?role=student')} style={{ padding: '12px 24px' }}>
            Book a Verified Tutor
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/register?role=teacher')} style={{ padding: '12px 24px' }}>
            Apply for Verification
          </button>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        {/* The 4-Tier Verification Shield */}
        <div className="text-center mb-5">
          <span className="pill mb-2">Our Safety Standard</span>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>The 4 Pillars of Tutor Verification</h2>
          <p className="text-muted mt-1">We enforce rigorous checks to ensure only high-caliber, safe tutors are listed.</p>
        </div>

        <div className="grid-auto" style={{ marginBottom: '4rem' }}>
          {[
            {
              icon: '🤖',
              title: 'AI Document & Identity Scan',
              desc: 'Our AI verification system scans government IDs (Aadhaar/Passport), academic degree certificates, and marksheets to eliminate forged documents.'
            },
            {
              icon: '👨‍💼',
              title: 'Manual Admin Portal Review',
              desc: 'An internal Admin physically audits tutor submissions, cross-checking university credentials, CGPA records, and teaching experience before approval.'
            },
            {
              icon: '🔒',
              title: 'Background & Reference Checks',
              desc: 'Rigorous criminal background screening and past parent references are verified to ensure complete student safety for in-home tutoring.'
            },
            {
              icon: '⭐',
              title: 'Continuous Quality Monitoring',
              desc: 'Post-class parent ratings, student feedback, and AI sentiment analysis on attendance and punctuality maintain the highest teaching standards.'
            }
          ].map((card, i) => (
            <div key={i} className="card card-hover" style={{ padding: '2rem', background: '#ffffff', borderRadius: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Parent Assurance Guarantee */}
        <div style={{ background: '#0a192f', color: '#ffffff', borderRadius: '20px', padding: '3.5rem', marginBottom: '4rem' }}>
          <div className="grid-auto" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', background: 'rgba(0, 77, 230, 0.3)', color: '#60a5fa', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '1rem', border: '1px solid rgba(96, 165, 250, 0.3)' }}>
                GUARANTEED PEACE OF MIND
              </div>
              <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '1rem', lineHeight: '1.3' }}>
                Why Indian Parents Trust TutorConnect
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                We understand that inviting an educator into your home or having online classes requires complete confidence. That's why we back every session with full transparency.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  '100% Free Trial Demo before any financial commitment',
                  'Admin-verified tutor badges clearly displayed on each profile',
                  'Option to switch tutors at any time with zero penalty',
                  'Dedicated 24/7 Parent Support helpline for safety queries'
                ].map((text, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> {text}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.3rem', marginBottom: '1.5rem' }}>🔒 Teacher Verification Checklist</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Government Photo ID Validation', status: 'Mandatory' },
                  { label: 'Degree & CGPA Verification', status: 'Mandatory' },
                  { label: 'Address & Residence Confirmation', status: 'Mandatory' },
                  { label: 'Mock Demo Class & Pedagogy Audit', status: 'Screened' },
                  { label: 'Admin Approval Status', status: 'Verified' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{item.label}</span>
                    <span style={{ background: '#10b981', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="text-center mb-4">
            <h2 style={{ fontSize: '1.8rem' }}>Frequently Asked Questions</h2>
            <p className="text-muted mt-1">Everything you need to know about our safety and verification protocol.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'How does the AI verification work for new teachers?',
                a: 'When a teacher registers, our AI engine parses their uploaded academic records and identity documents, verifying institutional authenticity, name matching, and qualification history.'
              },
              {
                q: 'What role does the Admin play before a teacher is listed?',
                a: 'No teacher appears in student searches automatically. An Admin must review their application in the Admin Portal and click "Verify" after ensuring all criteria are fulfilled.'
              },
              {
                q: 'Is the initial demo class really 100% free?',
                a: 'Yes. Every verified teacher offers a free trial class so you and your child can experience their teaching style before making any payments.'
              },
              {
                q: 'What should I do if I have a concern during home tuition?',
                a: 'You can immediately reach our 24/7 dedicated safety desk or use the Support button in the navbar for priority escalation.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem', background: '#ffffff' }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{faq.q}</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
