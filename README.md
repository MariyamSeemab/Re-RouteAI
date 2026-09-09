# Re:Route AI — Frontend

An AI conference-navigation frontend for AWS re:Invent 2026, built with React + TypeScript + Vite + Tailwind CSS v4. This is a **frontend-only** app — all data is mocked in `src/lib/mockData.ts`, there is no backend/API.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. The app starts at `/onboarding`.

## Build

```bash
npm run build
npm run preview
```

## What's included

- Full design system (deep navy "AI navigation cockpit" theme, signal-orange accent) in `src/index.css`
- Reusable UI kit: Button, Card, Badge, Modal, Drawer, Tabs, Tooltip, ProgressBar, ProgressRing, Dropdown, SearchInput, FilterChip, Avatar, Toast, Skeleton, EmptyState, ErrorState (`src/components/ui`)
- Agent-specific components: AgentStatus, AgentActivity, AgentExplanation, ApprovalDialog (`src/components/agent`)
- App shell: Sidebar (desktop), Header, MobileNav (bottom nav on mobile) (`src/components/layout`)
- Pages (`src/pages`): Onboarding (6-step wizard), Mission Control, Schedule, Sessions + Session Detail, Learning map, ReRoute, Wayfinder (map + route summary), Journey log, Settings + Accessibility, Agent Activity, Demo mode

## Routes implemented

```
/onboarding
/mission
/schedule
/sessions
/sessions/:id
/learning
/reroute
/wayfinder
/journey
/settings
/settings/accessibility
/agent/activity
/demo
```

## Scope note

The original requirements doc runs to 142 sections covering an extremely wide surface area (full maps/GIS integration, floor maps, shuttle layers, live location tracking, saved places, etc). This build implements the **P0 core experience and full navigation/component scaffolding** with realistic mock data and interaction states, styled to the spec's visual direction, so you have a working, extensible foundation. The Wayfinder page includes a stylized map placeholder (not a real maps/GIS integration) — swapping in a real map provider (Mapbox, Google Maps, or a venue-specific indoor mapping SDK) is the main remaining integration point for the P0/P1 map requirements (sections 120–142 of the spec).
