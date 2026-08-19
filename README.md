# Saksham Events — Website

A full-featured event decoration website with a complete admin panel, built with React (TanStack Start), TypeScript, Tailwind CSS, Supabase, and Cloudinary.

---

## ✅ Quick Start (Demo Mode)

The app works **out of the box without any credentials**. Just run:

```sh
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> The app runs in **Demo Mode** — all data is stored in your browser's `localStorage`. Nothing requires a database yet.

**Admin Panel:** Go to `/admin/login` and log in with **any email and password** in demo mode.

---

## 🔌 Connecting Your Own Database (Live Mode)

When you're ready to go live, follow these steps:

### Step 1 — Set up Supabase

1. Create a **free** project at [supabase.com](https://supabase.com)
2. In your project, go to **SQL Editor** and run the entire contents of **`supabase/schema.sql`** — this creates all the tables, policies, and default data
3. Go to **Settings → API** and copy:
   - **Project URL**
   - **anon public** key

### Step 2 — Set up Cloudinary (for image uploads)

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Go to **Settings → Upload → Upload Presets**
3. Click **Add upload preset**, set it to **Unsigned**, and save
4. Copy the **Cloud Name** and **Upload Preset name**

### Step 3 — Configure environment variables

Copy `.env.example` to `.env` and fill in your values:

```sh
cp .env.example .env
```

Then edit `.env`:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset_name
```

### Step 4 — Create your admin account

1. In your Supabase project, go to **Authentication → Users**
2. Click **Add user** → **Create new user**
3. Enter your email and password
4. Use those credentials to log in at `/admin/login`

### Step 5 — Restart the dev server

```sh
npm run dev
```

The **Demo Mode** banner will disappear and all data will now sync with Supabase.

---

## 🚀 Deploying to Production

### Netlify / Vercel
1. Push this repository to GitHub
2. Connect your GitHub repo to Netlify or Vercel
3. Set the same environment variables in the hosting dashboard
4. Deploy!

### Cloudflare Pages
The build output is already configured for **Cloudflare Workers** via Nitro. Run:

```sh
npm run build
npx nitro deploy --prebuilt
```

---

## 📁 Project Structure

```
src/
├── components/      # Shared UI components (Navbar, Footer, etc.)
├── pages/           # Page components
│   └── admin/       # Admin panel pages
├── routes/          # TanStack Router file-based routes
├── services/        # API layer (Supabase, Cloudinary, auth)
├── hooks/           # React hooks (auth, settings, SEO)
└── utils/           # Helpers and sample data (for demo mode)
supabase/
└── schema.sql       # Complete database schema — run this in Supabase
```

---

## 🛠️ Tech Stack

- **Framework:** TanStack Start (React + TypeScript, SSR)
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (PostgreSQL)
- **Image Hosting:** Cloudinary
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **Build Tool:** Vite + Nitro
