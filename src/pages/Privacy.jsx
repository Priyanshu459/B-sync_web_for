import { ShieldCheck } from 'lucide-react';
import './Privacy.css';

function Privacy() {
  return (
    <div className="page-container animate-fade-in">
      <div className="container">
        <div className="privacy-header">
          <div className="privacy-icon">
            <ShieldCheck size={48} />
          </div>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">Your data is yours. We believe in complete transparency.</p>
          <div className="last-updated">Last Updated: June 10, 2026</div>
        </div>

        <div className="privacy-content glass-panel">
          <section className="privacy-section">
            <h2>1. Our Philosophy</h2>
            <p>
              At B-Sync, we believe that privacy is a fundamental human right. Our browser is built from the ground up to protect your data, not harvest it. We do not track your browsing history, we do not profile your behavior, and we do not sell your information to advertisers.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Data Collection & Usage</h2>
            <p>
              The B-Sync browser operates entirely locally on your device unless you explicitly opt-in to our synchronization service (Bodhi Sync). 
            </p>
            <ul>
              <li><strong>Browsing Data:</strong> Your history, bookmarks, and local settings are stored locally on your machine.</li>
              <li><strong>Password Vault:</strong> Passwords are encrypted locally using AES-256 before being saved.</li>
              <li><strong>Telemetry:</strong> We collect <em>zero</em> telemetry data. No crash reports or usage statistics are sent to our servers.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Bodhi Sync Service</h2>
            <p>
              If you use Bodhi Sync to synchronize your data across devices, your data is securely transmitted to our cloud infrastructure. 
            </p>
            <p>
              All synchronization data (including your password vault) is end-to-end encrypted. We cannot read your data, nor can anyone else who might intercept it. The decryption key never leaves your device.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Third-Party Integrations</h2>
            <p>
              B-Sync includes built-in integrations like Ghostery for ad and tracker blocking. These services run locally within your browser and do not report your browsing activity to third parties. When you switch search engines, you are subject to the privacy policy of the respective search provider (e.g., DuckDuckGo, Google, Bing).
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our practices, please contact us at <a href="mailto:privacy@bodhisync.com" className="text-link">privacy@bodhisync.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
