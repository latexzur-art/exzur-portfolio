# Exzur A. Lat — Personal Developer Portfolio & Techtal Studios

A modern, minimalist, dark-themed developer portfolio built for **Exzur A. Lat** (Aspiring Software Developer & BS Computer Science student at STI College Lucena), featuring **Techtal Studios** as his independent creative technology studio brand.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## Project Structure

```text
├── public/                 # Static assets (place project screenshots in public/projects/)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles, architectural grid utilities, theme variables
│   │   ├── icon.svg        # Custom EL monogram favicon
│   │   ├── layout.tsx      # Root layout, fonts (Inter & JetBrains Mono), and SEO metadata
│   │   └── page.tsx        # Main portfolio page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky responsive navigation bar with mobile drawer
│   │   ├── Hero.tsx        # Hero banner with technical grid & configurable status badge
│   │   ├── About.tsx       # Academic background & 5 core technical/creative interests
│   │   ├── Projects.tsx    # Filterable project showcase with schematic preview fallbacks
│   │   ├── Skills.tsx      # Categorized skills (Programming, Development, Creative)
│   │   ├── TechtalStudios.tsx # Techtal Studios brand showcase, 3 divisions & release pipeline
│   │   ├── Contact.tsx     # Contact details, placeholders & mailto/endpoint contact form
│   │   └── Footer.tsx      # Copyright, navigation, and social links
│   └── data/
│       └── portfolio.ts    # Single source of truth for projects, skills, studio info & links
├── .env.example            # Example environment variables for optional overrides
├── next.config.mjs         # Next.js configuration
├── package.json            # Scripts and dependencies
└── tailwind.config.ts      # Tailwind CSS configuration
```

---

## Getting Started (Local Development)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Run Production Build Locally

```bash
npm run build
npm run start
```

---

## Customizing Your Portfolio Data

All portfolio content is centralized in [`src/data/portfolio.ts`](./src/data/portfolio.ts):

1. **Contact Details (`PORTFOLIO_DATA.contact`)**:
   - Update the professional email (or set `NEXT_PUBLIC_CONTACT_EMAIL`).
   - Update the LinkedIn URL (or set `NEXT_PUBLIC_LINKEDIN_URL`).
   - GitHub is pre-configured to `https://github.com/latexzur-art`.
2. **Hero Status Indicator (`PORTFOLIO_DATA.personal.status`)**:
   - Set `availableForEmployment: true` when you want to display an open-for-work status indicator.
3. **Projects (`PORTFOLIO_DATA.projects`)**:
   - Update `githubUrl`, `liveDemoUrl`, and `thumbnail` (e.g. `"/projects/storyforge.png"`) when available.
   - Add new project objects to `PORTFOLIO_DATA.projects` to automatically populate the filterable showcase.
4. **Skills (`PORTFOLIO_DATA.skills`)**:
   - Add or update items under `Programming`, `Development`, or `Creative`.

---

## Deploying to Vercel

This project is pre-configured for zero-configuration deployment on [Vercel](https://vercel.com/):

1. Push this repository to your GitHub account (`https://github.com/latexzur-art`).
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Vercel will automatically detect **Next.js** (`npm run build`).
4. *(Optional)* Add any environment variables from `.env.example` under **Project Settings → Environment Variables**:
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_LINKEDIN_URL`
   - `NEXT_PUBLIC_GITHUB_URL`
   - `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` (e.g., Formspree endpoint if you want direct form POST submissions instead of the default `mailto:` client fallback)
5. Click **Deploy**.

---

## License & Brand Notice

© 2026 Exzur A. Lat. **Techtal Studios** is the personal independent creative brand of Exzur A. Lat.
