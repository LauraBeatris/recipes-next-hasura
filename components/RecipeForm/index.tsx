import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import {
  Button,
  Stack,
} from "@chakra-ui/core";

import Input from "components/Input";
import TextArea from "components/TextArea";
import { RecipeFormData } from "types/recipes";
import createRecipeSchema from "schemas/createRecipe";

interface CreateRecipeForm {
  onSubmit: (recipeData: RecipeFormData) => void;
  defaultValues?: RecipeFormData
}

const RecipeForm: React.FC<CreateRecipeForm> = ({
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Input
          name="name"
          label="Name"
          placeholder="Empadão de Camarão"
          ref={register}
          error={errors?.name?.message}
        />

        <Input
          name="image_url"
          label="Image URL"
          placeholder="https://www.budgetbads/2018/01231"
          ref={register}
          error={errors?.image_url?.message}
        />

        <TextArea
          name="ingredients"
          label="Ingredients"
          placeholder="Butter and salt"
          ref={register}
          error={errors?.ingredients?.message}
        />

        <TextArea
          name="instructions"
          label="Instructions"
          placeholder="Mix em' up"
          ref={register}
          error={errors?.instructions?.message}
        />

        <Input
          name="recipe_url"
          label="Original Recipe URL"
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
        marginTop="auto"
        variant="unstyled"
        display="flex"
        width="20%"
        color="white"
        type="submit"
        isDisabled={!formState.isValid}
      >
        Save
      </Button>
    </form>
  );
};

export default RecipeForm;
