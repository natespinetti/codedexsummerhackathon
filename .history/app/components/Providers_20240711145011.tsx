import theme from "@/ui/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      {children}
    </ChakraProvider>
  );
}
