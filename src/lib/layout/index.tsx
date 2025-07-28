'use client';
import customTheme from '@/lib/styles/theme';
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
   <ChakraProvider value={customTheme}>
          {children}
          </ChakraProvider>
  );
};
