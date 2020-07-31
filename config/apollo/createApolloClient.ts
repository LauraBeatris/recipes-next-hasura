/* eslint-disable */

import { IncomingMessage } from "http";
import { NextPageContext } from "next";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
import cookie from "cookie";

/**
 * Get the user token from cookie
 */
export const getToken = (req?: IncomingMessage) => {
  const parsedCookie = cookie.parse(
    req ? req.headers.cookie ?? "" : document.cookie,
  );

  return parsedCookie.token;
};

export const createApolloClient = (initialState = {}, ctx: NextPageContext) => {
  const fetchOptions = {
    agent: null,
  };

  // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
  // 'https-proxy-agent' is required here because it's a sever-side only module
  if (typeof window === "undefined") {
    if (process.env.https_proxy) {
      fetchOptions.agent = new (require("https-proxy-agent"))(
        process.env.https_proxy,
      );
    }
  }

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URI,
    credentials: "same-origin",
    fetch,
    fetchOptions,
  });

  const authLink = setContext((_request, { headers }) => ({
    headers: {
      ...headers,
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET,
    },
  }));

  return new ApolloClient({
    connectToDevTools: Boolean(ctx),
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
};
