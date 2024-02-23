import { NavbarAdm } from "../components/navbar/NavbarAdm"
import { Route, Routes } from "react-router-dom"

import { CovocatoriasScreen } from "../components/convocatorias/ConvocatoriasScreem"
import CuentaScream from "../components/User/CuentaScream"
import { HomeScreen } from "../components/Home/HomeScreem"
import { CreateConvocatoria } from "../components/convocatorias/CreateConvocatoria"
import { ServiciosUser } from "../components/servicios/ServiciosUser"


export const SecRouters = () => {
  <switch>
    
  </switch>
  return (
    <>
      <NavbarAdm/>
        <div className="container  ">
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/Servicios" element={<ServiciosUser/>} />
            <Route path="/convocatoria" element={<CovocatoriasScreen/>} />
            <Route path="/convocatoria/createconvoactoria" element={<CreateConvocatoria/>} />
            <Route path="/cuenta" element={<CuentaScream/>} />
        </Routes>
        </div>
    </>
  )
}


