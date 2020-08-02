import React from "react";
import { Global } from "@emotion/core";
import {
  ColorModeProvider,
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
} from "@chakra-ui/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import globalStyles from "styles/global";
import theme from "styles/theme";

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraThemeProvider theme={theme}>
    <ColorModeProvider value="dark">
      <EmotionThemeProvider theme={theme}>
        <CSSReset />
        <Global
          styles={globalStyles}
        />
        {children}
      </EmotionThemeProvider>
    </ColorModeProvider>
  </ChakraThemeProvider>
);

export default ThemeContainer;
