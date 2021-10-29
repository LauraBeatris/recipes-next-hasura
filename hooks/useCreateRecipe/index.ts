import { useCallback, useMemo } from "react";
import { useToast } from "@chakra-ui/core";
import { MutationHookOptions, useMutation } from "@apollo/client";
import useTranslation from "next-translate/useTranslation";
import Router from "next-translate/Router";

import CREATE_RECIPE_MUTATION from "graphql/mutations/createRecipe";
import LIST_RECIPES_QUERY, { ListRecipesQuery } from "graphql/queries/listRecipes";
import { ROOT_PAGE_PATH } from "constants/routes";
import { RecipeFormData } from "types/recipes";

import { UseCreateRecipePayload } from "./types";

/**
 * Hook that handles the mutation in order to create a recipe
 *
 * @param mutationOptions The options of useMutation hook
 */
const useCreateRecipe = (mutationOptions?: MutationHookOptions) => {
  const [createRecipe, createRecipeResult] = useMutation(CREATE_RECIPE_MUTATION, {
    update(cache, { data }) {
      const newRecipeFromResponse = data.recipe;
      const listRecipesQuery = cache.readQuery({
        query: LIST_RECIPES_QUERY,
      }) ?? [];

      const { recipes } = listRecipesQuery as ListRecipesQuery;

      const shouldUpdate = Boolean(recipes) && Boolean(newRecipeFromResponse);

      if (!shouldUpdate) {
        return;
      }

      cache.writeQuery({
        query: LIST_RECIPES_QUERY,
        data: {
          recipes: [
            ...recipes,
            newRecipeFromResponse,
          ],
        },
      });
    },
    ...mutationOptions,
  });

  const toast = useToast();

  const { t } = useTranslation();

  const handleCreateRecipe = useCallback(((recipeData: RecipeFormData): void => {
    createRecipe({
      variables: {
        recipeData,
      },
    })
      .then(() => {
        toast({
          title: t("common:toasts.recipe_successfully_created"),
          status: "success",
          duration: 1500,
          isClosable: true,
        });

        Router.push(ROOT_PAGE_PATH);
      })
      .catch(() => {
        toast({
          title: t("common:toasts.something_went_wrong_while_creating_a_recipe"),
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      });
  }), [
    t,
    toast,
    createRecipe,
  ]);

  const payload = useMemo<UseCreateRecipePayload>(() => [
    handleCreateRecipe,
    createRecipeResult,
  ], [
    handleCreateRecipe,
    createRecipeResult,
  ]);

  return payload;
};

export default useCreateRecipe;
