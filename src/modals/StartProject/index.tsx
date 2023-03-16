import { IProject } from "@/src/utils/interfaces";
import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Icon,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { pick } from "lodash";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import PersonalInfo from "./PersonalInfo";
import ProjectDetails from "./ProjectDetails";
import ProjectDevices from "./ProjectDevices";
import TeamInfo from "./TeamInfo";
import { sendStartProjectForm } from "@/lib/api";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "@/src/utils/constants";
import { StartProjectSchema } from "@/src/utils/validations";

const StartProject = ({
  isOpen,
  onClose,
  isHireTeam
}: {
  isOpen: boolean;
  onClose: () => void;
  isHireTeam?: boolean
}) => {
  const [component, setComponent] = React.useState<number>(0);
  const toast = useToast()


  const formik = useFormik<IProject>({
    initialValues: {
      subject: isHireTeam === true ? 'Hire a Remote team - Natterbase Website' : 'Start a Project - Natterbase Website',
      email: "",
      fullName: "",
      company: "",
      phoneNumber: "",
      teamMembers: [],
      skills: [],
      hiringNeed: {
        label: '',
        value: ''
      },
      teamCount: "",
      devices: {
        desktop: false,
        mobile: false,
        others: false,
      },
      projectName: "",
      projectDescription: "",
      documents: undefined,
      hireTeam: isHireTeam ? true : false
    },
    onSubmit: async (_values, { setSubmitting, resetForm }) => {
      try {
      const formData = new FormData() 

      formData.append('subject', _values?.subject as string)
      formData.append('email', _values?.email as string)
      formData.append('fullName', _values?.fullName as string)
      formData.append('company', _values?.company as string)
      formData.append('phoneNumber', _values?.phoneNumber as string)
      formData.append('teamCount', _values?.teamCount as string)
      formData.append('projectName', _values?.projectName as string)
      formData.append('projectDescription', _values?.projectDescription as string)
      formData.append('devices', JSON.stringify(_values?.devices))
      formData.append('teamMembers', JSON.stringify(_values?.teamMembers))
      formData.append('skills', JSON.stringify(_values?.skills))
      if(isHireTeam) {
      formData.append('hiringNeed', JSON.stringify(_values?.hiringNeed))
      }
      if(_values?.documents) {
        formData.append('documents', _values?.documents)
      }
        await sendStartProjectForm(formData);
        resetForm({});
        toast({
          title: `Submitted Successfully`,
          status: 'success',
          isClosable: true,
        })
        setComponent(0)
        onClose()
      } catch (error) {
        toast({
          title: `An Error Occured`,
          status: 'error',
          isClosable: true,
        })
      } finally {
        setSubmitting(false);
      }
    },
    validationSchema: StartProjectSchema
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


  const teamInfo = ["teamMembers", "skills", "hiringNeed", "teamCount"];
  const personalInfoKeys = ["email", "fullName", "company", "phoneNumber"];
  const projectDetails = ["projectName", "projectDescription", "documents"];
  const showForm = {
    0: (
       
        <PersonalInfo
          values={pick(values, personalInfoKeys)}
          errors={pick(errors, personalInfoKeys)}
          touched={pick(touched, personalInfoKeys)}
          handleBlur={handleBlur}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          setComponent={setComponent}
          dirty={dirty}
        />
    ),
    1: (
      <TeamInfo
        values={pick(values, teamInfo)}
        errors={pick(errors, teamInfo)}
        touched={pick(touched, teamInfo)}
        setFieldValue={setFieldValue}
        setComponent={setComponent}
        dirty={dirty}
        isHireTeam={isHireTeam}
      />
    ),
    2: (
      <ProjectDevices
        values={pick(values, 'devices')}
        errors={pick(errors, 'devices')}
        touched={pick(touched, 'devices')}
        handleBlur={handleBlur}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
        setComponent={setComponent}
        dirty={dirty}
      />
    ),
    3: (
      <ProjectDetails
        values={pick(values, projectDetails)}
        errors={pick(errors, projectDetails)}
        touched={pick(touched, projectDetails)}
        handleBlur={handleBlur}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
        setComponent={setComponent}
        isSubmitting={isSubmitting}
        dirty={dirty}
      />
    ),
  };

  const titles = {
    0: `Let's get to know you`,
    1: `What's your preferred team?`,
    2: 'What are the devices you want your project?',
    3: 'Project Details'
  }

 

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
          <VStack align="left" spacing={2}>
         {
          component !== 0 && (
            <Flex align='center' cursor='pointer' fontWeight={500} onClick={() => setComponent(component - 1)}>
            <Icon as={BsArrowLeft} />
            <Text ml={2}>Back</Text>
          </Flex>
          )
         }
            <Heading as="h1" fontSize={{base: '2xl', 'xl': "3xl"}}>
              {titles[component as keyof typeof titles]}
            </Heading>
          </VStack>
         <Box>
         <form onSubmit={handleSubmit} >
            <Box mt={12}>
              {showForm[component as keyof typeof showForm]}
              <Box mt={10}></Box>
            </Box>
          </form>
         </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StartProject;
