# ?? Setup Checklist — Get Live in 10 Minutes

Follow these steps in order to connect your real database and go live.

---

## Phase 1 — Run Locally First (5 min)

- [ ] Make sure you have **Node.js** installed ? [nodejs.org](https://nodejs.org)
- [ ] Open a terminal in this project folder
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000 — the site should load in **Demo Mode**
- [ ] Go to `/admin/login` ? log in with **any email and password** (demo mode accepts all)
- [ ] Explore the admin panel — all changes are saved locally in your browser

---

## Phase 2 — Connect Supabase Database (3 min)

- [ ] Create a free account at https://supabase.com
- [ ] Click **New project** ? give it a name ? choose a region close to your customers ? set a database password
- [ ] Wait for the project to be created (~1 minute)
- [ ] Go to **SQL Editor** (left sidebar)
- [ ] Open the file `supabase/schema.sql` from this project
- [ ] Copy the entire contents and paste it into the SQL Editor ? click **Run**
- [ ] Go to **Settings ? API** ? copy:
  - `Project URL`
  - `anon public` key
- [ ] Open `.env` in this project folder and replace the Supabase placeholders with your values
- [ ] Go to **Authentication ? Users** ? **Add user** ? **Create new user** ? enter your email and password
- [ ] Restart the dev server (`Ctrl+C`, then `npm run dev`)
- [ ] Log in at `/admin/login` with your new Supabase credentials
- [ ] The **Demo Mode** banner should be gone ?

---

## Phase 3 — Connect Cloudinary for Image Uploads (2 min)

- [ ] Create a free account at https://cloudinary.com
- [ ] Go to **Settings ? Upload ? Upload Presets** ? **Add upload preset**
- [ ] Set signing mode to **Unsigned** ? save
- [ ] Copy the **Cloud Name** (shown on your Cloudinary dashboard) and the **Preset name**
- [ ] Update `.env` with the Cloudinary values
- [ ] Restart the dev server — image uploads in the admin panel will now work ?

---

## Phase 4 — Update Your Business Info (Admin Panel)

Log in to `/admin` and update:

- [ ] **Settings** ? Business name, logo, tagline
- [ ] **Contact** ? Your real phone number, WhatsApp, email, address
- [ ] **Categories** ? Add your service categories
- [ ] **Packages** ? Add your pricing packages
- [ ] **Gallery** ? Upload your event photos
- [ ] **Homepage** ? Customise hero text and about section

---

## Phase 5 — Deploy to the Internet

### Easiest: Netlify or Vercel
1. Push this project to a GitHub repository
2. Connect the repo to netlify.com or vercel.com
3. Add your environment variables in the hosting dashboard (same as your .env)
4. Deploy — your website is live! ??

### Cloudflare Workers
```
npm run build
npx nitro deploy --prebuilt
```

---

## Need Help?

| Issue | Solution |
|---|---|
| Demo Mode banner still showing | Check `.env` values are correct — no extra spaces |
| Can't log in to admin | Make sure you created a user in Supabase ? Authentication ? Users |
| Images not uploading | Check Cloudinary preset is set to **Unsigned** |
| Build fails | Run `npm install` again, then `npm run build` |
