import Link from 'next/link';

export const metadata = {
  title: 'Workflows | AI Rhyme-to-YouTube',
};

export default function Workflows() {
  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: 24, lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Download n8n Workflows</h1>
      <p style={{ marginBottom: 16 }}>
        Import these into n8n (Workflows ? Import from File). After import, open the workflow and set credentials.
      </p>
      <ul>
        <li style={{ marginBottom: 8 }}>
          <Link href="/workflows/n8n-rhyme-to-youtube.json" target="_blank">
            n8n-rhyme-to-youtube.json
          </Link>
        </li>
      </ul>
      <p style={{ marginTop: 16 }}>
        See <Link href="/steps">Implementation Steps</Link> for required credentials and environment variables.
      </p>
    </main>
  );
}

