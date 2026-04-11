import { Clock, MousePointer2, Monitor, MapPin } from 'lucide-react';

const sessions = [
  { id: '1', loc: 'San Francisco, US', dev: 'Mac / Chrome', time: '2m ago', dur: '4m 12s', pages: 5, active: true },
  { id: '2', loc: 'London, UK', dev: 'Windows / Edge', time: '14m ago', dur: '1m 02s', pages: 1, active: false },
  { id: '3', loc: 'Berlin, DE', dev: 'iOS / Safari', time: '1h ago', dur: '12m 40s', pages: 12, active: false },
  { id: '4', loc: 'Tokyo, JP', dev: 'Android / Chrome', time: '3h ago', dur: '0m 10s', pages: 1, active: false },
  { id: '5', loc: 'Sydney, AU', dev: 'Mac / Arc', time: '4h ago', dur: '8m 22s', pages: 8, active: false },
];

export default function SessionsTab() {
  return (
    <div className="animate-fade-in">
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Location</th>
              <th>Device</th>
              <th>Duration</th>
              <th>Events</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <tr key={s.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: 'var(--bg-3)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <MousePointer2 size={12} color="var(--text-muted)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 13 }}>Anon {s.id}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s.time}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                    <MapPin size={12} color="var(--text-muted)" /> {s.loc}
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                    <Monitor size={12} color="var(--text-muted)" /> {s.dev}
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                    <Clock size={12} color="var(--text-muted)" /> {s.dur}
                  </div>
                </td>
                <td>{s.pages} pages</td>
                <td style={{ textAlign: 'right' }}>
                  <button className="btn btn-ghost btn-sm" style={{ padding: '6px 12px' }}>View replay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
