# Task Master Dashboard - Deployment Instructions

## Quick Setup (Copy & Paste)

### Step 1: Clone & Setup (Mac/Linux/Windows)

Open Terminal/Command Prompt and run:

```bash
git clone https://github.com/aadi90a/task-master-dashboard.git
cd task-master-dashboard
npm install
```

### Step 2: Add Your Supabase Keys

Create a file named `.env.local` in the project root with:

```
NEXT_PUBLIC_SUPABASE_URL=https://nvlmrtgwmknsprxyxrlr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
ANTHROPIC_API_KEY=
```

Replace:
- `YOUR_ANON_KEY` with your Supabase anon key
- `YOUR_SERVICE_ROLE_KEY` with your Supabase service role key
- Leave `ANTHROPIC_API_KEY` blank (add later)

### Step 3: Test Locally (Optional)

```bash
npm run dev
```

Visit http://localhost:3000

### Step 4: Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts:
1. Sign in with GitHub
2. Create new project
3. Add environment variables (same as .env.local)
4. Deploy!

**Your dashboard will be live at a Vercel URL** 🚀

---

## Need Help?

- GitHub Repo: https://github.com/aadi90a/task-master-dashboard
- Supabase Keys: Settings > API in Supabase dashboard
- Vercel Dashboard: https://vercel.com

That's it! You're done.
