import * as React from 'react'
import {
  BookOpenIcon,
  GithubIcon,
  LifeBuoy,
  SendIcon,
  Settings2Icon,
  SquareTerminal,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { TeamSwitcher } from './team-switcher'
import { NavMain } from './nav-main'
import { NavSecondary } from './nav-secondary'
import { NavUser } from './nav-user'
import { type NavItem } from '@/types'

// This is sample data.
const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard', // needs to match path.url for it to be active based on the page you are on
    icon: SquareTerminal,
    type: 'internal',
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings2Icon,
    type: 'internal',
  },
  {
    title: 'Documentation',
    href: 'https://wsameer.github.io/adonisjs-react-starter-kit/intro.html',
    icon: BookOpenIcon,
    type: 'external',
  },
  {
    title: 'Repository',
    href: 'https://github.com/wsameer/adonisjs-react-starter-kit',
    icon: GithubIcon,
    type: 'external',
  },
]

const secondaryNavItems: NavItem[] = [
  {
    title: 'Support',
    href: 'https://github.com/wsameer/adonisjs-react-starter-kit/issues/new',
    icon: LifeBuoy,
    type: 'external',
  },
  {
    title: 'Feedback',
    href: 'mailto:someone@example.com',
    icon: SendIcon,
    type: 'external',
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainNavItems} />
        <NavSecondary items={secondaryNavItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
