import { PageLayout } from '@/components/layout/page-layout'
import { SettingsLayout } from '@/components/layout/settings-layout'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { useTheme, type Theme as ThemeType, Themes } from '@/features/theme/theme-provider'
import { useIsMobile } from '@/hooks/use-mobile'
import { type BreadcrumbItem } from '@/types'
import { MonitorIcon, MoonIcon, PaletteIcon, SunIcon } from 'lucide-react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Appearance settings',
    href: '/settings/appearance',
    id: 1,
  },
]

const AppearancePage = () => {
  const { theme, setTheme } = useTheme()
  const isMobile = useIsMobile()

  return (
    <PageLayout breadcrumbs={breadcrumbs} pageTitle="Appearance settings">
      <SettingsLayout>
        <section className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-1">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <PaletteIcon className="h-4 w-4" />
                Theme Mode
              </Label>
              <p className="text-sm text-muted-foreground">
                Choose your preferred theme appearance.
              </p>
            </div>
            <div className="md:col-span-2">
              <RadioGroup
                defaultValue={theme}
                className="grid grid-cols-3 gap-4"
                onValueChange={(value) => setTheme(value as ThemeType)}
              >
                <div className="flex cursor-pointer items-center space-x-2 rounded-lg border p-3 hover:bg-accent">
                  <RadioGroupItem value={Themes.light} id={Themes.light} />
                  <Label
                    htmlFor={Themes.light}
                    className="flex cursor-pointer items-center gap-2 text-sm"
                  >
                    {!isMobile && <SunIcon className="h-4 w-4" />}
                    Light
                  </Label>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 rounded-lg border p-3 hover:bg-accent">
                  <RadioGroupItem value={Themes.dark} id={Themes.dark} />
                  <Label
                    htmlFor={Themes.dark}
                    className="flex cursor-pointer items-center gap-2 text-sm"
                  >
                    {!isMobile && <MoonIcon className="h-4 w-4" />}
                    Dark
                  </Label>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 rounded-lg border p-3 hover:bg-accent">
                  <RadioGroupItem value={Themes.system} id={Themes.system} />
                  <Label
                    htmlFor={Themes.system}
                    className="flex cursor-pointer items-center gap-2 text-sm"
                  >
                    {!isMobile && <MonitorIcon className="h-4 w-4" />}
                    System
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Separator />
        </section>
      </SettingsLayout>
    </PageLayout>
  )
}

export default AppearancePage
