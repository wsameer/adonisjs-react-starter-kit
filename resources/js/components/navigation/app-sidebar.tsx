import { BookOpenIcon, CommandIcon, GithubIcon, Settings2Icon, SquareTerminal } from 'lucide-react'
import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavMain } from './nav-main'
import { NavUser } from './nav-user'
import { Link } from '@inertiajs/react'
import { AppLogo } from '../common/app-logo'
import { type NavItem } from '@/types'
import { NavSecondary } from './nav-secondary'

// This is sample data.
const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard', // needs to match path.url for it to be active based on the page you are on
    icon: SquareTerminal,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings2Icon,
  },
]

const secondaryNavItems: NavItem[] = [
  {
    title: 'Documentation',
    href: 'https://wsameer.github.io/adonisjs-react-starter-kit/intro.html',
    icon: BookOpenIcon,
  },
  {
    title: 'Repository',
    href: 'https://wsameer.github.io/adonisjs-react-starter-kit/',
    icon: GithubIcon,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              asChild
            >
              <Link href="/dashboard" prefetch>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <AppLogo size="small" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
        <NavSecondary items={secondaryNavItems} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>{/* <NavUser /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
