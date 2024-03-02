import { BrowserRouter, Route, Routes } from "react-router-dom"

import {  SecRouters } from "./SecRouters"


export const AppRouter=()=>{
    


    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/*" element={<SecRouters/>} />
        </Routes>
        </BrowserRouter>
    )
}