import { Plus, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { day: 'Mon', 'Sign Up': 120, 'Add to Cart': 340, 'Purchase': 45 },
  { day: 'Tue', 'Sign Up': 150, 'Add to Cart': 400, 'Purchase': 60 },
  { day: 'Wed', 'Sign Up': 180, 'Add to Cart': 380, 'Purchase': 55 },
  { day: 'Thu', 'Sign Up': 210, 'Add to Cart': 420, 'Purchase': 70 },
  { day: 'Fri', 'Sign Up': 170, 'Add to Cart': 450, 'Purchase': 85 },
];

export default function EventsTab() {
  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <button className="btn btn-ghost btn-sm"><Filter size={14} /> Filter events</button>
        <div style={{ flex: 1 }} />
      </div>

      <div className="card" style={{ padding: '24px 24px 16px', marginBottom: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>
          Top Events Over Time
        </h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="day" stroke="transparent" tick={{ fill: '#888', fontSize: 12 }} dy={10} />
            <YAxis stroke="transparent" tick={{ fill: '#888', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: 8 }}
              itemStyle={{ fontSize: 13 }}
            />
            <Bar dataKey="Sign Up" stackId="a" fill="var(--accent)" radius={[0,0,0,0]} />
            <Bar dataKey="Add to Cart" stackId="a" fill="#88bb00" radius={[0,0,0,0]} />
            <Bar dataKey="Purchase" stackId="a" fill="#4dff91" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Total Count</th>
              <th>Unique Users</th>
              <th>Trend (7d)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>Page View</td>
              <td>48,302</td>
              <td>12,481</td>
              <td style={{ color: 'var(--accent)' }}>+24%</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Sign Up</td>
              <td>830</td>
              <td>830</td>
              <td style={{ color: 'var(--accent)' }}>+12%</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Add to Cart</td>
              <td>1,990</td>
              <td>1,420</td>
              <td style={{ color: '#ff6060' }}>-3%</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Purchase</td>
              <td>315</td>
              <td>290</td>
              <td style={{ color: 'var(--accent)' }}>+8%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
