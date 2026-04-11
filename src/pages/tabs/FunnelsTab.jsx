import { Filter, GitMerge } from 'lucide-react';

const funnelSteps = [
  { label: 'Visited Landing Page', count: 12481, pct: 100, drop: null },
  { label: 'Viewed Pricing', count: 7740, pct: 62, drop: '-38%' },
  { label: 'Started Sign Up', count: 4743, pct: 38, drop: '-39%' },
  { label: 'Verified Email', count: 2846, pct: 22.8, drop: '-40%' },
  { label: 'Configured Project', count: 1747, pct: 14, drop: '-39%' },
];

export default function FunnelsTab() {
  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <button className="btn btn-ghost btn-sm" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <GitMerge size={14} /> Main Signup Funnel
        </button>
        <button className="btn btn-ghost btn-sm"><Filter size={14} /> Filter</button>
      </div>

      <div className="card" style={{ padding: '32px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Main Signup Funnel</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Last 7 days · All users</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--accent)', letterSpacing: '-0.04em' }}>14.0%</div>
            <div style={{ color: 'var(--text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Overall Conversion</div>
          </div>
        </div>

        <div>
          {funnelSteps.map((step, idx) => (
            <div key={step.label} className="funnel-step">
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--bg-3)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', flexShrink: 0 }}>
                {idx + 1}
              </div>
              <div style={{ width: 180, flexShrink: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{step.label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{step.count.toLocaleString()} users</div>
              </div>
              <div className="funnel-bar-wrap">
                <div className="funnel-bar-fill" style={{ width: `${step.pct}%` }}>
                  {step.pct >= 10 ? `${step.pct}%` : ''}
                </div>
              </div>
              <div className="funnel-meta">
                {step.drop ? (
                  <>
                    <div className="funnel-drop">{step.drop}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>drop off</div>
                  </>
                ) : (
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>100%</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
