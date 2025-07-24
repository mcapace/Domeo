# Domeo - Complete Project Documentation

## Project Overview
Domeo is a sophisticated dating platform with 5 distinct communities (domes) where users create one verified profile to access multiple purpose-driven spaces.

## Current Status
- ✅ Premium homepage completed
- ✅ Custom design system implemented
- ✅ All emojis replaced with custom SVG icons
- ✅ Responsive design
- ✅ Animations and interactions
- ✅ Complete authentication flow
  - ✅ Sign in (email/phone/social)
  - ✅ Sign up (multi-step)
  - ✅ Forgot password
  - ✅ Reset password
  - ✅ Email verification
  - ✅ Phone verification
- ✅ Auth layout wrapper
- ✅ NextAuth.js integration
- ✅ Database setup with Prisma
- ✅ Social authentication (Google, Apple, Facebook)
- ✅ User registration API
- ✅ Dome selection system
- ✅ Dashboard with dome switcher
- ✅ Dashboard navigation improvements (clean UX, logo consistency)
- ✅ Profile creation flow
- ✅ Individual dome interfaces
- ✅ Matching system with swipe interface
- ✅ Complete messaging system with multimedia support
- ✅ Enhanced UI/UX with consistent navigation
- ✅ Mobile optimization for all features
- ✅ Safety features and reporting system
- ✅ Profile creation and editing interface with dome-specific settings
- ✅ Updated dome icons (heart for connect, lock for private)
- ✅ Sticky navigation in profile edit interface
- 🔲 Advanced matching algorithms
- 🔲 Premium features and subscriptions
- 🔲 Analytics and insights
- 🔲 Mobile app development

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
  // Pink accent for status and focus
  'pink': {
    500: '#EC4899',
    400: '#F472B6',
  }
}
```

### Typography
- **Font**: Inter (weights: 200, 300, 400, 500, 600, 700)
- **Headers**: font-extralight, tracking-[-0.03em]
- **Body**: font-light, tracking-[-0.01em]
- **Buttons**: uppercase, tracking-[0.2em]

**Consistent sizes:**
- H1: text-[32px]
- H2: text-[28px]
- Body: text-[15px]
- Small: text-[13px]
- Tiny: text-[11px]

### Key Design Principles
- **Monochrome with single accent** - Inspired by Raya/The League
- **No emojis** - All custom SVG icons
- **Minimal animations** - Subtle, elegant transitions
- **White space** - Generous padding and margins
- **Thin line icons** - strokeWidth="1" for elegance
- **Rounded corners** - rounded-xl (12px) for modern feel

## Dashboard Implementation

### Dashboard with Dome Switcher (src/app/dashboard/page.tsx)
**Features**:
- **Dome Switcher**: Always visible at top, clear active state with color coding
- **Privacy Notice**: Changes per dome to reinforce separation and privacy
- **Context-Specific Stats**: Different metrics per dome (matches, connections, etc.)
- **Quick Actions**: Dome-appropriate features and settings
- **Main Swipe Area**: Ready for card stack implementation
- **Recent Matches**: Shows dome-specific connections
- **Profile Completion**: Only in Connect (dating focus)
- **Clean Navigation**: Removed incentive bar and homepage navigation for focused experience
- **Logo Redirect**: Dashboard logo links to homepage for easy navigation

**Dome Configurations**:
- **Connect**: Dating focus with pink theme, profile completion prompts
- **Explore**: ENM/alternative lifestyles with purple theme
- **Social**: Platonic connections with blue theme
- **Professional**: Networking with gray theme
- **Private**: Discreet connections with dark theme (fixed text color issue)

**Technical Implementation**:
- TypeScript interfaces for type safety
- React state management for dome switching
- Responsive grid layout (1 column mobile, 3 columns desktop)
- Sample data structure ready for API integration
- ConditionalLayout component for navigation management
- Logo size consistency across all pages (120x48 pixels)

## Components Created

### 1. Logo Component (src/components/Logo.tsx)
```typescript
interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  className?: string;
  linkToHome?: boolean;
}
```
**Features**: Image logo with text fallback, multiple sizes

### 2. Navigation (src/components/Navigation.tsx)
- Sticky navigation with scroll effects
- Transparent → white background on scroll
- Links: How It Works, Safety, Membership, Sign In

### 3. TrustBar (src/components/TrustBar.tsx)
- Appears on scroll after 100px
- Custom SVG icons for trust indicators
- "2,847 founding spots left" with pulse animation

### 4. DomeIcons (src/components/DomeIcons.tsx)
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

### 5. SocialIcons (src/components/SocialIcons.tsx)
Social login provider icons:
```typescript
export const SocialIcons = {
  google: // Full color Google logo
  facebook: // Facebook blue
  microsoft: // 4-color squares
  apple: // Apple logo
  github: // GitHub octocat
}
```

### 6. ConditionalLayout (src/components/ConditionalLayout.tsx)
**Purpose**: Conditionally shows/hides navigation elements based on current page
**Features**:
- Hides incentive bar and navigation on dashboard for cleaner UX
- Maintains navigation on homepage and auth pages
- Uses `usePathname()` to detect current route
- Includes founding member banner when navigation is shown

## Authentication Flow

### Sign In Page (/auth/signin)
- Email/Phone toggle with radio buttons
- Social login options (Google, Apple, Facebook, Microsoft)
- Clean form design with pink focus states
- "Remember me" checkbox
- Forgot password link
- Error handling and loading states

### Sign Up Flow (/auth/signup)
Multi-step process with progress bar:

1. **Account Creation** - Email/phone + password or social
2. **Basic Information** - Name, phone, birth date
3. **Identity Verification** - ID upload + selfie
4. **Choose Domes** - Select communities to join
5. **Welcome** - Founding member benefits

**Features:**
- Progress bar with pink accent color
- Country code dropdown for phone numbers
- Dynamic dome selection from database
- Social login integration
- Form validation and error handling

### Password Reset Flow
- **Forgot Password** (/auth/forgot-password) - Email/phone options
- **Reset Password** (/auth/reset-password) - Password requirements checker
- Success confirmation screens

### Verification Pages
- **Email Verification** (/auth/verify) - Check email flow
- **Phone Verification** (/auth/verify-phone) - 6-digit code input

### Auth Layout (/auth/layout.tsx)
- Consistent wrapper for all auth pages
- Includes navigation
- Subtle geometric background

## Backend Integration

### NextAuth.js Configuration
- **Providers**: Google, Apple, Facebook, Credentials
- **Database**: Prisma with PostgreSQL
- **Session Management**: JWT with secure cookies
- **API Routes**: /api/auth/[...nextauth]

### Current Implementation Status
- ✅ **NextAuth.js**: Fully configured and working
- ✅ **Google OAuth**: Working with provided credentials
- 🔲 **Apple OAuth**: Configured but needs Apple Developer account setup
- 🔲 **Facebook OAuth**: Configured but needs Facebook App credentials
- ✅ **Database Schema**: Prisma schema defined and ready
- 🔲 **Database Connection**: PostgreSQL server needs to be started
- ✅ **API Endpoints**: All authentication endpoints created
- ✅ **User Registration**: Working with email/password
- ✅ **Dome Selection**: API endpoints ready for dome management

### Database Schema (Prisma)
```prisma
model User {
  id            String    @id @default(cuid())
  email         String?   @unique
  phone         String?   @unique
  password      String?
  firstName     String?
  lastName      String?
  birthDate     DateTime?
  emailVerified DateTime?
  phoneVerified DateTime?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  accounts      Account[]
  sessions      Session[]
  userDomes     UserDome[]
}

