import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
import {
  Button,
  Box,
  Image,
  Badge,
} from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

import Section from "components/Section";
import LIST_RECIPES_QUERY from "graphql/queries/listRecipes";
import { CREATE_RECIPE_PAGE_PATH } from "constants/routes";
import { UPDATE_RECIPE_LOCATION } from "constants/locations";

const HeaderButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Link href={CREATE_RECIPE_PAGE_PATH}>
      <Button
        color="blue.400"
        display="flex"
        outline={0}
        padding={0}
        variant="unstyled"
        leftIcon="small-add"
        alignItems="center"
        justifyContent="center"
      >
        {t("common:buttons.add")}
      </Button>
    </Link>
  );
};

const Home: React.FC = () => {
  const { data } = useQuery(LIST_RECIPES_QUERY);

  return (
    <Section title="Recipes" headerButton={<HeaderButton />}>
      {
        data?.recipes.map((recipe) => (
          <Link
            href={UPDATE_RECIPE_LOCATION.toUrl({ id: recipe.id })}
            key={recipe?.id}
          >
            <Box
              size="sm"
              width="90%"
              cursor="pointer"
              marginX="auto"
              height={220}
              maxWidth={233}
              position="relative"
              marginBottom={4}
            >
              <Image
                borderRadius={6}
                placeholder="https://via.placeholder.com/500"
                fallbackSrc="https://via.placeholder.com/500"
                htmlHeight="500"
                htmlWidth="500"
                objectFit="cover"
                loading="eager"
                marginX="auto"
                height="100%"
                width="100%"
                src={recipe.image_url}
                alt={recipe.name}
              />

              <Badge
                backgroundColor="white"
                opacity={0.85}
                color="gray.600"
                position="absolute"
                bottom={2}
                left={2}
              >
                {recipe.name}
              </Badge>
            </Box>
          </Link>
        ))
      }
    </Section>
  );
};

export default Home;
