export interface User {
  id: number
  name: string | null
  email: string
}

export interface AuthData {
  isAuthenticated: boolean
}

export interface SharedProps {
  auth: AuthData
  user: User | null
  flash: {
    success?: string
    errors?: Record<string, string>
  }
}

export interface SharedPageProps extends SharedProps {
  sidebarOpen?: boolean
  [key: string]: unknown // to extend
}
