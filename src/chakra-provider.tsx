"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "'canada-type-gibson', sans-serif" },
        heading: { value: "'canada-type-gibson', sans-serif" },
      },
      colors: {},
      spacing: {},
      radii: {},
    },
    breakpoints: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280",
    },
  },
});

const system = createSystem(defaultConfig, config);

const Providers = ({ children }: ProvidersProps) => (
  <ChakraProvider value={system}>{children}</ChakraProvider>
);

export default Providers;