model Dome {
  id          String    @id @default(cuid())
  name        String
  description String
  color       String
  iconColor   String
  isActive    Boolean   @default(true)
  createdAt   DateTime  @default(now())
  
  userDomes   UserDome[]
}

model UserDome {
  id        String   @id @default(cuid())
  userId    String
  domeId    String
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  
  user      User     @relation(fields: [userId], references: [id])
  dome      Dome     @relation(fields: [domeId], references: [id])
}
```

### API Endpoints
- **POST /api/auth/register** - User registration
- **GET /api/domes** - Fetch all available domes
- **GET /api/user/domes** - Get user's selected domes
- **POST /api/user/domes** - Update user's dome selections

### Environment Variables
```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3006
NEXTAUTH_SECRET=your-super-secret-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Apple OAuth
APPLE_ID=your-apple-service-id
APPLE_SECRET=your-generated-jwt-token
APPLE_TEAM_ID=your-team-id

# Facebook OAuth
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
NEXT_PUBLIC_FACEBOOK_APP_ID=your-facebook-app-id

# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/domeo_dev"
```

## Page Structure

### Homepage Sections (src/app/page.tsx)

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
- Connect (Dating)
- Explore (Alternative lifestyles)
- Social (Platonic)
- Professional (Networking)
- Private (Discreet)

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
│   │   ├── auth/
│   │   │   ├── layout.tsx         # Auth layout wrapper
│   │   │   ├── signin/
│   │   │   │   └── page.tsx      # Sign in page
│   │   │   ├── signup/
│   │   │   │   └── page.tsx      # Multi-step signup
│   │   │   ├── verify/
│   │   │   │   └── page.tsx      # Email verification
│   │   │   ├── verify-phone/
│   │   │   │   └── page.tsx      # Phone verification
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx      # Forgot password
│   │   │   └── reset-password/
│   │   │       └── page.tsx      # Reset password
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── [...nextauth]/
│   │   │   │   │   └── route.ts  # NextAuth API
│   │   │   │   └── register/
│   │   │   │       └── route.ts  # User registration
│   │   │   ├── domes/
│   │   │   │   └── route.ts      # Dome management
│   │   │   └── user/
│   │   │       └── domes/
│   │   │           └── route.ts  # User dome management
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard page
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── Logo.tsx              # Logo component
│   │   ├── Navigation.tsx        # Nav bar
│   │   ├── TrustBar.tsx          # Trust indicators
│   │   ├── DomeIcons.tsx         # All custom dome icons
│   │   ├── SocialIcons.tsx       # Social provider icons
│   │   ├── FacebookSDK.tsx       # Facebook SDK integration
│   │   └── SessionProvider.tsx   # NextAuth session provider
│   ├── lib/
│   │   ├── auth.ts               # NextAuth configuration
│   │   ├── auth-utils.ts         # Authentication utilities
│   │   ├── facebook-utils.ts     # Facebook SDK utilities
│   │   ├── db.ts                 # Prisma client
│   │   └── utils.ts              # Utility functions
│   └── types/
│       └── next-auth.d.ts        # NextAuth type definitions
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Database seeding
├── scripts/
│   └── generate-apple-secret.js  # Apple JWT generator
├── public/
│   └── images/
│       └── logo/                 # Logo files
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── .env.local                    # Environment variables
├── PROJECT_DOCUMENTATION.md      # This file
├── DOMEO_PROJECT_BIBLE.md        # Complete project bible
├── FULL_INTEGRATION_SETUP.md     # Integration setup guide
├── GOOGLE_OAUTH_SETUP.md         # Google OAuth setup
├── APPLE_OAUTH_SETUP.md          # Apple OAuth setup
└── FACEBOOK_OAUTH_SETUP.md       # Facebook OAuth setup
```

