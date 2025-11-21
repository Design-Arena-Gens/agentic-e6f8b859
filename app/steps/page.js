import Link from 'next/link';

export const metadata = {
  title: 'Implementation Steps | AI Rhyme-to-YouTube',
};

export default function Steps() {
  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: 24, lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Implementation Steps (Free Tools)</h1>
      <p style={{ marginBottom: 16 }}>
        This guide shows how to set up the n8n workflow end-to-end using free APIs and services.
      </p>

      <ol style={{ paddingLeft: 20 }}>
        <li style={{ marginBottom: 12 }}>
          <strong>Spin up n8n</strong>
          <ul>
            <li>Use n8n Cloud (trial) or self-host via Docker: <code>docker run -it --rm -p 5678:5678 n8nio/n8n</code></li>
            <li>Create credentials for Google (Sheets + YouTube) using OAuth2.</li>
          </ul>
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>Get free API keys</strong>
          <ul>
            <li>VoiceRSS TTS: create a free account and get an API key.</li>
            <li>Shotstack (video): create a free developer account and API key.</li>
            <li>(Optional) Freesound: free API key for background music search with CC0/CC-BY.</li>
          </ul>
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>Import the workflow JSON</strong>
          <ul>
            <li>Go to n8n ? Workflows ? Import from File.</li>
            <li>Use the downloadable workflow on the next page.</li>
          </ul>
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>Configure credentials and environment variables</strong>
          <ul>
            <li>Set Google credentials for Sheets and YouTube nodes.</li>
            <li>Add <code>VOICERSS_API_KEY</code> and <code>SHOTSTACK_API_KEY</code> to n8n (Environment Variables or Credentials).</li>
          </ul>
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>Create your Google Sheet</strong>
          <ul>
            <li>Headers: <code>timestamp</code>, <code>topic</code>, <code>rhyme_ideas</code>, <code>tts_url</code>, <code>video_url</code>, <code>youtube_video_id</code>, <code>status</code></li>
            <li>Paste its Spreadsheet ID into the Google Sheets node.</li>
          </ul>
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>Run the workflow</strong>
          <ul>
            <li>Trigger via manual run, schedule, or webhook.</li>
            <li>Inspect each node?s output. Fix credentials and IDs as needed.</li>
          </ul>
        </li>
        <li style={{ marginBottom: 12 }}>
          <strong>Review results</strong>
          <ul>
            <li>Check Google Sheets for logs.</li>
            <li>Confirm YouTube video status and visibility (Public/Unlisted).</li>
          </ul>
        </li>
      </ol>

      <div style={{ marginTop: 24 }}>
        <Link href="/workflows" style={{ padding: '10px 14px', background: '#111', color: '#fff', borderRadius: 8, textDecoration: 'none' }}>
          Download n8n Workflows
        </Link>
      </div>
    </main>
  );
}

