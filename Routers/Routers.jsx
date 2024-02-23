import { BrowserRouter, Route, Routes } from "react-router-dom"

import { LoginScreen } from "../components/login/LoginScreem"

import {CrearCuenta} from "../components/createC/CrearCuenta"
import {  SecRouters } from "./SecRouters"
import { RouterAsesor } from "./RouterAsesor"
import { RouterUser } from "./RouterUser"

export const AppRouter=()=>{
    


    return(
        <BrowserRouter>
        
        <Routes>
          
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/register" element={<CrearCuenta/>} />
            <Route path="/*" element={<SecRouters/>} />
            <Route path="/homeAsesor/*" element={<RouterAsesor/>} />
            <Route path="/homeUser/*" element={<RouterUser/>} />
            
            
            


        </Routes>
        </BrowserRouter>
    )
}