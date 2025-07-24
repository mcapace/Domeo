# Settings Page Documentation

## Overview
The Settings page (`/settings`) is a comprehensive privacy-first settings interface that provides users with granular control over their Domeo experience across all domes.

## Features

### 🔒 Privacy & Security Section
- **Profile Visibility**: Control who can see your profile (Everyone, Matches, No One)
- **Activity Privacy**: Toggle last active status, distance visibility, and read receipts
- **Dome Separation Promise**: Clear messaging about data isolation between domes
- **Anonymous Mode**: Enhanced privacy options for Private dome
- **Contact Hiding**: Hide from phone contacts per dome
- **Block Management**: Manage blocked users across all domes

### 👤 Account Management
- Profile information editing
- Account preferences
- Password and security settings
- Account deletion options

### 🔔 Notifications
- Push notification preferences
- Email notification settings
- Dome-specific notification controls
- Quiet hours configuration

### 🛡️ Safety Features
- Block and report functionality
- Safety tips and resources
- Emergency contact settings
- Privacy education content

### 💳 Billing & Subscription
- Payment method management
- Subscription status
- Billing history
- Plan upgrades/downgrades

### ❓ Help & Support
- FAQ and troubleshooting
- Contact support
- Feature requests
- Documentation links

## Technical Implementation

### File Structure
```
src/app/settings/page.tsx          # Main settings page component
src/components/DomeIcons.tsx        # Updated with monochromatic icons
src/components/ConditionalLayout.tsx # Updated to exclude settings from homepage nav
src/components/DashboardNavigation.tsx # Updated privacy links
```

### Key Components

#### Settings Page Layout
- **Header**: Sticky positioning at `top-[96px]` with z-index 30
- **Sidebar**: Sticky positioning at `top-[176px]` with calculated height
- **Main Content**: Scrollable area with proper overflow handling

#### Privacy Controls
```typescript
interface PrivacySettings {
  profileVisibility: 'everyone' | 'matches' | 'no_one';
  showLastActive: boolean;
  showDistance: boolean;
  readReceipts: boolean;
  domeSettings: Record<DomeType, {
    enabled: boolean;
    anonymous: boolean;
    hideFromContacts: boolean;
    blockedUsers: string[];
  }>;
}
```

#### Dome-Specific Settings
Each dome (Connect, Explore, Social, Professional, Private) has individual privacy controls:
- Enable/disable dome
- Anonymous mode toggle
- Contact hiding preference
- Blocked users list

### Navigation Integration

#### ConditionalLayout Updates
- Settings page excluded from homepage navigation
- Proper DashboardNavigation rendering
- No duplicate navigation bars

#### Privacy Links
All privacy-related links throughout the app now point to `/settings`:
- Dashboard privacy settings link
- Signup page privacy policy link
- Profile privacy references

### Styling & Design

#### Icon System
- Monochromatic SVG icons for consistency
- No dome-specific colors in settings
- Improved explore icon (diagonal compass design)

#### Layout Classes
```css
/* Header */
sticky top-[96px] z-30

/* Sidebar */
sticky top-[176px] h-[calc(100vh-176px)] overflow-y-auto

/* Main container */
flex min-h-screen bg-domeo-gray-50
```

## User Experience

### Privacy-First Approach
- Clear messaging about dome separation
- Granular privacy controls
- Anonymous mode options
- Data export and deletion

### Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast options
- Responsive design

### Performance
- Lazy loading of sections
- Optimized re-renders
- Efficient state management
- Minimal bundle impact

## API Integration

### Settings Persistence
- Real-time settings updates
- Optimistic UI updates
- Error handling and rollback
- Offline support considerations

### Privacy Controls
- Server-side validation
- Rate limiting for sensitive operations
- Audit logging for privacy changes
- GDPR compliance features

## Future Enhancements

### Planned Features
- Advanced privacy analytics
- Custom privacy presets
- Privacy education content
- Enhanced block management
- Privacy-focused notifications

### Technical Improvements
- Settings import/export
- Bulk privacy operations
- Advanced filtering options
- Privacy recommendations

## Testing

### Unit Tests
- Component rendering tests
- State management tests
- Privacy logic validation
- Navigation integration tests

### Integration Tests
- Settings persistence
- Navigation flow
- Privacy control validation
- Cross-dome data isolation

### User Testing
- Privacy control usability
- Navigation intuitiveness
- Settings discovery
- Mobile responsiveness

## Security Considerations

### Data Protection
- Client-side encryption for sensitive settings
- Secure transmission of privacy preferences
- Audit trail for privacy changes
- Data minimization principles

### Privacy Compliance
- GDPR compliance features
- Data portability options
- Right to deletion implementation
- Privacy policy integration

## Deployment Notes

### Environment Variables
- Privacy settings defaults
- Feature flags for new privacy controls
- Analytics configuration
- Support contact information

### Monitoring
- Privacy settings usage analytics
- Error tracking for settings operations
- Performance monitoring
- User feedback collection

## Support & Maintenance

### Documentation
- User-facing help content
- Privacy policy updates
- Feature announcement blog posts
- Video tutorials

### Bug Reports
- Settings not saving
- Navigation issues
- Privacy control malfunctions
- Performance problems

### Feature Requests
- Additional privacy controls
- New settings categories
- Enhanced customization options
- Integration with external privacy tools 