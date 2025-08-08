export interface User {
  id: number
  name: string
  email: string
}

export interface AuthData {
  user: User
  isAuthenticated: boolean
}

export type ValidationErrors = Record<string, string>

export interface PageData {
  name: string
  auth: AuthData
  flash: {
    errors: ValidationErrors
  }
  sidebarOpen: boolean
  [key: string]: unknown // This allows for additional properties...
}

export interface BreadcrumbItem {
  id: number
  title: string
  href: string
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export interface NavItem {
  title: string
  href: string
  icon?: LucideIcon | null
  isActive?: boolean
}
