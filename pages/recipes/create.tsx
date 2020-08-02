import React, { useCallback } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/core";

import CREATE_RECIPE_MUTATION from "graphql/mutations/createRecipe";
import Section from "components/Section";
import { RecipeFormData } from "types/recipes";
import { ROOT_PAGE_PATH } from "constants/routes";
import LIST_RECIPES_QUERY from "graphql/queries/listRecipes";
import RecipeForm from "components/RecipeForm";
import HeaderBackButton from "components/HeaderButton";

const CreateRecipe: React.FC = () => {
  const [createRecipe] = useMutation(CREATE_RECIPE_MUTATION, {
    refetchQueries: [
      {
        query: LIST_RECIPES_QUERY,
      },
    ],
  });

  const toast = useToast();
  const router = useRouter();

  const onSubmit = useCallback(((recipeData: RecipeFormData): void => {
    createRecipe({
      variables: {
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
  }), [
    createRecipe,
    router,
    toast,
  ]);

  return (
    <Section title="Create Recipe" headerButton={<HeaderBackButton />}>
      <RecipeForm onSubmit={onSubmit} />
    </Section>
  );
};

export default CreateRecipe;
