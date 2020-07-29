import {
  FormErrorMessage,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";
import React from "react";

import { StyledTextArea } from "./styles";

interface TextAreaProps {
  name: string;
  label: string;
  placeholder: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  placeholder,
  error,
  ...rest
}) => (
  <FormControl my={4}>
    <FormLabel color="gray.900" htmlFor={name}>
      {label}
    </FormLabel>

    <StyledTextArea
      {...rest}
      id={name}
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

export default TextArea;
