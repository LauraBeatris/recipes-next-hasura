import { useCallback, useMemo } from "react";
import { MutationHookOptions, useMutation } from "@apollo/react-hooks";

import DELETE_RECIPE_MUTATION from "graphql/mutations/deleteRecipe";
import LIST_RECIPES_QUERY, { ListRecipesQuery } from "graphql/queries/listRecipes";

import { UseDeleteRecipePayload } from "./types";

/**
 * Hook that handles the mutation in order to delete a recipe
 *
 * @param mutationOptions The options of useMutation hook
 */
const useDeleteRecipe = (mutationOptions?: MutationHookOptions) => {
  const [deleteRecipe, deleteRecipeResult] = useMutation(DELETE_RECIPE_MUTATION, {
    update(cache, { data }) {
      const deletedRecipeId = data.recipe.id;
      const listRecipesQuery = cache.readQuery({
        query: LIST_RECIPES_QUERY,
      }) ?? [];

      const { recipes } = listRecipesQuery as ListRecipesQuery;

      cache.writeQuery({
        query: LIST_RECIPES_QUERY,
        data: {
          recipes: recipes.filter((recipe) => recipe.id !== deletedRecipeId),
        },
      });

      cache.evict({ id: deletedRecipeId });
    },
    ...mutationOptions,
  });

  const handleDelete = useCallback((id: string) => {
    deleteRecipe({
      variables: {
        id,
      },
    });
  }, [deleteRecipe]);

  const payload = useMemo<UseDeleteRecipePayload>(() => [
    handleDelete,
    deleteRecipeResult,
  ], [
    handleDelete,
    deleteRecipeResult,
  ]);

  return payload;
};

export default useDeleteRecipe;
