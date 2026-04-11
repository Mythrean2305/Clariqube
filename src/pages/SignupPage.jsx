import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Box, Globe } from 'lucide-react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="auth-layout">
      <div className="auth-card animate-fade-up">
        <div className="auth-logo">
          Clair<span>qube</span>
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 6 }}>
          Create your account
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 32 }}>
          Start understanding your users in 2 minutes.
        </p>

        {/* Social logins */}
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
            <label className="form-label" htmlFor="signup-email">Email address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={15} style={{
                position: 'absolute', left: 14, top: '50%',
                transform: 'translateY(-50%)', color: 'var(--text-muted)'
              }} />
              <input
                id="signup-email"
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
          <div className="form-group" style={{ marginBottom: 24 }}>
            <label className="form-label" htmlFor="signup-password">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={15} style={{
                position: 'absolute', left: 14, top: '50%',
                transform: 'translateY(-50%)', color: 'var(--text-muted)'
              }} />
              <input
                id="signup-password"
                type="password"
                placeholder="Min. 8 characters"
                className="form-input"
                style={{ paddingLeft: 38 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px' }}>
            Create account <ArrowRight size={16} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--text-muted)' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--accent)', fontWeight: 600 }}>Log in</Link>
        </p>
        <p style={{ textAlign: 'center', marginTop: 12, fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.6 }}>
          By creating an account you agree to our{' '}
          <a href="#" style={{ color: 'var(--text-secondary)' }}>Terms</a> &{' '}
          <a href="#" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
