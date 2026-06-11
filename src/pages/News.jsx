import { Calendar, Tag } from 'lucide-react';
import './News.css';

function News() {
  const updates = [
    {
      version: '1.1.5',
      date: 'Latest Release',
      title: 'What\'s New in v1.1.5',
      description: 'We\'ve completely overhauled the multitasking experience and supercharged the browser\'s backend for an incredibly fast, secure, and lightweight browsing session.',
      sections: [
        {
          title: '🪟 Native Split-Screen & Grid Multitasking',
          description: 'Stop managing messy overlapping windows. With version 1.1.5, Bodhi Sync introduces Native Split-Screen, allowing you to seamlessly divide a single tab into multiple resizable panes.',
          items: [
            <><strong>Fluid Resizing:</strong> We built a custom Pointer Capture engine so dragging the pane dividers feels incredibly responsive and perfectly native—no stuck cursors.</>,
            <><strong>Sidebar Integration:</strong> Your split panes now show up as organized sub-items in your Sidebar. You can easily drag-and-drop to reposition them, or close individual panes with a single click.</>
          ]
        },
        {
          title: '⚡ Blazing Fast Performance',
          items: [
            <><strong>V8 Bytecode Caching:</strong> We’ve enabled aggressive caching rules in the Chromium engine. The browser now caches JavaScript bytecode on your very first visit to a site, making subsequent loads near-instant.</>,
            <><strong>GPU Acceleration:</strong> We forced hardware GPU rasterization and zero-copy rendering, offloading complex visual tasks to your graphics card. Scrolling through heavy, media-rich websites is now buttery smooth.</>,
            <><strong>Seamless Launch:</strong> We completely eliminated the jarring "white flash" that occurs when opening the browser. The UI now boots silently in the background and only presents itself when fully ready.</>
          ]
        },
        {
          title: '🛡️ Enterprise-Grade Security',
          description: "Your privacy is our priority. We've locked down the browser shell to mitigate zero-day exploits.",
          items: [
            <><strong>Strict Sandboxing:</strong> All web content now runs within a strict, OS-level sandbox. Even if a site contains malicious code, it is physically impossible for it to reach your local files or system.</>,
            <><strong>Privacy Prompts:</strong> We implemented a native permission handler. Whenever a site requests access to your Camera, Microphone, Location, or Notifications, you will be prompted with a secure, native popup asking for your explicit consent.</>,
            <><strong>Anti-Hijack Protection:</strong> The main browser interface is now locked against navigation hijacking (e.g., accidentally dragging and dropping a malicious file onto the URL bar).</>
          ]
        },
        {
          title: '🗜️ Dramatically Reduced Download Size',
          description: 'We heard your feedback about the installer size!',
          items: [
            <>By dropping legacy 32-bit (<code>ia32</code>) support, removing redundant backend files from the packaged build, and applying maximum build compression, we have <strong>reduced the installer size by over 60%</strong> (bringing it below 200MB, down from ~560MB).</>
          ]
        }
      ]
    },
    {
      version: '1.1.3',
      date: 'Previous Release',
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
                {update.description && <p className="update-description">{update.description}</p>}
                
                {update.sections ? (
                  <div className="update-sections">
                    {update.sections.map((section, idx) => (
                      <div key={idx} className="update-section">
                        <h4>{section.title}</h4>
                        {section.description && <p className="update-section-desc">{section.description}</p>}
                        {section.items && (
                          <ul className="update-changes">
                            {section.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="update-changes">
                    {update.changes.map((change, i) => (
                      <li key={i}>{change}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
