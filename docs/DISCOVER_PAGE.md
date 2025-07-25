# Discover Page

## Overview

The Discover page (`/discover`) is a comprehensive discovery interface that allows users to explore profiles across different domes with advanced filtering capabilities.

## Features

### Dome Selection
- **Connect**: Traditional dating and relationship building
- **Explore**: Alternative relationship styles and kink-friendly connections
- **Social**: Friendship and activity-based connections
- **Professional**: Business networking and career opportunities
- **Private**: Discreet arrangements and private connections

### Filter System

#### Connect Dome Filters
- **Basics**: Age range, distance, gender preferences
- **Intentions**: Relationship goals, lifestyle choices

#### Explore Dome Filters
- **Basics**: Age range, distance
- **Relationship Style**: ENM, polyamory, swinging, etc.
- **Interests**: Communication, boundaries, education, community

#### Social Dome Filters
- **Basics**: Age range, distance
- **Interests**: Activities like hiking, gaming, fitness, art, etc.
- **Friendship Type**: Activity partners, close friendships, group activities

#### Professional Dome Filters
- **Professional**: Industry, role level
- **Goals**: Mentorship, collaboration, investment, networking
- **Skills**: Product, engineering, design, marketing, etc.

#### Private Dome Filters
- **Privacy**: Discretion level, verification requirements
- **Availability**: Schedule preferences, arrangement types

### UI Components

#### Header
- Back navigation to dashboard
- Page title
- Filter toggle with active filter count
- Dome selector with icons and colors

#### Filter Sidebar
- Collapsible sidebar (320px width)
- Organized by categories
- Clear all filters option
- Multiple filter types:
  - Range sliders (age, distance)
  - Multi-select checkboxes
  - Tag-style selections
  - Radio button selections

#### Swipe Area
- Centered swipe interface
- Uses existing SwipeStack component
- Responsive design

## Technical Implementation

### TypeScript Types
```typescript
type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

type RangeFilter = {
  id: string;
  label: string;
  type: 'range';
  min: number;
  max: number;
  value: [number, number];
};

type SliderFilter = {
  id: string;
  label: string;
  type: 'slider';
  max: number;
  value: number;
  unit: string;
};

type MultiFilter = {
  id: string;
  label: string;
  type: 'multi';
  options: string[];
};

type TagsFilter = {
  id: string;
  label: string;
  type: 'tags';
  options: string[];
};

type SingleFilter = {
  id: string;
  label: string;
  type: 'single';
  options: string[];
};
```

### State Management
- `activeDome`: Currently selected dome
- `showFilters`: Filter sidebar visibility
- `activeFilters`: Applied filter values

### Responsive Design
- Mobile-friendly layout
- Horizontal scrolling for dome selector
- Collapsible filter sidebar
- Proper spacing and typography

## Usage

1. Navigate to `/discover`
2. Select a dome from the top navigation
3. Toggle filters using the filter button
4. Apply filters in the sidebar
5. Swipe through filtered profiles

## Future Enhancements

- Range slider components for age and distance
- Filter persistence across sessions
- Advanced search functionality
- Filter combinations and saved searches
- Real-time filter application
- Analytics for filter usage 