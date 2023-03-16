import { sendJobApplication } from "@/lib/api";
import CustomButton from "@/src/components/Form/CustomButton";
import FileUpload from "@/src/components/Form/FileIUpload";
import FormInput from "@/src/components/Form/FormInput";
import { breakpoints } from "@/src/utils/constants";
import { IJob } from "@/src/utils/interfaces";
import { JobSchema } from "@/src/utils/validations";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { isEmpty } from "lodash";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Job = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const toast = useToast()
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });


  const formik = useFormik<IJob>({
    initialValues: {
      subject: "Job Application",
      fullName: "",
      email: "",
      linkedInUrl: "",
      documents: undefined,
      message: "",
    },
    onSubmit: async (_values, { setSubmitting, resetForm }) => {
      try {
        const formData = new FormData() 

        formData.append('subject', _values?.subject as string)
        formData.append('email', _values?.email as string)
        formData.append('fullName', _values?.fullName as string)
        formData.append('linkedInUrl', _values?.linkedInUrl as string)
        formData.append('message', _values?.message as string)
        if(_values?.documents) {
          formData.append('documents', _values?.documents)
        }
        await sendJobApplication(formData);
        resetForm({});
        toast({
          title: `Submitted Successfully`,
          status: "success",
          isClosable: true,
        });
        onClose();
      } catch (error) {
        toast({
          title: `An Error Occured`,
          status: "error",
          isClosable: true,
        });
      } finally {
        setSubmitting(false);
      }
    },
    validationSchema: JobSchema
  });
  const {
    handleChange,
    values,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
    handleBlur,
    handleSubmit,
    isSubmitting,
    dirty
  } = formik;

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={isMobile ? 'full' : "xl"}
      isCentered
    >
      <ModalOverlay />
      <ModalContent px={{base: 4, 'xl': 10}} pt={10} pb={4}>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Heading as="h1" fontSize={{base: '2xl', 'xl': "3xl"}} textAlign={{base: 'left', 'xl': "center"}}>
            Send us your Details
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack align="left" spacing={2} my={8}>
              <FormInput
                name="fullName"
                id="fullName"
                label="Full Name"
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
                type="email"
                name="email"
                id="email"
                label="Email"
                onChange={handleChange}
                handleBlur={handleBlur}
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
                error={errors?.email as string}
                value={values?.email}
                touched={touched?.email}
                required={true}
              />
              <FormInput
                type="url"
                name="linkedInUrl"
                id="linkedInUrl"
                label="LinkedIn Url"
                onChange={handleChange}
                handleBlur={handleBlur}
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
                error={errors?.linkedInUrl as string}
                value={values?.linkedInUrl}
                touched={touched?.linkedInUrl}
                required={true}
              />
              <FormControl>
                <FormLabel>Anything you would like us to know?</FormLabel>
                <Textarea
                  placeholder="Type here..."
                  variant="flushed"
                  focusBorderColor="primary"
                  borderColor="#BDBDBD"
                  value={values?.message}
                  onChange={(e) => {
                    setFieldValue("message", e?.target?.value);
                  }}
                />
              </FormControl>
              <FileUpload
                setFieldValue={setFieldValue as (e: string, v: File) => void}
                setFieldTouched={
                  setFieldTouched as (e: string, v: boolean) => void
                }
                name="documents"
                touched={touched?.documents as boolean}
                error={errors?.documents as string}
                value={values?.documents}
                label="Upload Resume"
              />
            </VStack>
            <Box mt={16}>
              <CustomButton
                title="Submit"
                type="submit"
                width="100%"
                isLoading={isSubmitting}
                isDisabled={isSubmitting || !isEmpty(errors) || !dirty}
              />
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Job;
