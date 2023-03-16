import { extendTheme } from "@chakra-ui/react";
import breakpoints from "./customTheme/breakpoints";
import fonts from "./customTheme/fonts";
import colors from "./customTheme/colors";
import sizes from "./customTheme/sizes";
import spaces from "./customTheme/spaces";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "body",
        fontSize: "md",
        color: "black.700",
        fontFamily: '"Futura", sans-serif',
      },
    }),
  },
  fonts,
  sizes,
  spaces,
  colors,

  breakpoints,
});

export default theme;
