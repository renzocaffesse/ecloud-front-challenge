"use client"

import { ChakraProvider } from "@chakra-ui/react"
import type { ReactNode } from 'react';
import system from "@/theme"

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => (
  <ChakraProvider value={system}>{children}</ChakraProvider>
);

export default Providers;
