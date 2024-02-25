
import { Route, Routes } from "react-router-dom"
import { ServiciosScreen } from "../components/servicios/ServiciosScreem"
import CuentaScream from "../components/User/CuentaScream"

import { NavbarAsesor } from "../components/navbar/NavbarAsesor"
import { HomeScreen } from "../components/Home/HomeScreem"
import CreateServicios from "../components/servicios/CreateServicios"


export const RouterAsesor = () => {
  return (
    <>
      <NavbarAsesor/>
        <div className="">
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/ServiciosAsesor" element={<ServiciosScreen/>} />
            <Route path="/cuenta" element={<CuentaScream/>} />
            <Route path="/ServiciosAsesor/CrearServicios" element={<CreateServicios/>} />
        </Routes>
        </div>
    </>
  )
}