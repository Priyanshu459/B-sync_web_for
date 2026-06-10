import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="mono-text" style={{ fontSize: '14px', color: 'white' }}>BODHI // SYNC</span>
          <p className="footer-tagline">A clean, customizable, and sync-capable browsing experience.</p>
        </div>
        
        <div className="footer-links-group">
          <h4>Product</h4>
          <Link to="/">Download</Link>
          <Link to="/news">Release Notes</Link>
          <a href="#features">Features</a>
        </div>
        
        <div className="footer-links-group">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <a href="#">Terms of Service</a>
        </div>
        
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://github.com/Priyanshu459" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub Profile"><Globe size={20} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Send Message"><MessageCircle size={20} /></a>
            <a href="mailto:contact@bodhisync.com" aria-label="Send Email"><Mail size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Priyanshu Patel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
