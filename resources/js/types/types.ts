export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthData {
  user: User | null;
  isAuthenticated: boolean;
}

export interface PageProps {
  auth: AuthData;
}
