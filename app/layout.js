import './globals.css';

export const metadata = {
  title: 'AI Rhyme-to-YouTube Agent (n8n)',
  description: 'Automated pipeline: generate rhymes, synthesize audio, render video, upload to YouTube, and log to Sheets ? using n8n and free APIs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

