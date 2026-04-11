import { LogOut } from 'lucide-react';

const activity = [
  { time: 'Just now', user: 'Anon 182', action: 'clicked Start free trial on /pricing', loc: 'Berlin, DE' },
  { time: '12s ago', user: 'Anon 144', action: 'viewed /docs/api-reference', loc: 'San Francisco, US' },
  { time: '41s ago', user: 'Anon 092', action: 'viewed /about', loc: 'Tokyo, JP' },
  { time: '1m ago', user: 'Anon 331', action: 'signed up', loc: 'London, UK' },
  { time: '1m 15s ago', user: 'Anon 211', action: 'added item to cart', loc: 'Sydney, AU' },
];

export default function RealtimeTab() {
  return (
    <div className="animate-fade-in panel-grid">
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span className="live-dot" />
          <span style={{ fontSize: 13, fontWeight: 700, color: '#4dff91', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Right now</span>
        </div>
        <div className="live-count">24</div>
        <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 8 }}>active users on site</div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>Live Activity</h3>
        </div>
        <div style={{ padding: '0 20px', flex: 1, overflowY: 'auto' }}>
          <div className="activity-feed">
            {activity.map((a, i) => (
              <div className="activity-item" key={i}>
                <div style={{ width: 60, fontSize: 11, color: 'var(--text-muted)' }}>{a.time}</div>
                <div className="activity-dot" style={{ opacity: i === 0 ? 1 : 0.3, animation: i === 0 ? 'pulse-dot 2s ease-in-out infinite' : 'none' }} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{a.user}</span>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{a.action}</span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{a.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
