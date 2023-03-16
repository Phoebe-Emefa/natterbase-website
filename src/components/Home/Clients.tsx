import { clients } from "@/src/utils/constants";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ClientCard from "./Cards/ClientCard";

const Clients = () => {
  return (
    <Container  minW={{ md: "2xl", lg: "3xl", xl: "6xl", "3xl": "7xl" }} py={{base: 24, 'xl': 44}}>
      <Heading as="h3" fontSize={{base: '3xl', 'xl': "6xl"}} fontWeight={500} textAlign="left">
        What Our Clients Say
      </Heading>

      <VStack mt={16} align="left">
    <Tabs defaultIndex={1} border="none" borderColor="transparent">
      <TabPanels>
        {clients?.map((client) => (
          <TabPanel key={client?.id}  p={0} >
            <ClientCard
              name={client?.name}
              position={client?.position}
              review={client?.review}
              company={client?.company}
            />
          </TabPanel>
        ))}
      </TabPanels>
      <TabList width="100%" mt={8} >
        {clients?.map((client) => (
            
         <Flex key={client?.id} justify='center' align='center'  width='full'  >
           <Tab
            ml={4}
            _selected={{ border: "1px solid black", rounded: "md" }}
            width="100%"
            height='100%'
            border="1px solid rgba(79, 79, 79, 0.15)"
            boxShadow="0px 3px 5px rgba(0, 0, 0, 0.05)"
            rounded="md"
          >
            <Flex bg="white" justify="center" align="center">
              <Image src={client?.logo} alt={client?.company} />
            </Flex>
          </Tab>
         </Flex>
        ))}
      </TabList>
    </Tabs>
  </VStack>
    </Container>
  );
};

export default Clients;
