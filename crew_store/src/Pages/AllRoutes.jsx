import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Men from "./Men"
import ProductDetails from "./ProductDetails"

export default function AllRouter(){
    return(
        <div>
            <Routes>
                <Route path="" element={<Home />}></Route>
                <Route path="/Men" element={<Men />}></Route>
                <Route path="/Men/:id" element={<ProductDetails />}></Route>   
            </Routes>
        </div>
    )
}
