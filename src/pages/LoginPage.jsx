import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Box, Globe } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard/demo');
  };

  return (
    <div className="auth-layout">
      <div className="auth-card animate-fade-up">
        <div className="auth-logo">
          Clair<span>qube</span>
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 6 }}>
          Welcome back
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 32 }}>
          Your analytics are waiting for you.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 4 }}>
          <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
            <Box size={16} /> Continue with GitHub
          </button>
          <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
            <Globe size={16} /> Continue with Google
          </button>
        </div>

        <div className="social-divider">or continue with email</div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="login-email">Email address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={15} style={{
                position: 'absolute', left: 14, top: '50%',
                transform: 'translateY(-50%)', color: 'var(--text-muted)'
              }} />
              <input
                id="login-email"
                type="email"
                placeholder="you@company.com"
                className="form-input"
                style={{ paddingLeft: 38 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label className="form-label" htmlFor="login-password" style={{ margin: 0 }}>Password</label>
              <a href="#" style={{ fontSize: 12, color: 'var(--accent)' }}>Forgot password?</a>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={15} style={{
                position: 'absolute', left: 14, top: '50%',
                transform: 'translateY(-50%)', color: 'var(--text-muted)'
              }} />
              <input
                id="login-password"
                type="password"
                placeholder="Your password"
                className="form-input"
                style={{ paddingLeft: 38 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px', marginTop: 16 }}>
            Log in <ArrowRight size={16} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--text-muted)' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: 'var(--accent)', fontWeight: 600 }}>Sign up free</Link>
        </p>
      </div>
    </div>
  );
}
