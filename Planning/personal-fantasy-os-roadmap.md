# Personal Fantasy OS — Project Roadmap

*A living wallpaper + personal dashboard that grows a world out of your real life.*

---

## North star

**Build a beautiful personal dashboard that happens to be alive — then grow a world out of it.**

Not "build a game." The dashboard is the thing opened every day; it validates the whole
data + animation + wallpaper pipeline. The living kingdom is a content project bolted onto a
proven engine *later*. Every phase below protects that ordering.

The guiding feeling, in every state: **calm and rewarding, never demanding.**

---

## Decisions already locked

These are settled — no need to re-litigate when picking the project back up:

- **Wallpaper host:** Plash (macOS). Interaction handled via Plash's **Browser Mode** toggle.
  The default on-screen state is the *locked/idle* one, so idle visuals are what show ~95% of the time.
- **Structure:** Two pages sharing one foundation — `Home/Office` first, `Adventure` later as a
  separate project. Shared machinery (data, idle-detection, theming, asset loader, render engine)
  factored into a common module from day one so Adventure reuses it.
- **Core interaction pattern:** Idle by default (ambient self-animation); wake into interactivity
  on engagement; fade back to calm after ~10s of no input.
- **Art direction:** Smooth, high-quality, cute — **painterly "Ghibli atmosphere," not pixel art.**
  Warm light, soft depth, inhabited backgrounds. Build original characters/world (chase the *feeling*,
  not the trademark).
- **Performance is a first-class constraint:** runs all day behind everything. Lightweight always wins.

---

## The phases

### Phase 0 — Prove the loop *(a weekend)*

The cheapest possible test that the concept feels good.

- One painterly parallax scene (layered background, mouse-driven drift).
- A day/night color tint that follows the real clock.
- One ambient idle touch (drifting clouds, fog, or a looping character).
- Running inside Plash as the actual wallpaper.

**Gate:** Does this genuinely feel good sitting behind your windows all day?
→ Yes: continue. → No: you've spent two days, not two months.

---

### Phase 1 — The Home/Office dashboard *(the real v1)*

The thing used every working day.

- Cozy-room scene as the backdrop.
- Real widgets layered on: clock, weather, calendar, GitHub streak, today's tasks.
- The idle/active state machine (fade chrome when idle, restore on interaction via Browser Mode).
- The Home-vs-Office variant.
- Authenticate private data (e.g. calendar) in Browser Mode; the locked wallpaper reads what's
  already fetched.

**Gate:** Use it as your daily wallpaper for 2–3 weeks. The rough edges only show up when you live with it.

---

### Phase 2 — Make it subtly alive *(gamification-lite)*

Let real data visibly change the scene — sparingly.

- A handful of mappings only (e.g. a commit lights a window, a finished task grows the plant,
  a streak brightens the sky). Resist building a full economy.
- Decide the core rule **on purpose**: does neglect cause gentle decay, or does the world stay neutral?
- Light stats/progress surfaced.

**Gate:** The "alive" feedback feels motivating, not nagging.

---

### Phase 3 — Adventure mode *(the "next project")*

The living-kingdom diorama as a separate page sharing the Phase 1–2 engine.

- Mostly **art + content + the resource → world mapping**, not new plumbing.
- The renderer, data layer, and Plash workflow are already battle-tested by now, so this is the
  fun part rather than a from-scratch build.
- Define the resource mapping (e.g. coding → knowledge crystals, gym → strength, reading → wisdom,
  content → influence, savings → gold).

**Gate:** It's a place worth panning around in — alive, not busy.

---

### Phase 4 — Someday *(optional)*

Only after Phase 3 ships and has been lived with.

- More scenes; seasons and birthday/festival events.
- Deeper customization.
- Possibly sharing it with others (note: that's a very different project — accounts, onboarding,
  asset licensing — don't design for it until you want it).

---

## Inspiration shortlist

**Mechanics (gamification):**
- Habitica — genre reference for task → reward loops.
- LifeUp — sandbox where *you* define skills/resources/rewards (closest to the custom-resource idea).

**The "alive world from real work" loop:**
- Finch — cute, smooth (non-pixel) companion + self-care.
- Forest — illustrated grow-a-thing focus loop.
- Focus Grove — world reacts to focus vs break time.

**Atmosphere / painterly 2D mood (the look to aim for):**
- Alto's Odyssey, Sky: Children of the Light — gold standard for hazy, warm, layered parallax depth.
- Rive community showcase — smooth, lightweight, cute web character animation.

**The Home/Office dashboard layer:**
- Dashy, darekkay/dashboard — widget dashboards / startpages; good models for the Home-vs-Office split.

---

## Working principles

- Ship each phase and **live with it** before starting the next.
- Keep the idle state cheap; lazy-load the heavier interactive layer.
- Lock an art "style bible" early (palette, light, character descriptors) to keep the world cohesive.
- Optimize background art aggressively; let atmosphere (tint, fog, particles) do the "alive" work
  rather than repainting frames.

---

## Not in this doc (on purpose)

Technical specifics — render engine, animation tooling, the Phase 0 spike setup, and the
shared-module boundary — are deferred until the build starts. *Next conversation.*
