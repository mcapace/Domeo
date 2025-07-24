# Changelog

All notable changes to the Domeo project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive settings page with privacy-first controls
- Dome-specific privacy settings for all dome types
- Anonymous mode options for enhanced privacy
- Contact hiding preferences per dome
- Block management across all domes
- Activity privacy controls (last active, distance, read receipts)
- Profile visibility settings (Everyone, Matches, No One)
- Data export and deletion options
- Privacy education content and dome separation messaging
- Monochromatic SVG icons for settings sections
- Sticky navigation layout matching edit profile page
- Settings page exclusion from homepage navigation

### Changed
- Updated explore icon to diagonal compass design
- Modified ConditionalLayout to exclude settings page from homepage nav
- Updated all privacy settings links to point to `/settings`
- Improved navigation consistency across logged-in user pages
- Enhanced icon system with monochromatic styling

### Fixed
- Resolved duplicate navigation bars on settings page
- Fixed sticky positioning for settings header and sidebar
- Corrected privacy links throughout application
- Eliminated overlapping navigation elements
- Improved layout consistency with existing pages

### Technical
- Added TypeScript interfaces for privacy settings
- Implemented proper sticky positioning with calculated heights
- Updated component imports and exports
- Enhanced state management for settings
- Improved responsive design implementation

## [Previous Versions]

### [0.1.0] - Initial Release
- Basic Next.js application structure
- Authentication system with NextAuth.js
- Dashboard with dome navigation
- Profile editing functionality
- Basic messaging system
- Responsive design implementation 