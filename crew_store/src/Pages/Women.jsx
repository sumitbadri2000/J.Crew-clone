import { GridItem,Grid } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import WomenProducts from "./WomenProducts"
export default function Men(){
    const [men,setMen] = React.useState([])
    React.useEffect(()=>{
        axios.get("https://crewstore.onrender.com/women").then((res) => {
             setMen(res.data)
            console.log(res.data)
        })
    },[])
    return (
        <div>
            <h1>women</h1>
            <Grid templateColumns="repeat(4,1fr)" gap={6}>
                {men.map((e)=>(
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