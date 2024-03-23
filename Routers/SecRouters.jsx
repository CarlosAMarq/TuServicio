import { NavbarAdm } from "../components/navbar/NavbarAdm"
import { Route, Routes } from "react-router-dom"

import CuentaScream from "../components/User/CuentaScream"
import { HomeScreen } from "../components/Home/HomeScreem"
import { CreateConvocatoria } from "../components/convocatorias/CreateConvocatoria"

import { CovocatoriasScreen } from "../components/convocatorias/CovocatoriasScreen"
import CreateServicios from "../components/servicios/CreateServicios"
import { ServiciosScreen } from "../components/servicios/ServiciosScreem"
import { OfertasScreem } from "../components/ofertas/ofertasScreem"
import { VisualizarConvocatoria } from "../components/convocatorias/VisualizarConvocatoria"

export const SecRouters = () => {
  <switch>
    
  </switch>
  return (
    <>
      <NavbarAdm/>
        <div>
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/servicios" element={<ServiciosScreen/>} />
            <Route path="/convocatoria" element={<CovocatoriasScreen/>} />
            <Route path="/cuenta" element={<CuentaScream/>} />
            <Route path="/ofertas" element={<OfertasScreem/>} />
            <Route path="/visualizarConvocatoria/:id" element={<VisualizarConvocatoria/>} />
        </Routes>
        </div>
    </>
  )
}


