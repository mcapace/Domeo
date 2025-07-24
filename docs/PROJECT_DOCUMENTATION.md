# Domeo - Complete Project Documentation

## Project Overview
Domeo is a sophisticated dating platform with 5 distinct communities (domes) where users create one verified profile to access multiple purpose-driven spaces.

## Current Status
- ✅ Premium homepage completed
- ✅ Custom design system implemented
- ✅ All emojis replaced with custom SVG icons
- ✅ Responsive design
- ✅ Animations and interactions
- 🔲 Internal pages (login, signup, dashboard)
- 🔲 Authentication system
- 🔲 Profile creation flow

## Design System

### Color Palette
```typescript
// tailwind.config.ts
colors: {
  // Sophisticated neutrals
  'domeo-black': '#0A0A0A',
  'domeo-charcoal': '#1A1A1A',
  'domeo-gray': {
    900: '#1F1F1F',
    800: '#2A2A2A',
    700: '#404040',
    600: '#525252',
    500: '#737373',
    400: '#A3A3A3',
    300: '#D4D4D4',
    200: '#E5E5E5',
    100: '#F5F5F5',
    50: '#FAFAFA',
  },
  // Single accent color
  'domeo-accent': '#6B46C1',
  'domeo-accent-muted': '#9333EA20',
}
```

### Typography
- **Font**: Inter (weights: 200, 300, 400, 500, 600, 700)
- **Headers**: `font-extralight`, `tracking-[-0.03em]`
- **Body**: `font-light`, `tracking-[-0.01em]`
- **Buttons**: `uppercase`, `tracking-[0.2em]`

### Key Design Principles
- **Monochrome with single accent** - Inspired by Raya/The League
- **No emojis** - All custom SVG icons
- **Minimal animations** - Subtle, elegant transitions
- **White space** - Generous padding and margins
- **Thin line icons** - `strokeWidth="1"` for elegance

## Components Created

### 1. Logo Component (`src/components/Logo.tsx`)
```typescript
interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  className?: string;
  linkToHome?: boolean;
}
```
**Features**: Image logo with text fallback, multiple sizes

### 2. Navigation (`src/components/Navigation.tsx`)
- Sticky navigation with scroll effects
- Transparent → white background on scroll
- Links: How It Works, Safety, Membership, Sign In

### 3. TrustBar (`src/components/TrustBar.tsx`)
- Appears on scroll after 100px
- Custom SVG icons for trust indicators
- "2,847 founding spots left" with pulse animation

### 4. DomeIcons (`src/components/DomeIcons.tsx`)
All custom SVG icons:
```typescript
export const DomeIcons = {
  connect: // Overlapping circles
  explore: // Star constellation
  social: // Network nodes
  professional: // Minimal briefcase
  private: // Keyhole design
}

export const TrustIcons = {
  founding: // Target dot
  verified: // Checkmark circle
  communities: // Grid pattern
  fresh: // Clock design
}
```

## Page Structure

### Homepage Sections (`src/app/page.tsx`)

#### Hero Section
- Minimal gradient background (very subtle)
- Large "Your Domes Await" headline
- Single accent color on "Await"
- CTA: "Claim Founding Membership"

#### Trust Indicators
- 5,000 Founding members
- 100% Verified
- 5 Communities
- 2024 Fresh Start

#### How Domeo Works
- 3 steps with circular badges
- Create Profile → Choose Domes → Connect

#### Five Domes Showcase
- **Connect** (Dating)
- **Explore** (Alternative lifestyles)
- **Social** (Platonic)
- **Professional** (Networking)
- **Private** (Discreet)

#### Comparison Section
- The Old Way vs The Domeo Way
- Custom icons for each point
- Red accents for problems, purple for solutions

#### Everyone Welcome / Everyone Verified
- Split section design
- Badge pills for features

#### Testimonials
- 3 columns with quotes
- Minimal card design

#### Founding Member CTA
- Black background with dot pattern
- Progress bar (43% filled)
- "3 Months Free" prominent

#### Footer
- 4 column layout
- Minimal link styling

## Key CSS Classes

### Animations
```css
.animate-fade-in
.animate-fade-up 
.animate-slide-down
.animate-shimmer
.animate-gradient
.animate-float
```

### Utilities
```css
.hover-lift - Cards that lift on hover
.shadow-elegant - Sophisticated shadows
.text-balance - Better text wrapping
```

## File Structure
```
domeo-new/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Logo.tsx          # Logo component
│   │   ├── Navigation.tsx    # Nav bar
│   │   ├── TrustBar.tsx      # Trust indicators
│   │   └── DomeIcons.tsx     # All custom icons
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   └── images/
│       └── logo/             # Logo files
├── tailwind.config.ts        # Tailwind configuration
└── next.config.js            # Next.js configuration
```

## Current State Summary
The homepage is complete with:
- Sophisticated monochrome design
- All custom SVG icons (no emojis)
- Smooth animations and transitions
- Mobile responsive
- Accessibility considerations
- Premium feel matching Raya/The League

## Next Steps to Build

### 1. Authentication Pages
- `/login` - Minimal login form
- `/signup` - Multi-step signup flow
- `/verify` - Phone/email verification

### 2. Profile Creation Flow
- Basic info (name, age, location)
- Photo upload with AI verification
- Dome selection
- Interests/preferences per dome

### 3. Dashboard
- Dome switcher
- Matches per dome
- Messages interface
- Settings

### 4. Dome-Specific Pages
- Different UI themes per dome
- Unique features per community
- Privacy controls

## How to Continue This Project
When starting a new chat, share:
- "I'm building Domeo, a sophisticated dating app with 5 communities"
- "We've completed the premium homepage with custom SVG icons"
- "Using monochrome design with purple accent (#6B46C1)"
- "Next.js 14, TypeScript, Tailwind CSS"
- Reference this documentation file

## Git Commands
```bash
# Save current state
git add .
git commit -m "Complete premium homepage with documentation"
git push

# When resuming
git pull
npm install
npm run dev
```

## Important Design Decisions Made
- **Removed all rainbow gradients** → Single accent color
- **Replaced ALL emojis** → Custom SVG icons
- **Bright colors** → Muted, sophisticated palette
- **Playful** → Premium, exclusive feel
- **Heavy shadows** → Subtle, elegant shadows
- **Thick icons** → Thin line art (`strokeWidth="1"`)

## Custom SVG Icon Pattern
All icons follow this pattern:
```jsx
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path stroke="currentColor" strokeWidth="1" />
</svg>
```

## Technical Stack
- **Framework**: Next.js 15.4.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Icons**: Custom SVG
- **Animations**: CSS keyframes + Tailwind utilities

## Performance Optimizations
- Image optimization in `next.config.ts`
- CSS optimization with `experimental.optimizeCss`
- Font optimization with Next.js font system
- Lazy loading for animations

## Accessibility Features
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Touch targets minimum 44px
- High contrast ratios
- Screen reader friendly

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

---

**Last Updated**: December 2024  
**Next Task**: Build authentication pages with same premium aesthetic  
**Project Status**: Homepage Complete ✅ 