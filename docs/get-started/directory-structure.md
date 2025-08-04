# Directory Structure

Understanding the project structure will help you navigate and organize your code effectively. This starter kit follows modern conventions and separates concerns clearly between backend and frontend code.

## Overview

```bash
my-awesome-app/
├── 📁 app/            # AdonisJS backend application
├── 📁 config/         # Configuration files
├── 📁 database/       # Database migrations & seeders
├── 📁 docs/           # Documentation (you are here!)
├── 📁 resources/      # Frontend React application  
├── 📁 shared/         # Shared TypeScript types (tRPC backend)
├── 📁 start/          # Files needed during Boot lifecycle
├── 📄 package.json    # Dependencies and scripts
└── 📄 .env            # Environment variables
```

::: tip Project Philosophy
This structure follows the separation of concerns principle, keeping backend logic in `app/`, frontend code in `resources/`, and shared types in `types/` for maximum maintainability.
:::

## File Naming Conventions

### Backend (AdonisJS)

* Controllers: `snake_case` with `_controller` suffix (e.g., `users_controller.ts`)
* Models: `PascalCase` singular (e.g., `User.ts`)
* Services: `snake_case` with `_service` suffix (e.g., `auth_service.ts`)
* Middleware: `snake_case` (e.g., `auth.ts`)

### Frontend (React)

* Components: kebab-case (e.g., `user-profile.tsx`)
* Pages: kebab-case (e.g., `login.tsx`, `dashboard.tsx`)
* Features: kebab-case (`auth`, `checkout`, `payments`)
* Hooks: kebab-case with use prefix (e.g., `use-auth.ts`)
* Utils: kebab-case with groups (e.g., `date-formatters.ts`, `string-formatters.ts`)

::: danger Barrel File
Please use barrel file (`index.ts`) only in root level directories for exporting components. 
:::


You can read more [here](https://github.com/kettanaito/naming-cheatsheet)