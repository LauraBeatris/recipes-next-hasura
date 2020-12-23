import { Flex, Text, useColorMode } from "@chakra-ui/core";

import ToggleThemeButton from "components/Buttons/ToggleThemeButton";

interface SectionProps {
  title: string;
  headerButton: React.ReactElement;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  headerButton,
}) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.900", dark: "white" };
  const titleColor = { light: "white", dark: "gray.600" };

  return (
    <Flex
      backgroundColor={bgColor[colorMode]}
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
          color={titleColor[colorMode]}
        >
          {title}
        </Text>

        <Flex>
          {headerButton}
          <ToggleThemeButton />
        </Flex>
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
};

export default Section;
