# CLAUDE.md

Personal portfolio/CV site for Mahmoud Sabry (front-end developer). It is a single-page React 19 + Vite 7 app in plain JavaScript (JSX, no TypeScript), deployed to GitHub Pages.

## Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve the built dist/ locally
npm run lint      # ESLint (flat config in eslint.config.js)
npm run deploy    # builds first (predeploy), then pushes dist/ to the gh-pages branch
```

There is no test suite and no test runner configured.

## Architecture

- `index.html` loads `src/main.jsx`, which renders `<App/>` inside `StrictMode`.
- `src/App.jsx` stacks the page sections in order: `Home`, `Nav`, `About`, `Skills`, `Services`, `Projects`, `Contact`, `Footer`. There is no router. Navigation uses in-page hash anchors (`#about`, `#skills`, `#services`, `#projects`, `#contact`), and `html { scroll-behavior: smooth }` handles the scrolling.
- Each section lives in `src/components/<section>/` as one `Component.jsx` plus its own CSS file, which the component imports directly. CSS file names are lowercase (`about.css`), except `skills/Skills.css`.
- **Content lives in `src/data.js`.** It exports the arrays the components render: `projects`, `skills`, `services`, `aboutInfo`, `softSkills`, `contactOptions`, `socialLinks`, plus constants `EMAIL`, `LINKEDIN_URL`, `GITHUB_URL`, `WHATSAPP_URL`. Icons are stored as components (`Icon: SiReact`, rendered as `<Icon />`), so the file stays plain `.js`. Project screenshots are in `src/assets/projects/` and imported at the top of `data.js`. The About bio paragraphs and stat cards are still inline in `About.jsx`.
- `Nav.jsx` is a floating icon bar with a scroll-spy (`IntersectionObserver`) that highlights the section crossing the middle of the viewport. Each section needs a matching `id` (the hero is `<header id="home">`).
- `Contact.jsx` sends the form through EmailJS (`@emailjs/browser`) with `emailjs.send(serviceId, templateId, params, { publicKey })`. The IDs are hardcoded, and that is expected because they are public client keys. The component sends the form values under several common template variable names (`name`/`from_name`/`user_name`, `email`/`from_email`/`reply_to`, and so on) so that any EmailJS template works. A `status` state (`"" | "sending" | "sent" | "error"`) drives the button label and the result message.
- Icons come from `react-icons` (fa, bi, bs, md, io, io5, lu, si, tb, vsc). Skill logos use the `si` (Simple Icons) pack with brand colors.

## Styling

- Plain global CSS, with no CSS modules, Tailwind or preprocessor. `src/index.css` defines the theme tokens on `:root` (`--color-bg`, `--color-bg-variant`, `--color-primary`, `--color-primary-variant`, `--color-white`, `--color-light`, `--transition`) and the shared classes `.container`, `.btn`, `.btn-primary`, `.text-light` and `.top_section` (the centered h5/h2 section heading).
- The site has a dark theme only. The body uses `src/assets/bg.webp` with `background-attachment: fixed`, which was set on purpose so the background does not stretch over the page height. The font is Poppins (weights 300–600), loaded with `<link>` tags in `index.html`.
- Class names mostly use snake_case (`about_container`, `portfolio_item`), with some exceptions (`home-container`, `Scroll_Down`). Match the convention the surrounding file uses.
- Responsive breakpoints are `@media (max-width:1024px)` (tablet) and `@media (max-width:600px)` (mobile). They are set in `index.css` and repeated in each component's CSS.
- `src/App.css` is imported but empty.

## Deployment gotchas

- `vite.config.js` sets `base: '/PortfolioCv/'`, which must match the GitHub Pages path. Don't change or remove it, or asset URLs break in production.
- Import assets through JS (`import img from "../../assets/x.jpg"`) so Vite applies the base path and hashes the file names. Hardcoded absolute `/...` paths in JSX break under the base path.
- `index.html` holds the SEO and Open Graph tags. The preview image is `public/og-image.jpg` (1200×630), referenced by absolute URL. The favicon is `public/favicon.svg`.
- The CV download in `Home.jsx` is the imported `src/assets/Mahmoud_Sabry_CV.pdf`. To update the CV, replace that file.

## Lint rules of note

`no-unused-vars` ignores variables and arguments that match `^[A-Z_]`. This lets JSX-only usages pass, such as a destructured `Icon` rendered as `<Icon />`, because ESLint core doesn't see JSX references. The `react-hooks` and `react-refresh` (Vite) recommended configs are enabled.
