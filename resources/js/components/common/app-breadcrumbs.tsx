import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types'
import { Link } from '@inertiajs/react'
import { Fragment } from 'react'

export function AppBreadcrumbs({ breadcrumbs }: { breadcrumbs: BreadcrumbItemType[] }) {
  return (
    <>
      {breadcrumbs.length > 0 && (
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1
              return (
                <Fragment key={item.id}>
                  <BreadcrumbItem
                    className={cn('block', {
                      'hidden md:block': !isLast,
                    })}
                  >
                    {isLast ? (
                      <BreadcrumbPage>{item.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={item.href}>{item.title}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
                </Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  )
}
