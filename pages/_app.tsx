import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Recipes</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
