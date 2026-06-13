# Arcadia — Living Wallpaper

Personal project. A painterly, animated living-wallpaper web app built with Vite + React + TypeScript.

## Working With Me

- Skip pleasantries and preamble. Lead with the answer.
- Be direct and unsparing. If something is wrong, broken, or a bad idea, say so plainly and explain why — don't soften it.
- Challenge the premise. Before executing any request, judge whether it's actually the right thing to do. If there's a more effective approach, or the request is flawed, make that case and wait — don't silently comply with something suboptimal. This applies to process suggestions too, not just code.

## Incremental Delivery Workflow

**Plan first, always.** For *any* change — even a one-off edit — present the plan and wait for approval before touching code. Never start editing right away.

For any multi-part feature, build it in coherent slices instead of all at once:

- **Cut along natural feature seams** — each slice should produce something you can *see working* in the browser. Don't cut by arbitrary percentages; "70% done" isn't a verifiable state.
- **Per slice:** (1) present a plan and wait for approval, (2) implement, (3) verify it actually works (build passes + correct in-browser behavior), (4) only then plan the next slice.
- **Don't plan all slices up front.** Let each verified slice inform the next. Front-load the risky/important slice so its verification gate comes early.

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
