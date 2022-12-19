import React from "react";
import { HiSearch } from "react-icons/hi";
import { Divider } from "@chakra-ui/react";
import logo from "../crewstorelogo.png"
import { BsHandbag } from "react-icons/bs";
import {NavLink,Link } from "react-router-dom";


import {
  Box,
  Container,
  HStack,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Image
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar(){

  const changeColor = (e) => {
    e.target.style.color = "black";
    e.target.style.cursor = "pointer";
  };

  const {state} = React.useContext(AuthContext)

  return (
    <Box>
      <Container
        height="100"
        maxW={{ base: "100%", md: "100%", lg: "90%", xl: "90%", "2xl": "60%" }}
        marginTop="1"
      >
        <HStack justifyContent={"space-between"}>
          <HStack color={"gray"} gap={"3"} fontSize="l">
          <Image style={{height:"85px"}} src={logo} alt="BRAND SHOP" />
          <NavLink to={"/"} onMouseOver={changeColor}>Gifts</NavLink>
          <NavLink to={"/"} onMouseOver={changeColor}>New</NavLink>
            <NavLink to={"/Men"}  onMouseOver={changeColor}>MEN</NavLink>
            <NavLink to={"/Women"} onMouseOver={changeColor}>WOMEN</NavLink>
            <NavLink to={"/Men"} onMouseOver={changeColor}>BOY</NavLink>
            <NavLink to={"/Women"} onMouseOver={changeColor}>GIRL</NavLink>
          </HStack>
          <Box>
            <InputGroup size={"sm"}>
              <Input placeholder="Search for..." />
              <InputRightElement childre n={<HiSearch />} />
              <Link to={"/Login"}><Text marginLeft={10}>{state.token?state.userName:"Login"}</Text></Link>  
              <Link to={"/Cart"}><Text marginLeft={10}><BsHandbag size={"25"} /></Text></Link>
              
            </InputGroup>
          </Box>
        </HStack>
      </Container>
      <Divider orientation="horizontal" borderColor="gray.300" marginTop="-3" />
    </Box>
  );
};