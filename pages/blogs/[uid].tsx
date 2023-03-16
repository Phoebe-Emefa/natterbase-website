import Hero from '@/src/components/Home/Hero'
import Layout from '@/src/components/Layout'
import { Box, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const BlogDetails = () => {
  return (
    <Layout>
      <Hero title='Landor X: Man vs. Robot panel discusses tech with a human touch' subTitle='25 August 2019 — At our recent Landor X: Man vs. Robot event, experts from across the marketing, branding, and consulting spaces weighed in on how technology could impact creativity, design, and marketing in the future.' headerFontSize='5xl' subTitleFontSize='md' hasScroll={false} />
    <Container maxWidth={{'3xl': '60rem'}} my={60} px={{ xl: 60, '3xl': 30}}>
   <VStack align='left' my={32} spacing={20}>
   <Box>
                <Text  fontSize='lg'>
                These terms of use are entered into by and between you and In Bloom Holding, Inc. (&quot;Couple&quot;, &quot;we&quot; or &quot;us&quot;). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively, these &quot;Terms of Use&quot;), govern your access to and use of www.couple.co, including any content, functionality, applications and services offered on or through Couple.co  (the &quot;Website&quot;), whether as a guest or a registered user.
                </Text>
            </Box>

            <Box>
                <Heading as='h3' fontSize='2xl'>Data as a tool</Heading>
                <Text  mt={6} fontSize='lg'>We process personal data in compliance with the relevant data protection regulations of the GDPR, the DPA (Data Protection Act) and the PECR (Privacy and Electronic Communications Regulations). We will only process data where we are legally permitted to do so. When you use this website, we will process personal data only with your consent, for the performance of a contract to which you are a party, or in order to take steps at your request prior to entering into a contract, for compliance with a legal obligation or if the processing is necessary for the purposes of our legitimate interests or the legitimate interests of a third party, except where such interests are overridden by your interests or fundamental rights and freedoms which require the protection of personal data.</Text>
            </Box>

            <Box>
                <Heading as='h3' fontSize='2xl'>Accessing the Website and Account Security</Heading>
                <Text  mt={6} fontSize='lg'>We process personal data in compliance with the relevant data protection regulations of the GDPR, the DPA (Data Protection Act) and the PECR (Privacy and Electronic Communications Regulations). We will only process data where we are legally permitted to do so. When you use this website, we will process personal data only with your consent, for the performance of a contract to which you are a party, or in order to take steps at your request prior to entering into a contract, for compliance with a legal obligation or if the processing is necessary for the purposes of our legitimate interests or the legitimate interests of a third party, except where such interests are overridden by your interests or fundamental rights and freedoms which require the protection of personal data.</Text>

                <Box mt={10} width='100%'>
                  <Image src='/images/svg/man.svg' alt='man talking' width='100%' />
                </Box>
            </Box>

            <Box>
                <Heading as='h3' fontSize='2xl' mb={6}>You are responsible for:</Heading>
                <ul >
                    <li>
                   <Flex  fontSize='lg' >  <Image src='/images/svg/list-circle.svg' alt='list-circle' mr={4} />
                    Making all arrangements necessary for you to have access to the Website.</Flex>
                    </li>
                    <li>
                    <Flex mt={4}  fontSize='lg' >   <Image src='/images/svg/list-circle.svg' alt='list-circle' mr={4} mt={-5} />
                    Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.</Flex>
                    </li>
                </ul>
                <Text  mt={6} fontSize='lg'>If you create an account on the Website or sign up for special offers, you will be asked to provide your e-mail address and certain other information. It is a condition of your use of the Website that all the information you provide on the Website be correct, current and complete. You agree that all information you provide to create an account on this Website or otherwise, including but not limited to through the use of any interactive features on the Website, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy.</Text>
            </Box>

            <Box>
                <Heading as='h3' fontSize='2xl' mb={6}>You are responsible for:</Heading>
                <ul >
                    <li>
                   <Flex  fontSize='lg' >  <Image src='/images/svg/list-circle.svg' alt='list-circle' mr={4} />
                    Making all arrangements necessary for you to have access to the Website.</Flex>
                    </li>
                    <li>
                    <Flex mt={4}  fontSize='lg' >   <Image src='/images/svg/list-circle.svg' alt='list-circle' mr={4} mt={-5} />
                    Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.</Flex>
                    </li>
                </ul>
                <Text  mt={6} fontSize='lg'>If you create an account on the Website or sign up for special offers, you will be asked to provide your e-mail address and certain other information. It is a condition of your use of the Website that all the information you provide on the Website be correct, current and complete. You agree that all information you provide to create an account on this Website or otherwise, including but not limited to through the use of any interactive features on the Website, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy.</Text>
            </Box>
   </VStack>

    </Container>
    </Layout>
  )
}

export default BlogDetails