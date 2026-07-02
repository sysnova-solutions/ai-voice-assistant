# SysnovaAi

SysnovaAi is an AI voice operations dashboard by [Sysnova Solutions](https://sysnovasolutions.com). It includes a customer-facing portal, an admin operations panel, ElevenLabs voice/chat integration, and Supabase-backed workflow data.

## Open Source Status

This project is open source under the MIT License.

You can:

- Use it for personal or commercial projects
- Modify the branding, UI, and workflows
- Deploy your own version on Vercel or any Node-compatible platform

You should:

- Keep your own API keys and secrets private
- Replace demo prompts, sample records, and branding before production use
- Review third-party services like ElevenLabs, Supabase, and Gmail before going live

## How To Download

You can get the code in either of these ways:

1. GitHub download:
   Open the repository on GitHub, click `Code`, then `Download ZIP`.
2. Git clone:

```bash
git clone https://github.com/sysnova-solutions/ai-voice-assistant.git
cd ai-voice-assistant
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create your local environment file:

```bash
copy .env.example .env
```

3. Set these values in `.env`:

- `ELEVENLABS_AGENT_ID`
- `ELEVENLABS_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OWNER_EMAIL`
- `OWNER_PASSWORD`
- `OWNER_SESSION_SECRET`

4. Start the development server:

```bash
npm run dev
```

5. Open your browser:

- App: `http://localhost:3000`

## Production Build

```bash
npm run build
npm start
```

## Vercel Deployment

1. Push this repo to GitHub
2. Import the repo into Vercel
3. Add the same environment variables from `.env`
4. Deploy

If you use Supabase and ElevenLabs, make sure production URLs, webhook URLs, and callback settings are updated for your live domain.

## Recommended Rebranding Before Use

- Replace `elevenlabs_zara_system_prompt.txt`
- Replace sample call logs and seeded demo content in `server.ts`
- Replace company name, contact URLs, and support email addresses
- Review menu/service catalog data for your own use case

## Contributing

Pull requests are welcome. For major changes, open an issue first so the scope stays clear for everyone.
