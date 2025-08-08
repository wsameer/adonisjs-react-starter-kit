import { type PropsWithChildren } from "react"
import { usePage } from "@inertiajs/react";

import { type BreadcrumbItem as BreadcrumbItemType, type PageData } from '@/types';

import { SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from "../navigation/app-sidebar";
import { Separator } from "../ui/separator";
import { AppBreadcrumbs } from "../common/app-breadcrumbs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

export const PageLayout = ({
  children,
  breadcrumbs = [],
}: PropsWithChildren & { breadcrumbs?: BreadcrumbItemType[] }) => {
  const isOpen = usePage<PageData>().props.sidebarOpen;

  return (
    <SidebarProvider defaultOpen={isOpen}>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden">
        <SidebarHeader>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarHeader>

        {/* <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <AppBreadcrumbs breadcrumbs={breadcrumbs} />
          </div>
        </header> */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};
