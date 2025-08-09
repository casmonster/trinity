**Portfolio Application**

***Overview***

This is a full-stack developer portfolio application built with modern web technologies. It showcases a professional portfolio for "Mugabe Trinity" featuring sections for skills, projects, about information, and contact functionality. The application uses a clean, modern design with smooth animations and responsive layouts.

***System Architecture***

The application follows a full-stack architecture with clear separation between client and server components:

Frontend: React-based SPA with TypeScript
Backend: Express.js server with TypeScript
Database: PostgreSQL (configured with Drizzle ORM)
Styling: Tailwind CSS with shadcn/ui components
Build System: Vite for frontend, esbuild for backend
Development Environment: Replit with integrated PostgreSQL

**Key Components**

Frontend Architecture
Framework: React 18 with TypeScript
Routing: Wouter for client-side routing
State Management: TanStack Query for server state management
UI Components: shadcn/ui component library with Radix UI primitives
Styling: Tailwind CSS with custom design tokens
Animations: Framer Motion for smooth transitions and scroll-based animations
Form Handling: React Hook Form with Zod validation

*Backend Architecture*

Server: Express.js with TypeScript
Database ORM: Drizzle ORM with PostgreSQL dialect
Database Provider: Neon Database (serverless PostgreSQL)
Validation: Zod schemas for request validation
Session Management: connect-pg-simple for PostgreSQL session storage
Development: tsx for TypeScript execution in development
Database Schema
Users Table: Basic user authentication structure (id, username, password)
Schema Location: shared/schema.ts for type sharing between client and server
Migrations: Drizzle Kit for database migrations in migrations/ directory

*UI Component System*

Design System: shadcn/ui with "new-york" style variant
Theme: Custom color palette with CSS variables for light/dark mode support
Typography: Inter font family for modern, readable text
Icons: Font Awesome icons and Lucide React icons
Responsive Design: Mobile-first approach with Tailwind breakpoints

*Data Flow*

Contact Form Submission
User fills out contact form with validation
Form data validated client-side with Zod
POST request to /api/contact endpoint
Server validates data again with Zod schema
Success/error response sent back to client
Toast notification displays result to user

*Portfolio Data*

Static portfolio data stored in client/src/lib/portfolio-data.ts
Includes developer information, skills, and project details
Images served from Unsplash CDN for demo purposes
Development Workflow
Vite dev server serves React application
Express server handles API routes and serves built assets
Hot module replacement for frontend development
TypeScript compilation and type checking across full stack
External Dependencies

*Core Technologies*

React: UI framework with hooks and modern patterns
Express: Node.js web server framework
Drizzle ORM: Type-safe database operations
Vite: Fast frontend build tool and dev server
TanStack Query: Server state management and caching
UI and Styling
Tailwind CSS: Utility-first CSS framework
shadcn/ui: Pre-built component library
Radix UI: Accessible UI primitives
Framer Motion: Animation library
Font Awesome: Icon library

*Development Tools*

TypeScript: Type safety across the stack
tsx: TypeScript execution for development
esbuild: Fast JavaScript bundler for production
Zod: Schema validation library
Database and Infrastructure
PostgreSQL: Primary database
Neon Database: Serverless PostgreSQL provider
connect-pg-simple: PostgreSQL session store
Deployment Strategy

*Development*

Github page with integrated PostgreSQL
Vite dev server for frontend with HMR
tsx for backend development with auto-restart
Port 5000 for local development
