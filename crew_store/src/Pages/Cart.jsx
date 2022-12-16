import { GridItem,Grid } from "@chakra-ui/react"
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import axios from "axios"
import React from "react"
import Modals from "./Modal";
export default function Carts(){
    const [cart,setCart] = React.useState([])
    React.useEffect(()=>{
        axios.get("https://crewstore.onrender.com/cart").then((res) => {
             setCart(res.data)
            console.log(res)
        })
    },[])
    return (
        <div>
            <h1>cart</h1>
            <Grid templateColumns="repeat(4,1fr)" gap={6}>
                {cart.map((e)=>(
                    <GridItem key={e.id}>
                        <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        > 
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={e.image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {e.limit}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {e.description}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
              ₹{e.discount}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
              ₹{e.price}
              </Text>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {e.limit}
            </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
   
                    </GridItem>
                ))}
                 
            </Grid>
            <Modals />
        </div>
    )
}