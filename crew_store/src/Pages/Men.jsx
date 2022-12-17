import { GridItem,Grid,Select  } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import Pagination from "../components/Pagination"
import Products from "./Products"
export default function Men(){
    const [men,setMen] = React.useState([])
    const [page,setPage] = React.useState(1)
    const [sorting,setSorting] = React.useState("asc")
    const getdata = async(page=1,sorting) => {
        let res = await fetch(`https://crewstore.onrender.com/men?_page=${page}&_limit=20&_sort=price&_order=${sorting}`);
        res = await res.json();
        setMen(res)
        console.log(res)
      };

      React.useEffect(()=>{
        getdata(page,sorting)
      },[page,sorting])

    return (
        <div>
            <h1 style={{textAlign:"center",margin:"20px", fontSize:"50px"}}>SHOP ALL MEN'S CLOTHING</h1>
            <Pagination 
            current={page}
            onChange={setPage}
            totalPage={men.totalPages} />
            <div data-testid="sort-container">
        <button
          data-testid="low-to-high"
          onClick={() => setSorting("asc")}
          disabled={sorting == "asc"}
        >
          Sort low to high
        </button>
        <button
          data-testid="high-to-low"
          onClick={() => setSorting("desc")}
          disabled={sorting == "desc"}
        >
          Sort high to low
        </button>
      </div>
      <div>
        <Select placeholder='Select option'>
            <option value='Sort by Price'>Sort by Price</option>
            <option value='low to high'>low to high</option>
            <option value='high to low'>high to low</option>
        </Select>
      </div>
            <Grid templateColumns="repeat(4,1fr)" gap={6}>
                {men.map((e)=>(
                    <GridItem key={e.id}>
                        <Products
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