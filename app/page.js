import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: 24, lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 36, marginBottom: 12 }}>AI Rhyme-to-YouTube Agent</h1>
      <p style={{ marginBottom: 16 }}>
        End-to-end n8n automation using free tools: generate rhyme-based lyric ideas, save to Google Sheets, synthesize voiceover, render a video, upload to YouTube, and keep a complete log.
      </p>
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <Link href="/steps" style={{ padding: '10px 14px', background: '#111', color: '#fff', borderRadius: 8, textDecoration: 'none' }}>
          Implementation Steps
        </Link>
        <Link href="/workflows" style={{ padding: '10px 14px', background: '#eee', borderRadius: 8, textDecoration: 'none' }}>
          Download n8n Workflows
        </Link>
      </div>

      <section>
        <h2 style={{ fontSize: 24, marginBottom: 8 }}>Pipeline Overview</h2>
        <ol style={{ paddingLeft: 20 }}>
          <li>Trigger via schedule or webhook</li>
          <li>Generate rhyme ideas from keyword(s) using free APIs and logic</li>
          <li>Append ideas and metadata to Google Sheets</li>
          <li>Generate TTS voiceover via free API</li>
          <li>Assemble a video via cloud video API (free tier)</li>
          <li>Upload to YouTube (title, description, tags, thumbnail)</li>
          <li>Write final log (URLs, IDs, status) to Google Sheets</li>
        </ol>
      </section>
    </main>
  );
}

