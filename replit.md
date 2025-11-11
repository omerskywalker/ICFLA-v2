# Islamic Center of Farmerville Louisiana - Website

## Overview

This is a community website for the Islamic Center of Farmerville Louisiana (ICF Louisiana), a mosque serving the Muslim community in Farmerville. The website provides prayer times, photo galleries, donation options, location information, and contact details. It features a modern, respectful design with Islamic-themed aesthetics including geometric patterns, elegant typography, and smooth animations.

The application is a full-stack web application built with React on the frontend and Express.js on the backend, designed to be a welcoming digital presence for the mosque community.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **Framer Motion** for animations and transitions throughout the site

**UI Component Library**
- **shadcn/ui** component system built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom theming
- Components configured in the "new-york" style variant
- Custom CSS variables for Islamic-themed color palette (gold/primary accents on dark backgrounds)

**State Management**
- **TanStack Query (React Query)** for server state management and API data fetching
- Local component state with React hooks for UI state

**Design System**
- Custom font stack: Cinzel for headings, Cormorant Garamond for serif text, Inter for sans-serif
- Dark theme with Islamic design aesthetics (gold accents, neutral backgrounds)
- Responsive design with mobile-first approach
- Animation system using Framer Motion for entrance effects, hover states, and scroll-based reveals

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Development mode uses Vite middleware for hot module replacement
- Production mode serves pre-built static assets

**API Design**
- RESTful API endpoints under `/api` prefix
- Currently implements prayer times endpoint that proxies to external Aladhan API
- Custom request logging middleware for API routes

**Request Handling**
- JSON body parsing with raw body preservation for webhook support
- URL-encoded form data support
- Request/response logging with duration tracking

### Data Storage Solutions

**Current Implementation**
- **In-memory storage** using a Map-based storage class for user data
- Schema definitions using Drizzle ORM with PostgreSQL dialect
- User table defined with username/password fields

**Database Configuration**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless` driver
- Migration system set up with schema in `shared/schema.ts`
- Environment variable `DATABASE_URL` required for database connection
- Note: The application currently uses in-memory storage but is architected to support PostgreSQL when provisioned

### External Dependencies

**Third-Party APIs**
- **Aladhan Prayer Times API** - Fetches Islamic prayer times for Farmerville, Louisiana using ISNA calculation method (method=2)

**UI Component Libraries**
- **Radix UI** - Comprehensive set of headless UI primitives (accordion, dialog, dropdown, popover, etc.)
- **shadcn/ui** - Pre-built accessible components using Radix UI
- **Embla Carousel** - Carousel/slider functionality for hero section
- **Lucide React** - Icon library for UI elements

**Form Handling**
- **React Hook Form** with `@hookform/resolvers` for form state management
- **Zod** with `drizzle-zod` for schema validation

**Styling & Design**
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant API for component styling
- **clsx** & **tailwind-merge** - Conditional class name utilities

**Development Tools**
- **Replit plugins** - Vite plugins for runtime error overlay, cartographer, and dev banner (development mode only)
- **tsx** - TypeScript execution for development server
- **esbuild** - Fast JavaScript bundler for production builds

**Authentication & Session**
- **connect-pg-simple** - PostgreSQL session store for Express (configured but using in-memory storage currently)

**Utility Libraries**
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation

**Database & ORM**
- **Drizzle ORM** - TypeScript ORM for SQL databases
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon
- **drizzle-kit** - CLI tools for migrations and schema management