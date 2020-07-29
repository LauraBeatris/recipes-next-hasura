import { Input } from "@chakra-ui/core";
import { css } from "@emotion/core";

import styled from "config/emotion";

export const FormInput = styled(Input)`
  ${({ theme }) => css`
    &:hover {
      border-color: ${theme.colors.gray[300]};
    }

    &::placeholder {
      color: ${theme.colors.gray[500]};
    }
  `}
`;
