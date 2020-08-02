import {
  FormErrorMessage,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";
import React, { forwardRef } from "react";

import { StyledTextArea } from "./styles";

interface TextAreaProps {
  name: string;
  label: string;
  error?: string;
  placeholder: string;
}

const TextArea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({
  name,
  label,
  placeholder,
  error,
  ...rest
}, ref) => (
  <FormControl my={4} isInvalid={!!error}>
    <FormLabel color="gray.900" htmlFor={name}>
      {label}
    </FormLabel>

    <StyledTextArea
      {...rest}
      id={name}
      ref={ref}
      name={name}
      color="gray.600"
      resize="none"
      boxShadow="sm"
      borderColor="gray.300"
      placeholder={placeholder}
      focusBorderColor="gray.800"
    />

    <FormErrorMessage>
      {error}
    </FormErrorMessage>
  </FormControl>
);

export default forwardRef(TextArea);
