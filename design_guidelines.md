# Hex-Tech Design Guidelines: Migration & Preservation

## Design Approach
**Reference-Based Preservation**: This is a refactoring project focused on maintaining the existing UI/UX while modernizing the architecture. The design should remain identical to the current implementation.

## Core Design Principles

### 1. Design Preservation Strategy
- Extract all existing styles, components, and layouts from the `client` folder
- Maintain exact visual hierarchy, spacing, and component structure
- Preserve all interactive elements and their behaviors
- Keep identical color schemes, typography, and visual treatments

### 2. Typography System
- Use the same font families currently implemented in the client folder
- Maintain existing font sizes, weights, and line heights
- Preserve text hierarchy and content structure

### 3. Layout & Spacing
- Keep current spacing system from existing CSS
- Maintain responsive breakpoints and grid structures
- Preserve all padding, margins, and component spacing
- Use the same container widths and layout patterns

### 4. Component Library
Migrate existing components with zero visual changes:
- Navigation elements (headers, menus, footers)
- Form inputs and controls
- Cards and content containers
- Buttons and interactive elements
- Modal/overlay components
- Any custom UI elements from the client folder

### 5. Responsive Behavior
- Maintain current mobile/tablet/desktop breakpoints
- Preserve existing responsive layouts and behaviors
- Keep the same navigation patterns across devices

### 6. Asset Management
- Use Heroicons or the icon library currently in use
- Preserve all existing images with Next.js Image optimization
- Maintain any custom SVG graphics or illustrations
- Keep the same asset organization and naming

### 7. Interactions & Animations
- Preserve existing hover states and transitions
- Maintain any scroll behaviors or page transitions
- Keep the same loading states and feedback mechanisms

## Migration Checklist
- Extract all CSS from client folder → consolidate in `app/styles`
- Move components from `client/components` → `app/components` with clear names
- Convert pages to App Router structure while keeping exact same layouts
- Ensure all styling dependencies are properly imported
- Test visual parity at each breakpoint
- Verify all interactive elements work identically

## Critical Note
The goal is **visual preservation, not redesign**. Every component, spacing decision, and visual element should match the existing implementation exactly. Focus on clean code architecture while maintaining design fidelity.