# CareOne — Healthcare Knowledge for Everyone

> **Mission:** Democratize healthcare literacy to close the gap between the informed wealthy and everyone else.

## What is CareOne?

CareOne is a web + mobile healthcare empowerment platform that combines:

- 🔍 **AI Symptom Checker** — Conversational, not dropdown menus. Gives you clear actions, not scary articles.
- 📚 **Health Guides** — Organized by life stage and topic. Short, visual, jargon-free.
- 💬 **Community Forum** — Home remedies and tips, all verified by healthcare professionals.
- 🏥 **Insurance Decoder** — Upload your plan, get plain-English explanations.
- 💸 **Cost Estimator** — Know what you'll pay. Find cheaper options. Save money.
- 📍 **Local Resources** — Free clinics, discount programs, and financial aid by zip code.

## Who It's For

| Persona | Need |
|---------|------|
| Young uninsured adult | "Is this serious enough for the ER?" |
| New parent | "My baby has a rash — what do I do?" |
| Elderly / Caregivers | "How do I manage multiple medications?" |
| Immigrants / ESL | "I don't understand the healthcare system." |
| Working poor | "I can't afford to see a doctor." |
| Anyone | "I want to take ownership of my health." |

## Tech Stack

- **Frontend:** Next.js 14 + React + TypeScript + Tailwind CSS
- **Mobile:** React Native (planned)
- **Backend:** Supabase (Auth, DB, Realtime)
- **AI:** Claude/GPT APIs for symptom triage, content generation, moderation
- **Search:** pgvector for semantic health search
- **Deployment:** Vercel (web) + Expo (mobile)

## Getting Started

```bash
cd careone
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key Differentiators

1. **Not WebMD** — One clear answer, not 10,000 confusing articles
2. **Anti-Google-symptom-spiral** — Conversational AI that calms, not scares
3. **Community trust system** — Unverified → Endorsed → Professional Verified
4. **Built for the underserved** — Plain language, multilingual, offline-capable, free tier always
5. **Cost transparency** — Shows real prices, cheaper alternatives, financial aid
6. **AI workflows** — Auto-moderation, translation, emergency detection, follow-ups

## Project Structure

```
careone/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home — 3 paths
│   │   ├── layout.tsx        # App shell with nav
│   │   ├── symptoms/         # AI symptom chat
│   │   ├── learn/            # Health guides by stage/topic
│   │   ├── community/        # Forum with trust levels
│   │   ├── insurance/        # Plan decoder
│   │   └── costs/            # Cost estimator & savings
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── ThreePaths.tsx
│   │   ├── PersonaCards.tsx
│   │   ├── FeaturesGrid.tsx
│   │   └── CTA.tsx
│   └── lib/                  # Utilities & AI integration
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Roadmap

- [x] Project scaffold & core pages
- [ ] Supabase integration (auth, database)
- [ ] AI chat backend (Claude/GPT API)
- [ ] Forum CRUD + moderation workflow
- [ ] Local resource database
- [ ] Insurance document parsing
- [ ] Cost comparison API integration
- [ ] Mobile app (React Native)
- [ ] Multilingual support
- [ ] Offline PWA mode

## License

Proprietary — © 2026 CareOne. All rights reserved.
