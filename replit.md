# HEX TECH Portfolio - Next.js Application

## Overview

HEX TECH is a modern portfolio website showcasing futuristic digital solutions, built with Next.js 14+ using the App Router architecture. The application features a dark neon aesthetic with cyan and magenta accents, presenting services in 3D product design, web development, and SaaS products. The site includes a home page, service details, projects showcase, team profiles, and a contact form with backend API integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** Next.js 14+ with App Router
- **Client-Side Rendering:** All interactive components use `'use client'` directive for client-side interactivity
- **Navigation:** Next.js Link components for client-side routing with no server-side rendering
- **Pages:** File-based routing in `/app` directory with page.tsx files for routes
- **Component Organization:** Reusable UI components in `/app/components` directory, shadcn/ui components in `/app/components/ui`

**State Management & Data Fetching:**
- **TanStack Query (React Query):** Client-side data fetching and caching with custom configuration
- **Forms:** React Hook Form with Zod validation via @hookform/resolvers
- **Toast Notifications:** Custom toast system using Radix UI primitives

**UI Component System:**
- **shadcn/ui:** Comprehensive component library built on Radix UI primitives
- **Styling:** Tailwind CSS with custom theme configuration
- **Design System:** Dark mode only with neon cyan (#189 100% 60%) and neon magenta (#328 100% 65%) accent colors
- **Typography:** Inter, Space Grotesk, and JetBrains Mono fonts loaded via Next.js font optimization

### Backend Architecture

**Server Framework:** Express.js (legacy structure, transitioning to Next.js)
- **API Routes:** RESTful endpoints prefixed with `/api`
- **HTTP Server:** Node.js HTTP server created via Express
- **Middleware:** JSON body parsing, URL encoding, request logging

**Data Layer:**
- **In-Memory Storage:** MemStorage class implementing IStorage interface for development
- **Schema Definition:** Drizzle ORM with PostgreSQL schema definitions in `/shared/schema.ts`
- **Type Safety:** Full TypeScript types generated from Drizzle schemas

**Current API Endpoints:**
- `POST /api/contact` - Contact form submission endpoint (stores messages in memory)

### Design System

**Color Palette:**
- Background: `220 6% 8%` (deepest dark)
- Neon Cyan Primary: `189 100% 60%`
- Neon Magenta Secondary: `328 100% 65%`
- Card/Surface: `220 6% 10%` to `220 6% 14%`
- Borders: `220 6% 18%` to `220 6% 24%`

**Layout Principles:**
- Max container width: 7xl (1280px)
- Mobile-first responsive design with Tailwind breakpoints
- Glassmorphism effects and neon glow shadows
- Hexagon clip-path shapes for branding elements

**Animation & Interactions:**
- Hover elevation effects via custom CSS utilities
- Fade-in animations for hero section
- Transform transitions on cards (hover lift effect)
- Neon glow effects on primary CTAs

### Project Structure Patterns

**Dual Architecture (Transitioning):**
- `/app` - Next.js App Router application (primary)
- `/client` - Legacy Vite/React SPA (deprecated, minimal content)
- `/server` - Express server (being phased out for Next.js API routes)
- `/shared` - Common schemas and types used across client/server

**Path Aliases:**
- `@/*` - Maps to `/app/*`
- `@components/*` - Maps to `/app/components/*`
- `@lib/*` - Maps to `/app/lib/*`
- `@hooks/*` - Maps to `/app/hooks/*`
- `@assets/*` - Maps to `/attached_assets/*`
- `@shared/*` - Maps to `/shared/*`

## External Dependencies

### Database & ORM
- **Drizzle ORM:** Schema definition and type generation for PostgreSQL
- **@neondatabase/serverless:** PostgreSQL driver for Neon serverless database
- **Configuration:** drizzle.config.ts expects DATABASE_URL environment variable
- **Migrations:** Output to `/migrations` directory via `npm run db:push`

### UI Component Libraries
- **Radix UI Primitives:** Unstyled, accessible component primitives (20+ packages including Dialog, Dropdown, Toast, Accordion, etc.)
- **shadcn/ui:** Pre-styled component system built on Radix UI
- **Lucide React:** Icon library for UI elements
- **class-variance-authority:** Type-safe variant styling
- **cmdk:** Command palette component

### Form & Validation
- **React Hook Form:** Form state management and validation
- **Zod:** Schema validation library
- **@hookform/resolvers:** Zod resolver integration for React Hook Form
- **drizzle-zod:** Automatic Zod schema generation from Drizzle schemas

### Data Fetching & State
- **TanStack Query (v5):** Async state management and caching
- **Custom Configuration:** Disabled window focus refetch, infinite stale time, no retries

### Styling & Utilities
- **Tailwind CSS:** Utility-first CSS framework with custom theme
- **PostCSS:** CSS processing with Autoprefixer
- **clsx + tailwind-merge:** Conditional className utilities via cn() helper

### Fonts
- **Next.js Font Optimization:** Google Fonts loaded via next/font/google
- **Typefaces:** Inter (sans), Space Grotesk (sans alt), JetBrains Mono (mono)

### Development Tools
- **TypeScript:** Strict mode enabled with ES2020 target
- **ESLint:** Next.js core-web-vitals configuration
- **Vite:** Legacy build system for client folder (deprecated)

### Third-Party Services
- **Contact Form Backend:** Currently stores to in-memory storage, designed for PostgreSQL persistence
- **No Authentication:** User schema exists but authentication not implemented
- **No Email Service:** Contact form submissions logged to console