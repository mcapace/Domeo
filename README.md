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

### 🔲 In Progress
- Dashboard with dome switcher
- Profile creation wizard
- Individual dome interfaces
- Matching system

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
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   ├── lib/                   # Utilities and configurations
│   └── types/                 # TypeScript definitions
├── prisma/                    # Database schema and migrations
├── public/                    # Static assets
└── docs/                      # Documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#6B46C1)
- **Accent**: Pink (#EC4899) for status and focus
- **Neutrals**: Sophisticated gray scale
- **Typography**: Inter font family

### Key Principles
- Monochrome base with single accent color
- No emojis - All custom SVG icons
- Minimal animations - Subtle, elegant transitions
- Generous white space - Premium feel
- Thin line icons - strokeWidth="1" for elegance

## 📚 Documentation

- **[Project Documentation](./PROJECT_DOCUMENTATION.md)** - Complete feature overview
- **[Project Bible](./DOMEO_PROJECT_BIBLE.md)** - Technical architecture and roadmap
- **[Integration Setup](./FULL_INTEGRATION_SETUP.md)** - Backend setup guide
- **[OAuth Setup Guides](./GOOGLE_OAUTH_SETUP.md)** - Social authentication setup

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
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

## 🌟 Key Features

### Authentication System
- Multi-step signup process
- Email and phone verification
- Social login (Google, Apple, Facebook)
- Password reset flow
- Session management

### User Experience
- Responsive design
- Smooth animations
- Accessibility considerations
- Premium feel matching Raya/The League

### Backend Features
- User registration and management
- Dome selection system
- Database integration
- API endpoints for all features

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
**Status**: Authentication complete, ready for core platform development
