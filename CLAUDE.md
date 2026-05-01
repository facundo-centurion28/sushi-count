# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Vite, hot reload)
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Architecture

Single-screen React + Vite app. All state lives in `src/App.jsx`. There is no router, no global store, no backend.

**Key files:**
- `src/App.jsx` — root component; owns the `count` state, toast logic, ripple animations, and localStorage persistence
- `src/App.css` — all keyframe animations and component styles (BEM-style class names)
- `src/SushiSVG.jsx` — hand-drawn salmon nigiri SVG (inline, no external assets)
- `src/IOSDevice.jsx` — iOS 26 "Liquid Glass" device frame: `IOSDevice` wrapper with dynamic island, status bar, and home indicator

**Design system:** sakura pink (`#e8b4c0`, `#d49aac`), cream (`#fff8f5`→`#f8eef8`), mauve text (`#3d2030`), muted rose accents (`#c4a0ae`). Fonts: Cormorant Garamond (serif, counters/labels) + DM Sans (UI).

**Animations (all in `App.css`):**
- `sushiBounce` — sushi floats up/down on loop
- `floatPetal` — 12 sakura petals rise from bottom
- `numberPop` — count number scales on each tap
- `pulseGlow` — + button radiates a soft pink glow
- `sparkle` — ✦ decorators fade in/out around the sushi

**Persistence:** `localStorage` key `sushi-count` — read once on mount via `useState` initializer, written on every count change via `useEffect`.
