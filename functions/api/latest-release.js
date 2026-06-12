export async function onRequest(context) {
  try {
    const response = await fetch("https://api.github.com/repos/Priyanshu459/B-sync-Bodhi-Sync-/releases", {
      headers: {
        "User-Agent": "Bodhi-Sync-Website",
        "Accept": "application/vnd.github.v3+json"
      }
    });
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch from GitHub" }), {
        status: response.status,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    const data = await response.json();
    
    // Find the latest release that actually has assets
    const releaseWithAssets = data.find(release => release.assets && release.assets.length > 0);

    if (!releaseWithAssets) {
      return new Response(JSON.stringify({ error: "No releases with assets found" }), {
        status: 404,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
    
    return new Response(JSON.stringify(releaseWithAssets), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
