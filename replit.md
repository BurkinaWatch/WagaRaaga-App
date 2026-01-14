# WagaRaaga - Trade, Barter, and Pawn Application

## Overview
WagaRaaga is a platform for trading (barter) and pawnbroking. It features AI-powered product categorization, a triple-witness validation system for loans, real-time messaging, and Google Maps integration.

## Project Architecture

### Core Features
- **Barter (Troc)**: AI-assisted categorization, matching algorithm, and location-based filtering.
- **Pawnbroking (Prêts sur gage)**: Triple-witness QR code validation, automated PDF contracts, and SMS reminders.
- **Social & Communication**: Real-time chat, comments, likes, and social sharing.
- **Security**: Two-factor authentication (2FA), end-to-end message encryption, and AI moderation.
- **Maps & Location**: Google Maps integration with offline support and geofencing for witness validation.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **State Management**: TanStack React Query
- **UI Components**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS

### Backend Architecture
- **Framework**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js (Local Strategy)
- **Storage**: Interface-based storage layer (currently MemStorage)

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Neon Database**: Serverless PostgreSQL client (`@neondatabase/serverless`)
- **Session Storage**: `connect-pg-simple` for PostgreSQL-backed sessions

### UI Framework
- **Radix UI**: Complete primitive component library for accessible UI
- **shadcn/ui**: Pre-built component system using Radix primitives
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **React Day Picker**: Calendar/date picker
- **Vaul**: Drawer component
- **cmdk**: Command palette component

### Form Handling
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolvers for Zod integration
- **Zod**: Schema validation library

### Development Tools
- **Vite Plugins**: 
  - `@replit/vite-plugin-runtime-error-modal`: Error overlay for development
  - `@replit/vite-plugin-cartographer`: Replit-specific development tooling
  - `@replit/vite-plugin-dev-banner`: Development environment indicator