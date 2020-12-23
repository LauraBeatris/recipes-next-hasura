import { useCallback, useMemo } from "react";
import { useToast } from "@chakra-ui/core";
import { MutationHookOptions, useMutation } from "@apollo/react-hooks";
import useTranslation from "next-translate/useTranslation";
import Router from "next-translate/Router";

import UPDATE_RECIPE_MUTATION from "graphql/mutations/updateRecipe";
import LIST_RECIPES_QUERY from "graphql/queries/listRecipes";
import { RecipeFormData } from "types/recipes";
import { ROOT_PAGE_PATH } from "constants/routes";

import { UseUpdateRecipePayload } from "./types";

/**
 * Hook that handles the mutation in order to update a recipe
 *
 * @param mutationOptions The options of useMutation hook
 */
const useUpdateRecipe = (mutationOptions?: MutationHookOptions) => {
  const [updateRecipe, updateFoodResults] = useMutation(UPDATE_RECIPE_MUTATION, {
    ...mutationOptions,
    refetchQueries: [
      {
        query: LIST_RECIPES_QUERY,
      },
    ],
  });

  const { t } = useTranslation();

  const toast = useToast();

  const handleUpdateRecipe = useCallback((recipeId, recipeData: RecipeFormData): void => {
    updateRecipe({
      variables: {
        pk_columns: {
          id: recipeId,
        },
        recipeData,
      },
    })
      .then(() => {
        toast({
          title: t("common:toasts.recipe_successfully_updated"),
          status: "success",
          duration: 1500,
          isClosable: true,
        });

        Router.pushI18n(ROOT_PAGE_PATH);
      })
      .catch(() => {
        toast({
          title: t("common:toasts.something_went_wrong_while_creating_a_recipe"),
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      });
  }, [
    t,
    toast,
    updateRecipe,
  ]);

  const payload = useMemo<UseUpdateRecipePayload>(() => [
    handleUpdateRecipe,
    updateFoodResults,
  ], [
    handleUpdateRecipe,
    updateFoodResults,
  ]);

  return payload;
};

export default useUpdateRecipe;
