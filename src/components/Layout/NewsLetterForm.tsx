import { sanitize } from "@/src/utils/misc";
import {
  Box,
  InputGroup,
  Text,
  Input,
  InputRightAddon,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import SuccessModal from "../Modals/SuccessModal";

const NewsLetterForm = ({
  status,
  message,
  onValidated,
}: {
  status: any;
  message: any;
  onValidated: (formData: any) => void;
}) => {
  const [error, setError] = React.useState<any>(null);
  const [email, setEmail] = React.useState<any>(undefined);

  const {
    isOpen: successModalIsOpen,
    onOpen: openSuccessModal,
    onClose: closeSuccessModal,
  } = useDisclosure();

  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });
 


    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated ;
  };
  const handleInputKeyEvent = ( event: any ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  const getMessage = (message: string) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };



  React.useEffect(() => {
  if("success" === status && "error" !== status && !error) {
      openSuccessModal()
      setEmail('')
    }
  }, [error, openSuccessModal, status, setEmail])

  return (
    <Box mt={{ base: 10, xl: 0 }} width={{ base: "100%", xl: "30%" }}>
      <Text fontSize='md'>
      Want to stay informed about our latest developments?
      </Text>
      <InputGroup mt={2}>
        <Input
          placeholder="Enter your email address"
          height={{ base: 14, xl: 16 }}
          borderLeft="none"
          bg="#F2F2F2"
          border="none"
          focusBorderColor="transparent"
          value={email}
          onChange={(event) => setEmail(event?.target?.value)}
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />
        <InputRightAddon
          height={{ base: 14, xl: 16 }}
          bg="black"
          onClick={() => {
            handleFormSubmit()
       
          }}
          cursor="pointer"
        >
         {
          status === 'sending' ? (
            <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="sm"
          />
          ) : (
            <Text color="white">Subscribe</Text>
          )
         }
        </InputRightAddon>
      </InputGroup>
      <Box minH="42px">
    
        {"error" === status || error ? (
          <Box
          fontSize='xs'
            color="red"
            pt={2}
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
         
      </Box>
      <SuccessModal
              successModalIsOpen={successModalIsOpen}
              closeSuccessModal={closeSuccessModal}
              message={message}
            />
    </Box>
  );
};

export default NewsLetterForm;
