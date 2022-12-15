import { GridItem,Grid } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import Products from "./Products"
export default function Men(){
    const [men,setMen] = React.useState([])
    React.useEffect(()=>{
        axios.get("http://fakestoreapi.com/products").then((res) => {
             setMen(res.data)
            console.log(res.data)
        })
    },[])
    return (
        <div>
            <h1>men</h1>
            <Grid templateColumns="repeat(4,1fr)" gap={6}>
                {men.map((e)=>(
                    <GridItem key={e.id}>
                        <Products
                        category={e.category}
                        image={e.image}
                        id={e.id} 
                        title={e.title}
                        price={e.price}
                        rating={e.rating}
                        count={e.count}
                        />
                    </GridItem>
                ))}

            </Grid>
        </div>
    )
}