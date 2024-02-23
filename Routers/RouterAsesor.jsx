
import { Route, Routes } from "react-router-dom"
import { ServiciosScreen } from "../components/servicios/ServiciosScreem"
import CuentaScream from "../components/User/CuentaScream"

import { NavbarAsesor } from "../components/navbar/NavbarAsesor"
import { HomeScreen } from "../components/Home/HomeScreem"


export const RouterAsesor = () => {
  return (
    <>
      <NavbarAsesor/>
        <div className="container  ">
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/Servicios" element={<ServiciosScreen/>} />
            <Route path="/cuenta" element={<CuentaScream/>} />
        </Routes>
        </div>
    </>
  )
}