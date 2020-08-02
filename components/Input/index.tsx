import {
  FormErrorMessage,
  useColorMode,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";
import React, { forwardRef } from "react";

import { FormInput } from "./styles";

interface InputProps {
  name: string;
  label: string;
  error?: string;
  placeholder: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  label,
  placeholder,
  error,
  ...rest
}, ref) => {
  const { colorMode } = useColorMode();

  const labelColor = { light: "white", dark: "gray.900" };

  return (
    <FormControl my={2} isInvalid={!!error}>
      <FormLabel color={labelColor[colorMode]} htmlFor={name}>
        {label}
      </FormLabel>

      <FormInput
        {...rest}
        id={name}
        ref={ref}
        name={name}
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
};

export default forwardRef(Input);
