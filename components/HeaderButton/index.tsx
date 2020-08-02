import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

const HeaderBackButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Link href="/">
      <Button
        leftIcon="chevron-left"
        outline={0}
        padding={0}
        variant="ghost"
        color="blue.400"
      >
        {t("common:buttons.back")}
      </Button>
    </Link>
  );
};

export default HeaderBackButton;
