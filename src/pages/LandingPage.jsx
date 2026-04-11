import { Link } from 'react-router-dom';
import ShapeGrid from '../components/ShapeGrid';
import MiniDashboardPreview from '../components/MiniDashboardPreview';
import {
  AlertTriangle, HelpCircle, Layers, Zap, GitMerge,
  MousePointer, Activity, Check, ArrowRight, Star
} from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from 'recharts';

/* ── Data ── */
const weekData = [
  { day: 'Mon', v: 420 }, { day: 'Tue', v: 680 }, { day: 'Wed', v: 590 },
  { day: 'Thu', v: 870 }, { day: 'Fri', v: 1040 }, { day: 'Sat', v: 760 }, { day: 'Sun', v: 920 },
];

/* ── Problem Section ── */
const problems = [
  {
    icon: <AlertTriangle size={18} />,
    title: 'Google Analytics is confusing',
    desc: 'Dozens of reports, no clear signal. You spend hours learning the tool instead of understanding users.',
  },
  {
    icon: <HelpCircle size={18} />,
    title: "You don't know why users drop off",
    desc: 'Traffic goes up, signups go down. You have no visibility into where exactly users leave.',
  },
  {
    icon: <Layers size={18} />,
    title: 'Too many dashboards, no clear answers',
    desc: 'Mixpanel, Amplitude, GA4 — each has its own view. None of them talk to each other.',
  },
];

/* ── Features ── */
const features = [
  {
    icon: <Activity size={20} />,
    title: 'Realtime analytics',
    desc: 'See who is on your product right now, live.',
    featured: false,
  },
  {
    icon: <MousePointer size={20} />,
    title: 'Event tracking',
    desc: 'Track buttons, forms, and flows with one line.',
    featured: false,
  },
  {
    icon: <GitMerge size={20} />,
    title: 'Funnel analysis',
    desc: 'Instantly see where users drop — and fix it.',
    featured: true,
  },
  {
    icon: <Zap size={20} />,
    title: 'Session insights',
    desc: 'Understand the path each visitor takes.',
    featured: false,
  },
];

/* ── Pricing ── */
const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    features: ['1 website', '10k events/month', 'Realtime dashboard', '7-day data retention'],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Starter',
    price: '$12',
    period: '/mo',
    features: ['3 websites', '200k events/month', 'Funnels', '90-day retention'],
    cta: 'Get started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$39',
    period: '/mo',
    features: ['10 websites', '2M events/month', 'Team access (5 seats)', '1-year retention'],
    cta: 'Get started',
    popular: true,
  },
  {
    name: 'Scale',
    price: '$99',
    period: '/mo',
    features: ['Unlimited websites', 'Custom event volume', 'SSO + API access', 'Custom retention'],
    cta: 'Contact us',
    popular: false,
  },
];

/* ── Custom Tooltip ── */
const Tip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div style={{
        background: 'var(--bg-3)', border: '1px solid var(--border)',
        borderRadius: 8, padding: '8px 14px', fontSize: 13,
      }}>
        <div style={{ color: 'var(--text-muted)', marginBottom: 2 }}>{label}</div>
        <div style={{ color: 'var(--accent)', fontWeight: 700 }}>{payload[0].value.toLocaleString()} visitors</div>
      </div>
    );
  }
  return null;
};

/* ── Helper ── */
const SectionBadge = ({ children }) => (
  <div className="badge" style={{ margin: '0 auto 16px', width: 'fit-content' }}>{children}</div>
);

