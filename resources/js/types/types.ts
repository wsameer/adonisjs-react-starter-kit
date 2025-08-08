export interface User {
  id: number
  name: string
  email: string
}

export interface AuthData {
  user: User | null
  isAuthenticated: boolean
}

export type ValidationErrors = Record<string, string>
export interface PageProps {
  auth: AuthData
  flash: {
    errors: ValidationErrors
  }
}
