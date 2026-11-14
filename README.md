# Esraa Tarek — Portfolio

Personal portfolio website of Esraa Tarek, a front-end developer based in Cairo, Egypt. It showcases selected projects, skills, education, and contact details in English and Arabic, with dark and light themes.

**Live demo:** [portfolio-murex-five-2kmqtv00i4.vercel.app](https://portfolio-murex-five-2kmqtv00i4.vercel.app/)

## Features

- Bilingual: English and Arabic (Modern Standard Arabic) with full RTL support
- Dark and light themes, applied before first paint to avoid a flash
- Page routing with an animated gold circle page transition
- Project catalogue with a detail side panel
- Resume page covering skills and education
- Contact form that sends the message to WhatsApp
- Responsive, mobile-first layout for mobile, tablet, and desktop
- Accessible by default: semantic markup, visible focus states, reduced-motion support

## Tech Stack

- [React 19](https://react.dev) + [Vite 8](https://vite.dev)
- [TypeScript](https://www.typescriptlang.org) (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com)
- [React Router 7](https://reactrouter.com)
- [i18next](https://www.i18next.com) + react-i18next
- [Motion](https://motion.dev)
- [Radix UI](https://www.radix-ui.com) Dialog
- [React Icons](https://react-icons.github.io/react-icons)
- [Fontsource](https://fontsource.org): Manrope, Fraunces, JetBrains Mono, Amiri, IBM Plex Sans Arabic

## Getting Started

Requirements: Node.js 20.19 or later.

```bash
git clone https://github.com/esraaTarek13/portfolio.git
cd portfolio
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the development server        |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint                          |

## Project Structure

The UI follows Atomic Design.

```
src/
├── components/
│   ├── atoms/        Small, single-purpose elements (Label, Input, Chip, ...)
│   ├── molecules/    Compositions of atoms (FormField, SkillGroup, ...)
│   ├── organisms/    Page sections (Sidebar, ContactSection, ...)
│   └── templates/    Page layouts (MainLayout, ...)
├── config/           Static data (sections, projects)
├── hooks/            Reusable hooks (useTheme, ...)
├── i18n/             i18next setup and translation files (en, ar)
├── lib/              Shared utilities
├── Pages/            Route-level pages (Home, About, Resume, Work, Contact)
├── routes/           Router configuration
├── App.tsx
├── index.css         Design tokens and Tailwind theme
└── main.tsx
```

## Theming

Colors, radii, fonts, and motion values are defined as CSS variables in `src/index.css` and mapped to Tailwind through `@theme inline`. The theme switches through `html[data-theme]`, and the language through `html[lang]`.

## Adding a Page

1. Add its id and path to `src/config/sections.ts`.
2. Create the page in `src/Pages` and register the route in `src/routes`.
3. Add its label and copy to both translation files (`en` and `ar`) in `src/i18n`.

## Contact

- Email: dev.esraa13@gmail.com
- LinkedIn: [linkedin.com/in/esraa-tarek-frontend](https://linkedin.com/in/esraa-tarek-frontend)
- GitHub: [github.com/esraaTarek13](https://github.com/esraaTarek13)