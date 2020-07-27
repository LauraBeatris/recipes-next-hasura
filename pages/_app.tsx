import { NextPage } from "next";
import { AppProps } from "next/app";
import { Global, css } from "@emotion/core";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { DefaultSeo } from "next-seo";

import seo from "config/seo";

const rootFullHeight = css`
  #__next {
    min-height: 100%;
  }
`;

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ColorModeProvider value="dark">
    <ThemeProvider>
      <CSSReset />
      <Global
        styles={rootFullHeight}
      />
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ThemeProvider>
  </ColorModeProvider>
);

export default App;
