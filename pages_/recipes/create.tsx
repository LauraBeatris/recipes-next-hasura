import useTranslation from "next-translate/useTranslation";

import Section from "components/Section";
import RecipeForm from "components/RecipeForm";
import HeaderBackButton from "components/Buttons/HeaderBackButton";
import useCreateRecipe from "hooks/useCreateRecipe";

const CreateRecipe: React.FC = () => {
  const [createRecipe, { loading }] = useCreateRecipe();

  const { t } = useTranslation();

  return (
    <Section
      title={t("common:create_recipe.title")}
      headerButton={<HeaderBackButton />}
    >
      <RecipeForm
        isLoading={loading}
        onSubmit={createRecipe}
      />
    </Section>
  );
};

export default CreateRecipe;
