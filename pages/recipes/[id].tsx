import React, { useCallback } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/core";

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
          title: "Recipe successfully created",
          status: "success",
          duration: 1500,
          isClosable: true,
        });

        router.push(ROOT_PAGE_PATH);
      })
      .catch(() => {
        toast({
          title: "Something went wrong when creating a recipe",
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      });
  }, [
    toast,
    router,
    query.id,
    updateRecipe,
  ]);

  if (!data?.recipe) {
    return null;
  }

  return (
    <Section title="Update Recipe" headerButton={<HeaderBackButton />}>
      <RecipeForm onSubmit={onSubmit} defaultValues={data?.recipe} />
    </Section>
  );
};

export default UpdateRecipe;
