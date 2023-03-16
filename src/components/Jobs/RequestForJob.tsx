import Job from "@/src/modals/job";
import {
  Box,
  Container,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const RequestForJob = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#F9F9F9" py={40}>
      <Container minW={{ md: "2xl", lg: "3xl", xl: "5xl", "3xl": "6xl" }}>
        <VStack spacing={20}>
          <Box width={{ base: "100%", xl: "55rem" }}>
            <Heading as="h4" fontSize={{ base: "xl", xl: "3xl" }}>
            We are constantly in search of rockstars
            </Heading>
            <Text fontSize={{ base: "md", xl: "xl" }} mt={4}>
              If you think we’ll work well together, we want to hear from you!
              Apply below and provide us with your job description. Please
              include your resume, links to your social media profiles, and
              anything else you think we should see.{" "}
              <Box
                as="span"
                cursor="pointer"
                onClick={() => onOpen()}
                textDecor="underline"
              >
                Start Here
              </Box>
            </Text>
          </Box>
        
        </VStack>
      </Container>
      <Job isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default RequestForJob;


{/* <Box width={{ base: "100%", xl: "55rem" }}>
<Heading as="h4" fontSize={{ base: "xl", xl: "3xl" }}>
  Why you should work at Natterbase
</Heading>
<OrderedList ml={10} mt={5}>
  <ListItem mt={3}>
    Exposure to various projects: At Natterbase, you may work on
    projects for various clients with unique needs and challenges.
    This can provide you with valuable experience and exposure to
    different technologies, industries, and problem domains, which
    can help you grow and develop as an engineer, product manager,
    or designer.
  </ListItem>
  <ListItem mt={3}>
    Opportunities for learning and growth: We prioritize ongoing
    learning and development for our employees. This may include
    training programs, conferences, hackathons, and other
    opportunities to build skills and stay up-to-date with the
    latest technologies and trends.
  </ListItem>
  <ListItem mt={3}>
    Collaborative environment: We operate a collaborative and
    team-oriented culture where engineers work closely with
    designers, project managers, and other stakeholders. This can
    help you build strong working relationships, develop
    communication skills, and learn from others with different
    perspectives and expertise.
  </ListItem>
  <ListItem mt={3}>
    Fast-paced and dynamic work: We typically work on tight
    deadlines and have a fast-paced environment. This can be
    exciting and challenging for engineers who enjoy working under
    pressure and thrive in a constantly evolving landscape.
  </ListItem>
    <ListItem mt={3}>
      Competitive compensation and benefits: We offer competitive
      compensation packages, including salary, benefits, and perks
      such as flexible work arrangements and unlimited vacation
      time.
  </ListItem>
</OrderedList>
<Text mt={10}>
  Overall, working at Natterbase can provide a rewarding and
  challenging experience if you seek variety, growth, and
  collaboration in your career.
</Text>
<Box mt={5}>
  If any of these descriptions fit your profile, send us an email
  with your portfolio, and we will be in touch;
  <a href="mailto:people@natterbase.com">
    <Text as="span" textDecor="underline" ml={2}>
      people@natterbase.com
    </Text>{" "}
  </a>
</Box>

</Box> */}