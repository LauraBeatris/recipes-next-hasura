import { useColorMode, IconButton } from "@chakra-ui/core";

const ToggleThemeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon = (
    colorMode === "light"
      ? "moon"
      : "sun"
  );

  const ariaLabel = (
    `Switch to ${colorMode === "light" ? "dark" : "light"} mode`
  );

  return (
    <IconButton
      ml="2"
      icon={icon}
      color="blue.400"
      display="flex"
      variant="unstyled"
      onClick={toggleColorMode}
      fontSize="20px"
      aria-label={ariaLabel}
      alignItems="center"
      justifyContent="center"
    />
  );
};

export default ToggleThemeButton;
