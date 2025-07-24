# Domeo - Privacy-First Social Platform

A modern social platform built with Next.js that emphasizes privacy and user control through its unique "dome" system.

## 🚀 Features

### 🔒 Privacy-First Design
- **Dome Separation**: Complete data isolation between different social contexts
- **Granular Privacy Controls**: Fine-tuned privacy settings for each dome
- **Anonymous Mode**: Enhanced privacy options for sensitive interactions
- **Data Control**: Export and delete your data at any time

### 🏛️ Dome System
- **Connect**: Personal relationships and close connections
- **Explore**: Discovery and new connections
- **Social**: Casual social interactions
- **Professional**: Work and career networking
- **Private**: Maximum privacy and anonymity

### ⚙️ Comprehensive Settings
- **Privacy & Security**: Complete control over profile visibility and activity
- **Account Management**: Profile editing and account preferences
- **Notifications**: Customizable notification preferences
- **Safety Features**: Block management and safety tools
- **Billing & Subscription**: Payment and subscription management
- **Help & Support**: Resources and support options

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma
- **Icons**: Custom SVG icon system

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd domeo-new

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

The application will be available at `http://localhost:3006`

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your-database-url
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## 📁 Project Structure

```
domeo-new/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── settings/          # Settings page with privacy controls
│   │   ├── dashboard/         # Main dashboard
│   │   ├── auth/              # Authentication pages
│   │   ├── profile/           # Profile management
│   │   └── messages/          # Messaging system
│   ├── components/            # Reusable components
│   └── lib/                   # Utility functions
├── docs/                      # Documentation
│   ├── SETTINGS_PAGE.md      # Settings page documentation
│   ├── CHANGELOG.md          # Project changelog
│   └── DEVELOPMENT.md        # Development guide
└── public/                    # Static assets
```

## 🎨 Design System

### Icon System
- **Monochromatic Design**: Consistent icon styling throughout
- **SVG Icons**: Scalable vector graphics for crisp display
- **Accessibility**: Proper labels and screen reader support

### Layout Patterns
- **Sticky Navigation**: Persistent navigation with proper positioning
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Privacy-First UI**: Clear privacy messaging and controls

## 🔐 Privacy Features

### Dome-Specific Privacy
- **Individual Controls**: Privacy settings for each dome type
- **Contact Hiding**: Hide from phone contacts per dome
- **Anonymous Mode**: Enhanced privacy for Private dome
- **Block Management**: Comprehensive blocking across all domes

### Activity Privacy
- **Profile Visibility**: Control who can see your profile
- **Last Active**: Toggle visibility of online status
- **Distance**: Control location-based features
- **Read Receipts**: Manage message read status

### Data Control
- **Export Data**: Download your data in standard formats
- **Delete Account**: Complete account deletion with data removal
- **Privacy Education**: Clear information about data handling

## 🚀 Getting Started

### For Users
1. Visit the application
2. Sign up with email or Google
3. Explore different domes
4. Customize privacy settings in `/settings`
5. Connect with others while maintaining privacy

### For Developers
1. Follow the [Development Guide](docs/DEVELOPMENT.md)
2. Review the [Settings Page Documentation](docs/SETTINGS_PAGE.md)
3. Check the [Changelog](docs/CHANGELOG.md) for recent updates
4. Contribute following the contribution guidelines

## 📚 Documentation

- **[Settings Page](docs/SETTINGS_PAGE.md)**: Comprehensive guide to the settings system
- **[Development Guide](docs/DEVELOPMENT.md)**: Development setup and guidelines
- **[Changelog](docs/CHANGELOG.md)**: Project history and updates

## 🤝 Contributing

We welcome contributions! Please see our [Development Guide](docs/DEVELOPMENT.md) for details on:

- Setting up the development environment
- Code style guidelines
- Testing requirements
- Pull request process

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Live Application**: [Coming Soon]
- **Documentation**: [docs/](docs/)
- **Issues**: [GitHub Issues]
- **Discussions**: [GitHub Discussions]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- NextAuth.js for secure authentication
- The privacy and security community for best practices
