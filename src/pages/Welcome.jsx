import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle } from 'lucide-react';

function Welcome() {
  return (
    <div className="home-page animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ marginBottom: '2rem' }}>
          <Sparkles size={48} color="#10b981" />
        </div>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Bodhi-Sync!</h1>
        <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Your installation was successful. You are now ready to experience a cleaner, faster, and more secure web.
        </p>
        
        <div className="bento-grid" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <div className="bento-card glass-panel">
            <div className="card-header">
              <span className="mono-text">STEP 1 // SYNC ACCOUNT</span>
            </div>
            <div className="card-content">
              <h3>Create your Sync Account</h3>
              <p className="text-muted">Open the Bodhi-Sync app settings and create an account to securely encrypt and sync your bookmarks and history.</p>
            </div>
          </div>

          <div className="bento-card glass-panel">
            <div className="card-header">
              <span className="mono-text">STEP 2 // DEFAULT BROWSER</span>
            </div>
            <div className="card-content">
              <h3>Set as Default</h3>
              <p className="text-muted">Make Bodhi-Sync your default browser in your OS settings to open links smoothly.</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <a href="bodhisync://home" className="btn-download" style={{ backgroundColor: '#10b981', color: '#fff', borderColor: '#10b981' }}>
            <CheckCircle size={18} style={{ marginRight: '8px' }} /> Launch Bodhi-Sync
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
