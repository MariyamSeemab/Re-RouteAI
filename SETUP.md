# Re:Route AI — Setup & Running Guide

## Overview

**Re:Route AI** is a modern AI-powered conference navigation frontend built for AWS re:Invent 2026. It provides an intuitive interface for attendees to navigate the conference, manage their schedule, track their learning journey, and receive AI-powered route recommendations.

### Tech Stack
- **Framework**: React 19.2.8
- **Language**: TypeScript 6.0.2
- **Build Tool**: Vite 8.2.2
- **Styling**: Tailwind CSS 4.3.3
- **Routing**: React Router 7.18.3
- **Icons**: Lucide React 1.43.0
- **Data**: Mocked data (no backend/API required)

### Design Theme
- **Primary Color**: Deep Navy (AI navigation cockpit aesthetic)
- **Accent Color**: Signal Orange
- **Style**: Modern, accessibility-focused UI with comprehensive component library

---

## Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd reroute-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:5173/`
   - The app will automatically redirect to the `/onboarding` page

---

## Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript and build for production |
| `npm run lint` | Run Oxlint for code quality checks |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```
reroute-ai/
├── src/
│   ├── assets/              # Static images and SVGs
│   ├── components/          # Reusable components
│   │   ├── agent/          # Agent-specific components
│   │   ├── layout/         # Layout components (AppShell, Header, Sidebar, etc)
│   │   └── ui/             # UI component library (Button, Card, Modal, etc)
│   ├── pages/              # Page components for each route
│   ├── lib/                # Utilities and mock data
│   ├── index.css           # Global styles and design system
│   ├── App.tsx             # Main app component with routing
│   └── main.tsx            # Entry point
├── public/                 # Static public assets
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies
└── index.html              # HTML entry point
```

---

## Application Routes

The app implements the following routes:

| Route | Purpose |
|-------|---------|
| `/` | Root (redirects to `/onboarding`) |
| `/onboarding` | 6-step onboarding wizard |
| `/mission` | Mission Control dashboard |
| `/schedule` | Conference schedule view |
| `/sessions` | Sessions list |
| `/sessions/:id` | Individual session details |
| `/learning` | Learning map visualization |
| `/reroute` | Route optimization interface |
| `/wayfinder` | Map + route summary |
| `/journey` | Journey/activity log |
| `/settings` | User settings |
| `/settings/accessibility` | Accessibility settings |
| `/agent/activity` | AI agent activity monitoring |
| `/demo` | Demo mode |

---

## Component Library

### UI Components (`src/components/ui/`)
- **Button** - Primary action component
- **Card** - Content container
- **Badge** - Status/tag indicator
- **Modal** - Dialog component
- **Drawer** - Side panel component
- **Tabs** - Tab navigation
- **Tooltip** - Hover information
- **ProgressBar** - Linear progress indicator
- **ProgressRing** - Circular progress indicator
- **Dropdown** - Selection menu
- **SearchInput** - Search field with autocomplete
- **FilterChip** - Filter tag component
- **Avatar** - User profile image
- **Toast** - Notification system
- **Skeleton** - Loading placeholder
- **EmptyState** - Empty state UI
- **ErrorState** - Error display

### Layout Components (`src/components/layout/`)
- **AppShell** - Main app container with navigation
- **Sidebar** - Desktop navigation sidebar
- **Header** - Top navigation bar
- **MobileNav** - Bottom navigation for mobile

### Agent Components (`src/components/agent/`)
- **AgentStatus** - Agent status indicator
- **AgentActivity** - Agent activity display
- **AgentExplanation** - Agent explanation panel
- **ApprovalDialog** - Agent action approval dialog

---

## Styling & Design System

### Global Styles (`src/index.css`)
The project uses Tailwind CSS v4 with a custom design system featuring:
- Navy and orange color palette
- Typography system
- Component-specific styles
- Responsive breakpoints
- Dark mode support

### Key Colors
- **Primary Navy**: Deep navigation cockpit aesthetic
- **Accent Orange**: Signal/highlight color
- **Neutrals**: Gray scale for text and backgrounds

---

## Data & Mocking

All data is **mocked** in `src/lib/mockData.ts`:
- Conference sessions
- User schedule
- Learning paths
- Route recommendations
- Agent states and activities

No backend API integration is required. To connect a real API, update the data fetching logic in individual pages.

---

## Development Workflow

### Hot Module Replacement
Changes to `.tsx` and `.css` files are automatically reflected in the browser without full page reloads.

### TypeScript Checking
The project enforces strict TypeScript rules:
- No unused variables or parameters
- Exhaustive switch statements
- Strict null checks

Run type checking:
```bash
npx tsc --noEmit
```

### Linting
Code is linted with Oxlint for consistency and quality:
```bash
npm run lint
```

---

## Building for Production

### Build the project
```bash
npm run build
```

This will:
1. Run TypeScript compilation (`tsc -b`)
2. Bundle the app with Vite
3. Output optimized files to `dist/` directory

### Preview production build
```bash
npm run preview
```

---

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found Errors
Clear node_modules and reinstall:
```bash
rm -r node_modules
npm install
```

### TypeScript Errors
Ensure you're using TypeScript 6.0.2+:
```bash
npm install -D typescript@~6.0.2
```

### Build Issues
Clear Vite cache:
```bash
rm -r node_modules/.vite
npm run build
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Performance Notes

- **Code Splitting**: Routes are lazy-loaded for better performance
- **CSS**: Tailwind CSS is optimized and only includes used classes
- **Assets**: Images are optimized in the `src/assets/` folder

---

## Accessibility

The project includes:
- Dedicated accessibility settings page
- ARIA labels and semantic HTML
- Keyboard navigation support
- High contrast mode support
- Screen reader compatibility

---

## Future Integration Points

### Real Map Integration (Wayfinder)
The Wayfinder page includes a stylized map placeholder. To integrate a real map provider:
- **Options**: Mapbox, Google Maps, or venue-specific indoor mapping SDK
- **Location**: `src/pages/Wayfinder.tsx`
- **Requirements**: API keys and configuration

### API Integration
To connect a real backend:
1. Replace mock data in `src/lib/mockData.ts`
2. Add API client (e.g., axios or fetch)
3. Update data fetching in individual pages
4. Handle loading/error states with existing UI components

---

## Deployment

The built app can be deployed to any static hosting service:
- **Vercel**
- **Netlify**
- **AWS S3 + CloudFront**
- **GitHub Pages**

Deployment command:
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

---

## Contributing

When adding new features:
1. Use existing UI components when possible
2. Follow the established file structure
3. Keep mock data in `src/lib/mockData.ts`
4. Ensure TypeScript strict mode compliance
5. Run linting before committing: `npm run lint`

---

## License

This project is built for AWS re:Invent 2026.

---

## Support

For issues or questions:
1. Check the existing documentation
2. Review the component examples in the UI component files
3. Consult the mock data structure in `src/lib/mockData.ts`

---

**Last Updated**: September 9, 2026  
**Project Version**: 0.0.0
