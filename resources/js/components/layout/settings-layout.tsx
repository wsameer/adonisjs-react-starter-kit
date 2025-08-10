import { type PropsWithChildren } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { type NavItem } from '@/types'
import { router } from '@inertiajs/react'

const tabOptions: NavItem[] = [
  {
    title: 'Profile',
    href: '/settings/profile',
    icon: null,
    type: 'internal',
  },
  {
    title: 'Security',
    href: '/settings/security',
    icon: null,
    type: 'internal',
  },
  {
    title: 'Appearance',
    href: '/settings/appearance',
    icon: null,
    type: 'internal',
  },
]

export const SettingsLayout = ({ children }: PropsWithChildren) => {
  // When server-side rendering, we only render the layout on the client...
  if (typeof window === 'undefined') {
    return null
  }

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/settings/profile'

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-2 text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs
        value={currentPath}
        className="space-y-6"
        onValueChange={(value) => {
          router.visit(value)
        }}
      >
        <TabsList className="grid w-full grid-cols-3">
          {tabOptions.map((tab) => (
            <TabsTrigger
              key={tab.title.toLowerCase()}
              value={tab.href}
              className="text-sm font-medium"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={currentPath} className="space-y-6">
          {children}
        </TabsContent>
      </Tabs>
    </div>
  )
}
