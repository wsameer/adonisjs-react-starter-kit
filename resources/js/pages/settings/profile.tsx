import { PageLayout } from '@/components/layout/page-layout'
import { SettingsLayout } from '@/components/layout/settings-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { type BreadcrumbItem } from '@/types'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Profile settings',
    href: '/settings/profile',
    id: 1,
  },
]

const ProfilePage = () => {
  return (
    <PageLayout breadcrumbs={breadcrumbs} pageTitle="Profile settings">
      <SettingsLayout>
        <section className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-1">
              <Label className="text-lg font-medium">Profile</Label>
              <p className="text-sm text-muted-foreground">Set your account details</p>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs text-muted-foreground">
                    Full Name
                  </Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs text-muted-foreground">
                    Email address
                  </Label>
                  <Input type={'email'} id="email" placeholder="user@email.com" />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Bio */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Bio</Label>
              <p className="text-sm text-muted-foreground">
                Brief description for your profile. Max 160 characters.
              </p>
            </div>
            <div className="md:col-span-2">
              <Textarea
                placeholder="Tell us about yourself..."
                className="min-h-[100px] resize-none"
              />
            </div>
          </div>

          <Separator />

          {/* Location */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Location</Label>
              <p className="text-sm text-muted-foreground">Your current location.</p>
            </div>
            <div className="md:col-span-2">
              <Input placeholder="San Francisco, CA" />
            </div>
          </div>

          <div className="flex justify-end border-t pt-6">
            <Button>Save Changes</Button>
          </div>
        </section>
      </SettingsLayout>
    </PageLayout>
  )
}

export default ProfilePage
