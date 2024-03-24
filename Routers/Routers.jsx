import { BrowserRouter, Route, Routes } from "react-router-dom"

import {  SecRouters } from "./SecRouters"
import { useEffect } from "react"


export const AppRouter=()=>{
    
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/*" element={<SecRouters/>} />
        </Routes>
        </BrowserRouter>
    )
}