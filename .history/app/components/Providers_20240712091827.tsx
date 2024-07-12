"use server";
import { SPTheme } from "@/ui/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={SPTheme}>{children}</ChakraProvider>;
}
