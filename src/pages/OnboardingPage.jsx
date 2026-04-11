import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Copy, Check, ArrowRight, Loader } from 'lucide-react';

const STEPS = ['Add your website', 'Install tracking', 'View your data'];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [websiteName, setWebsiteName] = useState('');
  const [domain, setDomain] = useState('');
  const [copied, setCopied] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();

  const fakeId = 'website_' + Math.random().toString(36).slice(2, 10);
  const scriptSnippet = `<script defer src="https://cdn.clariqube.io/script.js"\n  data-website-id="${fakeId}"></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else navigate('/dashboard/demo');
  };

  return (
    <div className="onboarding-layout">
      <div className="onboarding-card animate-fade-up">
        {/* Logo */}
        <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 36 }}>
          Clari<span style={{ color: 'var(--accent)' }}>qube</span>
        </div>

        {/* Step indicator */}
        <div className="step-indicator">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`step-dot${i === step ? ' active' : i < step ? ' done' : ''}`}
            />
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>
            {step + 1} / {STEPS.length}
          </span>
        </div>

        {/* ── Step 0: Add website ── */}
        {step === 0 && (
          <div>
            <div className="badge" style={{ marginBottom: 16 }}>Step 1</div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Add your website</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 32, lineHeight: 1.7 }}>
              Tell us about your website. You can add more later.
            </p>

            <div className="form-group">
              <label className="form-label" htmlFor="ws-name">Website name</label>
              <input
                id="ws-name"
                type="text"
                placeholder="e.g. My SaaS App"
                className="form-input"
                value={websiteName}
                onChange={(e) => setWebsiteName(e.target.value)}
              />
            </div>
            <div className="form-group" style={{ marginBottom: 32 }}>
              <label className="form-label" htmlFor="ws-domain">Domain</label>
              <div style={{ position: 'relative' }}>
                <Globe size={15} style={{
                  position: 'absolute', left: 14, top: '50%',
                  transform: 'translateY(-50%)', color: 'var(--text-muted)'
                }} />
                <input
                  id="ws-domain"
                  type="text"
                  placeholder="myapp.com"
                  className="form-input"
                  style={{ paddingLeft: 38 }}
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
              onClick={handleNext}
              disabled={!websiteName || !domain}
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* ── Step 1: Install script ── */}
        {step === 1 && (
          <div>
            <div className="badge" style={{ marginBottom: 16 }}>Step 2</div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Install tracking</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 32, lineHeight: 1.7 }}>
              Paste this script into the <code style={{ color: 'var(--accent)', background: 'var(--bg-3)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>&lt;head&gt;</code> of your website. That's it.
            </p>

            <div className="code-block" style={{ marginBottom: 16 }}>
              <button className="copy-btn" onClick={handleCopy}>
                {copied ? <><Check size={10} /> Copied!</> : <><Copy size={10} /> Copy</>}
              </button>
              <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', paddingRight: 60 }}>
                {scriptSnippet}
              </pre>
            </div>

            <div style={{
              background: 'var(--bg-3)', border: '1px solid var(--border)',
              borderRadius: 8, padding: 14, marginBottom: 32, fontSize: 13, color: 'var(--text-secondary)'
            }}>
              💡 Works with React, Next.js, Webflow, Framer, Squarespace, and any HTML site.
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
              onClick={handleNext}
            >
              I've added the script <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* ── Step 2: View data ── */}
        {step === 2 && (
          <div>
            <div className="badge" style={{ marginBottom: 16 }}>Step 3</div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>View your data</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 32, lineHeight: 1.7 }}>
              Once your script is installed, your dashboard will come alive.
            </p>

            {/* Empty state */}
            <div style={{
              background: 'var(--bg-3)', border: '1px dashed var(--border)',
              borderRadius: 12, padding: '40px 24px', textAlign: 'center', marginBottom: 32
            }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>
                <Loader size={40} style={{ margin: '0 auto', color: 'var(--text-muted)', opacity: 0.4 }} />
              </div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>
                Waiting for your first visitor…
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                Visit your site to trigger the first event.
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
              onClick={handleNext}
            >
              Go to dashboard <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
