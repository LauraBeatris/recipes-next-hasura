import React from "react";
import { Flex, Text } from "@chakra-ui/core";

interface SectionProps {
  title: string;
  headerButton: React.ReactElement;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  headerButton,
}) => (
  <Flex
    backgroundColor="white"
    flexDirection="column"
    borderRadius={4}
    boxShadow="md"
    marginTop={[0, 4]}
    maxWidth={400}
    minHeight={["100vh", 812]}
    marginX="auto"
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
        {title}
      </Text>

      {headerButton}
    </Flex>

    <Flex
      direction="column"
      overflow="auto"
      flexGrow={1}
      paddingY={8}
      paddingX={6}
    >
      {children}
    </Flex>
  </Flex>
);

export default Section;
