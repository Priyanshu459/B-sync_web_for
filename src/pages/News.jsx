import { Calendar, Tag } from 'lucide-react';
import './News.css';

function News() {
  const updates = [
    {
      version: '1.1.3',
      date: 'Latest Release',
      title: 'Performance & Stability Update',
      changes: [
        'Improved Bodhi Sync background synchronization speed.',
        'Fixed an issue with the password vault auto-fill on certain sites.',
        'Updated AdBlock engine for better tracker mitigation.',
        'UI tweaks to the new tab page.'
      ]
    },
    {
      version: '1.1.0',
      date: 'Last Month',
      title: 'The Bodhi Sync Update',
      changes: [
        'Introduced Bodhi Sync! Now you can push and pull your browser data to the cloud securely.',
        'Added end-to-end encryption for the built-in password vault.',
        'New dark mode refinements and glassmorphism UI elements.',
        'Multi-engine support enhancements.'
      ]
    },
    {
      version: '1.0.0',
      date: 'Initial Release',
      title: 'Welcome to B-Sync',
      changes: [
        'Initial launch of the B-Sync browser.',
        'Core architecture based on Electron.',
        'Native ad-blocking built-in.',
        'Focus on privacy and customization.'
      ]
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Release Notes & <span className="gradient-text">News</span></h1>
          <p className="page-subtitle">Stay up to date with the latest features, fixes, and improvements in B-Sync.</p>
        </div>

        <div className="timeline">
          {updates.map((update, index) => (
            <div className={`timeline-item delay-${(index + 1) * 100} animate-fade-in`} key={update.version}>
              <div className="timeline-marker"></div>
              <div className="timeline-content glass-panel">
                <div className="update-meta">
                  <span className="update-version"><Tag size={14} /> v{update.version}</span>
                  <span className="update-date"><Calendar size={14} /> {update.date}</span>
                </div>
                <h3 className="update-title">{update.title}</h3>
                <ul className="update-changes">
                  {update.changes.map((change, i) => (
                    <li key={i}>{change}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