## Current State Summary
The homepage and complete authentication flow are finished with:

- Sophisticated monochrome design with pink accents
- All custom SVG icons (no emojis)
- Smooth animations and transitions
- Mobile responsive
- Accessibility considerations
- Premium feel matching Raya/The League
- Multi-step signup with progress tracking
- Email and phone authentication options
- Social login integration (Google, Apple, Facebook)
- Database integration with Prisma
- User registration and dome selection
- Complete API backend

### Current Issues to Address
- **Facebook OAuth**: Missing Facebook App ID and Client Secret in environment variables
- **Database Connection**: PostgreSQL server needs to be running for full functionality
- **Social Login**: Google OAuth working, Apple and Facebook need configuration

## Next Steps to Build
1. ✅ **Dashboard with Dome Switcher**
   - Main navigation between domes
   - Active dome context
   - Notifications center
   - Quick stats (matches, messages)
   - Profile completion prompt
   - Clean navigation (incentive bar and homepage nav hidden)
   - Logo consistency and homepage redirect

2. ✅ **Profile Creation Wizard**
   - Photo upload with AI verification
   - Dome-specific profile sections
   - Interests and preferences
   - Privacy settings per dome

3. ✅ **Individual Dome Interfaces**
   - Connect: Dating card stack
   - Explore: Lifestyle filters
   - Social: Event discovery
   - Professional: Portfolio view
   - Private: Enhanced privacy

