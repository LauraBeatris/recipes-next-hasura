import Link from "next-translate/Link";
import { Button } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

import { CREATE_RECIPE_PAGE_PATH } from "constants/routes";

const HeaderAddRecipeButton: React.FC = () => {
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
        data-testid="add-recipe-button"
        justifyContent="center"
      >
        {t("common:buttons.add")}
      </Button>
    </Link>
  );
};

export default HeaderAddRecipeButton;
