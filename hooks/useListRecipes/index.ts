import { QueryOptions, useQuery } from "@apollo/client";
import { useMemo } from "react";

import LIST_RECIPES_QUERY from "graphql/queries/listRecipes";

/**
 * Hook that handles the query in order to list recipes
 *
 * @param queryOptions The options of useQuery hook
 */
const useListRecipes = (queryOptions?: QueryOptions) => {
  const { data, loading } = useQuery(LIST_RECIPES_QUERY, queryOptions);

  const payload = useMemo(() => ({
    data: data?.recipes ?? [],
    loading,
  }), [
    data,
    loading,
  ]);

  return payload;
};

export default useListRecipes;
