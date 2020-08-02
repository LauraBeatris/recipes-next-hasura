import React from "react";
import Link from "next-translate/Link";
import { Button } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

import { ROOT_PAGE_PATH } from "constants/routes";

const HeaderBackButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Link href={ROOT_PAGE_PATH}>
      <Button
        color="blue.400"
        padding={0}
        outline={0}
        display="flex"
        variant="unstyled"
        leftIcon="chevron-left"
        alignItems="center"
        justifyContent="center"
      >
        {t("common:buttons.back")}
      </Button>
    </Link>
  );
};

export default HeaderBackButton;
