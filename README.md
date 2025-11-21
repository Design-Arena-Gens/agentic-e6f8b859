## AI Rhyme-to-YouTube Agent (n8n + Free APIs)

This repository contains a Next.js site that documents and ships an importable n8n workflow to:
- Generate rhyme-based lyric ideas
- Log to Google Sheets
- Create TTS audio
- Render a simple video in the cloud
- Upload to YouTube
- Save a final log row

### Quickstart
1. Install:
   ```bash
   npm install
   npm run build
   npm start
   ```
   Visit http://localhost:3000

2. Open Implementation Steps on the site or read `docs/IMPLEMENTATION.md`.
3. Download the workflow from the site (Workflows page) or `public/workflows/n8n-rhyme-to-youtube.json`.

### Tech
- Next.js (App Router)
- n8n workflow JSON
- Free services: RhymeBrain, VoiceRSS, Shotstack, Google Sheets, YouTube Data API

### Deploy
This app is ready for Vercel. After building locally:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-e6f8b859
```

Production URL target: `https://agentic-e6f8b859.vercel.app`