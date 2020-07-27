import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      600: "#374151",
    },
  },
};

export default customTheme;
