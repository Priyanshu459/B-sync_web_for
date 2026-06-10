import { useState, useEffect } from 'react';

export default function useSystemDetection() {
  const [os, setOs] = useState('Unknown');
  const [isBodhiSync, setIsBodhiSync] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    
    // Detect OS
    if (userAgent.indexOf('Win') !== -1) setOs('Windows');
    else if (userAgent.indexOf('Mac') !== -1) setOs('MacOS');
    else if (userAgent.indexOf('Linux') !== -1) setOs('Linux');
    else if (userAgent.indexOf('Android') !== -1) setOs('Android');
    else if (userAgent.indexOf('like Mac') !== -1) setOs('iOS');

    // Detect Bodhi-Sync (We will inject a custom user agent string or window property in the app)
    // For now, we will detect if the user agent contains BodhiSync OR if a custom window variable exists
    if (userAgent.toLowerCase().includes('bodhi-sync') || window.isBodhiSync) {
      setIsBodhiSync(true);
    }
  }, []);

  return { os, isBodhiSync };
}
