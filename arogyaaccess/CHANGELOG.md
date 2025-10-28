# Changelog

All notable changes to the ArogyaAccess project will be documented in this file.

## [2.4.0] - 2024-12-28

### Added
- **Profile Management System**
  - Edit profile page with display name and photo URL management
  - Email change functionality with password verification (email/password users)
  - Password change functionality with current password verification
  - Secure account deletion with authentication (password for email users, confirmation for Google users)
  - Automatic Google profile picture integration and synchronization

- **Activity Logging System**
  - Comprehensive activity tracking system with Firestore integration
  - Activity logs page with timeline view and statistics dashboard
  - Activity types: login, logout, profile updates, password changes, email changes, account creation
  - Color-coded activity icons and categories
  - Relative timestamp formatting (e.g., "5 minutes ago")
  - Activity statistics showing total activities, login sessions, and profile updates

- **Enhanced Navigation**
  - Profile dropdown menu in header with user information
  - Google profile picture display in navigation bar
  - Mobile-responsive profile menu with full functionality
  - Quick access to Edit Profile, Activity Logs, Logout, and Delete Account

### Changed
- **UI/UX Improvements**
  - Dashboard now displays user's display name instead of email prefix
  - Replaced Lucide React icons with emoji icons for better visual consistency
  - Updated icon backgrounds from white to dark theme for consistency
  - Enhanced header with better profile management options

- **Technical Updates**
  - Upgraded to Next.js 16.0.0 with Turbopack support
  - Enhanced AuthContext with profile update functions
  - Improved TypeScript type definitions
  - Better error handling and user feedback throughout the application
  - Optimized production build process

### Fixed
- TypeScript build errors in ThemeProvider component
- Activity logs type casting issues
- Gemini AI model configuration (using gemini-pro)
- Dashboard icon loading issues

### Security
- Password verification required for sensitive operations (email change, password change, account deletion)
- Reauthentication before critical operations
- Secure activity logging with user-specific data isolation

---

## [2.3.0] - Previous Release

### Added
- Dark theme implementation
- Google Sign-In integration
- Gemini AI chatbot functionality
- First Aid guide

### Changed
- Redesigned home page with multi-layer gradients
- Updated navbar with colorful gradient background
- Enhanced CTA sections

---

**Version Format**: [MAJOR.MINOR.PATCH]
- **MAJOR**: Breaking changes
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes, backward compatible
