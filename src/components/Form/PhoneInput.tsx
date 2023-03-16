import React from "react";
import IntlTelInput from "react-intl-tel-input";
import { CountryData } from "react-intl-tel-input/dist/types";
import "react-intl-tel-input/dist/main.css";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import FormErrorHandler from "./FormErrorHandler";

const PhoneInput = ({
  value,
  error,
  touched,
  setFieldValue,
  setFieldTouched,
  height,
  inputClassName,
  id,
  name,
  label,
  addCountry,
}: {
  addCountry?: false;
  inputClassName?: string;
  value?: string | undefined;
  id?: string;
  name?: string;
  error?: string;
  height?: string | number;
  touched?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  label?: string;
  setFieldValue?: (arg: string, arg0: unknown) => void;
  setFieldTouched?:
    | ((
        field: string,
        item?: boolean | undefined,
        shouldValidate?: boolean | undefined
      ) => any)
    | undefined;
}) => {
  const isInvalid = !!(error && touched);
  const errorStyle = isInvalid
    ? {
        borderColor: "#E53E3E",
        boxShadow: "0 0 0 1px #e53e3e",
      }
    : {
        borderBottomColor: "var(--chakra-colors-cf-800)",
      };

  const inputChange = (
    status: boolean,
    val: string,
    countryData: CountryData
  ) => {
    if (setFieldTouched) {
      setFieldTouched(id || name || "phoneNumber", true);
    }
    if (val.split("").includes("+")) {
      if (setFieldValue) {
        setFieldValue(id || name || "phoneNumber", val);
      }
    } else {
      const number = `+${countryData?.dialCode as string}${val
        .replace(/^0+/, "")
        .replace(/\s/g, "")}`;
      if (setFieldValue) {
        setFieldValue(id || name || "phoneNumber", number);
      }
    }
    const Name = countryData?.name?.split(" (", 1)?.toString();
    if (addCountry && Name && setFieldValue) {
      setFieldValue("country", Name);
    }
  };
  return (
    <FormControl>
      <FormLabel>{label} </FormLabel>
      <IntlTelInput
        format={true}
        fieldName="phoneNumber"
        fieldId="phoneNumber"
        defaultCountry="us"
        onlyCountries={["ng", "uk", "us", "gh"]}
        defaultValue={value}
        containerClassName="intl-tel-input"
        inputClassName={inputClassName || "chakra-input"}
        onPhoneNumberBlur={inputChange}
        onPhoneNumberChange={inputChange}
        style={{
          width: "100%",
          height: height || "var(--chakra-sizes-14)",
          ...errorStyle,
        }}
      />
      <Box mb={4}>
        <FormErrorHandler error={error as string} />
      </Box>
    </FormControl>
  );
};

export default PhoneInput;
