import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Button, Stack } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

import Input from "components/Input";
import TextArea from "components/TextArea";
import { RecipeFormData } from "types/recipes";
import createRecipeSchema from "schemas/createRecipe";

import { CreateRecipeForm } from "./types";

const RecipeForm: React.FC<CreateRecipeForm> = ({
  isLoading,
  onSubmit,
  defaultValues,
}) => {
  const {
    errors,
    register,
    formState,
    handleSubmit,
  } = useForm<RecipeFormData>({
    mode: "all",
    resolver: yupResolver(createRecipeSchema),
    defaultValues,
  });

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Input
          ref={register}
          name="name"
          label={t("common:form.name")}
          error={errors?.name?.message}
          placeholder="Empadão de Camarão"
          data-testid="recipe-name-input"
        />

        <Input
          ref={register}
          name="image_url"
          label={t("common:form.image_url")}
          error={errors?.image_url?.message}
          placeholder="https://www.budgetbads/2018/01231"
          data-testid="recipe-image-url-input"
        />

        <TextArea
          ref={register}
          name="ingredients"
          label={t("common:form.ingredients")}
          error={errors?.ingredients?.message}
          placeholder="Butter and salt"
          data-testid="recipe-ingredients-input"
        />

        <TextArea
          ref={register}
          name="instructions"
          label={t("common:form.instructions")}
          error={errors?.instructions?.message}
          placeholder="Mix em' up"
          data-testid="recipe-instructions-input"
        />

        <Input
          ref={register}
          name="recipe_url"
          label={t("common:form.recipe_url")}
          error={errors?.recipe_url?.message}
          placeholder="www.tudogostoso/empadao-de-camarao"
          data-testid="recipe-recipe-url-input"
        />
      </Stack>

      <Button
        backgroundColor="blue.400"
        justifyContent="center"
        data-testid="save-recipe-button"
        alignItems="center"
        marginLeft="auto"
        marginTop={10}
        variant="unstyled"
        display="flex"
        width="20%"
        color="white"
        type="submit"
        outline={0}
        isLoading={isLoading}
        isDisabled={!formState.isValid}
      >
        {t("common:buttons.save")}
      </Button>
    </form>
  );
};

export default RecipeForm;
