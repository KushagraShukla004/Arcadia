# Arcadia — Living Wallpaper

Personal project. A painterly, animated living-wallpaper web app built with Vite + React + TypeScript.

## Git Workflow

- `main` — stable, always builds. Never commit directly to it.
- `feat/<name>` — one branch per feature, cut from `main`.
- Flow: `git checkout -b feat/<name>` → implement → verify build → merge to `main` → push.
- Remote: https://github.com/KushagraShukla004/Arcadia

## Commit Style

- Never include `Co-Authored-By: Claude ...` or any AI attribution lines in commit messages.

## Build

```bash
npm run dev     # dev server at http://localhost:5173
npm run build   # production build
```

## Phase 0 Scope

Minimal spike: parallax layers, day/night tint overlay, drifting clouds, dev time scrubber.
No widgets, no data, no routing, no backend. See the build spec for full details.

## Adding Real Art

Drop PNGs into `public/layers/` and set `src: "/layers/<id>.png"` on the matching entry in
`src/scene/layers.ts`. No other code changes needed.
