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
        {title}
      </Text>

      {headerButton}
    </Flex>

    {children}
  </Flex>
);

export default Section;
