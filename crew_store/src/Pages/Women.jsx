import WomenProducts from "./WomenProducts"
import { GridItem,Grid,Button, Stack } from "@chakra-ui/react"
import React from "react"
import Pagination from "../components/Pagination"
export default function Men(){
    const [women,setWomen] = React.useState([])
    const [page,setPage] = React.useState(1)
    const [sorting,setSorting] = React.useState("asc")
    const [name,setName] = React.useState("desc")

    const getdata = async(page=1,sorting,name) => {
        let res = await fetch(`https://crewstore.onrender.com/women?_page=${page}&_limit=20&_sort=price,description&_order=${sorting},${name}`);
        res = await res.json();
        setWomen(res)
        console.log(res)
      };

      React.useEffect(()=>{ 
        getdata(page,sorting,name)
        console.log(name)
      },[page,sorting,name])
      console.log(name)

    return (
        <div>
            <h1 style={{textAlign:"center",margin:"20px", fontSize:"50px"}}>SHOP ALL WOMEN'S CLOTHING</h1>
            <Pagination 
            current={page}
            onChange={setPage}
            totalPage="3" />
            <div style={{display:"flex",justifyContent:"space-between",margin:"40px"}}>
            <div>
              <Stack direction='row' spacing={4} align='center'>
                <Button onClick={() => setSorting("asc")} disabled={sorting == "asc"} colorScheme='teal' variant='solid'>
                  Sort low to high
                </Button>
                <Button onClick={() => setSorting("desc")} disabled={sorting == "desc"} colorScheme='teal' variant='solid'>
                  Sort high to low
                </Button>
              </Stack>
            </div>
            <div>
              <Stack direction='row' spacing={4} align='center'>
                <Button onClick={() => setName("asc")} disabled={name == "asc"} colorScheme='teal' variant='solid'>
                  Sort Ascending
                </Button>
                <Button onClick={() => setName("desc")} disabled={name == "desc"} colorScheme='teal' variant='solid'>
                  Sort Decending
                </Button>
              </Stack>
            </div>  
            </div>
            <Grid templateColumns="repeat(4,1fr)" gap={6}>
                {women.map((e)=>(
                    <GridItem key={e.id}>
                        <WomenProducts
                        image={e.image}
                        id={e.id} 
                        limit={e.limit}
                        description={e.description}
                        discount={e.discount}
                        price={e.price}
                        />
                    </GridItem>
                ))}
            </Grid>
        </div>
    )
}