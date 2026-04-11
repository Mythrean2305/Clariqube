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

export default function OverviewTab() {
  return (
    <div className="animate-fade-in">
      {/* KPIs */}
      <div className="kpi-grid" style={{ marginBottom: 24 }}>
        {[
          { label: 'Visitors', value: '12,481', delta: '+18%' },
          { label: 'Visits', value: '15,203', delta: '+21%' },
          { label: 'Pageviews', value: '48,302', delta: '+24%' },
          { label: 'Bounce Rate', value: '34.2%', delta: '-6%' },
        ].map((k) => (
          <div className="kpi-card" key={k.label}>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-delta">{k.delta}</div>
          </div>
        ))}
      </div>

      {/* Main Chart */}
      <div className="card" style={{ padding: '24px 24px 16px', marginBottom: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>
          Visitors Over Time
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="accentGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ccff00" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ccff00" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="day" stroke="transparent" tick={{ fill: '#888', fontSize: 12 }} dy={10} />
            <YAxis stroke="transparent" tick={{ fill: '#888', fontSize: 12 }} />
            <Tooltip content={<Tip />} />
            <Area type="monotone" dataKey="visitors" stroke="#ccff00" strokeWidth={2} fill="url(#accentGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Breakdowns */}
      <div className="panel-grid">
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>Top Pages</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr><th>Page</th><th>Visitors</th></tr>
            </thead>
            <tbody>
              <tr><td>/home</td><td>4,820</td></tr>
              <tr><td>/pricing</td><td>2,310</td></tr>
              <tr><td>/docs</td><td>1,890</td></tr>
              <tr><td>/sign-up</td><td>1,204</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>Top Referrers</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr><th>Source</th><th>Visitors</th></tr>
            </thead>
            <tbody>
              <tr><td>google.com</td><td>5,230</td></tr>
              <tr><td>Direct</td><td>3,120</td></tr>
              <tr><td>twitter.com</td><td>1,450</td></tr>
              <tr><td>ycombinator.com</td><td>890</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
