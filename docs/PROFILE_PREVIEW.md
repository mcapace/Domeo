# Profile Preview Page

## Overview

The Profile Preview page (`/profile/preview`) allows users to see how their profile appears to others across different domes. This provides a comprehensive view of how their profile content is displayed in each dome context.

## Features

### Multi-Dome Profile Preview
- **Connect Dome**: Traditional dating profile with relationship-focused content
- **Explore Dome**: Alternative relationship styles with kink-friendly content
- **Social Dome**: Friendship-focused profile with activity-based content
- **Professional Dome**: Business networking profile with career-focused content
- **Private Dome**: Discreet profile with anonymous content

### Interactive Preview
- **Dome Selector**: Switch between different dome views
- **Live Preview**: See exactly how profile appears in each dome
- **SwipeCard Integration**: Uses the same SwipeCard component as the discovery system
- **Info Toggle**: Helpful information about the preview functionality

### Profile Content Variations
Each dome shows different aspects of the user's profile:

#### Connect Profile
- Full name display
- Relationship-focused prompts
- Dating intentions
- Traditional dating photos

#### Explore Profile
- Alternative relationship content
- ENM/polyamory focused prompts
- Boundary and communication emphasis
- Kink-friendly content

#### Social Profile
- Friendship-focused prompts
- Activity and interest-based content
- Group and social connection emphasis
- Casual, friendly tone

#### Professional Profile
- Professional name (full name)
- Career-focused prompts
- Business networking content
- Professional photo

#### Private Profile
- Anonymous name (initials only)
- Discreet content
- Privacy-focused prompts
- Minimal identifying information

## UI Components

### Header Section
- **Page Title**: "Profile Preview"
- **Info Button**: Toggle helpful information banner
- **Dashboard Navigation**: Uses consistent dashboard navigation

### Info Banner
- **Collapsible**: Toggle on/off with info button
- **Helpful Text**: Explains the preview functionality
- **Accent Styling**: Uses domeo-accent-muted background

### Dome Selector
- **Horizontal Scrolling**: For mobile responsiveness
- **Active State**: Black background for selected dome
- **Disabled State**: Grayed out for incomplete profiles
- **Icon Integration**: Uses DomeIcons for visual consistency

### Preview Area
- **Centered Layout**: Profile card centered on screen
- **SwipeCard Component**: Same component used in discovery
- **Edit Button**: Direct link to edit the current dome's profile
- **Responsive Design**: Adapts to different screen sizes

## Technical Implementation

### State Management
```typescript
const [activeDome, setActiveDome] = useState<DomeType>('connect');
const [showInfo, setShowInfo] = useState(false);
```

### Profile Data Structure
```typescript
const userProfiles = {
  connect: {
    id: 'user',
    name: 'Maya',
    age: 29,
    distance: '0 miles',
    photos: ['/api/placeholder/400/600', '/api/placeholder/400/601'],
    prompts: [
      { question: "I'm looking for", answer: "..." },
      { question: "Perfect Sunday", answer: "..." },
      { question: "I geek out on", answer: "..." }
    ],
    verified: true,
    intentions: ['Long-term relationship']
  },
  // ... other domes
};
```

### Navigation Integration
- Added to internal pages list in ConditionalLayout
- Uses dashboard navigation (no homepage navbar/trust bar)
- Consistent with other internal pages

## User Experience

### Workflow
1. **Access**: Navigate to `/profile/preview`
2. **Select Dome**: Choose which dome profile to preview
3. **Review Content**: See how profile appears to others
4. **Edit Profile**: Click "Edit [Dome] Profile" to make changes
5. **Switch Domes**: Preview different dome versions

### Benefits
- **Quality Control**: Ensure profile content is appropriate for each dome
- **Consistency**: Maintain consistent branding across domes
- **Privacy**: Verify what information is visible in each context
- **User Confidence**: See exactly how others will view their profile

## Integration Points

### Profile Editing
- **Direct Links**: Edit buttons link to `/profile/edit?dome=[dome]`
- **Dome Context**: Passes current dome to edit page
- **Seamless Flow**: Easy transition from preview to editing

### Discovery System
- **Same Components**: Uses SwipeCard for consistency
- **Same Styling**: Matches discovery page appearance
- **Same Behavior**: Preview interactions work like discovery

### Navigation System
- **Dashboard Navigation**: Consistent with other internal pages
- **Breadcrumb Flow**: Profile edit → Preview → Discovery
- **Context Awareness**: Shows appropriate navigation for profile management

## Future Enhancements

### Planned Features
- **Real Profile Data**: Connect to actual user profile data
- **Photo Management**: Preview different photos for each dome
- **Privacy Settings**: Toggle visibility of specific profile elements
- **Analytics**: Track which dome profiles are viewed most

### Potential Improvements
- **Side-by-Side Comparison**: Compare multiple domes at once
- **Export Functionality**: Save profile previews as images
- **Feedback System**: Get feedback on profile content
- **A/B Testing**: Test different profile versions

## Testing

### Verified Functionality
- ✅ Page loads correctly at `/profile/preview`
- ✅ Dashboard navigation displays properly
- ✅ Dome selector switches between profiles
- ✅ Info banner toggles correctly
- ✅ Edit buttons link to correct edit pages
- ✅ Responsive design works on mobile and desktop
- ✅ SwipeCard component renders correctly

### Browser Compatibility
- ✅ Chrome/Chromium
- ✅ Safari
- ✅ Firefox
- ✅ Mobile browsers

## Accessibility

### Features
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Meets WCAG AA standards
- **Focus Management**: Clear focus indicators

### Considerations
- **Alt Text**: Images include descriptive alt text
- **Semantic Structure**: Proper heading hierarchy
- **Interactive Elements**: Clear button and link labels 