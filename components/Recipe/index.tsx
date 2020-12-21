import React, { MouseEvent } from "react";
import Link from "next-translate/Link";
import {
  IconButton,
  Image,
  Badge,
  Flex,
  Box,
  useDisclosure,
} from "@chakra-ui/core";

import { UPDATE_RECIPE_LOCATION } from "constants/locations";
import DeleteRecipeModal from "components/Modals/DeleteRecipeModal";

import { RecipeProps } from "./types";

const Recipe: React.FC<RecipeProps> = ({
  id,
  name,
  imageUrl,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    onOpen();
  };

  return (
    <>
      <DeleteRecipeModal
        isOpen={isOpen}
        onClose={onClose}
        recipeId={id}
        recipeName={name}
      />

      <Link
        href={UPDATE_RECIPE_LOCATION.toUrl({ id })}
        key={id}
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
            src={imageUrl}
            alt={name}
          />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            paddingX={2}
            bottom={2}
            width="100%"
          >
            <Badge
              backgroundColor="white"
              opacity={0.85}
              color="gray.600"
            >
              {name}
            </Badge>

            <IconButton
              variantColor="gray"
              aria-label="Delete food"
              fontSize="lg"
              onClick={handleDelete}
              color="gray.600"
              size="sm"
              icon="delete"
            />
          </Flex>
        </Box>
      </Link>
    </>
  );
};

export default Recipe;
