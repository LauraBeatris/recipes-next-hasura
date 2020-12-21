import { forwardRef } from "react";
import {
  FormErrorMessage,
  useColorMode,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";

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
}, ref) => {
  const { colorMode } = useColorMode();

  const labelColor = { light: "white", dark: "gray.900" };

  return (
    <FormControl my={4} isInvalid={!!error}>
      <FormLabel color={labelColor[colorMode]} htmlFor={name}>
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
};

export default forwardRef(TextArea);
