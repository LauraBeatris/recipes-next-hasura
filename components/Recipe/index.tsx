import React from "react";
import Link from "next-translate/Link";
import {
  Image,
  Badge,
  Box,
} from "@chakra-ui/core";

import { UPDATE_RECIPE_LOCATION } from "constants/locations";

import { RecipeProps } from "./types";

const Recipe: React.FC<RecipeProps> = ({
  id,
  name,
  imageUrl,
}) => (
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

      <Badge
        backgroundColor="white"
        opacity={0.85}
        color="gray.600"
        position="absolute"
        bottom={2}
        left={2}
      >
        {name}
      </Badge>
    </Box>
  </Link>
);

export default Recipe;
