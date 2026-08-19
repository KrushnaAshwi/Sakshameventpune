# ?? How to Deploy Your Website — Complete Guide

**Time needed: ~25 minutes**
**Cost: Free** (Cloudflare Pages + Supabase free tier + Cloudinary free tier)

---

## What You Will Need
- A computer with a browser
- The ZIP file your developer sent you
- A free **GitHub** account ? https://github.com
- A free **Cloudflare** account ? https://cloudflare.com
- A free **Supabase** account ? https://supabase.com
- A free **Cloudinary** account ? https://cloudinary.com

---

## PART 1 — Set Up Your Website

### Step 1 — Extract the ZIP File

1. Right-click the ZIP file your developer sent
2. Click **"Extract All"** ? choose a folder on your Desktop
3. You now have a folder with all the website files

---

### Step 2 — Install Node.js

1. Go to https://nodejs.org
2. Click the big green **"LTS"** download button
3. Install it (click Next ? Next ? Finish)
4. Open **Command Prompt** (press Windows key ? type "cmd" ? press Enter)
5. Type `node -v` ? press Enter ? you should see `v20.x.x` ?

---

### Step 3 — Set Up Supabase (Your Database)

1. Go to https://supabase.com ? create a free account
2. Click **"New project"**
   - Name: anything (e.g. "my-events-site")
   - Password: set a strong password and **save it**
   - Region: **Singapore** (closest to India)
   - Click **"Create new project"** — wait ~1 minute
3. On the left sidebar ? click **"SQL Editor"**
4. Open the file `supabase/schema.sql` from your project folder with Notepad
5. Select all (Ctrl+A) ? Copy (Ctrl+C)
6. Paste into the SQL Editor ? click **"Run"**
   - You will see green success messages ?
7. Go to **Settings ? API**
8. Copy and save:
   - **Project URL** ? looks like `https://abcxyz.supabase.co`
   - **anon public key** ? a long string of letters/numbers

---

### Step 4 — Create Your Admin Login

> **This is how you will log into your website admin panel after it goes live.**

1. In Supabase ? left sidebar ? **Authentication ? Users**
2. Click **"Add user" ? "Create new user"**
3. Enter your **email** and a **strong password**
4. Click **"Create user"**
5. **Save your email and password safely** — you will use them to manage your website

---

### Step 5 — Set Up Cloudinary (For Image Uploads)

1. Go to https://cloudinary.com ? create a free account
2. After signing in, note your **Cloud Name** at the top of the dashboard
3. Click **Settings** (gear icon) ? **Upload** tab
4. Scroll to **"Upload presets"** ? click **"Add upload preset"**
5. Set **Signing mode** to **"Unsigned"**
6. Give it a name, e.g. `events-upload` ? click **"Save"**
7. Save your **Cloud Name** and **Upload Preset name**

---

### Step 6 — Configure the Project

1. In your project folder, find the file called **`.env`**
   - If you cannot see it: File Explorer ? View ? check **"Hidden items"**
2. Right-click `.env` ? **Open with ? Notepad**
3. Replace the placeholder values with your real values:

```
VITE_SUPABASE_URL=https://your-real-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_real_anon_key

VITE_CLOUDINARY_CLOUD_NAME=your_real_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_real_preset_name
```

4. Save the file (Ctrl+S)

---

### Step 7 — Upload to GitHub

1. Go to https://github.com ? create a free account (or log in)

**Easy option — GitHub Desktop:**
1. Download from https://desktop.github.com ? install ? sign in
2. Click **File ? Add Local Repository** ? select your project folder
3. It may say "not a git repo" ? click **"create a repository"**
4. Name it `events-website` ? set to **Private**
5. Click **"Publish repository"** ?

---

### Step 8 — Deploy on Cloudflare Pages

1. Go to https://cloudflare.com ? log in (or create a free account)
2. In the left sidebar ? click **"Workers & Pages"**
3. Click **"Create"** ? **"Pages"** ? **"Connect to Git"**
4. Connect your GitHub account ? select your `events-website` repository
5. On the build settings page:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `.output/public` |