4. ✅ **Matching & Messaging**
   - Dome-specific algorithms
   - Real-time chat
   - Video/voice options
   - Privacy controls

## New Features Implemented

### Messaging System (src/app/messages/[matchId]/page.tsx)
**Complete messaging platform with multimedia support:**

**Message Types:**
- **Text Messages** - Standard text communication
- **Image Messages** - Photo sharing with preview and send/cancel
- **Date Proposals** - Structured date/time/location with accept/decline
- **Location Sharing** - GPS-based location with map integration
- **Voice Notes** - Audio recording and playback

**Technical Implementation:**
```typescript
interface Message {
  id: string;
  senderId: string;
  text?: string;
  image?: string;
  timestamp: Date;
  read: boolean;
  type?: 'text' | 'image' | 'date' | 'location' | 'voice';
  dateProposal?: {
    date: string;
    time: string;
    location: string;
  };
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  voiceNote?: {
    url: string;
    duration: number;
  };
}
```

**Features:**
- **Image Upload** - File input with preview, drag-and-drop support
- **Date Proposals** - Modal with date picker, time selector, location input
- **Location Sharing** - Geolocation API integration with address lookup
- **Voice Recording** - MediaRecorder API with timer and playback
- **Real-time Updates** - Typing indicators, message status
- **Safety Features** - Three-dot menu with safety options and reporting
- **Mobile Optimization** - Touch-friendly interface, responsive design

### Matching System (src/app/matches/page.tsx)
**Swipe-based matching with detailed profiles:**

**Features:**
- **Swipe Interface** - Intuitive left/right swipe for like/pass
- **Profile Cards** - Rich profile display with photos, bio, preferences
- **Verified Badges** - Green checkmarks for verified profiles
- **Match Notifications** - Real-time alerts and messaging access
- **Dome-Specific Matching** - Different algorithms per community

**Components:**
- **SwipeCard** - Individual profile card with swipe gestures
- **SwipeStack** - Stack management for multiple profiles
- **Match List** - Grid view of all matches with quick actions

### Enhanced Navigation System
**Consistent styling across all navigation bars:**

