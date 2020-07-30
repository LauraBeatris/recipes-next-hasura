import { NextPage } from "next";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import ThemeContainer from "contexts/theme/ThemeContainer";
import seo from "config/seo";
import { withApollo } from "config/apollo";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeContainer>
    <DefaultSeo {...seo} />
    <Component {...pageProps} />
  </ThemeContainer>
);

export default withApollo({ ssr: true })(App);
