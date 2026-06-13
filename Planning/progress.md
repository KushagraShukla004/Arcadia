# Arcadia — Build Progress

> Tracks completion against the phases in `personal-fantasy-os-roadmap.md`.
> Updated manually as work lands. Mark items `[x]` when done and verified in-browser.
> **Always `git fetch` before judging status** — completed work may be merged on the remote but not yet pulled locally.

---

## Phase 0 — Prove the loop *(spike)* — ✅ COMPLETE

**Goal:** Does a parallax painterly scene with day/night tint feel good running behind windows all day?

Merged to `main` via PR #1 (`feat/phase0-animation`, commit `aa217f1`). Production build passes.

### Built

- [x] Project scaffolded (Vite + React + TypeScript, no extra runtime deps)
- [x] Viewport fills 100vw × 100vh, no scrollbars
- [x] `scene/layers.ts` — 5-layer config with depth + `src?` swap hook
- [x] `scene/Scene.tsx` — back-to-front layers, SVG/polygon placeholder art, parallax wired in
- [x] `hooks/useParallax.ts` — mouse + idle drift → per-layer transforms (single rAF loop)
- [x] `hooks/useTimeOfDay.ts` — clock/override → tint rgba
- [x] `components/TintOverlay.tsx` — full-screen blended day/night tint
- [x] `components/DevTimeScrubber.tsx` — dev-only hour override slider
- [x] `lib/lerp.ts` — numeric helpers
- [x] Drifting clouds (seamless loop)
- [x] Real-art swap path: drop `public/layers/<id>.png` + set `src` — no other code changes

### Remaining check (owner)

- [x] **Gate:** run inside Plash as the actual wallpaper for a day — does it genuinely feel good behind your windows? Yes → Phase 1. No → cheap lesson, two days not two months.
Ans: Yes it feels good.

---

## Phase 1 — Home/Office dashboard *(v1)* — NOT STARTED

Blocked on the Phase 0 Plash gate.

Planned scope (from roadmap):
- Cozy-room scene as backdrop
- Widgets: clock, weather, calendar, GitHub streak, today's tasks
- Idle/active state machine (fade chrome when idle, restore on interaction via Plash Browser Mode)
- Home vs Office variant
- Auth for private data in Browser Mode; locked wallpaper reads cached fetch

**Gate:** use it as your daily wallpaper for 2–3 weeks.

---

## Phase 2 — Make it subtly alive — NOT STARTED

Blocked on Phase 1 gate.

- Real-data → scene mappings (commit lights a window, task done grows the plant, streak brightens sky)
- Decide decay rule: gentle neglect decay vs neutral world
- Light stats/progress surfaced

**Gate:** the "alive" feedback feels motivating, not nagging.

---

## Phase 3 — Adventure mode — NOT STARTED

Blocked on Phase 2 gate.

- Living-kingdom diorama as a separate page sharing the Phase 1–2 engine
- Resource mapping: coding → knowledge crystals, gym → strength, reading → wisdom, content → influence, savings → gold
- Mostly art + content; plumbing already proven

**Gate:** it's a place worth panning around in — alive, not busy.

---

## Phase 4 — Someday — NOT STARTED

Deferred until Phase 3 has been lived with.

- More scenes, seasons, birthday/festival events
- Deeper customization
- Possible sharing (a new project — accounts, onboarding, asset licensing)
