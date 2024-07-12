import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { radioTheme } from "./radio";

const overrides = {
  colors,
  fonts,
  radioTheme,
};

export const WHTheme = extendTheme(overrides);
