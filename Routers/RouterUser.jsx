
import { Route, Routes } from "react-router-dom"

import CuentaScream from "../components/User/CuentaScream"

import { NavbarUser } from "../components/navbar/NavbarUser"
import { HomeUser } from "../components/Home/homeUser"
import { ServiciosUser } from "../components/servicios/ServiciosUser"


export const RouterUser = () => {
  return (
    <>
      <NavbarUser/>
        <div className="container  ">
        <Routes>
            <Route path="/" element={<HomeUser/>} />
            <Route path="/ServiciosUser" element={<ServiciosUser/>} />
            <Route path="/cuenta" element={<CuentaScream/>} />
        </Routes>
        </div>
    </>
  )
}