**Updates:**
- **Logo Sizing** - New 'xs' size (90x36px) for all nav bars
- **Color Consistency** - Purple accent color matching chat bubbles
- **Verified Badges** - Green color (#10B981) for trust indicators
- **Typography** - Unified font sizes and weights across all navs
- **Responsive Design** - Mobile-optimized navigation elements

**Navigation Components:**
- **Navigation** - Homepage navigation with updated styling
- **DashboardNavigation** - Dashboard nav with dome switcher
- **ConditionalLayout** - Context-aware navigation management

### UI/UX Improvements
**Comprehensive design system updates:**

**Color Updates:**
- **Three Dots Button** - Purple color matching chat bubbles
- **Verified Checkmarks** - Green background for better visibility
- **Navigation Links** - Consistent domeo-gray-600 to domeo-black hover
- **Logo Sizing** - Smaller, more proportional logos across all pages

**Component Updates:**
- **Logo Component** - Added 'xs' size option for nav bars
- **Navigation Styling** - Unified text-sm font-medium styling
- **Button Consistency** - Standardized hover states and transitions
- **Mobile Optimization** - Touch-friendly interactions and responsive layouts

### Profile Creation and Editing Interface
**Comprehensive profile management system:**

**Core Profile Section:**
- **Basic Information** - First name, last name, age, location
- **Contact Information** - Email and phone number
- **Verification Status** - Green badge showing identity verification
- **Shared Across Domes** - Core info is consistent across all communities

**Dome-Specific Profiles:**
- **Individual Settings** - Each dome has its own profile configuration
- **Enable/Disable Toggle** - Users can activate/deactivate specific domes
- **Photo Management** - Separate photo galleries for each dome
- **Custom Prompts** - Dome-specific conversation starters and questions
- **Preferences** - Tailored settings for each community type

**Interface Features:**
- **Sticky Sidebar** - Navigation stays in place during scrolling
- **Tabbed Interface** - Easy switching between core and dome profiles
- **Real-time Preview** - See changes as you edit
- **Save Functionality** - Automatic saving with manual save option
- **Responsive Design** - Works seamlessly on mobile and desktop

**Dome-Specific Prompts:**
- **Connect** - Dating-focused questions (e.g., "I'm looking for", "Perfect Sunday")
- **Explore** - Alternative lifestyle questions (e.g., "My boundaries", "Ideal dynamic")
- **Social** - Friendship-focused questions (e.g., "Looking for friends who", "My ideal weekend")
- **Professional** - Networking questions (e.g., "Currently building", "My superpower")
- **Private** - Discreet connection questions (e.g., "Seeking", "Discretion level")

### Icon System Updates
**Updated dome icons for better visual communication:**

**Connect Dome:**
- **Previous**: Circular concentric design with cross lines
- **New**: Heart icon representing love and romantic connections
- **Design**: Clean, stroke-based heart with rounded corners

**Private Dome:**
- **Previous**: Circular design with user silhouette
- **New**: Lock icon representing privacy and discretion
- **Design**: Classic padlock with keyhole for security symbolism

**Implementation:**
- Consistent 32x32 viewBox sizing
- strokeWidth="1" for elegant thin lines
- Proper alignment and centering in navigation
- Matches visual weight of other dome icons

### Safety Features
**Comprehensive safety and reporting system:**

**Safety Menu:**
- **Unmatch** - Remove connection with user
- **Block** - Block user from contacting
- **Report** - Report inappropriate behavior
- **Safety Tips** - Access to safety resources
- **Get Help** - Emergency contact information

**Implementation:**
- Three-dot menu in messaging interface
- Modal-based safety actions
- Privacy-focused design
- Quick access to help resources

## How to Continue This Project
When starting a new chat, share:

"I'm building Domeo, a sophisticated dating app with 5 communities"
"We've completed the homepage, full auth flow, dashboard, matching system, and messaging platform"
"Messaging system supports text, images, date proposals, location sharing, and voice notes"
"Matching system has swipe interface with verified badges and dome-specific algorithms"
"All navigation bars have consistent styling with smaller logos and purple accent colors"
"Verified checkmarks are now green for better visibility"
"Complete safety features with reporting and blocking capabilities"
"Mobile-optimized with responsive design for all features"
"Using monochrome design with purple accent (#6B46C1) and pink highlights"
"Next.js 15, TypeScript, Tailwind CSS, Prisma, PostgreSQL"
"Next task: Advanced matching algorithms and premium features"

## Git Commands
```bash
# Save current state
git add .
git commit -m "feat: implement dashboard navigation improvements and logo consistency"
git push

# When resuming
git pull
npm install
npm run dev
```

## Important Design Decisions Made
- Removed all rainbow gradients → Single accent color
- Replaced ALL emojis → Custom SVG icons
- Bright colors → Muted, sophisticated palette
- Playful → Premium, exclusive feel
- Heavy shadows → Subtle, elegant shadows
- Thick icons → Thin line art (strokeWidth="1")
- Sharp corners → Rounded corners (rounded-xl)
- Email/Phone toggle → Clean switcher UI
- Added pink accent for status bars and focus states

## Authentication Features
- Email + Password login
- Phone number + SMS code login
- Social providers (Google, Apple, Facebook, Microsoft)
- Multi-step signup with progress tracking
- Identity verification flow
- Password reset with requirements
- Remember me functionality
- Founding member benefits display
- Database integration with user profiles
- Dome selection and management

## Custom SVG Icon Pattern
All icons follow this pattern:
```jsx
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path stroke="currentColor" strokeWidth="1" />
</svg>
```

**Last Updated**: December 2024
**Next Task**: Advanced matching algorithms and premium features 