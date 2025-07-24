# Domeo - Complete Project Bible

## Table of Contents
1. [Vision & Concept](#vision--concept)
2. [Problem & Solution](#problem--solution)
3. [The Five Domes](#the-five-domes)
4. [Target Audience](#target-audience)
5. [UX Philosophy](#ux-philosophy)
6. [Business Model](#business-model)
7. [Technical Implementation](#technical-implementation)
8. [Design System](#design-system)
9. [User Journey](#user-journey)
10. [Future Roadmap](#future-roadmap)

---

## Vision & Concept

### Tagline
"Your Domes Await - One profile. Five communities. Endless authentic connections."

### Core Concept
Domeo recognizes that people are multifaceted. Unlike traditional dating apps that force users into one box, Domeo provides five distinct "domes" (communities) where users can express different aspects of themselves while maintaining complete privacy between spaces.

### Key Differentiators
1. **One Verified Profile**: Create once, use across all domes
2. **Five Distinct Communities**: Each with its own culture and purpose
3. **Complete Privacy Control**: Your activities in each dome stay separate
4. **100% Verified Users**: AI + human verification for every member
5. **Transparent Pricing**: One price, all features, no hidden costs

---

## Problem & Solution

### Problems with Current Dating Apps
1. **Mixed Intentions**: Hookups next to serious relationships in same feed
2. **Fake Profiles**: Catfishing, bots, heavily filtered photos
3. **No Privacy**: Your ex, boss, and family can all find you
4. **Hidden Costs**: Pay extra for basic features
5. **One-Dimensional**: Can't express different sides of yourself

### Domeo's Solution
- **Intention-Based Communities**: Each dome has clear purpose
- **Verified Authenticity**: Multi-step verification process
- **Compartmentalized Privacy**: What happens in each dome stays there
- **Fair Pricing**: $29/month for everything
- **Multifaceted Profiles**: Be your whole self across different spaces

---

## The Five Domes

### 1. Connect (Pink) 💕
- **Purpose**: Traditional dating with intention
- **Audience**: People seeking relationships
- **Features**: Compatibility matching, date planning, relationship goals
- **Tagline**: "Date with intention"
- **Subtext**: "All orientations welcome"

### 2. Explore (Purple) ✨
- **Purpose**: Alternative lifestyles and modern relationships
- **Audience**: ENM, poly, kink-positive community
- **Features**: Lifestyle preferences, community events, educational resources
- **Tagline**: "Modern & Alternative"
- **Subtext**: "ENM • Poly • Kink-positive"

### 3. Social (Blue) 🤝
- **Purpose**: Platonic connections only
- **Audience**: People seeking friends, activity partners
- **Features**: Interest matching, group activities, local events
- **Tagline**: "Find your tribe"
- **Subtext**: "Platonic connections only"

### 4. Professional (Gray) 💼
- **Purpose**: Networking with chemistry
- **Audience**: Entrepreneurs, creatives, professionals
- **Features**: Industry filters, collaboration tools, mentor matching
- **Tagline**: "Where ambition meets"
- **Subtext**: "Network with chemistry"

### 5. Private (Black) 🔒
- **Purpose**: Discreet connections
- **Audience**: High-profile individuals, privacy-conscious users
- **Features**: Enhanced privacy, photo blur, time-limited chats
- **Tagline**: "Your secrets, protected"
- **Subtext**: "Complete discretion"

---

## Target Audience

### Primary Demographics
- **Age**: 25-45
- **Income**: $75k+ (premium positioning)
- **Location**: Major metropolitan areas
- **Values**: Authenticity, privacy, quality over quantity

### Psychographics
- Tired of traditional dating app experiences
- Value genuine connections
- Have multiple facets to their personality
- Privacy-conscious
- Willing to pay for quality

### User Personas

1. **Sarah, 32, Marketing Director**
   - Wants: Serious relationship in Connect, friends in Social
   - Pain: Tired of explaining she's not looking for hookups

2. **Alex, 28, Software Engineer**
   - Wants: ENM partners in Explore, professional network
   - Pain: Can't be open about lifestyle on LinkedIn

3. **Jordan, 36, CEO**
   - Wants: Discreet dating in Private, mentorship in Professional
   - Pain: Too visible on regular apps, needs privacy

---

## UX Philosophy

### Core Principles

1. **Sophisticated Simplicity**
   - Clean, minimal interface
   - No cognitive overload
   - Clear navigation between domes

2. **Privacy by Design**
   - Opt-in visibility
   - Dome separation
   - Granular controls

3. **Authentic Expression**
   - Different profile aspects per dome
   - No singular "best self" pressure
   - Honest intention setting

4. **Premium Experience**
   - No ads ever
   - No pay-to-win features
   - Equal access for all members

### Design Inspiration
- **Raya**: Exclusivity, monochrome aesthetic
- **The League**: Professional polish, quality over quantity
- **Feeld**: Alternative lifestyle acceptance
- **Thursday**: Intentional engagement

---

## Business Model

### Pricing Strategy
- **Founding Members**: First 5,000 get 3 months free, then $29/mo
- **Regular Price**: $29/month or $290/year
- **No Tiers**: One price, full access

### Revenue Projections
- Target: 5,000 founding members in 6 months
- Year 1: 25,000 members = $7.25M ARR
- Year 2: 100,000 members = $29M ARR

### Why This Works
1. **Premium Positioning**: Higher price = serious users
2. **No Nickel-and-Diming**: Everything included builds trust
3. **Founding Member Scarcity**: Creates urgency
4. **Multi-Dome Value**: 5 apps in one justifies price

---

## Technical Implementation

### Tech Stack
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: [To be decided - Node.js/Python suggested]
- **Database**: PostgreSQL with dome separation
- **Auth**: [Clerk/Auth0/Supabase Auth]
- **AI Verification**: [AWS Rekognition/Custom ML]
- **Infrastructure**: Vercel/AWS

### Current Status
✅ Homepage complete with:
- Custom design system
- All SVG icons (no emojis)
- Responsive design
- Animation system
- Component library started

### Architecture Decisions
1. **Dome Separation**: Different database schemas per dome
2. **Profile Versioning**: One core profile, dome-specific layers
3. **Privacy First**: End-to-end encryption for Private dome
4. **Real-time**: WebSocket for chat/notifications

---

## Design System

### Visual Identity
- **Logo**: Minimalist "domeo" with subtle arch/dome element
- **Colors**: Monochrome + single purple accent (#6B46C1)
- **Typography**: Inter font family (200-700 weights)
- **Icons**: Custom thin-line SVGs only
- **Photography**: Authentic, unfiltered, diverse

### UI Patterns
- **Cards**: Minimal borders, subtle shadows
- **Buttons**: Uppercase, wide letter-spacing
- **Forms**: Single column, generous spacing
- **Navigation**: Dome switcher prominent
- **Animations**: Subtle, purposeful, elegant

### Color Palette
```typescript
// tailwind.config.js
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
- **Headers**: font-extralight, tracking-[-0.03em]
- **Body**: font-light, tracking-[-0.01em]
- **Buttons**: uppercase, tracking-[0.2em]

### Key Design Principles
- Monochrome with single accent - Inspired by Raya/The League
- No emojis - All custom SVG icons
- Minimal animations - Subtle, elegant transitions
- White space - Generous padding and margins
- Thin line icons - strokeWidth="1" for elegance

---

## User Journey

### 1. Discovery
- Land on homepage
- See clear value proposition
- Understand 5 domes concept

### 2. Signup Flow
1. Basic info (email, phone)
2. Identity verification (ID + selfie)
3. Core profile creation
4. Dome selection (min 1, max 5)
5. Dome-specific profiles
6. Payment (after free trial)

### 3. Daily Usage
1. Open app → See dome selector
2. Switch between domes freely
3. Different matches/chats per dome
4. Unified notifications
5. Privacy maintained

### 4. Key Features
- **Dome Switcher**: Top navigation, always visible
- **Verified Badge**: Shows on all profiles
- **Privacy Toggle**: Hide from specific domes
- **Cross-Dome Block**: Block across all spaces
- **Time Well Spent**: Usage insights

---

## Future Roadmap

### Phase 1: MVP (Months 1-3)
- [x] Marketing website
- [ ] Authentication system
- [ ] Profile creation flow
- [ ] Basic matching per dome
- [ ] Chat functionality
- [ ] Payment integration

### Phase 2: Enhancement (Months 4-6)
- [ ] Video profiles
- [ ] AI compatibility matching
- [ ] Events feature for Social dome
- [ ] Professional portfolio integration
- [ ] Advanced privacy controls

### Phase 3: Scale (Months 7-12)
- [ ] Mobile apps (iOS/Android)
- [ ] International expansion
- [ ] Dome-specific features
- [ ] Group activities
- [ ] Verified business accounts

### Future Dome Ideas
- **Wellness**: Health & fitness connections
- **Travel**: Travel buddy matching
- **Creative**: Artist collaborations
- **Mentor**: Guidance relationships

---

## Marketing Strategy

### Launch Strategy
1. **Exclusive Beta**: Invite-only for influencers
2. **Founding Member Campaign**: Scarcity marketing
3. **Privacy-First Messaging**: Differentiate from competitors
4. **Dome Ambassadors**: Influencers for each community

### Key Messages
- "Dating apps weren't built for real life"
- "Be your whole self, privately"
- "Five spaces for every side of you"
- "Your people are waiting"

---

## Competitive Analysis

### Direct Competitors
- **Hinge**: "Designed to be deleted" - Single purpose
- **Bumble**: Has modes but not separated - UI switching
- **Feeld**: Alternative focus only - Limited audience

### Our Advantage
- True separation between spaces
- Premium positioning
- Verified-only community
- Multi-dimensional profiles
- No feature paywalls

---

## Success Metrics

### Key Performance Indicators
1. **Founding Member Conversion**: Target 5,000
2. **Dome Engagement**: Users active in 2+ domes
3. **Retention**: 80% after 6 months
4. **NPS Score**: Target 70+
5. **Verification Rate**: 100% maintained

### Quality Metrics
- Match quality ratings
- Successful connections per dome
- Privacy satisfaction score
- Platform trust rating

---

## Conversation History Summary

### Design Evolution
1. Started with colorful, playful design
2. Evolved to sophisticated monochrome
3. Replaced all emojis with custom SVGs
4. Moved from rainbow gradients to single accent
5. Inspired by Raya/The League premium aesthetic

### Key Technical Decisions
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS with custom design system
- No external icon libraries
- Mobile-first responsive design

### Files Created
- Complete homepage (`src/app/page.tsx`)
- Custom components (Logo, Navigation, TrustBar, DomeIcons)
- Design system (colors, typography, animations)
- Utility functions
- Global styles with premium animations

### Components Built
1. **Logo Component** (`src/components/Logo.tsx`)
   - Multiple sizes, themes, link options
   - Image logo with text fallback

2. **Navigation** (`src/components/Navigation.tsx`)
   - Sticky navigation with scroll effects
   - Transparent → white background on scroll

3. **TrustBar** (`src/components/TrustBar.tsx`)
   - Appears on scroll after 100px
   - Custom SVG icons for trust indicators

4. **DomeIcons** (`src/components/DomeIcons.tsx`)
   - All custom SVG icons for domes and trust indicators
   - Ultra-minimal thin-line design

---

## How to Continue This Project

When starting a new conversation, reference:
1. This complete documentation
2. The git repository with current code
3. Design philosophy: "Premium, sophisticated, monochrome with purple accent"
4. Next task: Build authentication with same aesthetic

### Current Issues to Address
- Missing `tailwind.config.js` file (was deleted)
- Missing `critters` dependency for CSS optimization
- Need to fix CSS compilation errors
- Port 3006 configuration for development

### Immediate Next Steps
1. Recreate `tailwind.config.js` with our custom design system
2. Install missing dependencies
3. Fix CSS compilation issues
4. Build authentication system
5. Create profile creation flow

---

Last Updated: December 2024
Version: 1.0
Status: Homepage Complete, Ready for Authentication Build 