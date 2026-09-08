# ethanlew.dev

Personal site for Ethan Lew. A retro-Mac-styled portfolio built with [Astro](https://astro.build). Live at [ethanlew.dev](https://ethanlew.dev).

## Stack

- [Astro 7](https://docs.astro.build) (static output, `./dist/`)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- TypeScript (strict, `astro check`)
- [oxfmt](https://github.com/oxc-project/oxc) + [Prettier](https://prettier.io) (`.astro` files only) for formatting
- [oxlint](https://oxlint.dev) for linting
- Cloudflare serves `./dist` per `wrangler.jsonc`, so no deploy workflow is needed

## Project structure

```text
/
├── public/                  # static assets
├── src/
│   ├── components/macos/    # retro-Mac UI (Window, Titlebar, MenuBar, …)
│   ├── layouts/             # MacDesktop layout
│   ├── pages/               # index, about-site, projects, contact, resume
│   ├── styles/              # global Tailwind CSS
│   └── site.ts              # shared site constants (links, URLs)
├── astro.config.mjs
├── wrangler.jsonc           # Cloudflare assets: ./dist
└── .github/workflows/       # CI checks (format/lint)
```

## Commands

Requires [pnpm](https://pnpm.io) (see `packageManager` in `package.json`).

| Command             | Action                                         |
| :------------------ | :--------------------------------------------- |
| `pnpm install`      | Install dependencies                           |
| `pnpm dev`          | Start local dev server at `localhost:4321`     |
| `pnpm build`        | Typecheck (`astro check`) + build to `./dist/` |
| `pnpm preview`      | Preview the production build locally           |
| `pnpm lint`         | Lint and autofix with oxlint                   |
| `pnpm format`       | Format (oxfmt + Prettier for `*.astro`)        |
| `pnpm format:check` | Check formatting without writing (same as CI)  |

## Format / lint

- `oxfmt` formats everything except `*.astro` (see `.oxfmtrc.json`).
- `prettier-plugin-astro` formats `*.astro` files.
- `oxlint` lints (see `oxlint.config.ts`).
- Husky + lint-staged run the same tools on commit.

CI (`.github/workflows/check.yml`) runs on every push and PR: `oxfmt --check`, `prettier --check '**/*.astro'`, `oxlint`, and `astro check`.
