import { NextPage } from "next";
import { AppProps } from "next/app";
import { Global } from "@emotion/core";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { DefaultSeo } from "next-seo";

import seo from "config/seo";
import globalStyles from "styles/global";
import theme from "styles/theme";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ColorModeProvider value="dark">
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Global
        styles={globalStyles}
      />
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ThemeProvider>
  </ColorModeProvider>
);

export default App;
