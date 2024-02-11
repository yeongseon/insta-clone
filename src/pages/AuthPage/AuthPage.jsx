import React from 'react'
import { Container, Flex, VStack } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { AuthForm } from '../../components/AuthForm/AuthForm';

export const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                {/* Left hand-side */}
                <Box display={{base:"none",md:"block"}}>
                    <Image src="/auth.png" />
                </Box>
            
                {/* Right hand-side */}
                <VStack spacing={4} align={"stretch"}>
                    <AuthForm />
                    <Box textAlign={"center"}>Get the app.</Box>
                    <Flex gap={5} justifyContent={"center"}>
                        <Image src="/playstore.png" h={"10"} alt="Playstore log" />
                        <Image src="/microsoft.png" h={"10"} alt="Microsoft log" />
                    </Flex>
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage