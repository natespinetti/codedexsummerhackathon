"use server";
import { SPTheme } from "@/ui/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });
export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
