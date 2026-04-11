import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', visitors: 420 },
  { day: 'Tue', visitors: 680 },
  { day: 'Wed', visitors: 590 },
  { day: 'Thu', visitors: 870 },
  { day: 'Fri', visitors: 1040 },
  { day: 'Sat', visitors: 760 },
  { day: 'Sun', visitors: 920 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'var(--bg-3)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: '8px 14px',
        fontSize: 13,
      }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: 2 }}>{label}</p>
        <p style={{ color: 'var(--accent)', fontWeight: 700 }}>{payload[0].value.toLocaleString()} visitors</p>
      </div>
    );
  }
  return null;
};

export default function MiniDashboardPreview() {
  return (
    <div className="dashboard-preview" style={{ padding: '20px' }}>
      {/* Browser chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        marginBottom: 20, paddingBottom: 16,
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
        <div style={{
          flex: 1, marginLeft: 12,
          background: 'var(--bg-3)', borderRadius: 6, padding: '5px 14px',
          fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace'
        }}>
          app.clariqube.io/websites/demo
        </div>
      </div>

      {/* KPI Row */}
      <div className="kpi-grid" style={{ marginBottom: 20 }}>
        {[
          { label: 'Visitors', value: '12,481', delta: '+18%' },
          { label: 'Pageviews', value: '48,302', delta: '+24%' },
          { label: 'Bounce Rate', value: '34.2%', delta: '-6%' },
          { label: 'Avg. Session', value: '3m 14s', delta: '+12%' },
        ].map((k) => (
          <div className="kpi-card" key={k.label}>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value" style={{ fontSize: 20 }}>{k.value}</div>
            <div className="kpi-delta">{k.delta}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{
        background: 'var(--bg-3)', borderRadius: 10, border: '1px solid var(--border)',
        padding: '16px 16px 8px', marginBottom: 16
      }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Visitors this week
        </div>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="accentGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ccff00" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ccff00" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="day" stroke="transparent" tick={{ fill: '#555', fontSize: 11 }} />
            <YAxis stroke="transparent" tick={{ fill: '#555', fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#ccff00"
              strokeWidth={2}
              fill="url(#accentGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{
          background: 'var(--bg-3)', borderRadius: 8, border: '1px solid var(--border)', padding: 12
        }}>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Top Pages</div>
          {['/home', '/pricing', '/docs', '/sign-up'].map((pg, i) => (
            <div key={pg} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '6px 0', borderBottom: '1px solid var(--border)',
              fontSize: 12, color: 'var(--text-secondary)'
            }}>
              <span>{pg}</span>
              <span style={{ color: 'var(--accent)' }}>{[4820, 2310, 1890, 1204][i]}</span>
            </div>
          ))}
        </div>

        {/* Funnel mini preview */}
        <div style={{
          background: 'var(--bg-3)', borderRadius: 8, border: '1px solid var(--border)', padding: 12
        }}>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Funnel</div>
          {[
            { label: 'Visit', pct: 100 },
            { label: 'Signup', pct: 62 },
            { label: 'Activate', pct: 38 },
            { label: 'Pay', pct: 14 },
          ].map((s) => (
            <div key={s.label} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-muted)', marginBottom: 3 }}>
                <span>{s.label}</span><span>{s.pct}%</span>
              </div>
              <div style={{ height: 5, background: 'var(--bg)', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: `${s.pct}%`,
                  background: 'linear-gradient(90deg, #ccff00, #a8d400)',
                  borderRadius: 99,
                  transition: 'width 1s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
