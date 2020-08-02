import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers";
import Link from "next/link";
import {
  useToast,
  Button,
  Stack,
} from "@chakra-ui/core";

import CREATE_RECIPE_MUTATION from "graphql/mutations/createRecipe";
import Section from "components/Section";
import Input from "components/Input";
import TextArea from "components/TextArea";
import { RecipeFormData } from "types/recipes";
import { ROOT_PAGE_PATH } from "constants/router";
import createRecipeSchema from "schemas/createRecipe";

const HeaderButton = (
  <Link href="/">
    <Button
      leftIcon="chevron-left"
      outline={0}
      padding={0}
      variant="ghost"
      color="blue.400"
    >
      Back
    </Button>
  </Link>
);

const CreateRecipe: React.FC = () => {
  const [createRecipe] = useMutation(CREATE_RECIPE_MUTATION);

  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<RecipeFormData>({
    mode: "all",
    resolver: yupResolver(createRecipeSchema),
  });

  const toast = useToast();
  const router = useRouter();

  const onSubmit = handleSubmit((recipeData): void => {
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
  });

  return (
    <Section title="Create Recipe" headerButton={HeaderButton}>
      <form onSubmit={onSubmit}>
        <Stack>
          <Input
            name="name"
            label="Name"
            placeholder="Empadão de Camarão"
            ref={register}
            error={errors?.name?.message}
          />

          <Input
            name="imageUrl"
            label="Image URL"
            placeholder="https://www.budgetbads/2018/01231"
            ref={register}
            error={errors?.imageUrl?.message}
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
            name="recipeUrl"
            label="Original Recipe URL"
            placeholder="www.tudogostoso/empadao-de-camarao"
            ref={register}
            error={errors?.recipeUrl?.message}
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
    </Section>
  );
};

export default CreateRecipe;
