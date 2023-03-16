import { IFormInput } from "@/src/utils/interfaces";
import {  Box, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React from "react";
import FormErrorHandler from "./FormErrorHandler";

const FormInput: React.FC<IFormInput> = ({
  label,
  required,
  placeholder,
  setFieldValue,
  handleChange,
  id,
  name,
  type,
  error,
  ...props
}) => {
  return (
    <FormControl
      id={(id || props?.name) as string}
      isRequired={props?.value ? false : required}
    >
      <FormLabel>{label}</FormLabel>

        <Input
          type={type}
          variant="flushed"
          placeholder={placeholder}
          focusBorderColor="primary"
          borderColor="#BDBDBD"
          onChange={
            setFieldValue
              ? (e) => {
                  setFieldValue(id || name, e?.target?.value);
                }
              : handleChange
          }
        />
          <Box mb={4}>
          <FormErrorHandler error={error as string} />
      </Box>
    </FormControl>
  );
};

export default FormInput;
