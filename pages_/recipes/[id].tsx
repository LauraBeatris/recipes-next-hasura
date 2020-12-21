import { useCallback } from "react";
import { Spinner, Flex } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import Section from "components/Section";
import RecipeForm from "components/RecipeForm";
import HeaderBackButton from "components/HeaderBackButton";
import { RecipeFormData } from "types/recipes";
import useRecipe from "hooks/useRecipe";
import useUpdateRecipe from "hooks/useUpdateRecipe";

const UpdateRecipe: React.FC = () => {
  const { query } = useRouter();

  const { data, loading: loadingRecipe } = useRecipe({
    variables: {
      id: query.id,
    },
  });

  const [updateRecipe, { loading: loadingUpdateRecipe }] = useUpdateRecipe();

  const onSubmit = useCallback((recipeData: RecipeFormData): void => {
    updateRecipe(data.id, recipeData);
  }, [
    data?.id,
    updateRecipe,
  ]);

  const { t } = useTranslation();

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
            isLoading={loadingUpdateRecipe}
            onSubmit={onSubmit}
            defaultValues={data}
          />
        )
      }
    </Section>
  );
};

export default UpdateRecipe;
