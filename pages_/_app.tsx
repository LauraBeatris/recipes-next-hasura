import { NextPage } from "next";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ApolloProvider } from "@apollo/client";

import ThemeContainer from "contexts/theme/ThemeContainer";
import seo from "config/seo";
import { client } from "config/apolloClient";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <ThemeContainer>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ThemeContainer>
  </ApolloProvider>
);

export default App;
