# Domeo - Sophisticated Dating Platform

A premium dating platform with 5 distinct communities (domes) where users create one verified profile to access multiple purpose-driven spaces.

## 🎯 Project Overview

Domeo redefines online connections through purpose-driven communities. Unlike traditional dating apps, Domeo offers 5 distinct "domes" - specialized spaces for different types of relationships and connections.

### The Five Domes
- **Connect** - Traditional dating and romantic connections
- **Explore** - Alternative lifestyles and non-traditional relationships  
- **Social** - Friendships and platonic connections
- **Professional** - Networking and career connections
- **Private** - Discreet connections with enhanced privacy

## ✨ Current Features

### ✅ Completed
- **Premium Homepage** - Sophisticated marketing site with trust indicators
- **Complete Authentication System** - Multi-step signup with social login
- **Design System** - Monochrome design with custom SVG icons
- **Database Integration** - PostgreSQL with Prisma ORM
- **Social Authentication** - Google, Apple, Facebook integration
- **User Management** - Registration, verification, dome selection
- **Responsive Design** - Mobile-first approach
- **Dashboard System** - Complete dashboard with dome switcher and navigation
- **Profile Management** - Comprehensive profile creation and editing interface
- **Matching System** - Swipe-based matching with detailed profiles
- **Messaging System** - Full-featured messaging with multiple content types
- **Enhanced UI/UX** - Consistent navigation, improved styling, and accessibility
- **Icon System** - Updated dome icons with heart (connect) and lock (private)

### 🔲 In Progress
- Advanced matching algorithms
- Premium features and subscriptions
- Analytics and insights
- Mobile app development

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Social OAuth credentials (Google, Apple, Facebook)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd domeo-new
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Add your environment variables:
```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3006
NEXTAUTH_SECRET=your-super-secret-key

# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/domeo_dev"

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
APPLE_ID=your-apple-service-id
APPLE_SECRET=your-generated-jwt-token
APPLE_TEAM_ID=your-team-id
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
NEXT_PUBLIC_FACEBOOK_APP_ID=your-facebook-app-id
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
npm run db:seed
```

5. **Start the development server**
```bash
npm run dev
```

Open [http://localhost:3006](http://localhost:3006) with your browser to see the result.

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG components
- **Authentication**: NextAuth.js
- **State Management**: React Hooks
- **Media Handling**: File API, MediaRecorder API, Geolocation API

### Backend
- **Database**: PostgreSQL with Prisma ORM
- **API**: Next.js API routes
- **Authentication**: NextAuth.js with multiple providers
- **File Storage**: Cloudinary (planned)

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier
- **Database**: Prisma Studio

## 📁 Project Structure

```
domeo-new/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── auth/              # Authentication pages
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Dashboard pages
│   │   ├── matches/           # Matches listing
│   │   ├── messages/          # Messaging system
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── DashboardNavigation.tsx  # Dashboard navigation
│   │   ├── SwipeCard.tsx      # Profile swipe cards
│   │   ├── SwipeStack.tsx     # Swipe stack management
│   │   └── ...                # Other components
│   ├── lib/                   # Utilities and configurations
│   └── types/                 # TypeScript definitions
├── prisma/                    # Database schema and migrations
├── public/                    # Static assets
└── docs/                      # Documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#6B46C1) - domeo-accent
- **Accent**: Pink (#EC4899) for status and focus
- **Neutrals**: Sophisticated gray scale (domeo-gray-50 to domeo-gray-900)
- **Typography**: Inter font family
- **Verified Badges**: Green (#10B981) for trust indicators

### Key Principles
- Monochrome base with single accent color
- No emojis - All custom SVG icons
- Minimal animations - Subtle, elegant transitions
- Generous white space - Premium feel
- Thin line icons - strokeWidth="1" for elegance
- Consistent navigation styling across all pages

## 🌟 Key Features

### Authentication System
- Multi-step signup process
- Email and phone verification
- Social login (Google, Apple, Facebook)
- Password reset flow
- Session management

### Dashboard & Navigation
- **Dome Switcher** - Seamless switching between 5 different communities
- **Privacy Notices** - Context-aware privacy information for each dome
- **Consistent Navigation** - Unified styling across homepage and dashboard
- **Responsive Design** - Mobile-first approach with tablet and desktop optimization

### Matching System
- **Swipe Interface** - Intuitive left/right swipe for like/pass
- **Profile Cards** - Rich profile display with photos, bio, and preferences
- **Verified Badges** - Green checkmarks for verified profiles
- **Match Notifications** - Real-time match alerts and messaging

### Messaging System
- **Multi-Content Support** - Text, images, date proposals, location sharing, voice notes
- **Image Upload** - Drag-and-drop image sharing with preview
- **Date Proposals** - Structured date/time/location proposals with accept/decline
- **Location Sharing** - GPS-based location sharing with map integration
- **Voice Notes** - Audio recording and playback functionality
- **Real-time Updates** - Live message status and typing indicators
- **Safety Features** - Three-dot menu with safety options and reporting

### User Experience
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Elegant transitions and micro-interactions
- **Accessibility** - WCAG compliant with keyboard navigation
- **Premium Feel** - Sophisticated design matching high-end dating platforms
- **Performance** - Optimized loading and smooth interactions

### Backend Features
- **User Management** - Complete user registration and profile management
- **Dome System** - Multi-community architecture with privacy controls
- **Database Integration** - Robust PostgreSQL schema with Prisma ORM
- **API Endpoints** - RESTful APIs for all platform features
- **File Handling** - Image upload and media management
- **Geolocation** - Location-based features and privacy controls

## 📚 Documentation

- **[Project Documentation](./PROJECT_DOCUMENTATION.md)** - Complete feature overview
- **[Project Bible](./DOMEO_PROJECT_BIBLE.md)** - Technical architecture and roadmap
- **[Integration Setup](./FULL_INTEGRATION_SETUP.md)** - Backend setup guide
- **[OAuth Setup Guides](./GOOGLE_OAUTH_SETUP.md)** - Social authentication setup

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server (port 3006)
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema to database
npm run db:seed          # Seed database with initial data

# Apple OAuth
npm run apple:generate-secret  # Generate Apple JWT token
```

## 🆕 Recent Updates

### Latest Release (December 2024)
- ✅ **Complete Messaging System** - Full-featured chat with multimedia support
- ✅ **Enhanced Navigation** - Consistent styling across all navigation bars
- ✅ **UI Improvements** - Smaller logos, green verified badges, purple accent colors
- ✅ **Mobile Optimization** - All features work seamlessly on mobile devices
- ✅ **Safety Features** - Comprehensive safety menu and reporting system
- ✅ **Performance Optimizations** - Faster loading and smoother interactions
- ✅ **Profile Creation Interface** - Comprehensive profile editing with dome-specific settings
- ✅ **Icon Updates** - Heart icon for connect dome, lock icon for private dome
- ✅ **Sticky Navigation** - Profile edit sidebar stays in place during scrolling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions:
- Check the [documentation](./PROJECT_DOCUMENTATION.md)
- Review the [setup guides](./FULL_INTEGRATION_SETUP.md)
- Open an issue for bugs or feature requests

---

**Last Updated**: December 2024  
**Status**: Core platform complete with messaging, matching, and dashboard systems
