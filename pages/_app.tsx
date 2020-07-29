import { NextPage } from "next";
import { AppProps } from "next/app";
import { Global } from "@emotion/core";
import {
  ColorModeProvider,
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
} from "@chakra-ui/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { DefaultSeo } from "next-seo";

import seo from "config/seo";
import globalStyles from "styles/global";
import theme from "styles/theme";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ColorModeProvider value="dark">
    <ChakraThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CSSReset />
        <Global
          styles={globalStyles}
        />
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </EmotionThemeProvider>
    </ChakraThemeProvider>
  </ColorModeProvider>
);

export default App;
