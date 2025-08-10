import { ChevronsUpDown, LogOut, SettingsIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { useMobileNavigation } from '@/hooks/use-mobile-navigations'
import { type SharedProps } from '@/types'
import { Link, router, usePage } from '@inertiajs/react'

const getInitials = (fullName: string): string => {
  const names = fullName.trim().split(' ')

  if (names.length === 0) return ''
  if (names.length === 1) return names[0].charAt(0).toUpperCase()

  const firstInitial = names[0].charAt(0)
  const lastInitial = names[names.length - 1].charAt(0)

  return `${firstInitial}${lastInitial}`.toUpperCase()
}

export const NavUser = () => {
  const { props } = usePage<SharedProps>()
  const { auth, user } = props

  const { state } = useSidebar()
  const { isMobile } = useSidebar()

  const cleanup = useMobileNavigation()
  const handleLogout = () => {
    cleanup()
    router.flushAll()
  }

  if (!auth || !user) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                {/* <AvatarImage src={auth.user.avatar} alt={user.name} /> */}
                <AvatarFallback className="rounded-lg">
                  {getInitials(user?.name ?? '')}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : state === 'collapsed' ? 'left' : 'bottom'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link className="block w-full" href="settings" as="button" onClick={handleLogout}>
                <SettingsIcon className="mr-2" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                className="block w-full"
                method="post"
                href="logout"
                as="button"
                onClick={handleLogout}
              >
                <LogOut className="mr-2" />
                Log out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
