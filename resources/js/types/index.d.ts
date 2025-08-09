export type { AuthData, User } from '../../../shared/types'
export type { PageProps, SharedProps } from './inertia'

export type ValidationErrors = Record<string, string>

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
  type: 'internal' | 'external'
  isActive?: boolean
}
