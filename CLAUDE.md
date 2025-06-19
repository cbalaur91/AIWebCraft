# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AIWebHub is a modern web agency website built with Next.js 15, TypeScript, and TailwindCSS. The site features a dark theme design with gradient elements and animations, showcasing web development services with sections for hero, services, process, testimonials, and contact.

## Development Commands

```bash
# Development server
npm run dev

# Production build (configured for static export)
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Architecture & Structure

### Core Framework
- **Next.js 15** with App Router (app/ directory structure)
- **TypeScript** for type safety
- **TailwindCSS** with CSS variables for theming
- **Static export** configuration (output: 'export' in next.config.js)

### UI Component System
- **shadcn/ui** components in `components/ui/`
- **Radix UI** primitives for accessibility
- **Framer Motion** for animations
- **Lucide React** for icons

### Key Directories
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `components/ui/` - shadcn/ui component library
- `lib/` - Utility functions (primarily `utils.ts` with cn() function)
- `hooks/` - Custom React hooks
- `public/` - Static assets including video background

### Component Architecture
- Uses client components (`"use client"`) for interactive elements
- Consistent gradient theming: `from-blue-600 via-purple-600 to-pink-600`
- Dark background theme with `bg-[#111111]` base
- Motion animations with staggered delays

### Path Aliases
Uses `@/` prefix for imports:
- `@/components` → components/
- `@/lib` → lib/
- `@/hooks` → hooks/

### Styling Approach
- TailwindCSS with custom CSS variables
- Dark mode ready with `darkMode: ['class']`
- Custom animations and keyframes
- Responsive design patterns

## Key Technical Details

### Next.js Configuration
- Static export mode for deployment
- ESLint disabled during builds
- Unoptimized images for static export

### TypeScript Setup
- Strict mode enabled
- Next.js plugin integration
- Path mapping configured for `@/*`

### Component Patterns
- Page components import and compose section components
- Consistent button styling with gradient backgrounds
- Video background with overlay patterns
- Form handling with react-hook-form and zod validation