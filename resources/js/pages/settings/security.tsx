import { PageLayout } from '@/components/layout/page-layout'
import { SettingsLayout } from '@/components/layout/settings-layout'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { type BreadcrumbItem } from '@/types'
import { AlertTriangleIcon, KeyIcon, ShieldIcon } from 'lucide-react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Security settings',
    href: '/settings/security',
    id: 1,
  },
]

const SecurityPage = () => {
  return (
    <PageLayout breadcrumbs={breadcrumbs} pageTitle="Security settings">
      <SettingsLayout>
        <section className="w-5/6 space-y-8">
          {/* Change Password */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-1">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <KeyIcon className="h-4 w-4" />
                Change Password
              </Label>
              <p className="text-sm text-muted-foreground">
                Update your password to keep your account secure.
              </p>
            </div>
            <div className="space-y-4 md:col-span-2">
              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="text-xs text-muted-foreground">
                  Current Password
                </Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword" className="text-xs text-muted-foreground">
                  New Password
                </Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-xs text-muted-foreground">
                  Confirm New Password
                </Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Alert>
                <AlertTriangleIcon className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  Make sure your password is at least 8 characters long and includes a mix of
                  letters, numbers, and symbols.
                </AlertDescription>
              </Alert>
              <div>
                <Button>Save</Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* Two-Factor Authentication */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-1">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <ShieldIcon className="h-4 w-4" />
                Two-Factor Authentication
              </Label>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account.
              </p>
            </div>
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Authenticator App</p>
                  <p className="text-xs text-muted-foreground">
                    Use an authenticator app to generate verification codes.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">SMS Authentication</p>
                  <p className="text-xs text-muted-foreground">
                    Receive verification codes via text message.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Setup
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* Active Sessions */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Log out other sessions</Label>
              <p className="text-sm text-muted-foreground">
                Please enter your password to confirm you would like to log out of your other
                sessions across all of your devices.
              </p>
            </div>
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Current Session</p>
                  <p className="text-xs text-muted-foreground">
                    Chrome on macOS • San Francisco, CA
                  </p>
                </div>
                <span className="rounded bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Mobile App</p>
                  <p className="text-xs text-muted-foreground">iOS App • Last active 2 hours ago</p>
                </div>
                <Button variant="outline" size="sm">
                  Revoke
                </Button>
              </div>
              <Button variant="destructive" size="sm" className="px-6 h-12 rounded-full">
                Sign Out All Other Sessions
              </Button>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Delete account</Label>
              <p className="text-sm text-muted-foreground">
                No longer want to use our service? You can delete your account here. This action is
                not reversible. All information related to this account will be deleted permanently.
              </p>
            </div>
            <div className="space-y-3 md:col-span-2">
              <Button variant="destructive" size="sm" className="px-6 h-12 rounded-full">
                Yes, delete my account
              </Button>
            </div>
          </div>
        </section>
      </SettingsLayout>
    </PageLayout>
  )
}

export default SecurityPage
