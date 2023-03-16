import FormInput from "@/src/components/Form/FormInput";
import { IHelp } from "@/src/utils/interfaces";
import {
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "@/src/utils/constants";
import { sendHelpForm } from "@/lib/api";
import CustomButton from "@/src/components/Form/CustomButton";
import { HelpSchema } from "@/src/utils/validations";
import { isEmpty } from "lodash";
import FormErrorHandler from "@/src/components/Form/FormErrorHandler";

const Help = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const toast = useToast();

  const formik = useFormik<IHelp>({
    initialValues: {
      subject: "Help from Natterbase Website",
      fullName: "",
      email: "",
      message: "",
    },
    onSubmit: async (_values, { setSubmitting, resetForm }) => {
      try {
        await sendHelpForm(_values);
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
    validationSchema: HelpSchema,
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
    dirty,
  } = formik;
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });

  return (
    <Drawer
      isOpen={isOpen}
      placement={isMobile ? "right" : "left"}
      onClose={onClose}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody p={10}>
          <Heading as="h1" fontSize={{ base: "2xl", xl: "4xl" }}>
            How can we help you?
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack align="left" spacing={8} mt={12}>
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
              <FormControl>
                <FormLabel>How can we Help?</FormLabel>
                <Textarea
                  placeholder="Short Description"
                  variant="flushed"
                  focusBorderColor="primary"
                  borderColor="#BDBDBD"
                  value={values?.message}
                  onChange={(e) => {
                    setFieldValue("message", e?.target?.value);
                  }}
                />
                <Box mb={4}>
                  <FormErrorHandler error={errors?.message as string} />
                </Box>
              </FormControl>
            </VStack>
            <Box mt={10}>
              <CustomButton
                title="Submit"
                type="submit"
                width="100%"
                isLoading={isSubmitting}
                isDisabled={isSubmitting || !isEmpty(errors) || !dirty}
              />
            </Box>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Help;
