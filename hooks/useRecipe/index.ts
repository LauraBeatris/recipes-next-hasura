import { useMemo } from "react";
import { BaseQueryOptions, useQuery } from "@apollo/react-hooks";

import GET_RECIPE_QUERY from "graphql/queries/getRecipe";

/**
 * Hook that handles the query in order to get a recipe
 *
 * @param BaseQueryOptions The options of useQuery hook
 */
const useRecipe = (queryOptions?: BaseQueryOptions) => {
  const { data, loading } = useQuery(GET_RECIPE_QUERY, queryOptions);

  const payload = useMemo(() => ({
    data: data?.recipe,
    loading,
  }), [
    data,
    loading,
  ]);

  return payload;
};

export default useRecipe;
