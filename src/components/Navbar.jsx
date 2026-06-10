import { Link, useLocation } from 'react-router-dom';
import { Download, CheckCircle, Loader2 } from 'lucide-react';
import useSystemDetection from '../hooks/useSystemDetection';
import useGithubRelease from '../hooks/useGithubRelease';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const { os, isBodhiSync } = useSystemDetection();
  const { downloadLatestRelease, isDownloading } = useGithubRelease();

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
            <button 
              className="nav-button" 
              onClick={() => downloadLatestRelease(os)}
              disabled={isDownloading}
              style={{ border: 'none', cursor: isDownloading ? 'wait' : 'pointer' }}
            >
              {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
              <span>{isDownloading ? 'Fetching...' : `Download ${os !== 'Unknown' ? `for ${os}` : ''}`}</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
