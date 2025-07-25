# Social Events Page

## Overview

The Social Events page (`/social/events`) provides a comprehensive platform for users to discover, browse, and create social events within the Social dome. This feature enables community building through organized activities and meetups.

## Features

### Event Discovery
- **Event Grid**: Responsive grid layout displaying event cards
- **Category Filtering**: Filter events by category (Outdoor, Food & Drink, Arts & Crafts, etc.)
- **Event Cards**: Rich event information with images, details, and attendee counts
- **Search & Browse**: Easy navigation through available events

### Event Categories
- **Outdoor**: Hiking, sports, nature activities
- **Food & Drink**: Dining, wine tastings, cooking classes
- **Arts & Crafts**: Pottery, painting, creative workshops
- **Books & Culture**: Book clubs, museum visits, cultural events
- **Fitness**: Workout classes, yoga, group exercise
- **Games**: Board games, trivia nights, gaming meetups
- **Music**: Concerts, jam sessions, music appreciation
- **Professional**: Networking events, career development

### Event Creation
- **Create Event Modal**: Comprehensive form for event creation
- **Event Details**: Title, category, date/time, location, capacity
- **Description**: Rich text description of the event
- **Organizer Information**: Verified organizer status display

### Event Information Display
- **Event Title**: Clear, prominent event name
- **Category Badge**: Visual category indicator
- **Date & Time**: Formatted date and time display
- **Location**: Event venue or meeting point
- **Attendee Count**: Current attendees vs. maximum capacity
- **Organizer**: Event creator with verification status
- **Availability Status**: Spots available or full indicator

## UI Components

### Header Section
- **Page Title**: "Social Events"
- **Create Event Button**: Prominent call-to-action button
- **Dashboard Navigation**: Uses consistent dashboard navigation

### Category Filter
- **Horizontal Scrolling**: Mobile-responsive category selection
- **Active State**: Blue highlighting for selected category
- **All Events Option**: Default view showing all events
- **Smooth Transitions**: Hover and selection animations

### Event Grid
- **Responsive Layout**: 1 column (mobile) to 3 columns (desktop)
- **Event Cards**: Consistent card design with hover effects
- **Image Placeholder**: Event image area with emoji placeholders
- **Information Hierarchy**: Clear typography and spacing

### Event Cards
- **Event Image**: 16:9 aspect ratio image area
- **Event Details**: Title, category, date, location, attendees
- **Description**: Truncated description with line clamping
- **Organizer Info**: Profile picture, name, verification badge
- **Availability**: Visual indicator for event capacity

### Create Event Modal
- **Full-Screen Overlay**: Modal with backdrop
- **Form Fields**: Comprehensive event creation form
- **Validation**: Input validation and constraints
- **Action Buttons**: Cancel and Create Event buttons

## Technical Implementation

### State Management
```typescript
const [selectedCategory, setSelectedCategory] = useState('All Events');
const [showCreateModal, setShowCreateModal] = useState(false);
```

### Event Data Structure
```typescript
interface Event {
  id: string;
  title: string;
  organizer: {
    name: string;
    verified: boolean;
  };
  date: Date;
  location: string;
  attendees: number;
  maxAttendees: number;
  category: string;
  description: string;
  image?: string;
}
```

### Sample Events
- **Sunset Hike & Wine**: Outdoor activity with social element
- **Book Club**: Cultural/educational event
- **Pottery Class**: Creative/learning event

### Navigation Integration
- Added to internal pages list in ConditionalLayout
- Uses dashboard navigation (no homepage navbar/trust bar)
- Consistent with other internal pages

## User Experience

### Event Discovery Workflow
1. **Browse Events**: View all available events in grid format
2. **Filter by Category**: Select specific event categories
3. **View Event Details**: Click on event cards for more information
4. **Join Events**: Navigate to event detail pages to RSVP

### Event Creation Workflow
1. **Click Create Event**: Access event creation modal
2. **Fill Event Details**: Complete comprehensive event form
3. **Set Event Parameters**: Date, time, location, capacity
4. **Submit Event**: Create and publish the event

### Benefits
- **Community Building**: Facilitates real-world connections
- **Activity Discovery**: Find interesting local activities
- **Social Engagement**: Participate in group activities
- **Event Organization**: Easy event creation and management

## Integration Points

### Navigation System
- **Dashboard Navigation**: Consistent with other internal pages
- **Breadcrumb Flow**: Social dome → Events → Event details
- **Context Awareness**: Shows appropriate navigation for social features

### Event Management
- **Event Detail Pages**: Links to individual event pages
- **RSVP System**: Event attendance management
- **Organizer Tools**: Event management for creators

### Social Features
- **User Profiles**: Organizer information display
- **Verification System**: Verified organizer badges
- **Community Building**: Group activity coordination

## Future Enhancements

### Planned Features
- **Event Search**: Advanced search and filtering
- **Event Recommendations**: Personalized event suggestions
- **Event Reminders**: Calendar integration and notifications
- **Photo Uploads**: Event image upload functionality
- **Event Comments**: Discussion and Q&A for events

### Potential Improvements
- **Map Integration**: Location-based event discovery
- **Event Series**: Recurring event management
- **Group Events**: Private and public event options
- **Event Analytics**: Attendance tracking and insights
- **Social Sharing**: Share events on social media

## Testing

### Verified Functionality
- ✅ Page loads correctly at `/social/events`
- ✅ Dashboard navigation displays properly
- ✅ Category filter switches between categories
- ✅ Event cards display correctly
- ✅ Create event modal opens and closes
- ✅ Form fields are properly styled and functional
- ✅ Responsive design works on mobile and desktop
- ✅ Event cards link to detail pages

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
- **Alt Text**: Event images include descriptive alt text
- **Semantic Structure**: Proper heading hierarchy
- **Interactive Elements**: Clear button and link labels
- **Form Accessibility**: Proper form labels and validation messages

## Sample Events

### Outdoor Activities
- **Sunset Hike & Wine**: Easy 3-mile hike with social gathering
- **Beach Volleyball**: Casual sports activity
- **Park Yoga**: Group fitness in nature

### Cultural Events
- **Book Club**: Literary discussion groups
- **Museum Tours**: Cultural exploration
- **Art Gallery Openings**: Creative community events

### Creative Activities
- **Pottery Classes**: Hands-on creative workshops
- **Cooking Classes**: Culinary skill building
- **Photography Walks**: Creative exploration

### Social Gatherings
- **Wine Tastings**: Social drinking experiences
- **Game Nights**: Board game and trivia events
- **Coffee Meetups**: Casual social gatherings 