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
          name="name"
          label={t("common:form.name")}
          placeholder="Empadão de Camarão"
          ref={register}
          error={errors?.name?.message}
        />

        <Input
          name="image_url"
          label={t("common:form.image_url")}
          placeholder="https://www.budgetbads/2018/01231"
          ref={register}
          error={errors?.image_url?.message}
        />

        <TextArea
          name="ingredients"
          label={t("common:form.ingredients")}
          placeholder="Butter and salt"
          ref={register}
          error={errors?.ingredients?.message}
        />

        <TextArea
          name="instructions"
          label={t("common:form.instructions")}
          placeholder="Mix em' up"
          ref={register}
          error={errors?.instructions?.message}
        />

        <Input
          name="recipe_url"
          label={t("common:form.recipe_url")}
          placeholder="www.tudogostoso/empadao-de-camarao"
          ref={register}
          error={errors?.recipe_url?.message}
        />
      </Stack>

      <Button
        backgroundColor="blue.400"
        justifyContent="center"
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
