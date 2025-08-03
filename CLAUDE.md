# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands

- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm test` - Run all tests using Japa
- `pnpm lint` - Lint code using ESLint
- `pnpm format` - Format code using Prettier
- `pnpm typecheck` - Run TypeScript type checking

### Testing

- `node ace test` - Run all test suites
- Test files are located in `tests/unit/**/*.spec.ts` and `tests/functional/**/*.spec.ts`
- Unit tests timeout after 2 seconds, functional tests after 30 seconds

### Documentation

- `pnpm docs:dev` - Start VitePress docs development server
- `pnpm docs:build` - Build documentation
- `pnpm docs:preview` - Preview built documentation

## Project Architecture

This is an **AdonisJS + React full-stack starter kit** using Inertia.js for seamless client-server communication.

### Backend Architecture (AdonisJS 6)

- **Entry point**: `start/routes.ts` - defines HTTP routes
- **Controllers**: `app/controllers/` (not yet created)
- **Models**: `app/models/` - Lucid ORM models (User model exists)
- **Middleware**: `app/middleware/` - authentication and request processing
- **Config**: `config/` - application configuration files
- **Database**: `database/migrations/` - Lucid database migrations

### Frontend Architecture (React 19 + Inertia.js)

- **Entry point**: `resources/js/app/app.tsx` - Inertia React setup
- **Pages**: `resources/js/pages/` - Inertia page components
- **Components**: `resources/js/components/` - reusable React components
- **UI Components**: `resources/js/components/ui/` - ShadCN UI components
- **Styles**: `resources/css/app.css` - Tailwind CSS entry point

### Key Integrations

- **Inertia.js**: Connects AdonisJS backend with React frontend seamlessly
- **ShadCN UI**: Pre-built accessible components with Tailwind CSS
- **Tailwind CSS 4**: Utility-first styling with CSS variables for theming
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Fast build tool with HMR for React components

## File Structure Patterns

### Path Aliases

- `#controllers/*` → `./app/controllers/*.js`
- `#models/*` → `./app/models/*.js`
- `#middleware/*` → `./app/middleware/*.js`
- `#config/*` → `./config/*.js`
- `@/*` → `./resources/js/*` (frontend only)

### Import Conventions

- Use path aliases for cleaner imports
- Backend uses `.js` extensions in imports (TypeScript compilation target)
- Frontend uses standard React/TypeScript import patterns

## Development Workflow

### Adding New Features

1. **Backend**: Create controllers in `app/controllers/`, add routes in `start/routes.ts`
2. **Database**: Create migrations with `node ace make:migration`
3. **Frontend**: Add pages in `resources/js/pages/`, components in `resources/js/components/`
4. **Types**: Shared types go in `shared/types.ts`

### Authentication

- Session-based authentication is configured
- Auth middleware available: `auth_middleware.ts`, `guest_middleware.ts`, `silent_auth_middleware.ts`
- User model exists in `app/models/user.ts`

### UI Development

- Uses ShadCN UI components with Tailwind CSS
- Components use CSS variables for theming (see `tailwind.config.cjs`)
- Dark mode support configured with class-based toggle

### Hot Reloading

- Hot Hook configured for controllers and middleware
- Vite HMR for React components
- Edge template reloading configured

## Planned Features

### tRPC Integration

- Routes commented out in `start/routes.ts`: `router.any('/trpc/*', [TrpcController, 'handle'])`
- Full-stack type safety planned with tRPC integration
- Would provide end-to-end TypeScript types from backend to frontend

## Configuration Notes

- **Database**: PostgreSQL configured via Lucid ORM
- **Session**: File-based session storage configured
- **CORS**: Enabled for cross-origin requests
- **Security**: Shield middleware for CSRF protection
- **Static Assets**: Served from `public/` directory
- **Build**: Uses SWC for fast TypeScript compilation
