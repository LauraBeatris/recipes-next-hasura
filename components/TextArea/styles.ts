import { Textarea } from "@chakra-ui/core";
import { css } from "@emotion/core";

import styled from "config/emotion";

export const StyledTextArea = styled(Textarea)`
  ${({ theme }) => css`
    &:hover {
      border-color: ${theme.colors.gray[300]};
    }

    &::placeholder {
      color: ${theme.colors.gray[500]}
    }
  `}
`;
