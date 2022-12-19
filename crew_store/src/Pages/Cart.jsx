import { GridItem,Grid,Button } from "@chakra-ui/react"
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
    const[total,setTotal]=React.useState(0);
    React.useEffect(()=>{
        axios.get("https://crewstore.onrender.com/cart").then((res) => {
             setCart(res.data)
            console.log(res)
        })
    },[])

    React.useEffect(()=>{
      setTotal(cart.reduce((acc,el)=>
         acc + el.discount,0))
  },[cart])

    return (
        <div>
            <h1 style={{textAlign:"center",marginTop:"20px",fontSize:"25px"}}>YOUR PRODUCTS CART</h1>
            <br/>
            <div style={{margin:"auto", width:"20%"}}>
              <Stack direction='row' spacing={2} align='center' >
                <Button disabled colorScheme='teal' variant='solid'>
                  Total Products : {cart.length}
                </Button>
                <Button disabled colorScheme='teal' variant='solid'>
                  Total Price : ₹{total}
                </Button>
              </Stack>
            </div>
            
            <Grid templateColumns="repeat(3,1fr)" gap={6}>
                {cart.map((e)=>(
                    <GridItem key={e.id}>
                      <Center py={12}>
                        <Box
                        role={'group'}
                        p={6}
                        maxW={'330px'}
                        w={'full'}
                        bg={'white'}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}
                        height={"380px"}
                        >
                        <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'200px'}
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
                      height={240}
                      width={280}
                      objectFit={'cover'}
                      src={e.image}
                      />
                    </Box>
                    <Stack pt={10} align={'center'}>
                      <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {e.limit}
                      </Text>
                      <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={400}>
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
                      <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        </Text>
                    </Stack>
                  </Box>
                </Center>
                </GridItem>
                ))} 
            </Grid>
            <Modals/>
        </div>
    )
}