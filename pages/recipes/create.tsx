import React from "react";
import Link from "next/link";
import {
  Button,
  Stack,
} from "@chakra-ui/core";

import Section from "components/Section";
import Input from "components/Input";
import TextArea from "components/TextArea";

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

const CreateRecipe: React.FC = () => (
  <Section title="Create Recipe" headerButton={HeaderButton}>
    <Stack>
      <Input
        name="name"
        label="Name"
        placeholder="Empadão de Camarão"
      />

      <Input
        name="imageUrl"
        label="Image URL"
        placeholder="https://www.budgetbads/2018/01231"
      />

      <TextArea
        name="ingredients"
        label="Ingredients"
        placeholder="Butter and salt"
      />

      <Input
        name="instructions"
        label="Instructions"
        placeholder="Mix em' up"
      />

      <Input
        name="recipeUrl"
        label="Original Recipe URL"
        placeholder="www.tudogostoso/empadao-de-camarao"
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
    >
      Save
    </Button>
  </Section>
);

export default CreateRecipe;
