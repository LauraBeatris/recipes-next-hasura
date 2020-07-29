import { NextPage } from "next";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import ThemeContainer from "contexts/theme/ThemeContainer";
import seo from "config/seo";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeContainer>
    <DefaultSeo {...seo} />
    <Component {...pageProps} />
  </ThemeContainer>
);

export default App;
