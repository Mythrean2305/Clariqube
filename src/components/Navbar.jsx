import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const isLanding = location.pathname === '/';

  return (
    <nav className="navbar" style={{ background: scrolled ? 'rgba(8,8,10,0.92)' : 'rgba(8,8,10,0.4)' }}>
      <Link to="/" className="navbar-brand">
        Clari<span>qube</span>
      </Link>

      {isLanding && (
        <ul className="navbar-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#demo">Demo</a></li>
        </ul>
      )}

      <div className="navbar-actions">
        <Link to="/login" className="btn btn-ghost btn-sm">Log in</Link>
        <Link to="/signup" className="btn btn-primary btn-sm">Get started</Link>
      </div>
    </nav>
  );
}
