import React from "react";
import {
  Box,
 chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import {Link as RouterLink} from "react-router-dom"

 const SocialButton = ({
   children,
   label,
   href,
 }) => {
   return (
     <chakra.button
       bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
       rounded={"full"}
       w={8}
       h={8}
       cursor={"pointer"}
       as={"a"}
       href={href}
       display={"inline-flex"}
       alignItems={"center"}
       justifyContent={"center"}
       transition={"background 0.3s ease"}
       _hover={{
         bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
       }}
     >
       <VisuallyHidden>{label}</VisuallyHidden>
       {children}
     </chakra.button>
   );
 };

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer(){
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Help</ListHeader>
            <Link href={"#"}>Customer Service</Link>
            <Link href={"#"}>Track order</Link>
            <Link href={"#"}>Return and Exchanges</Link>
            <Link href={"#"}>Shipping</Link>
            <Link href={"#"}>Contact us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Link</ListHeader>
            <RouterLink to={"/Men"}>Men</RouterLink>
            <RouterLink to={"/WoMen"}>Women</RouterLink>
            <RouterLink to={"/"}>Home</RouterLink>
            <Link href={"#"}>My Favorites</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About Crew Store</ListHeader>
            <Link href={"#"}>Our Story</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Social Responsibilties</Link>
            <Link href={"#"}>My Favorites</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
          <Stack spacing={6}>
            <Text fontSize={"sm"}>
              © 2022 Crew store. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}