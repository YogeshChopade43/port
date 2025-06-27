# Portfolio Website - Replit Configuration

## Overview

This is a modern full-stack portfolio website built with React and TypeScript, featuring a professional portfolio for an AI/ML developer. The application showcases projects, experience, skills, and includes a contact form with database persistence. The architecture follows a clean separation between frontend (React/Vite), backend (Express), and shared components, with a focus on modern web technologies and design patterns.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/build tooling
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form and GitHub integration
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot reload with Vite integration in development mode

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **Fallback**: In-memory storage implementation for development/testing
- **Schema**: Type-safe schema definitions with Zod validation

## Key Components

### Portfolio Sections
- **Hero Section**: Professional introduction with animated background elements
- **About**: Personal background and current role information
- **Projects**: Dynamic GitHub repository integration showcasing AI/ML projects
- **Experience**: Timeline-based career progression display
- **Skills**: Categorized technical competencies
- **Contact**: Form-based communication with backend persistence

### UI Component System
- **Design System**: shadcn/ui components with consistent theming
- **Dark Theme**: Custom color palette optimized for professional presentation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA-compliant components with keyboard navigation

### External Integrations
- **GitHub API**: Real-time project fetching from GitHub repositories
- **Form Processing**: Contact form with validation and email capability
- **Asset Management**: Professional photos and project imagery

## Data Flow

1. **Client Request**: User interacts with React frontend components
2. **State Management**: TanStack Query manages caching and server state
3. **API Communication**: RESTful endpoints handle data exchange
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
5. **Response Handling**: Type-safe data flows back to frontend components

### Contact Form Flow
1. User submits contact form with validation
2. React Hook Form validates data client-side using Zod schemas
3. Form data sent to `/api/contact` endpoint
4. Server validates and stores message in PostgreSQL database
5. Success/error feedback provided to user via toast notifications

### GitHub Integration Flow
1. Frontend requests project data via custom hooks
2. Server-side GitHub API integration fetches repository information
3. Project data cached and filtered for portfolio display
4. Real-time updates when repository information changes

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Database**: Drizzle ORM, Neon Database driver, PostgreSQL types
- **UI Framework**: Radix UI primitives, Tailwind CSS, Framer Motion

### Development Dependencies
- **Type Safety**: TypeScript, Zod for runtime validation
- **Development**: tsx for TypeScript execution, Replit integration plugins
- **Styling**: PostCSS, Autoprefixer for CSS processing

### Third-Party Services
- **Database**: Neon Database for serverless PostgreSQL hosting
- **GitHub API**: Public API for repository and user information
- **Asset Storage**: Local asset management for professional imagery

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application with TypeScript compilation
2. **Backend Build**: ESBuild bundles Express server with external packages
3. **Asset Optimization**: Static assets processed and optimized
4. **Type Checking**: Full TypeScript compilation validation

### Environment Configuration
- **Development**: Hot reload with Vite dev server and tsx execution
- **Production**: Node.js server serving built React application
- **Database**: Environment-based PostgreSQL connection string
- **Replit Integration**: Custom plugins for development environment

### Deployment Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server execution
- `npm run db:push`: Database schema deployment

## AI-Enhanced Features

### Interactive Elements
- **AI Typing Effect**: Dynamic text animation in hero section showcasing different AI specializations
- **Neural Network Visualization**: Live animated neural network with real-time node activity simulation
- **Live Metrics Dashboard**: Real-time performance indicators for AI projects with animated progress bars
- **Technical Skills with Icons**: Professional technology logos paired with skill names for visual appeal

### AI Showcase Section
- **Project Demos**: Rotating showcase of AI projects with live performance metrics
- **Real-time Analytics**: Animated metrics showing accuracy, precision, recall, and processing speeds
- **Interactive Visuals**: Engaging emoji-based project representations with smooth transitions

## Changelog

```
Changelog:
- June 27, 2025. Initial setup with modern portfolio architecture
- June 27, 2025. Added AI-enhanced features: typing effects, neural network visualization, live metrics dashboard, and technical skill icons
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```