6. Scroll to **"Environment variables (advanced)"** ? click **"Add variable"** — add all 4:

| Variable name | Value |
|---|---|
| `VITE_SUPABASE_URL` | your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | your Supabase anon key |
| `VITE_CLOUDINARY_CLOUD_NAME` | your Cloudinary cloud name |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | your Cloudinary preset name |
| `NODE_VERSION` | `20` |

7. Click **"Save and Deploy"**
8. Wait ~3-5 minutes for the build to finish
9. You will get a free URL like `https://events-website.pages.dev` ??

---

## PART 2 — Accessing Your Admin Panel (On the Live Website)

> Once the website is live, you manage everything through the admin panel — no coding needed!

### How to Log In

1. Open your website URL (e.g. `https://events-website.pages.dev`)
2. Add `/admin/login` at the end: `https://events-website.pages.dev/admin/login`
3. Enter the **email and password** you created in Supabase (Step 4)
4. Click **Login** ?

> **Important:** The yellow "Demo Mode" banner should NOT appear on the live site. If it does, check that your environment variables were added correctly in Cloudflare.

---

### What You Can Do in the Admin Panel

| Section | What it does |
|---|---|
| **Dashboard** | See a summary of all your content |
| **Categories** | Add/edit/hide your decoration categories (Birthday, Wedding, etc.) |
| **Packages** | Add/edit/delete your pricing packages with photos |
| **Gallery** | Upload event photos — they appear on the Gallery page |
| **Reviews** | Approve or delete customer reviews |
| **Homepage** | Edit the hero text, about section, stats |
| **Contact** | Update your phone, WhatsApp, email, address |
| **SEO** | Edit page titles and descriptions for Google |
| **Settings** | Update business name, logo, tagline |
| **Media Library** | See all uploaded images |
| **Profile** | Change your admin email or password |

---

### Updating Your Business Information (Do This First!)

After logging in for the first time, update these right away:

1. **Contact** ? Change phone number, WhatsApp, email, address
2. **Settings ? General** ? Update business name, add your logo
3. **Categories** ? Delete sample categories, add your real ones
4. **Packages** ? Delete sample packages, add your real services with prices
5. **Gallery** ? Delete sample photos, upload your real event photos
6. **Homepage** ? Update the hero tagline and about section text

---

### How to Change Your Admin Password Later

1. Log into the admin panel
2. Go to **Profile** (last item in the left menu)
3. Enter your new password ? click **Save**

---

### How to Keep Your Site Updated

Every time you change something in the admin panel — it saves automatically to your Supabase database. No redeployment needed!

If your developer makes code changes:
1. They send you an updated ZIP file
2. You update the files in your GitHub repository (GitHub Desktop ? drag and drop ? Commit ? Push)
3. Cloudflare automatically rebuilds and redeploys — takes ~3 minutes

---

## PART 3 — Custom Domain (Optional)

If you have your own domain name (e.g. `myevents.com`):

1. In Cloudflare ? Workers & Pages ? your project ? **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter your domain name ? follow the steps
4. If your domain is registered on Cloudflare, it connects automatically
5. If registered elsewhere (GoDaddy, Namecheap, etc.) — update the nameservers to Cloudflare's

---

## ? Troubleshooting

| Problem | Solution |
|---|---|
| Cannot see `.env` file | File Explorer ? View ? tick "Hidden items" |
| Build fails on Cloudflare | Check all 5 environment variables are added including `NODE_VERSION=20` |
| Cannot log into admin | Make sure you created a user in Supabase ? Authentication ? Users |
| Yellow Demo Mode banner on live site | Check Supabase URL and key in Cloudflare environment variables |
| Images not uploading | Make sure Cloudinary preset signing mode is set to **Unsigned** |
| Website not loading | Wait 5 minutes after deploy, then try again |
| Forgot admin password | Go to Supabase ? Authentication ? Users ? click your user ? Reset password |

---

*This guide was prepared by your developer. Keep this file safe!*
