# Create Hell Minecraft Server Website - Setup Guide

## Project Complete! ✅

Your Create Hell Minecraft server website has been successfully built and is ready to use!

## What's Been Created

### Pages (4 Total)
- **Home** (`/`) - Welcome section, mod accordion, world map & track map iframes, whitelist form
- **Rules** (`/rules`) - Server rules list
- **Guide** (`/guide`) - Step-by-step setup instructions for modpack installation and voice chat
- **Downloads** (`/downloads`) - Download cards for .mrpack and .zip files

### Components
- **Navbar** - Sticky navigation with server URL and copy-to-clipboard functionality
- **PageLayout** - Consistent layout wrapper with background image gradient

### Features Implemented
✅ React Router for navigation
✅ Bootstrap styling with dark theme
✅ Responsive design (mobile, tablet, desktop)
✅ Mod accordion with 8 categories and 50+ mods
✅ Environment variable configuration
✅ Copy-to-clipboard with toast notifications
✅ Formspree.io integration for whitelist requests
✅ Map iframes (Dynmap and Create Track Map)
✅ Download links for modpack files

---

## Next Steps

### 1. Configure Environment Variables

Create a `.env.development` file with your actual values:

```env
VITE_SERVER_URL=your-server.com:25565
VITE_DYNMAP_URL=https://your-dynmap-url.com
VITE_TRACKMAP_URL=https://your-trackmap-url.com
VITE_FORMSPREE_ID=your_formspree_form_id
```

For production, create `.env.production` with production URLs.

**Important:** The `.env.development` file has been created with placeholder values. Update them!

### 2. Add Your Modpack Files

Place your modpack files in the `public/modpacks/` folder:
- `create-hell.mrpack` - Modrinth modpack file
- `create-hell.zip` - Mods folder zip file

### 3. Verify Background Image

Make sure `public/Create_Hell.png` is the image you want to use as the background.

### 4. Get a Formspree Form ID

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy the form ID (format: `xxxxx-xxxxx-xxxxx`)
5. Add it to your environment variables

---

## Running the Website

### Development Mode
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser

### Production Build
```bash
npm run build
```
The built files will be in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

## Customization Guide

### Updating Mods List
Edit `src/data/mods.ts` to add, remove, or modify mods. Each mod should have:
- `name` - Display name
- `description` - What the mod does
- `modrinthUrl` - Link to Modrinth page (required)
- `wikiUrl` - Link to wiki (optional)

### Changing Server Rules
Edit `src/pages/Rules.tsx` and update the `rules` array.

### Modifying Styles
- Global styles: `src/index.css`
- Component styles: `src/styles/`
  - `Navbar.css` - Navigation bar
  - `PageLayout.css` - Page layout and background
  - `pages.css` - Page-specific styles

### Changing Colors
The main colors are defined in CSS:
- Background: `#1a1a1a`
- Primary blue: `#4da6ff`
- Hover blue: `#80c1ff`

Search and replace these values in the CSS files to change the color scheme.

---

## File Structure

```
create-hell-minecraft/
├── public/
│   ├── Create_Hell.png          # Background image
│   └── modpacks/                # Your modpack files go here
│       ├── create-hell.mrpack
│       └── create-hell.zip
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation component
│   │   └── PageLayout.tsx       # Layout wrapper
│   ├── pages/
│   │   ├── Home.tsx             # Home page
│   │   ├── Rules.tsx            # Rules page
│   │   ├── Guide.tsx            # Setup guide
│   │   └── Downloads.tsx        # Downloads page
│   ├── data/
│   │   └── mods.ts              # Mod data
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── PageLayout.css
│   │   └── pages.css
│   ├── types/
│   │   └── env.d.ts             # TypeScript env types
│   ├── App.tsx                  # Main app with router
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── .env.development             # Dev environment variables
├── .env.development.template    # Template for dev env
├── .env.production.template     # Template for prod env
└── index.html                   # HTML entry point
```

---

## Deployment

### Recommended Platforms
- **Vercel** - Best for React apps, automatic deployments
- **Netlify** - Easy setup with drag-and-drop
- **GitHub Pages** - Free hosting for static sites
- **Cloudflare Pages** - Fast global CDN

### Deployment Steps (Vercel Example)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

**Important:** Set your environment variables in the hosting platform's dashboard.

---

## Tips & Tricks

### Testing Without Real URLs
For testing locally without real server URLs:
- Use placeholder URLs in `.env.development`
- The iframes won't load but the layout will work
- Test all other features (navigation, accordion, forms)

### Mobile Testing
Open Chrome DevTools (F12) and toggle device toolbar (Ctrl+Shift+M) to test mobile view.

### Updating Mod Descriptions
The mod descriptions in `src/data/mods.ts` are detailed but you can make them shorter or longer as needed.

---

## Common Issues

### Environment Variables Not Working
- Make sure your `.env` file is in the root directory
- Restart the dev server after changing env variables
- Verify variables start with `VITE_`

### Background Image Not Showing
- Check that `public/Create_Hell.png` exists
- Try clearing browser cache
- Check browser console for 404 errors

### Download Links Not Working
- Make sure files exist in `public/modpacks/`
- File names must match exactly (case-sensitive)

---

## Support

If you need to make changes or encounter issues:
1. Check this SETUP.md file
2. Review the implementation plan at `C:\Users\johnn\.claude\plans\virtual-growing-rain.md`
3. Use browser DevTools to debug

---

## What's Next?

1. ✅ Configure environment variables
2. ✅ Add modpack files to `public/modpacks/`
3. ✅ Set up Formspree form
4. ✅ Test locally with `npm run dev`
5. ✅ Deploy to your preferred hosting platform
6. ✅ Share the website with your community!

**Your Create Hell website is ready to go! 🎉**
