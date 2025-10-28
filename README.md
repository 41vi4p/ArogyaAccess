# ArogyaAccess - Next.js PWA

## Version 2.4

A modern, responsive Progressive Web App (PWA) for rural healthcare accessibility built with Next.js, Firebase, and Gemini AI.

## Features

### Core Features
- **Modern UI/UX**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Progressive Web App**: Installable on mobile and desktop devices
- **Dark Theme**: Consistent dark mode throughout the application
- **Firebase Authentication**: Secure user authentication with Google Sign-In and email/password
- **Gemini AI Chatbot**: AI-powered medical assistant (Gemini Pro) for instant health guidance
- **First Aid Guide**: Comprehensive emergency procedures and medical information
- **Responsive Design**: Mobile-first design that works on all devices
- **Offline Support**: PWA capabilities for low-connectivity areas

### User Profile Management (v2.4)
- **Edit Profile**: Update display name and profile picture
- **Email Management**: Change email with password verification (email/password users)
- **Password Management**: Change password with current password verification
- **Account Deletion**: Secure account deletion with authentication
- **Google Profile Integration**: Automatic profile picture sync for Google users

### Activity Logging System (v2.4)
- **Comprehensive Activity Tracking**: Automatic logging of user actions
- **Activity Timeline**: View chronological history of all activities
- **Activity Statistics**: Track login sessions, profile updates, and more
- **Firestore Integration**: Secure cloud storage of activity logs
- **Activity Types**: Login, logout, profile updates, password changes, email changes, account creation

### Enhanced Navigation (v2.4)
- **Profile Dropdown**: Quick access to profile settings and account options
- **Google Profile Pictures**: Display user's Google profile picture in header
- **Mobile Responsive**: Optimized profile menu for mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project with Authentication and Firestore enabled
- Google Gemini AI API key

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:

Create a `.env.local` file in the root directory with your credentials:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Gemini AI Configuration
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework with App Router and Turbopack
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Firebase** - Authentication and Firestore database
- **Gemini AI (Gemini Pro)** - AI chatbot functionality
- **next-pwa** - PWA support for Next.js
- **Lucide React** - Icon library

## What's New in v2.4

### Profile Management System
- Complete profile editing functionality with display name and photo URL support
- Secure email change with password verification for email/password users
- Password change functionality with current password verification
- Account deletion with proper authentication (password for email users, confirmation for Google users)
- Automatic Google profile picture integration and sync

### Activity Logging & Monitoring
- New activity logging system with Firestore integration
- Comprehensive activity tracking (login, logout, profile updates, password changes, etc.)
- Activity logs page with timeline view and statistics dashboard
- Activity filtering and categorization with color-coded icons
- Relative timestamps for better user experience

### UI/UX Improvements
- Enhanced header with profile dropdown menu
- Google profile picture display in navigation
- Mobile-responsive profile menu with full functionality
- Dashboard improvements with display name support
- Emoji icons for better visual consistency
- Dark theme enhancements across all pages

### Technical Improvements
- Upgraded to Next.js 16.0.0 with Turbopack
- TypeScript build error fixes
- Improved authentication context with profile update functions
- Better error handling and user feedback
- Production build optimization

## Project Structure

```
arogyaaccess/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── chatbot/           # AI chatbot interface
│   ├── dashboard/         # User dashboard
│   ├── firstaid/          # First aid guide
│   ├── login/             # Login page
│   ├── logs/              # Activity logs page (v2.4)
│   ├── profile/edit/      # Profile editing page (v2.4)
│   └── register/          # Registration page
├── components/            # React components
│   ├── Header.tsx         # Enhanced navigation header (v2.4)
│   └── ThemeProvider.tsx  # Dark theme provider
├── context/               # React context providers
│   └── AuthContext.tsx    # Enhanced authentication context (v2.4)
├── lib/                   # Utility functions
│   ├── activityLog.ts     # Activity logging utilities (v2.4)
│   ├── firebase.ts        # Firebase configuration
│   └── gemini.ts          # Gemini AI integration
└── public/                # Static assets
```

## API Routes & Integrations

- **Firebase Authentication**: Google OAuth and email/password authentication
- **Firestore Database**: User data and activity logs storage
- **Gemini AI API**: Medical chatbot powered by Gemini Pro model

---

Made with ❤️ by Team CodeBreakers for connecting rural patients with healthcare professionals.

**Version 2.4** - December 2024
