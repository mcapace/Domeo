# DOMEO PROJECT BIBLE

## Project Vision
Domeo is a sophisticated dating platform that redefines online connections through purpose-driven communities. Unlike traditional dating apps, Domeo offers 5 distinct "domes" - specialized spaces for different types of relationships and connections.

## Core Concept
**One Profile, Five Worlds**
- Users create a single verified profile
- Access to 5 distinct communities (domes)
- Each dome serves a specific purpose
- Premium, exclusive experience

## The Five Domes

### 1. Connect (Dating)
- **Purpose**: Traditional dating and romantic connections
- **Target**: People seeking serious relationships
- **Features**: Compatibility matching, conversation starters
- **Color**: Purple (#6B46C1)

### 2. Explore (Alternative Lifestyles)
- **Purpose**: Non-traditional relationships and lifestyles
- **Target**: Polyamorous, kink, alternative communities
- **Features**: Lifestyle filters, community guidelines
- **Color**: Teal (#0D9488)

### 3. Social (Platonic)
- **Purpose**: Friendships and social connections
- **Target**: People seeking platonic relationships
- **Features**: Interest-based matching, group activities
- **Color**: Green (#059669)

### 4. Professional (Networking)
- **Purpose**: Professional connections and networking
- **Target**: Career-focused individuals
- **Features**: Industry filters, professional verification
- **Color**: Blue (#2563EB)

### 5. Private (Discreet)
- **Purpose**: Discreet connections with enhanced privacy
- **Target**: High-profile individuals, discretion seekers
- **Features**: Enhanced privacy controls, anonymous browsing
- **Color**: Red (#DC2626)

## Target Audience
- **Primary**: 25-45 age range
- **Income**: $75k+ household income
- **Values**: Quality over quantity, privacy, authenticity
- **Inspiration**: Raya, The League, Bumble

## Design Philosophy

### Visual Identity
- **Monochrome base** with single accent color
- **No emojis** - All custom SVG icons
- **Minimal animations** - Subtle, elegant transitions
- **Generous white space** - Premium feel
- **Thin line icons** - strokeWidth="1" for elegance
- **Rounded corners** - rounded-xl (12px) for modern feel

### Color System
```typescript
// Primary Colors
'domeo-black': '#0A0A0A'        // Primary text
'domeo-charcoal': '#1A1A1A'     // Secondary text
'domeo-accent': '#6B46C1'       // Primary accent (purple)
'pink-500': '#EC4899'          // Status and focus states

// Gray Scale
'domeo-gray': {
  900: '#1F1F1F',  // Dark backgrounds
  800: '#2A2A2A',  // Cards
  700: '#404040',  // Borders
  600: '#525252',  // Secondary text
  500: '#737373',  // Placeholder text
  400: '#A3A3A3',  // Disabled text
  300: '#D4D4D4',  // Light borders
  200: '#E5E5E5',  // Backgrounds
  100: '#F5F5F5',  // Light backgrounds
  50: '#FAFAFA',   // Page backgrounds
}
```

### Typography
- **Font**: Inter (weights: 200, 300, 400, 500, 600, 700)
- **Headers**: font-extralight, tracking-[-0.03em]
- **Body**: font-light, tracking-[-0.01em]
- **Buttons**: uppercase, tracking-[0.2em]

**Size Scale:**
- H1: text-[32px]
- H2: text-[28px]
- Body: text-[15px]
- Small: text-[13px]
- Tiny: text-[11px]

## Technical Architecture

### Frontend Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks + Context
- **Authentication**: NextAuth.js
- **Icons**: Custom SVG components

### Backend Stack
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with multiple providers
- **API**: Next.js API routes
- **File Storage**: Cloudinary (planned)
- **Real-time**: WebSocket (planned)

### Database Schema
```prisma
// Core User Model
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
  profiles      Profile[]
  verifications Verification[]
}

// Dome Communities
model Dome {
  id          String    @id @default(cuid())
  name        String
  description String
  color       String
  iconColor   String
  isActive    Boolean   @default(true)
  createdAt   DateTime  @default(now())
  
  userDomes   UserDome[]
  profiles    Profile[]
}

// User-Dome Relationships
model UserDome {
  id        String   @id @default(cuid())
  userId    String
  domeId    String
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  
  user      User     @relation(fields: [userId], references: [id])
  dome      Dome     @relation(fields: [domeId], references: [id])
}

// Dome-Specific Profiles
model Profile {
  id          String   @id @default(cuid())
  userId      String
  domeId      String
  bio         String?
  photos      String[] // Array of photo URLs
  interests   String[] // Array of interests
  preferences Json?    // Dome-specific preferences
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  user        User     @relation(fields: [userId], references: [id])
  dome        Dome     @relation(fields: [domeId], references: [id])
}

// Verification System
model Verification {
  id        String   @id @default(cuid())
  userId    String
  type      String   // 'email', 'phone', 'identity', 'professional'
  status    String   // 'pending', 'approved', 'rejected'
  data      Json?    // Verification data
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  user      User     @relation(fields: [userId], references: [id])
}

// NextAuth Models
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
```

## Current Implementation Status

### Completed Features
1. **Marketing Homepage**
   - Hero with CTA
   - Trust indicators
   - How it works
   - Five domes showcase
   - Comparison (Old Way vs Domeo Way)
   - Testimonials
   - Founding member CTA
   - Footer

2. **Authentication System**
   - **Sign In**: Email/phone toggle, social login options
   - **Sign Up**: 5-step process with progress tracking
   - **Verification**: Email and phone (6-digit code)
   - **Password Reset**: Forgot and reset flow
   - **Social Providers**: Google, Apple, Facebook, Microsoft, GitHub
   - **Auth Layout**: Consistent wrapper for all auth pages

3. **Component Library**
   - Logo (multiple sizes, themes)
   - Navigation (sticky, scroll effects)
   - TrustBar (floating indicators)
   - DomeIcons (custom SVGs for all domes)
   - SocialIcons (provider logos)
   - Form components (inputs, toggles, buttons)

4. **Backend Integration**
   - NextAuth.js configuration
   - Prisma database setup
   - User registration API
   - Dome management API
   - Social authentication
   - Session management

### Architecture Decisions
1. **Dome Separation**: Different database schemas per dome
2. **Profile Versioning**: One core profile, dome-specific layers
3. **Privacy First**: End-to-end encryption for Private dome
4. **Real-time**: WebSocket for chat/notifications
5. **Authentication**: NextAuth.js with multiple providers
6. **Responsive Design**: Mobile-first approach

## User Journey

### 1. Discovery & Signup
1. **Landing Page**: User discovers Domeo
2. **Sign Up**: 5-step process
   - Account creation (email/phone + password or social)
   - Basic information (name, phone, birth date)
   - Identity verification (ID upload + selfie)
   - Dome selection (choose communities)
   - Welcome (founding member benefits)

### 2. Profile Creation
1. **Core Profile**: Basic information, photos
2. **Dome Profiles**: Customize for each dome
3. **Verification**: Complete verification process
4. **Preferences**: Set matching preferences per dome

### 3. Dome Experience
1. **Dome Switcher**: Navigate between domes
2. **Discovery**: Browse and match within each dome
3. **Communication**: Chat and connect
4. **Privacy**: Dome-specific privacy controls

## Feature Roadmap

### Phase 1: Foundation (Current)
- ✅ Marketing homepage
- ✅ Authentication system
- ✅ Database setup
- ✅ Basic user management

### Phase 2: Core Platform (Next)
- 🔲 Dashboard with dome switcher
- 🔲 Profile creation wizard
- 🔲 Basic matching system
- 🔲 Messaging foundation

### Phase 3: Dome-Specific Features
- 🔲 Connect: Dating card stack
- 🔲 Explore: Lifestyle filters
- 🔲 Social: Event discovery
- 🔲 Professional: Portfolio view
- 🔲 Private: Enhanced privacy

### Phase 4: Advanced Features
- 🔲 AI-powered matching
- 🔲 Video/voice chat
- 🔲 Group features
- 🔲 Premium subscriptions
- 🔲 Analytics dashboard

### Phase 5: Scale & Monetization
- 🔲 Mobile apps
- 🔲 Advanced analytics
- 🔲 Business partnerships
- 🔲 International expansion

## Technical Implementation Details

### Authentication Flow
```typescript
// NextAuth Configuration
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID!,
      clientSecret: process.env.APPLE_SECRET!,
      authorization: {
        params: {
          scope: 'name email',
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'email public_profile',
        },
      },
    }),
    CredentialsProvider({
      // Email/password authentication
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    // Custom session and JWT handling
  },
}
```

### API Endpoints
```typescript
// User Registration
POST /api/auth/register
{
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phone?: string,
  birthDate: string
}

// Dome Management
GET /api/domes - Fetch all available domes
GET /api/user/domes - Get user's selected domes
POST /api/user/domes - Update user's dome selections

// Profile Management
GET /api/user/profile/:domeId - Get dome-specific profile
PUT /api/user/profile/:domeId - Update dome-specific profile
POST /api/user/photos - Upload profile photos
```

### Component Architecture
```typescript
// Reusable Components
interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Form Components
interface FormFieldProps extends BaseComponentProps {
  label: string;
  error?: string;
  required?: boolean;
}

// Icon Components
interface IconProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}
```

## Design System Components

### Logo Component
```typescript
interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  className?: string;
  linkToHome?: boolean;
}
```

### Navigation Component
- Sticky positioning
- Scroll-based background change
- Responsive menu
- Authentication state awareness

### TrustBar Component
- Floating trust indicators
- Scroll-triggered appearance
- Founding member count
- Pulse animation

### DomeIcons Component
```typescript
export const DomeIcons = {
  connect: <ConnectIcon />,
  explore: <ExploreIcon />,
  social: <SocialIcon />,
  professional: <ProfessionalIcon />,
  private: <PrivateIcon />,
}
```

## Performance Considerations

### Frontend Optimization
- **Code Splitting**: Route-based and component-based
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Regular bundle size monitoring
- **Lazy Loading**: Components and routes
- **Caching**: Static generation where possible

### Backend Optimization
- **Database Indexing**: Proper indexes on frequently queried fields
- **Connection Pooling**: Efficient database connections
- **Caching**: Redis for session and data caching
- **API Rate Limiting**: Protect against abuse
- **CDN**: Static asset delivery

## Security Considerations

### Authentication Security
- **Password Hashing**: bcryptjs with salt rounds
- **JWT Security**: Secure token storage and rotation
- **OAuth Security**: Proper redirect URI validation
- **Session Management**: Secure session handling
- **Rate Limiting**: Prevent brute force attacks

### Data Privacy
- **Encryption**: End-to-end encryption for Private dome
- **Data Minimization**: Only collect necessary data
- **User Consent**: Clear privacy policies
- **Data Retention**: Automatic data cleanup
- **GDPR Compliance**: European data protection

### Application Security
- **Input Validation**: Server-side validation
- **SQL Injection**: Prisma ORM protection
- **XSS Prevention**: Content Security Policy
- **CSRF Protection**: NextAuth.js built-in protection
- **HTTPS**: SSL/TLS encryption

## Testing Strategy

### Frontend Testing
- **Unit Tests**: Component testing with Jest/React Testing Library
- **Integration Tests**: Page and flow testing
- **E2E Tests**: User journey testing with Playwright
- **Visual Regression**: Screenshot testing
- **Accessibility**: Automated a11y testing

### Backend Testing
- **API Tests**: Endpoint testing with Jest
- **Database Tests**: Prisma testing utilities
- **Authentication Tests**: NextAuth.js testing
- **Performance Tests**: Load testing with k6
- **Security Tests**: Vulnerability scanning

## Deployment Strategy

### Development Environment
- **Local Development**: Next.js dev server
- **Database**: Local PostgreSQL with Docker
- **Environment Variables**: .env.local
- **Hot Reloading**: Fast refresh enabled

### Staging Environment
- **Platform**: Vercel (staging)
- **Database**: Supabase (staging)
- **Environment Variables**: Vercel dashboard
- **Preview Deployments**: Automatic on PR

### Production Environment
- **Platform**: Vercel (production)
- **Database**: Supabase (production)
- **CDN**: Vercel Edge Network
- **Monitoring**: Vercel Analytics + Sentry
- **Backup**: Automated database backups

## Monitoring & Analytics

### Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking
- **API Performance**: Response time monitoring
- **Database Performance**: Query optimization
- **Error Tracking**: Sentry integration
- **Uptime Monitoring**: Status page

### User Analytics
- **User Behavior**: Page views, user flows
- **Conversion Tracking**: Signup funnel analysis
- **Feature Usage**: Dome usage statistics
- **A/B Testing**: Feature flag implementation
- **Feedback Collection**: User surveys

## Business Model

### Revenue Streams
1. **Premium Subscriptions**: Tiered pricing per dome
2. **Featured Profiles**: Boost visibility
3. **Professional Verification**: Enhanced verification services
4. **Event Tickets**: Dome-specific events
5. **Partnerships**: Business collaborations

### Pricing Strategy
- **Freemium Model**: Basic features free, premium features paid
- **Dome-Specific Pricing**: Different pricing per dome
- **Founding Member Benefits**: Early adopter advantages
- **Annual Discounts**: Encourage long-term commitment

## Success Metrics

### User Metrics
- **User Acquisition**: Signup conversion rate
- **User Retention**: 7-day, 30-day, 90-day retention
- **User Engagement**: Daily active users, session duration
- **User Satisfaction**: NPS scores, app store ratings

### Business Metrics
- **Revenue**: Monthly recurring revenue (MRR)
- **Customer Lifetime Value**: CLV calculation
- **Customer Acquisition Cost**: CAC analysis
- **Churn Rate**: Monthly churn percentage

### Technical Metrics
- **Performance**: Page load times, API response times
- **Reliability**: Uptime percentage, error rates
- **Security**: Security incident response time
- **Scalability**: System capacity and growth

## Risk Assessment

### Technical Risks
- **Scalability**: Database performance under load
- **Security**: Data breaches, privacy violations
- **Performance**: Slow loading times, poor UX
- **Integration**: Third-party service failures

### Business Risks
- **Market Competition**: Established players, new entrants
- **User Acquisition**: High CAC, low conversion
- **Regulatory**: Privacy laws, content moderation
- **Economic**: Recession impact on premium subscriptions

### Mitigation Strategies
- **Technical**: Robust architecture, monitoring, testing
- **Business**: Diversified revenue, strong branding
- **Legal**: Compliance team, regular audits
- **Financial**: Conservative growth, cash reserves

## Future Vision

### Short Term (6 months)
- Complete core platform development
- Launch beta with limited users
- Gather feedback and iterate
- Establish initial user base

### Medium Term (1-2 years)
- Full platform launch
- Mobile app development
- International expansion
- Advanced feature development

### Long Term (3-5 years)
- Market leadership position
- AI-powered matching
- Virtual reality integration
- Global community platform

## Conclusion

Domeo represents a new paradigm in online dating and social connection. By creating purpose-driven communities within a single platform, we offer users the flexibility to explore different types of relationships while maintaining the quality and privacy standards they expect.

The technical foundation is solid, the design is sophisticated, and the vision is clear. The next phase focuses on building the core platform features that will bring this vision to life.

---

**Last Updated**: December 2024
**Next Milestone**: Dashboard with dome switcher
**Project Status**: Authentication complete, ready for core platform development 