import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Men from "./Men"
import Women from "./Women"
import ProductDetails from "./ProductDetails"
import WomenSingleDetails from "./WomenSingleDetails"
import Carts from "./Cart"
import Login from "./Login"

export default function AllRouter(){
    return(
        <div>
            <Routes>
                <Route path="" element={<Home />}></Route>
                <Route path="/Men" element={<Men />}></Route>
                <Route path="/Men/:id" element={<ProductDetails />}></Route>
                <Route path="/Women" element={<Women />}></Route>
                <Route path="/Women/:id" element={<WomenSingleDetails />}></Route>    
                <Route path="/Cart" element={<Carts />}></Route>
                <Route path="/Login" element={<Login />}></Route>
            </Routes>
        </div>
    )
}
