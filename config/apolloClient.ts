import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URI,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET,
  },
});

