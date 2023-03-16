import CustomButton from "@/src/components/Form/CustomButton";
import FormInput from "@/src/components/Form/FormInput";
import PhoneInput from "@/src/components/Form/PhoneInput";
import { IFormProps } from "@/src/utils/interfaces";
import { Box, Flex, Grid, HStack,  VStack } from "@chakra-ui/react";
import { isEmpty } from "lodash";
import React from "react";

const PersonalInfo: React.FC<IFormProps> = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
  setFieldTouched,
  setComponent,
  dirty
}) => {


  return (
   <Box>
     <VStack align="left" spacing={8} my={6}>
      <FormInput
        type="email"
        name="email"
        id="email"
        label="Email"
        placeholder="johndoe@gmail.com"
        onChange={handleChange}
        handleBlur={handleBlur}
        setFieldTouched={setFieldTouched}
        setFieldValue={setFieldValue}
        error={errors?.email as string}
        value={values?.email}
        touched={touched?.email}
        required={true}
      />

      <Grid templateColumns={{base: 'repeat(1, 1fr)', 'xl': 'repeat(2, 1fr)'}} gap={10} >
      <FormInput    
          name="fullName"
          id="fullName"
          label="Full Name"
          placeholder="John Doe"
          onChange={handleChange}
          handleBlur={handleBlur}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          error={errors?.fullName as string}
          value={values?.fullName}
          touched={touched?.fullName}
          required={true}
         />
         
        <FormInput    
          name="company"
          id="company"
          label="Company"
          onChange={handleChange}
          handleBlur={handleBlur}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          error={errors?.company as string}
          value={values?.company}
          touched={touched?.company}
          required={true}
         />
       
      </Grid>
      <PhoneInput
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        inputClassName="input-class-phone"
        isRequired={true}
        error={errors?.phoneNumber as string}
        value={values?.phoneNumber}
        touched={touched?.phoneNumber as boolean}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
      />
    </VStack>
  <Box mt={10}>
  <CustomButton title="Continue" onClick={() => setComponent(1)} width="100%" 
  isDisabled={!isEmpty(errors) || !dirty}
  />
  </Box>
   </Box>

  );
};

export default PersonalInfo;
