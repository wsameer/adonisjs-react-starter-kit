import { Head } from '@inertiajs/react';
import React from 'react'

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({ title, children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-[400px]">
        <div className="flex flex-1 flex-col px-6 gap-10">
          <Head title={title} />

          <header className="flex justify-between items-center">
            Logo here
          </header>

          <main className="flex flex-1 flex-col gap-8">{children}</main>
        </div>
      </div>
    </div>
  );
};
