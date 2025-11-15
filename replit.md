# AURA SEA Maritime Crewing Website

## Overview

AURA SEA is a modern maritime crewing agency website built with a "Fresh Vision" approach - combining professional maritime services with contemporary web technologies. The platform serves as a digital visit card targeting two primary audiences: ship-owners seeking reliable crewing partners for tanker and bulk fleets, and seafarers looking for transparent contracts and career growth opportunities.

The website emphasizes SEO optimization, responsive design, and a distinctive glassmorphism aesthetic inspired by maritime themes. Built as a full-stack application with React frontend and Express backend, it provides information pages, vacancy listings, and contact forms while maintaining a lightweight, performant architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, configured for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)
- Client code resides in `client/src/` directory

**UI Component System**
- shadcn/ui component library (Radix UI primitives) for accessible, customizable components
- Tailwind CSS for utility-first styling with custom maritime-themed design tokens
- Custom glassmorphism design system defined in CSS variables
- Component structure follows atomic design principles (UI primitives in `components/ui/`, composed components at root level)

**Styling Approach**
- Maritime gradient backgrounds (light blue to turquoise transitions)
- Glassmorphism effects: frosted glass panels with backdrop blur, transparency, and subtle borders
- CSS custom properties for theming (HSL color system with alpha channel support)
- Responsive design with mobile-first breakpoints
- Animated elements (floating ships, gradient circles) using CSS animations and Intersection Observer API

**State Management**
- TanStack Query (React Query) for server state management and API caching
- Local component state using React hooks
- No global state management library (Redux/Zustand) - architecture favors component-level state

**Page Structure**
- Home: Hero section with glassmorphic cards, animated ships, service highlights, statistics counter
- About: Company story, mission/values, team information
- Ship-Owners: Services for fleet operators, process steps, benefits
- Seafarers: Career opportunities, application process, benefits
- Vacancies: Job listings with modal-based application form
- Contact: Contact form with GDPR consent
- Privacy: Privacy policy and data handling information

### Backend Architecture

**Server Framework**
- Express.js running on Node.js (ESM modules)
- TypeScript for type safety across server code
- HTTP server creation via Node's built-in `http` module
- Development and production modes with environment-based configuration

**API Design**
- RESTful API pattern (routes prefixed with `/api`)
- Minimal backend logic - currently focused on serving the SPA
- Request/response logging middleware for monitoring
- JSON body parsing with raw body preservation for potential webhook integrations

**Development Workflow**
- Vite integration in middleware mode for seamless HMR during development
- Separate build processes for client (Vite) and server (esbuild)
- Static file serving for production builds from `dist/public`

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema definition in `shared/schema.ts` for code sharing between client/server
- Migration files stored in `migrations/` directory
- Zod schemas generated from Drizzle schemas for runtime validation

**Current Schema**
- Users table: Basic authentication structure (id, username, password)
- Schema designed for extensibility to add seafarer profiles, job postings, applications

**Temporary Storage**
- In-memory storage implementation (`MemStorage` class) for development/testing
- Map-based data structures for rapid prototyping
- Interface-based design (`IStorage`) allows easy swapping to database implementation

### Authentication and Authorization

**Current State**
- User schema exists but no authentication endpoints implemented
- Password field present in schema (would require hashing with bcrypt/argon2 before production use)
- Session management dependencies installed (`express-session`, `connect-pg-simple`)

**Planned Architecture**
- Session-based authentication (not JWT) for better security
- PostgreSQL session store via `connect-pg-simple`
- Role-based access control for admin/seafarer/ship-owner roles

### External Dependencies

**Database Services**
- Neon Serverless PostgreSQL (configured but not actively used)
- Environment variable: `DATABASE_URL` must be set for database connection

**UI Component Library**
- Radix UI: Comprehensive set of headless, accessible component primitives
- Components: Dialog, Dropdown, Select, Accordion, Toast, Form elements, etc.
- Provides keyboard navigation, ARIA attributes, and focus management

**Styling & Design**
- Tailwind CSS: Utility-first CSS framework with custom configuration
- Custom color palette using HSL values for maritime theme (blues, cyans, gradients)
- Google Fonts: Montserrat (headlines), Inter (body text)

**Form Handling**
- React Hook Form: Form state management and validation
- Hookform Resolvers: Integration between React Hook Form and Zod schemas
- Zod: Runtime schema validation for form inputs

**Development Tools**
- Replit-specific plugins: Runtime error overlay, cartographer (code mapping), dev banner
- TypeScript with strict mode enabled
- ESLint/Prettier configuration (implied by project structure)

**Analytics Placeholder**
- Google Analytics 4 tracking code present in `index.html` (requires configuration)
- Structured data (JSON-LD) for organization schema markup for SEO

**Asset Management**
- Stock images stored in `attached_assets/stock_images/` for hero sections
- Generated images (logos, ship icons) in `attached_assets/generated_images/`
- Vite alias `@assets` for clean import paths

**Email/Communication**
- No email service integration currently (forms log to console)
- Google Sheets integration mentioned in design docs for form submissions (not implemented)

**Production Deployment**
- Designed for deployment on Hostinger VPS with Nginx
- Static file serving from `dist/public` after build
- Environment-based configuration for production/development modes