import React, { useCallback } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

import Section from "components/Section";
import RecipeForm from "components/RecipeForm";
import HeaderBackButton from "components/HeaderButton";
import { RecipeFormData } from "types/recipes";
import GET_RECIPE_QUERY from "graphql/queries/getRecipe";
import LIST_RECIPES_QUERY from "graphql/queries/listRecipes";
import UPDATE_RECIPE_MUTATION from "graphql/mutations/updateRecipe";
import { ROOT_PAGE_PATH } from "constants/routes";

const UpdateRecipe: React.FC = () => {
  const { query } = useRouter();

  const { data } = useQuery(GET_RECIPE_QUERY, {
    variables: {
      id: query.id,
    },
  });

  const [updateRecipe] = useMutation(UPDATE_RECIPE_MUTATION, {
    refetchQueries: [
      {
        query: LIST_RECIPES_QUERY,
      },
    ],
  });

  const toast = useToast();
  const router = useRouter();
  const { t } = useTranslation();

  const onSubmit = useCallback((recipeData: RecipeFormData): void => {
    updateRecipe({
      variables: {
        pk_columns: {
          id: query.id,
        },
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

        router.push(ROOT_PAGE_PATH);
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
    router,
    query.id,
    updateRecipe,
  ]);

  if (!data?.recipe) {
    return null;
  }

  return (
    <Section title={t("common:update_recipe.title")} headerButton={<HeaderBackButton />}>
      <RecipeForm onSubmit={onSubmit} defaultValues={data?.recipe} />
    </Section>
  );
};

export default UpdateRecipe;
