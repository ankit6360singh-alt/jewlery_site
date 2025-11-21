# Deployment Instructions (GitHub -> Vercel)

## 1. Push to GitHub
Your code has been pushed to: [https://github.com/ankit6360singh-alt/jewlery_site](https://github.com/ankit6360singh-alt/jewlery_site)

## 2. Deploy on Vercel
1.  Log in to [Vercel](https://vercel.com/).
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Import"** next to your `jewlery_site` repository.
4.  In the "Configure Project" screen:
    *   **Framework Preset**: Vite (should be auto-detected).
    *   **Root Directory**: `./` (default).
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default).
5.  Click **"Deploy"**.

## 3. Verify
Once deployed, Vercel will give you a live URL (e.g., `https://jewlery-site.vercel.app`). Open it to verify your site is working!
