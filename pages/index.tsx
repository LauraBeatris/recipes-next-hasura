import React from "react";
import Link from "next/link";
import {
  Button,
  Box,
  Image,
  Badge,
} from "@chakra-ui/core";

import Section from "components/Section";

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

const Home: React.FC = () => (
  <Section title="Recipes" headerButton={HeaderButton}>
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
        src="https://img.estadao.com.br/thumbs/640/resources/jpg/8/9/1569458498298.jpg"
        alt="Segun Adebayo"
      />
      <Badge
        position="absolute"
        bottom={2}
        left={2}
      >
        BBQ Meatloaf
      </Badge>
    </Box>

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
        src="https://img.estadao.com.br/thumbs/640/resources/jpg/8/9/1569458498298.jpg"
        alt="Segun Adebayo"
      />
      <Badge
        position="absolute"
        bottom={2}
        left={2}
      >
        BBQ Meatloaf
      </Badge>
    </Box>

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
        src="https://img.estadao.com.br/thumbs/640/resources/jpg/8/9/1569458498298.jpg"
        alt="Segun Adebayo"
      />
      <Badge
        position="absolute"
        bottom={2}
        left={2}
      >
        BBQ Meatloaf
      </Badge>
    </Box>
  </Section>
);

export default Home;
