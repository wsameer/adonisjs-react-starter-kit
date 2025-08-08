# TypeScript Integration for Inertia.js

This directory contains TypeScript definitions for proper type safety between your AdonisJS backend and React frontend through Inertia.js.

## How It Works

The type synchronization works through several layers:

1. **Backend Types** (`shared/types.ts`) - Shared interfaces between backend and frontend
2. **Inertia Config** (`config/inertia.ts`) - Module augmentation for Inertia shared props
3. **Frontend Types** (`resources/js/types/inertia.ts`) - Re-exported types for frontend use
4. **Middleware** (`app/middleware/inertia_middleware.ts`) - Runtime data sharing with type annotations

## Using Typed Props in Components

### Basic Page Component

```typescript
import type { PageProps } from '@/types/inertia'

export default function MyPage({ auth, user, flash }: PageProps) {
  return (
    <div>
      {auth.isAuthenticated && (
        <h1>Welcome, {user?.name}!</h1>
      )}
    </div>
  )
}
```

### Page Component with Additional Props

```typescript
import type { PageProps } from '@/types/inertia'

interface MyPageProps extends PageProps {
  posts: Array<{
    id: number
    title: string
    content: string
  }>
  meta: {
    total: number
    perPage: number
  }
}

export default function MyPage({ auth, user, flash, posts, meta }: MyPageProps) {
  // Full type safety for both shared and page-specific props
}
```

## Available Shared Props

All page components automatically receive these typed props:

- `auth.isAuthenticated: boolean` - Authentication status
- `user: User | null` - Current user object (null if not authenticated)
- `flash.success?: string` - Success flash message
- `flash.errors?: Record<string, string[]>` - Validation errors
- `sidebarOpen: boolean` - Sidebar is open or not

## User Type Structure

```typescript
interface User {
  id: number
  name: string | null
  email: string
}
```

## Best Practices

1. **Always extend `PageProps`** for page components that need shared data
2. **Use destructuring** in component parameters for clean prop access
3. **Check authentication** before accessing user data
4. **Handle flash messages** appropriately in your UI
5. **Keep shared types in sync** between backend and frontend

## Example Files

- `pages/dashboard.tsx` - Real-world example using shared props
- `pages/auth/login.tsx` - Authentication page with proper typing