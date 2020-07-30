import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
import {
  Button,
  Box,
  Image,
  Badge,
} from "@chakra-ui/core";

import Section from "components/Section";
import LIST_RECIPES_QUERY from "graphql/queries/listRecipes";

const HeaderButton = (
  <Link href="/recipes/create">
    <Button
      leftIcon="small-add"
      outline={0}
      padding={0}
      variant="ghost"
      color="blue.400"
    >
      Add
    </Button>
  </Link>
);

const Home: React.FC = () => {
  const { data } = useQuery(LIST_RECIPES_QUERY);

  return (
    <Section title="Recipes" headerButton={HeaderButton}>
      {
        data?.recipes.map((recipe) => (
          <Box
            size="sm"
            width="90%"
            maxWidth={233}
            marginX="auto"
            height={220}
            position="relative"
            marginBottom={4}
          >
            <Image
              borderRadius={6}
              objectFit="cover"
              marginX="auto"
              height="100%"
              width="100%"
              src={recipe.image_url}
              alt={recipe.name}
            />
            <Badge
              position="absolute"
              bottom={2}
              left={2}
            >
              {recipe.name}
            </Badge>
          </Box>
        ))
      }
    </Section>
  );
};

export default Home;
