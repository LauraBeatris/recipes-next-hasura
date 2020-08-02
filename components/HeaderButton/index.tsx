import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/core";

const HeaderBackButton: React.FC = () => (
  <Link href="/">
    <Button
      leftIcon="chevron-left"
      outline={0}
      padding={0}
      variant="ghost"
      color="blue.400"
    >
      Back
    </Button>
  </Link>
);

export default HeaderBackButton;
