import React from 'react';
import { AppProvider } from '@/app/provider';

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};
