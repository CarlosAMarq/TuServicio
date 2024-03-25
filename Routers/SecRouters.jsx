import { NavbarAdm } from "../components/navbar/NavbarAdm"
import { Route, Routes } from "react-router-dom"

import CuentaScream from "../components/User/CuentaSceam"
import { HomeScreen } from "../components/Home/HomeScreem"
import { CreateConvocatoria } from "../components/convocatorias/CreateConvocatoria"

import { CovocatoriasScreen } from "../components/convocatorias/CovocatoriasScreen"
import CreateServicios from "../components/servicios/CreateServicios"
import { ServiciosScreen } from "../components/servicios/ServiciosScreem"
import { OfertasScreem } from "../components/ofertas/ofertasScreem"
import { VisualizarConvocatoria } from "../components/convocatorias/VisualizarConvocatoria"
import {VisualizarServicio} from "../components/servicios/VisualizarServicios"
import { VisualizarOfertas } from "../components/ofertas/VisualizarOfertas"



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
            <Route path="/visualizarServicio/:id" element={<VisualizarServicio/>} />
            <Route path="/visualizarOfertas/:id" element={<VisualizarOfertas/>} />
            
        </Routes>
        </div>
    </>
  )
}


