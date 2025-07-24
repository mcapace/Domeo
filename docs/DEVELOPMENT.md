# Development Guide

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
git clone <repository-url>
cd domeo-new
npm install
```

### Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:3006`

## Project Structure

```
domeo-new/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── settings/          # Settings page
│   │   ├── dashboard/         # Dashboard page
│   │   ├── auth/              # Authentication pages
│   │   ├── profile/           # Profile pages
│   │   └── messages/          # Messaging pages
│   ├── components/            # Reusable components
│   │   ├── DomeIcons.tsx      # SVG icon definitions
│   │   ├── DashboardNavigation.tsx # Main navigation
│   │   ├── ConditionalLayout.tsx   # Layout wrapper
│   │   └── TrustBar.tsx       # Trust indicator bar
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── docs/                      # Documentation
└── package.json
```

## Key Components

### Settings Page (`/settings`)
- **File**: `src/app/settings/page.tsx`
- **Purpose**: Comprehensive privacy and account settings
- **Features**: Privacy controls, dome-specific settings, account management

### Navigation System
- **DashboardNavigation**: Main navigation for logged-in users
- **ConditionalLayout**: Controls which navigation elements are shown
- **DomeIcons**: SVG icon definitions for consistent UI

### Privacy Controls
- Profile visibility settings
- Activity privacy toggles
- Dome-specific privacy options
- Block management

## Development Workflow

### Adding New Features
1. Create feature branch from `main`
2. Implement feature with proper TypeScript types
3. Add tests if applicable
4. Update documentation
5. Create pull request

### Code Style
- Use TypeScript for all new code
- Follow existing component patterns
- Use Tailwind CSS for styling
- Implement responsive design
- Add proper error handling

### State Management
- Use React hooks for local state
- Consider context for global state
- Implement optimistic updates where appropriate
- Handle loading and error states

## Styling Guidelines

### Tailwind CSS
- Use utility classes for styling
- Follow existing color scheme
- Implement responsive breakpoints
- Use consistent spacing and typography

### Icon System
- Use SVG icons from `DomeIcons.tsx`
- Maintain monochromatic style in settings
- Ensure accessibility with proper labels
- Keep icons consistent across components

### Layout Patterns
- Use sticky positioning for navigation
- Implement proper z-index management
- Handle overflow correctly
- Maintain consistent spacing

## Privacy-First Development

### Data Handling
- Minimize data collection
- Implement proper data isolation
- Use encryption for sensitive data
- Follow GDPR principles

### User Controls
- Provide granular privacy options
- Implement anonymous modes
- Allow data export and deletion
- Clear privacy messaging

### Security
- Validate all user inputs
- Implement proper authentication
- Use HTTPS for all communications
- Regular security audits

## Testing

### Unit Tests
- Test component rendering
- Validate state management
- Check privacy logic
- Verify navigation flows

### Integration Tests
- Test API interactions
- Validate data persistence
- Check cross-dome isolation
- Verify privacy controls

### User Testing
- Test privacy controls usability
- Validate navigation intuitiveness
- Check mobile responsiveness
- Verify accessibility

## Performance

### Optimization
- Implement lazy loading
- Optimize bundle size
- Use proper caching strategies
- Monitor performance metrics

### Monitoring
- Track user interactions
- Monitor error rates
- Measure page load times
- Analyze privacy settings usage

## Deployment

### Environment Setup
- Configure environment variables
- Set up database connections
- Configure authentication providers
- Set up monitoring and logging

### Build Process
```bash
npm run build
npm start
```

### Environment Variables
- `NEXTAUTH_SECRET`: Authentication secret
- `DATABASE_URL`: Database connection string
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret

## Troubleshooting

### Common Issues
- Navigation overlap: Check ConditionalLayout configuration
- Sticky positioning: Verify z-index and top values
- Privacy links: Ensure all links point to `/settings`
- Icon display: Check SVG definitions in DomeIcons

### Debug Tools
- React Developer Tools
- Next.js debugging
- Browser developer tools
- Network monitoring

## Contributing

### Pull Request Process
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Update documentation
5. Submit pull request

### Code Review
- Review for security implications
- Check privacy compliance
- Verify accessibility
- Test functionality

## Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Privacy Resources
- [GDPR Guidelines](https://gdpr.eu)
- [Privacy by Design](https://www.privacybydesign.ca)
- [OWASP Privacy Risks](https://owasp.org/www-project-privacy-risks)

### Development Tools
- [VS Code Extensions](https://marketplace.visualstudio.com)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Next.js Debugging](https://nextjs.org/docs/advanced-features/debugging) 