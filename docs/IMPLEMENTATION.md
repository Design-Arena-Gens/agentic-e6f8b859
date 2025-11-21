## n8n Automated AI Agent: Rhymes ? Sheets ? Audio ? Video ? YouTube (Free Tools)

### Overview
This system orchestrates a fully automated content pipeline using n8n and free-tier APIs:
- Generate rhyme-driven lyric ideas with RhymeBrain (free)
- Log inputs/outputs to Google Sheets
- Synthesize voiceover via VoiceRSS (free API key)
- Render a simple video via Shotstack (free developer tier)
- Upload to YouTube via YouTube Data API (OAuth2)
- Finalize by appending a log entry to Google Sheets

The web app you?re viewing simply hosts documentation and a downloadable n8n workflow JSON you can import.

### Prerequisites
- n8n (self-host via Docker or n8n Cloud)
- Google account with:
  - Google Sheets API (OAuth2)
  - YouTube Data API v3 (OAuth2)
- Free API keys:
  - VoiceRSS TTS: `https://www.voicerss.org/`
  - Shotstack: `https://shotstack.io/`
  - (Optional) Freesound: `https://freesound.org/docs/api/`

### Google Setup
1. Create a Google Cloud project and enable:
   - Google Sheets API
   - YouTube Data API v3
2. Configure OAuth consent screen and create OAuth client credentials.
3. In n8n, create credentials:
   - `Google Sheets OAuth2 API`
   - `YouTube OAuth2 API`

### n8n Environment Variables
In your n8n environment (UI or Docker env), set:
- `VOICERSS_API_KEY=<your-voicerss-key>`
- `SHOTSTACK_API_KEY=<your-shotstack-key>`

### Google Sheets
Create a spreadsheet with headers in `Sheet1`:
`timestamp | topic | rhyme_ideas | tts_url | video_url | youtube_video_id | status`

Copy the Spreadsheet ID and paste it into the two Google Sheets nodes in the workflow.

### Import the Workflow
1. Download `n8n-rhyme-to-youtube.json` from the site?s Workflows page or from `public/workflows/`.
2. In n8n: Workflows ? Import from File ? select the JSON.
3. Open the workflow and set:
   - Google Sheets credential
   - YouTube credential
   - Confirm environment variables exist
   - Optionally change the default `topic` in ?Set Topic?.

### How It Works (Node-by-Node)
1. Webhook Trigger
   - Trigger via POST to `/rhyme-to-youtube` or manually.
2. Set Topic
   - Seed a topic, e.g., ?summer vibes?. You can map it from the webhook body for dynamic topics.
3. Get Rhymes (RhymeBrain)
   - Fetches rhymes for the first word in the topic.
4. Assemble Lyric Script
   - Turns high-score rhymes into simple couplets and a readable narration script.
5. Log Start (Google Sheets)
   - Appends a STARTED log row with topic and rhymes.
6. TTS (VoiceRSS)
   - Generates an MP3 narration from the script. Uses `VOICERSS_API_KEY`.
7. Prepare Audio
   - Sets MP3 filename metadata.
8. Create Video (Shotstack)
   - Posts a render request to Shotstack. Uses a CC0 music fallback from Pixabay. You can replace with your own.
9. Extract Render ID
   - Extracts render job ID.
10. Poll Render Status ? Check Status ? Wait 10s loop
   - Polls until Done, then collects the output video URL.
11. Upload to YouTube
   - Uploads the resulting video URL to YouTube with a generated title and tags.
12. Log Final (Google Sheets)
   - Writes the final video URL and YouTube video ID, marks DONE.

### Customization Ideas
- Dynamic Topics: Accept topic in the webhook JSON body.
- Backgrounds: Provide a background video clip in Shotstack tracks.
- Music: Use Freesound API to fetch a CC0 track per topic.
- Thumbnails: Generate a title card image and set it via YouTube API.
- Scheduling: Replace Webhook with a Cron node for periodic generation.

### Rate Limits and Notes
- VoiceRSS: Free tier has daily limits; consider caching.
- Shotstack: Developer tier is rate-limited; keep short videos and SD resolution.
- YouTube: Upload quotas apply; unlisted/private during testing recommended.

### Security
- Keep API keys in n8n credentials or environment variables, not in nodes directly.
- Validate/escape inputs from webhooks to avoid injection in generated text.

### Troubleshooting
- VoiceRSS errors: Verify key and text length; reduce script size.
- Shotstack errors: Ensure valid JSON structure and API key; inspect render logs.
- YouTube upload fails: Re-auth OAuth2 in n8n and ensure the video URL is accessible.

