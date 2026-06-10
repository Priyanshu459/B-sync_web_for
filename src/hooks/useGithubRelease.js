import { useState } from 'react';

// Replace this with your exact GitHub username and repository name where releases are published
const GITHUB_REPO = 'Priyanshu459/B-sync-Bodhi-Sync-';

export default function useGithubRelease() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  const downloadLatestRelease = async (os) => {
    setIsDownloading(true);
    setError(null);

    try {
      // Fetch from our own Cloudflare proxy instead of GitHub directly to bypass adblockers
      const response = await fetch('/api/latest-release');
      
      if (!response.ok) {
        throw new Error('Failed to fetch release info. Have you published a release on GitHub yet?');
      }

      const data = await response.json();
      
      if (!data.assets || data.assets.length === 0) {
        throw new Error('No assets found in the latest release.');
      }

      // Find the correct asset based on the user's OS
      let targetAsset = null;

      if (os === 'Windows') {
        targetAsset = data.assets.find(asset => asset.name.endsWith('.exe'));
      } else if (os === 'MacOS') {
        targetAsset = data.assets.find(asset => asset.name.endsWith('.dmg') || asset.name.endsWith('.pkg') || asset.name.endsWith('.zip'));
      } else if (os === 'Linux') {
        targetAsset = data.assets.find(asset => asset.name.endsWith('.AppImage') || asset.name.endsWith('.deb') || asset.name.endsWith('.snap'));
      }

      // Fallback if OS is unknown or specific file wasn't found (just grab the first one)
      if (!targetAsset) {
        targetAsset = data.assets[0];
      }

      // Redirect the browser to start the download
      window.location.href = targetAsset.browser_download_url;

    } catch (err) {
      console.error('Download error:', err);
      setError(err.message);
      alert(`Download failed: ${err.message}\nPlease try again later.`);
    } finally {
      setIsDownloading(false);
    }
  };

  return { downloadLatestRelease, isDownloading, error };
}