export default function LandingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        {/* ShapeGrid background */}
        <div className="hero-bg">
          <ShapeGrid
            direction="diagonal"
            speed={0.6}
            squareSize={44}
            borderColor="rgba(255,255,255,0.06)"
            hoverFillColor="rgba(204,255,0,0.08)"
            shape="square"
            hoverTrailAmount={5}
          />
          {/* radial overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(8,8,10,0) 0%, rgba(8,8,10,0.85) 100%)',
          }} />
          {/* accent glow */}
          <div className="glow-orb" style={{
            width: 500, height: 500,
            background: 'rgba(204,255,0,0.07)',
            top: '10%', left: '50%',
            transform: 'translateX(-50%)',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="hero-content animate-fade-up">
            <div className="badge" style={{ margin: '0 auto 24px', width: 'fit-content' }}>
              <Star size={10} /> Privacy-first · No cookies · Real insights
            </div>

            <h1 className="hero-title">
              Understand your users<br />
              <em>in minutes</em>
            </h1>

            <p className="hero-sub">
              Privacy-first analytics for SaaS founders.
              No cookies. No complexity. Just clarity.
            </p>

            <div className="hero-cta">
              <Link to="/signup" className="btn btn-primary btn-lg">
                Start tracking in 2 minutes <ArrowRight size={16} />
              </Link>
              <Link to="/dashboard/demo" className="btn btn-ghost btn-lg">
                View live demo
              </Link>
            </div>


          </div>

          {/* Dashboard preview */}
          <div className="hero-dashboard">
            <MiniDashboardPreview />
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-header">
            <SectionBadge>The Problem</SectionBadge>
            <h2>Analytics tools are broken<br />for founders</h2>
            <p>Built for enterprises, not for you. You need answers — not another certification course.</p>
          </div>

          <div className="problem-grid">
            {problems.map((p) => (
              <div className="problem-card" key={p.title}>
                <div className="problem-icon">{p.icon}</div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{p.title}</h4>
                  <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <SectionBadge>The Solution</SectionBadge>
            <h2>Analytics that actually<br />makes you smarter</h2>
            <p>Clariqube turns raw visitor data into decisions. In 2 minutes, not 2 days.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16
          }}>
            {[
              {
                icon: '⚡',
                title: 'Realtime tracking',
                desc: 'Watch visitors live as they navigate your product.',
              },
              {
                icon: '🎯',
                title: 'Event tracking',
                desc: 'Track button clicks, form fills, and page views effortlessly.',
              },
              {
                icon: '🔻',
                title: 'Funnel visualization',
                desc: 'Instantly see where users drop off — and fix conversion leaks.',
                highlight: true,
              },
              {
                icon: '📊',
                title: 'Simple dashboards',
                desc: 'One screen. All answers. No training required.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="card"
                style={{
                  border: s.highlight ? '1px solid var(--border-accent)' : undefined,
                  background: s.highlight ? 'rgba(204,255,0,0.03)' : undefined,
                  position: 'relative',
                }}
              >
                {s.highlight && (
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    background: 'var(--accent)', color: '#0a0a0a',
                    fontSize: 10, fontWeight: 700, padding: '2px 8px',
                    borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.08em'
                  }}>Key Feature</div>
                )}
                <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{s.title}</h4>
                <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo ── */}
      <section id="demo" className="section" style={{ background: 'var(--bg-2)', padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <SectionBadge>Live Demo</SectionBadge>
            <h2>See exactly where<br />users drop off</h2>
            <p>Your funnel, your users, your answers. All in one place.</p>
          </div>

          <div style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.5), 0 0 80px rgba(204,255,0,0.05)',
          }}>
            {/* Browser chrome */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '14px 20px',
              borderBottom: '1px solid var(--border)', background: 'var(--bg-2)',
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <div style={{
                flex: 1, marginLeft: 8, background: 'var(--bg-3)',
                borderRadius: 6, padding: '5px 14px',
                fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: 300,
              }}>
                app.clariqube.io/websites/abc123
              </div>
            </div>

            <div style={{ padding: 28 }}>
              {/* Tabs */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '1px solid var(--border)', paddingBottom: 0 }}>
                {['Overview', 'Events', 'Sessions', 'Realtime', 'Funnels'].map((t, i) => (
                  <button key={t} className={`tab-btn${i === 4 ? ' active' : ''}`}>{t}</button>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
                {/* Funnel viz */}
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Signup Funnel</h3>
                  {[
                    { label: 'Landing page visit', count: 12481, pct: 100, drop: null },
                    { label: 'Pricing page viewed', count: 7740, pct: 62, drop: '-38%' },
                    { label: 'Signup started', count: 4743, pct: 38, drop: '-39%' },
                    { label: 'Email verified', count: 2846, pct: 22.8, drop: '-40%' },
                    { label: 'First event tracked', count: 1747, pct: 14, drop: '-39%' },
                  ].map((step, idx) => (
                    <div key={step.label} style={{ marginBottom: 12 }}>
                      <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        fontSize: 12, color: 'var(--text-muted)', marginBottom: 5
                      }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
                          {idx + 1}. {step.label}
                        </span>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                          {step.drop && <span style={{ color: '#ff6060', fontSize: 11, fontWeight: 700 }}>{step.drop}</span>}
                          <span>{step.count.toLocaleString()}</span>
                        </div>
                      </div>
                      <div style={{
                        height: 40, background: 'var(--bg-3)',
                        borderRadius: 8, overflow: 'hidden',
                        border: '1px solid var(--border)',
                      }}>
                        <div style={{
                          width: `${step.pct}%`, height: '100%',
                          background: `linear-gradient(90deg, #ccff00, ${idx > 2 ? '#88bb00' : '#a8d400'})`,
                          display: 'flex', alignItems: 'center',
                          paddingLeft: 12,
                          fontSize: 12, fontWeight: 700, color: '#0a0a0a',
                          borderRadius: 8,
                          transition: 'width 0.8s ease',
                          minWidth: step.pct > 8 ? 'auto' : 0,
                        }}>
                          {step.pct >= 10 ? `${step.pct}%` : ''}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div>
                  <div style={{
                    background: 'var(--bg-3)', border: '1px solid var(--border)',
                    borderRadius: 12, padding: 20, marginBottom: 16,
                  }}>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                      Funnel Summary
                    </div>
                    <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--accent)' }}>14%</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>overall conversion</div>
                    <hr className="divider" />
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                      <div>📧 Biggest drop: email verification</div>
                      <div>💡 Fix: add welcome email + reminder</div>
                    </div>
                  </div>

                  <div style={{
                    background: 'var(--bg-3)', border: '1px solid var(--border)',
                    borderRadius: 12, padding: 16,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                      <span className="live-badge"><span className="live-dot" /> LIVE</span>
                    </div>
                    {['San Francisco, US', 'London, UK', 'Berlin, DE', 'Tokyo, JP'].map((loc) => (
                      <div key={loc} style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '8px 0', borderBottom: '1px solid var(--border)',
                        fontSize: 12, color: 'var(--text-secondary)'
                      }}>
                        <span className="activity-dot" />
                        <span>{loc}</span>
                        <span style={{ marginLeft: 'auto', color: 'var(--text-muted)' }}>on /pricing</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <SectionBadge>Features</SectionBadge>
            <h2>Everything you need.<br />Nothing you don't.</h2>
          </div>

          <div className="features-grid">
            {features.map((f) => (
              <div className={`feature-card${f.featured ? ' featured' : ''}`} key={f.title}>
                {f.featured && (
                  <div style={{
                    fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 12
                  }}>⭐ Main Feature</div>
                )}
                <div className="feature-icon">{f.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{f.title}</h4>
                <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-header">
            <SectionBadge>Pricing</SectionBadge>
            <h2>Simple, honest pricing</h2>
            <p>Pay for what you use. No surprise bills.</p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div key={plan.name} className={`pricing-card${plan.popular ? ' popular' : ''}`}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {plan.name}
                  </div>
                  <div className="pricing-price">
                    {plan.price}<span>{plan.period}</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((f) => (
                    <li key={f} className="check">{f}</li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className={`btn btn-sm ${plan.popular ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{
          width: 600, height: 300,
          background: 'rgba(204,255,0,0.07)',
          top: 0, left: '50%', transform: 'translateX(-50%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="badge" style={{ margin: '0 auto 24px', width: 'fit-content' }}>
            🚀 Ready?
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: 20 }}>
            Start tracking in<br /><span className="text-accent">2 minutes</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 440, margin: '0 auto 40px' }}>
            No setup headaches. Just paste a script and go.
          </p>
          <Link to="/signup" className="btn btn-primary btn-lg">
            Create free account <ArrowRight size={16} />
          </Link>
          <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {['No credit card', 'GDPR compliant', 'Cancel anytime'].map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)' }}>
                <Check size={13} color="var(--accent)" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 12 }}>
                Clari<span style={{ color: 'var(--accent)' }}>qube</span>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', maxWidth: 260, lineHeight: 1.7 }}>
                Privacy-first analytics for SaaS founders who want clarity, not complexity.
              </p>
            </div>
            <div>
              <div className="footer-col-title">Product</div>
              <ul className="footer-links">
                {['Features', 'Pricing', 'Changelog', 'Roadmap'].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links">
                {['About', 'Blog', 'Privacy', 'Terms'].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Developers</div>
              <ul className="footer-links">
                {['Docs', 'API', 'Status', 'Support'].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="divider" style={{ marginTop: 48 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12.5, color: 'var(--text-muted)', flexWrap: 'wrap', gap: 8 }}>
            <span>© 2026 Clariqube Technologies Ltd. All rights reserved.</span>
            <span>Made with ♥ for SaaS founders</span>
          </div>
        </div>
      </footer>
    </>
  );
}
