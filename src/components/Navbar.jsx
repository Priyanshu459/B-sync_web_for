import { Link, useLocation } from 'react-router-dom';
import { Download, CheckCircle } from 'lucide-react';
import useSystemDetection from '../hooks/useSystemDetection';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const { os, isBodhiSync } = useSystemDetection();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          <span className="mono-text" style={{ fontSize: '14px', color: 'white' }}>BODHI // WEB</span>
        </Link>
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/news" className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}>News</Link>
          <Link to="/privacy" className={`nav-link ${location.pathname === '/privacy' ? 'active' : ''}`}>Privacy Policy</Link>
          {isBodhiSync ? (
            <div className="nav-button" style={{ backgroundColor: '#10b981', color: 'white', cursor: 'default', border: 'none' }}>
              <CheckCircle size={18} />
              <span>Using Bodhi-Sync</span>
            </div>
          ) : (
            <a href="#download" className="nav-button" aria-label={`Download B-Sync Browser for ${os}`}>
              <Download size={18} />
              <span>Download {os !== 'Unknown' ? `for ${os}` : ''}</span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
