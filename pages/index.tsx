import React from "react";
import {
  Text,
  Flex,
  Button,
  Box,
  Image,
  Badge,
} from "@chakra-ui/core";

const Home: React.FC = () => (
  <Flex
    backgroundColor="white"
    flexDirection="column"
    borderRadius={4}
    boxShadow="md"
    maxWidth={400}
    height={["100%", 812]}
    marginX="auto"
    marginTop={[0, 4]}
  >
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding={5}
      width="100%"
    >
      <Text
        fontWeight="medium"
        fontSize="3xl"
        color="gray.600"
      >
        Recipes
      </Text>

      <Button
        leftIcon="small-add"
        outline={0}
        padding={0}
        variant="ghost"
        color="blue.400"
      >
        Add
      </Button>
    </Flex>

    <Flex
      marginTop={10}
      direction="column"
      overflow="auto"
      flexGrow={1}
    >
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
    </Flex>
  </Flex>
);

export default Home;
