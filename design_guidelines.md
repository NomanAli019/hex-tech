# HEX TECH Portfolio - Next.js Conversion Design Guidelines

## Design Approach
**Reference-Based Conversion**: Preserve 100% of existing UI/UX while enhancing the dark neon + dark pink aesthetic. This is a direct port with theme refinement, not a redesign.

## Core Design Principles
1. **Exact UI Preservation**: All layouts, components, and interactions remain identical
2. **Enhanced Neon Theme**: Amplify existing neon cyan + dark pink color scheme
3. **Client-Side Navigation**: Use Next.js Link components with no server-side rendering
4. **Mobile-First Responsiveness**: Maintain all existing breakpoints and mobile interactions

## Color System Enhancement

### Primary Neon Colors
- **Neon Cyan**: `hsl(189 100% 60%)` - primary accent, glows, CTAs
- **Neon Magenta/Dark Pink**: `hsl(328 100% 65%)` - secondary accent, alternating glows
- **Neon Gold**: `hsl(45 100% 60%)` - tertiary accent (minimal use)

### Dark Background Palette
- **Primary Background**: `hsl(220 6% 8%)` - deepest dark
- **Card Background**: `hsl(220 6% 10%)` - slightly elevated
- **Sidebar Background**: `hsl(220 6% 12%)` - navigation surfaces
- **Border/Dividers**: `hsl(220 6% 18%)` to `hsl(220 6% 24%)`

### Foreground & Text
- **Primary Text**: `hsl(220 6% 92%)` - high contrast white
- **Muted Text**: `hsl(220 8% 68%)` - secondary information
- **Gradient Text**: Linear gradient from neon cyan to neon magenta for headings

## Typography System
**Preserve Existing Hierarchy**:
- **Display (Hero)**: 5xl to 8xl, bold, tracking-tighter, gradient-text-neon
- **H1 (Page Titles)**: 5xl to 6xl, bold, tracking-tighter, gradient-text-neon
- **H2 (Sections)**: 4xl to 5xl, bold, tracking-tighter
- **H3 (Cards)**: xl to 2xl, bold, tracking-tight
- **Body**: base to lg, regular weight, leading-relaxed
- **Labels/Tags**: xs to sm, font-mono, uppercase, tracking-wider

**Font Stack** (via Google Fonts):
- Sans: Inter, Space Grotesk, system-ui
- Mono: JetBrains Mono, Fira Code, Menlo

## Layout System
**Spacing Primitives** (Tailwind units): 2, 4, 6, 8, 12, 16, 20, 24, 32

**Container Widths**:
- Max-width: 7xl (1280px) for all sections
- Padding: px-4 sm:px-6 lg:px-8 (responsive)

**Section Padding**:
- Standard sections: py-16 to py-24
- Hero section: min-h-screen with py-32

## Component Specifications

### Navigation (Fixed Header)
- Fixed top, glassmorphism backdrop
- Logo: Hexagonal clip-path with neon cyan/magenta gradient glow
- Desktop: Horizontal menu with ghost buttons
- Mobile: Hamburger menu with slide-down animation
- Active state: Neon cyan text with glow
- Height: h-16 with border-bottom

### Hero Section
- Full viewport height (min-h-screen)
- Background: Hero image (futuristic/tech) with gradient overlay (bg-background/60 to bg-background)
- Hexagonal pattern overlay (opacity-10)
- Content: Centered text with gradient heading, two CTA buttons
- Stats grid: 2x2 on mobile, 4 columns on desktop
- Primary CTA: Neon cyan background with glow
- Secondary CTA: Glassmorphism with neon cyan border

### Service/Feature Cards
- Grid: 1 column mobile, 3 columns desktop (md:grid-cols-3)
- Card styling: p-8, hover-elevate, border-card-border
- Icon container: 64px square, rounded-md, gradient background (cyan/magenta at 20% opacity), neon glow
- Hover effect: -translate-y-2 with duration-300
- Transition: all duration-300

### Products Section
- Alternating layout: Left/right content swap per product
- 2-column grid on desktop (md:grid-cols-2)
- Border: 2px with neon glow (cyan for Clashey, magenta for Office Boy)
- Feature lists: CheckCircle2 icons with matching neon color
- CTA buttons: Full neon background with glow

### Projects Gallery
- Category filters: Pill buttons with active state (neon cyan background + glow)
- Grid: 1 column mobile, 2 tablet, 3 desktop (lg:grid-cols-3)
- Cards: Aspect-video placeholder with hexagonal pattern, project info below
- Hover: Elevate + translate-y-2

### Team Carousel
- Horizontal auto-scroll with duplicated cards for infinite effect
- Cards: 320px fixed width (flex-shrink-0), neon cyan border + glow
- Avatar: Circular gradient background with initials
- Pause on hover interaction
- Gradient fade edges (left/right 80px)

### Footer (Contact Section)
- 2-column layout: Contact form | Contact info
- Form inputs: bg-background/50, standard borders
- Submit button: Neon cyan with glow
- Contact icons: MapPin, Phone, Mail in neon cyan

## Visual Effects

### Neon Glow System
```
Cyan Glow: 0 0 10px (30%), 0 0 20px (20%), 0 0 30px (10%)
Magenta Glow: Same pattern with magenta color
```

### Glassmorphism
- Background: rgba blur with border
- Backdrop-filter: blur(10px) saturate(180%)

### Hexagonal Elements
- Logo icon: Custom clip-path hexagon
- Pattern overlays: SVG hexagon grid

### Gradient Text
- Background: linear-gradient(135deg, neon-cyan, neon-magenta)
- Webkit-background-clip: text
- Text-fill-color: transparent

## Animations
**Minimal & Purposeful**:
- Page transitions: None (instant client-side navigation)
- Hover states: translate-y-2, duration-300
- Team carousel: Smooth auto-scroll using requestAnimationFrame
- Mobile menu: Slide-down with animate-slide-up
- No scroll-triggered animations

## Mobile Responsiveness
**Breakpoints** (Tailwind defaults):
- sm: 640px
- md: 768px  
- lg: 1024px

**Mobile Adaptations**:
- Navigation: Hamburger menu replaces horizontal nav
- Hero stats: 2x2 grid instead of 4 columns
- Service cards: Stack vertically (1 column)
- Product layouts: Single column, no alternating
- Projects: 1 column grid
- Team carousel: Maintain horizontal scroll
- Footer: Stack form above contact info

## Images
**Hero Background**: Large futuristic/tech-themed image showing digital interfaces, neon circuits, or abstract tech visualization. Should be dark-toned with cyan/magenta color hints. Positioned as full-width background with gradient overlay for text readability.

**Project Placeholders**: Aspect-video containers with hexagonal pattern overlay and centered hexagon icon (gradient cyan/magenta).

**Team Avatars**: Circular gradient backgrounds (cyan/magenta at 20% opacity) with initials in gradient text.

## Accessibility
- Maintain color contrast ratios (neon colors on dark backgrounds)
- Focus states: ring-2 ring-neon-cyan with offset
- Keyboard navigation: All interactive elements accessible
- ARIA labels: Preserved from existing implementation

## Technical Specifications
- Framework: Next.js 14+ App Router
- Styling: Tailwind CSS with custom CSS variables
- Icons: Lucide React (already in use)
- Fonts: Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- Client Components: All components use "use client" directive
- Navigation: next/link with client-side routing only
- No server components or SSR features