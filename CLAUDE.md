# react-todolist

A React todo list application built with React 19, TypeScript, Vite, and Tailwind CSS v4. Currently in the UI component construction phase — `App.tsx` is used as a component showcase/sandbox.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (with `vite-plugin-svgr` for SVG imports as React components)
- **Tailwind CSS v4**
- No component libraries — all UI is built from scratch

## Project structure

```
src/
├── assets/icons/        # SVG icons (imported via ?react suffix)
├── components/          # UI components
│   ├── variants/        # Styling constants for each component (no CVA)
│   └── *.tsx            # Component files
└── App.tsx              # Component showcase (dev sandbox)
```

## Existing components

| Component | File |
|-----------|------|
| Icon | `src/components/icon.tsx` |
| Text | `src/components/text.tsx` |
| Badge | `src/components/badge.tsx` |
| Button | `src/components/button.tsx` |
| ButtonIcon | `src/components/buttonIcon.tsx` |

## Rules

Project-specific coding rules are in `.claude/rules/`:

- **`components.md`** — patterns and conventions for creating UI components (variant objects, class name composition, TypeScript typing)
