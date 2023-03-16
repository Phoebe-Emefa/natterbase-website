import { teamList } from "@/src/utils/constants";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import Select  from "react-select";
import FormErrorHandler from "./FormErrorHandler";


const FormSelect = ({
  label,
  options,
  value,
  isSearchable,
  isMulti,
  onChange,
  name,
  id,
  error
}: {
  label: string;
  options: { value: string; label: string; }[];
  value: unknown
  isSearchable?: boolean
  isMulti?: boolean
  onChange: any
  name: string
  id: string
  error: string
}) => {
  const style = {
    control: (base: any) => ({
      ...base,
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      borderWidth: "1.5px",
      borderRadius: "none",
      boxShadow: "none",
      "&:focus-within": {
        borderColor: "black",
      },
    }),
  };

  const defaultValue = (options: any, value: any) => {
    return options ? options.find((option: any) => option.value === value) : "";
};

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select
      name={name}
      id={id}
        options={options}
        placeholder="Select desired members"
        value={defaultValue(options, value)}
        onChange={value => {
          onChange(value)

      }}
        isSearchable={isSearchable}
        isMulti={isMulti}
        styles={style}
      />
          <Box mb={4}>
          <FormErrorHandler error={error as string} />
      </Box>
    </FormControl>
  );
};

export default FormSelect;
