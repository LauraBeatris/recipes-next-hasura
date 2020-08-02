import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

import { ROOT_PAGE_PATH } from "constants/routes";

const HeaderBackButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Link href={ROOT_PAGE_PATH}>
      <Button
        leftIcon="chevron-left"
        padding={0}
        variant="ghost"
        outline={0}
        color="blue.400"
      >
        {t("common:buttons.back")}
      </Button>
    </Link>
  );
};

export default HeaderBackButton;
