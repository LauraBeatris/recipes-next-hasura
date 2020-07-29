import {
  FormErrorMessage,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";
import React from "react";

import { FormInput } from "./styles";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  error,
  ...rest
}) => (
  <FormControl my={2} isInvalid={!!error}>
    <FormLabel color="gray.900" htmlFor={name}>
      {label}
    </FormLabel>

    <FormInput
      {...rest}
      id={name}
      color="gray.600"
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

export default Input;