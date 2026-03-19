# 🌸 Blooming N Beyond

> A mom lifestyle & affiliate blog — home finds, kids' favourites, self-care, fashion & everything in between.

**Live Site:** [bloomingnbeyond.com](https://bloomingnbeyond.com)

---

## 📁 Project Structure

```
blooming-n-beyond/
│
├── index.html              ← Homepage (main file)
│
├── css/
│   └── style.css           ← All styles & CSS variables
│
├── js/
│   └── main.js             ← Animations, interactions, nav
│
├── images/
│   ├── favicon.ico         ← Add your favicon here
│   ├── og-image.jpg        ← Social share image (1200x630px)
│   └── ...                 ← All your blog/product images
│
├── pages/
│   ├── blog.html           ← Blog listing page
│   ├── blog-post.html      ← Single blog post template
│   ├── shop.html           ← All products page
│   ├── kids.html           ← Kids category page
│   ├── selfcare.html       ← Self care category page
│   ├── fashion.html        ← Fashion category page
│   ├── privacy.html        ← Privacy policy
│   ├── disclosure.html     ← Affiliate disclosure
│   └── work-with-me.html   ← Brand partnerships page
│
└── README.md               ← This file
```

---

## 🚀 Getting Started

### View Locally
Just open `index.html` in any browser — no server needed!

```bash
# Or if you have VS Code with Live Server:
# Right click index.html → Open with Live Server
```

### Edit the Site
1. Open any file in **VS Code** (free at code.visualstudio.com)
2. Edit the HTML in `index.html`
3. Edit styles in `css/style.css`
4. Edit interactions in `js/main.js`

---

## 🔗 Adding Affiliate Links

Search for `YOUR_AMAZON_LINK_HERE` in `index.html` and replace with your real Amazon Associates links.

```html
<!-- Before -->
<a href="YOUR_AMAZON_LINK_HERE" class="btn-amazon">View Deal</a>

<!-- After -->
<a href="https://www.amazon.com/dp/PRODUCT_ID?tag=YOUR-TAG-20" class="btn-amazon" target="_blank" rel="nofollow">View Deal</a>
```

---

## 🎨 Changing Colours

All colours are defined as CSS variables at the top of `css/style.css`:

```css
:root {
  --accent:    #B87333;   /* Main brand colour - warm brown */
  --rose:      #C4756A;   /* Kids section colour */
  --sage:      #7A9E7E;   /* Self care colour */
  --lavender:  #9B8EC4;   /* Fashion colour */
}
```

Change any value and it updates everywhere automatically!

---

## 📝 Adding a New Blog Post

1. Copy `pages/blog-post.html`
2. Rename it e.g. `pages/best-coffee-makers.html`
3. Edit the title, content, and affiliate links
4. Add a link to it from `index.html` and `pages/blog.html`

---

## 🌐 Deploying

### Option 1 — Netlify (Free, Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Sign up free
3. Drag the entire `blooming-and-beyond` folder onto Netlify
4. Your site is live instantly!

### Option 2 — GitHub Pages (Free)
1. Push this repo to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch
4. Your site is live at `yourusername.github.io/blooming-and-beyond`

### Option 3 — WordPress / Hostinger
1. Buy hosting at [hostinger.com](https://hostinger.com)
2. Install WordPress
3. Use the HTML as reference or paste into a custom page

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 + Variables | Styling & theming |
| Vanilla JavaScript | Animations & interactions |
| Google Fonts | Playfair Display + Lato |
| Amazon Associates | Affiliate monetisation |

No frameworks. No build tools. Just clean HTML, CSS and JS — works everywhere!

---

## 💰 Monetisation

- **Amazon Associates** — affiliate-program.amazon.com
- **ShareASale** — shareasale.com
- **LTK (LikeToKnow.it)** — liketoknow.it (great for mom blogs)
- **Rakuten** — rakuten.com

---

## 📌 Pinterest Setup

Add your Pinterest domain verification code in the `<head>` of `index.html`:

```html
<meta name="p:domain_verify" content="YOUR_CODE_HERE"/>
```

---

## ✅ Launch Checklist

- [ ] Replace all `YOUR_AMAZON_LINK_HERE` with real affiliate links
- [ ] Replace `[Your Name]` with your real name
- [ ] Add your photo to the About section
- [ ] Add `images/favicon.ico`
- [ ] Add `images/og-image.jpg` (1200x630px for social sharing)
- [ ] Sign up for Amazon Associates
- [ ] Set up Pinterest Business account
- [ ] Deploy to Netlify or Hostinger
- [ ] Connect your custom domain
- [ ] Write your first 3 blog posts

---

## 📄 License

This project is personal — all rights reserved by the site owner.

---

*Made with ☕ cold coffee and a whole lot of love.*
