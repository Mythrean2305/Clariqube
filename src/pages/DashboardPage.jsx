import { useState, useEffect } from 'react';
import { Link as RLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, MousePointer, Users, Activity, GitMerge,
  Globe, ChevronDown, Plus, Settings, LogOut, Bell
} from 'lucide-react';
import OverviewTab from './tabs/OverviewTab';
import EventsTab from './tabs/EventsTab';
import SessionsTab from './tabs/SessionsTab';
import RealtimeTab from './tabs/RealtimeTab';
import FunnelsTab from './tabs/FunnelsTab';

const TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'events', label: 'Events', icon: MousePointer },
  { id: 'sessions', label: 'Sessions', icon: Users },
  { id: 'realtime', label: 'Realtime', icon: Activity },
  { id: 'funnels', label: 'Funnels', icon: GitMerge },
];

const NAV_EXTRA = [
  { label: 'Websites', icon: Globe },
  { label: 'Settings', icon: Settings },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const renderTab = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />;
      case 'events': return <EventsTab />;
      case 'sessions': return <SessionsTab />;
      case 'realtime': return <RealtimeTab />;
      case 'funnels': return <FunnelsTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          Clair<span>qube</span>
        </div>

        {/* Website selector */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 12px', marginBottom: 8,
          background: 'var(--bg-card)', borderRadius: 8, border: '1px solid var(--border)',
          cursor: 'pointer', fontSize: 13
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Globe size={13} color="var(--text-muted)" />
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>myapp.com</span>
          </div>
          <ChevronDown size={13} color="var(--text-muted)" />
        </div>

        <div className="sidebar-section-label">Analytics</div>

        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              id={`tab-nav-${tab.id}`}
              className={`sidebar-nav-item${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={15} />
              {tab.label}
              {tab.id === 'realtime' && (
                <span style={{
                  marginLeft: 'auto', width: 6, height: 6,
                  background: '#4dff91', borderRadius: '50%',
                  animation: 'pulse-dot 1.5s ease-in-out infinite'
                }} />
              )}
            </button>
          );
        })}

        <div className="sidebar-section-label">Workspace</div>
        {NAV_EXTRA.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} className="sidebar-nav-item">
              <Icon size={15} />
              {item.label}
            </button>
          );
        })}

        {/* Bottom user section */}
        <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 12px', borderRadius: 8, cursor: 'pointer'
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%',
              background: 'var(--accent)', color: '#0a0a0a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 13, flexShrink: 0
            }}>H</div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, truncate: true }}>harkreesh@me.com</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Free plan</div>
            </div>
            <LogOut size={13} color="var(--text-muted)" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top bar */}
        <div className="dash-header">
          <div>
            <div className="dash-title">
              {TABS.find(t => t.id === activeTab)?.label}
            </div>
            <div className="dash-subtitle">myapp.com · Last 7 days</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Date range */}
            <button className="btn btn-ghost btn-sm" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              Last 7 days <ChevronDown size={13} />
            </button>
            <button className="btn btn-ghost btn-sm">
              <Bell size={14} />
            </button>
            <button className="btn btn-primary btn-sm">
              <Plus size={14} /> Add funnel
            </button>
          </div>
        </div>

        {/* Tab page */}
        {renderTab()}
      </main>
    </div>
  );
}
