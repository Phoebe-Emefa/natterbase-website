import CustomButton from "@/src/components/Form/CustomButton";
import FileUpload from "@/src/components/Form/FileIUpload";
import FormErrorHandler from "@/src/components/Form/FormErrorHandler";
import FormInput from "@/src/components/Form/FormInput";
import { IFormProps } from "@/src/utils/interfaces";
import {
  Box,
  FormControl,
  FormLabel,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import React from "react";

const ProjectDetails: React.FC<IFormProps> = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
  setFieldTouched,
  isSubmitting,
  dirty
}) => {
  const isInvalid = !!(errors?.projectDescription && touched);
  return (
    <Box>
      <VStack align="left" spacing={10} my={6}>
        <FormInput
          name="projectName"
          id="projectName"
          label="Project Name"
          onChange={handleChange}
          handleBlur={handleBlur}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          error={errors?.projectName as string}
          value={values?.projectName}
          touched={touched?.projectName}
          required={true}
        />
        <FormControl isInvalid={isInvalid}>
          <FormLabel>Project Description</FormLabel>
          <Textarea
            variant="flushed"
            focusBorderColor="primary"
            borderColor="#BDBDBD"
            value={values?.projectDescription}
            onChange={(e) => {
              setFieldValue("projectDescription", e?.target?.value);
            }}
          />
             <Box mb={4}>
        <FormErrorHandler error={errors?.projectDescription as string} />
      </Box>
        </FormControl>
        <FormLabel>Upload Document (Optional)</FormLabel>
        <FileUpload
          setFieldValue={setFieldValue as (e: string, v: File) => void}
          setFieldTouched={setFieldTouched as (e: string, v: boolean) => void}
          name="documents"
          touched={touched?.documents as boolean}
          error={errors?.documents as string}
          value={values?.documents}
        />
      </VStack>
      <Box mt={20}>
        <CustomButton
          title="Submit"
          type="submit"
          width="100%"
          isLoading={isSubmitting}
          isDisabled={isSubmitting || !isEmpty(errors) || !dirty}
        />
      </Box>
    </Box>
  );
};

export default ProjectDetails;
