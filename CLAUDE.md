# Disaster-Categories

Portfolio project: a disaster-preparedness shopping app. Users pick a disaster category (Fire, Heat Wave, Flood, Hurricane, Winter, Tornado) and browse products with filter, sort, infinite scroll, a cost show/hide toggle, product modals, a cart, and a clearance page.

## Rules
- Written from scratch from a feature list. Never copy code, names, data, URLs, or branding from any employer project.
- All product data is made up (generated JSON served by MSW).

## Stack
- Vite + React + TypeScript
- Redux Toolkit: RTK Query for product data; slices for filters, cart, UI settings
- React Router (filters/sort mirrored in the URL)
- Tailwind CSS. Theme: navy `#1E3A5F`, safety orange `#F97316`
- MSW (Mock Service Worker) for the mock API
- Vitest + React Testing Library
- Deploy target: Vercel

## Build plan
1. Scaffold Vite + TS, add Tailwind, Redux Toolkit, Router, MSW
2. Mock data + MSW handlers (filter, sort, pagination)
3. Home page with disaster tiles
4. Category page: product cards + infinite scroll
5. Filter drawer + sort sheet
6. Cost toggle, status badges, "other sizes" / "other locations" modals
7. Cart + clearance pages
8. Tests, README, deploy

## How to work with the user
- Keep replies short and concise.
- The user is new to Tailwind, React Router, MSW, and RTK Query.
- Build ONE file (or one section of a file) at a time. Explain any new concept in plain English when it first appears, then wait for the user to say "next" before continuing.
- Commit only when the user asks.

## Progress
- [x] Folder created, git initialized (branch `main`)
- [x] Step 1: scaffold (Vite, Tailwind theme, Redux store, React Router placeholder routes, MSW with test `/api/hello` handler)
- [ ] Step 2: mock data + MSW handlers
