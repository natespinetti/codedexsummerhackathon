"use client";
import { SPTheme } from "@/ui/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

// Custom fonts
export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={SPTheme}>{children}</ChakraProvider>;
}
