import { useCallback } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { useToast, Spinner, Flex } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";
import Router from "next-translate/Router";

import Section from "components/Section";
import RecipeForm from "components/RecipeForm";
import HeaderBackButton from "components/HeaderBackButton";
import { RecipeFormData } from "types/recipes";
import LIST_RECIPES_QUERY from "graphql/queries/listRecipes";
import UPDATE_RECIPE_MUTATION from "graphql/mutations/updateRecipe";
import { ROOT_PAGE_PATH } from "constants/routes";
import useRecipe from "hooks/useRecipe";

const UpdateRecipe: React.FC = () => {
  const { query } = useRouter();

  const { data, loading: loadingRecipe } = useRecipe();

  const [updateRecipe] = useMutation(UPDATE_RECIPE_MUTATION, {
    refetchQueries: [
      {
        query: LIST_RECIPES_QUERY,
      },
    ],
  });

  const toast = useToast();
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
    query.id,
    updateRecipe,
  ]);

  return (
    <Section
      title={t("common:update_recipe.title")}
      headerButton={<HeaderBackButton />}
    >
      {
        loadingRecipe ? (
          <Flex
            width="100%"
            align="center"
            justify="center"
            marginTop={40}
          >
            <Spinner color="blue.500" />
          </Flex>
        ) : (
          <RecipeForm
            onSubmit={onSubmit}
            defaultValues={data}
          />
        )
      }
    </Section>
  );
};

export default UpdateRecipe;
