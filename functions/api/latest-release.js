export async function onRequest(context) {
  try {
    const response = await fetch("https://api.github.com/repos/Priyanshu459/B-sync-Bodhi-Sync-/releases/latest", {
      headers: {
        "User-Agent": "Bodhi-Sync-Website",
        "Accept": "application/vnd.github.v3+json"
      }
    });
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch from GitHub" }), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
