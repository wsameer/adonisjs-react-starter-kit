export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthData {
  user: User | null;
  isAuthenticated: boolean;
}

export type ValidationErrors = Record<string, string>;

export interface PageData {
  name: string;
  auth: AuthData;
  flash: {
    errors: ValidationErrors;
  };
  sidebarOpen: boolean;
  [key: string]: unknown; // This allows for additional properties...
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}