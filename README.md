# Chapel

A minimal React + Vite landing site scaffolded for a Chapel project. Includes components for hero, gallery, contact, and footer with a small image/assets folder.

**Status:** Prototype — development-ready with linting and vite dev server.

**Tech Stack**
- **Framework:** React 19
- **Bundler / Dev Server:** Vite
- **Routing:** react-router-dom
- **Linting:** ESLint

**Prerequisites**
- Node.js (v18+ recommended)
- npm (or an alternative Node package manager)

**Install**

1. Install dependencies:

```
npm install
```

2. Start the development server:

```
npm run dev
```

**Available NPM scripts**
- **dev:** `vite` — runs the dev server (hot reload).
- **build:** `vite build` — bundles the app for production.
- **preview:** `vite preview` — locally preview the production build.
- **lint:** `eslint .` — run ESLint across the project.

These scripts come from the project's `package.json` and require the dev dependencies listed there.

**Project Structure (important files)**
- [index.html](index.html) — app entry HTML.
- [src/main.jsx](src/main.jsx) — React entry point.
- [src/App.jsx](src/App.jsx) — main application component and routes.
- [src/App.css](src/App.css) — global styles.
- [src/Components/Herosection.jsx](src/Components/Herosection.jsx) — top hero section.
- [src/Components/Gallery.jsx](src/Components/Gallery.jsx) — image gallery.
- [src/Components/Footer.jsx](src/Components/Footer.jsx) — footer component (current file in editor).
- [public/imgs](public/imgs) — static images served as-is.

Explore the `src/Components` folder for other UI pieces such as `ImageSlider.jsx`, `Section1.jsx`–`Section3.jsx`, and `Contact.jsx`.

**How to Build & Deploy**

1. Create a production build:

```
npm run build
```

2. Preview the production build locally:

```
npm run preview
```

3. Deploy the `dist` folder to any static hosting (Netlify, Vercel, GitHub Pages, or a static file server).

Notes when deploying:
- Ensure the hosting provider serves `index.html` for client-side routing (set up redirects / rewrites where necessary).

**Linting**

Run the linter with:

```
npm run lint
```

The project includes ESLint and React-related plugins in `devDependencies`.

**Contributing**
- Fork the repo, create a feature branch, and open a pull request.
- Keep changes focused and add small commits with clear messages.
- Run `npm run lint` before submitting changes.

**Troubleshooting**
- If the dev server doesn't start, verify Node.js and npm versions.
- If ESLint fails, follow the reported fixer suggestions or run the rules locally in your editor.

**Where to look next**
- Update `src/App.jsx` and `src/Components` to add pages or new routes.
- Add unit or E2E tests if you want CI coverage.

---

If you'd like, I can:
- add a `LICENSE` file,
- add testing setup (Jest / Vitest), or
- create GitHub Actions for CI.

Created by project scaffolding on the Chapel workspace.✨ Chapel of Praise Church Website

A modern, responsive church website built to create a welcoming digital experience for members, visitors, and the community.
Designed with clean UI, smooth interactions, and accessibility in mind.

Live Demo: https://chapelofpraise.netlify.app/

Features
⚡ Modern and responsive design
📱 Mobile-first user experience
🎥 Hero section with engaging visuals
🙏 Ministries & Programs section
📅 Events and announcements
📖 Sermons / Messages showcase
📍 Contact & location section
🌙 Smooth animations and transitions
🔍 Clean and organized code structure

Tect Stack
CSS3
JavaScript
React.js 
React Router (For Navigation)
Netlify / Vercel for deployment

CHAPEL/
│
├── public/
|   ├──imgs/
├── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   └── App.js
│
├── package.json
└── README.md

Clone the repository: git clone https://github.com/yourusername/church-website.git

Navigate into the project directory: cd church-website

Install dependencies: npm install

Start the development server: npm run dev

🌍 Deployment

This project can be deployed easily using:

Netlify
Vercel
GitHub Pages

For React Router deployments on Netlify, make sure redirects are configured properly.

Create a _redirects file inside your public folder:

/*    /index.html   200

The goal of this project was to create a digital church experience that feels:
. Warm and welcoming
. Spirit-filled yet modern
. Minimal and easy to navigate
. Accessible across all devices

📖 Future Improvements
. Online donation integration
. Live streaming support
. Admin dashboard
. Blog / devotionals section
. Prayer request form
. Authentication system


🤝 Contributing
Contributions, suggestions, and improvements are welcome.

Fork the project and create a pull request.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Built with passion by Fortune Nnah

Frontend Developer • Creative Developer • Tech Enthusiast
⭐ Support

If you found this project helpful, consider giving it a star on GitHub ⭐
