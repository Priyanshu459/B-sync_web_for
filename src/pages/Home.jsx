import { Download, Shield, Cloud, Layout, Zap, Lock, Command, Video, CheckCircle, Loader2 } from 'lucide-react';
import useSystemDetection from '../hooks/useSystemDetection';
import useGithubRelease from '../hooks/useGithubRelease';
import './Home.css';

function Home() {
  const { os, isBodhiSync } = useSystemDetection();
  const { downloadLatestRelease, isDownloading } = useGithubRelease();

  return (
    <div className="home-page animate-fade-in">
      {/* Background Animations */}
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <div className="container">

        {/* Hero Header */}
        <header className="hero-header delay-100 animate-fade-in">
          <div className="hero-meta mono-text">B-SYNC // THE NEW STANDARD</div>
          <h1 className="hero-title">
            Bodhi Sync Browser 
            <span style={{ fontSize: '0.4em', verticalAlign: 'middle', background: 'var(--primary-glow)', padding: '4px 12px', borderRadius: '12px', color: '#000', marginLeft: '12px', fontWeight: 'bold' }}>v1.1.4</span>
          </h1>
          <p className="hero-subtitle">
            A clean, customizable, and sync-capable browsing experience completely free from clutter, trackers, and walled gardens.
          </p>

          <div className="search-bar-mockup">
            <Command size={18} className="search-icon" />
            <span>{isBodhiSync ? 'You are using Bodhi-Sync Browser!' : `Download B-Sync for ${os !== 'Unknown' ? os : 'PC'}`}</span>
            {isBodhiSync ? (
              <button className="btn-download" style={{ backgroundColor: '#10b981', color: 'white', borderColor: '#10b981', cursor: 'default' }}>
                <CheckCircle size={14} style={{ marginRight: '4px' }} /> Installed
              </button>
            ) : (
              <button
                className="btn-download"
                onClick={() => downloadLatestRelease(os)}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <><Loader2 size={14} className="animate-spin" style={{ marginRight: '4px' }} /> Fetching...</>
                ) : (
                  <><Download size={14} style={{ marginRight: '4px' }} /> Download</>
                )}
              </button>
            )}
          </div>
        </header>

        {/* Bento Grid Features */}
        <section className="bento-grid delay-200 animate-fade-in">

          <div className="bento-card glass-panel bento-large">
            <div className="card-header">
              <span className="mono-text">CORE // SYNC</span>
              <div className="status-dot green"></div>
            </div>
            <div className="card-content">
              <div className="feature-icon-wrapper">
                <Cloud size={24} />
              </div>
              <h3>Bodhi Sync</h3>
              <p className="text-muted">Push and pull your data securely to the cloud. Access your secure password vault from any device with end-to-end encryption.</p>
            </div>
          </div>

          <div className="bento-card glass-panel">
            <div className="card-header">
              <span className="mono-text">SECURITY</span>
            </div>
            <div className="card-content">
              <div className="feature-icon-wrapper">
                <Shield size={24} />
              </div>
              <h3>Built-in AdBlock</h3>
              <p className="text-muted">Native AdBlock and Ghostery integrations to keep trackers away.</p>
            </div>
          </div>

          <div className="bento-card glass-panel">
            <div className="card-header">
              <span className="mono-text">VAULT</span>
            </div>
            <div className="card-content">
              <div className="feature-icon-wrapper">
                <Lock size={24} />
              </div>
              <h3>Secure Vault</h3>
              <p className="text-muted">Credentials stay safe in a built-in password manager.</p>
            </div>
          </div>

          <div className="bento-card glass-panel">
            <div className="card-header">
              <span className="mono-text">PERFORMANCE</span>
              <div className="status-dot blue"></div>
            </div>
            <div className="card-content">
              <div className="feature-icon-wrapper">
                <Zap size={24} />
              </div>
              <h3>Lightweight & Fast</h3>
              <p className="text-muted">Optimized Electron architecture for low memory consumption.</p>
            </div>
          </div>

          <div className="bento-card glass-panel">
            <div className="card-header">
              <span className="mono-text">CUSTOMIZATION</span>
            </div>
            <div className="card-content">
              <div className="feature-icon-wrapper">
                <Layout size={24} />
              </div>
              <h3>Multi-Engine Support</h3>
              <p className="text-muted">Seamlessly switch engines to suit your workflow. Total control.</p>
            </div>
          </div>

          <div className="bento-card glass-panel">
            <div className="card-header">
              <span className="mono-text">CAPTURE</span>
              <div className="status-dot green"></div>
            </div>
            <div className="card-content">
              <div className="feature-icon-wrapper">
                <Video size={24} />
              </div>
              <h3>Record Browser</h3>
              <p className="text-muted">Natively record your browser sessions. Built specifically to capture only the browser window without exposing your entire screen.</p>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}

export default Home;
