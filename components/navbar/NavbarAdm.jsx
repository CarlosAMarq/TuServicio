import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useUser } from "../../hooks/useUser";

export const NavbarAdm = () => {
  const navigate = useNavigate();
  const { user, isLogin, logout } = useUser();
  const FConvovatoria = () => {
    if (user?.usertype != "Usuario")
      return (
        <NavLink
          className="navbar-brand text-light font-weight-bold navbar-expand-lg"
          to="/TuServicio/convocatoria"
        >
          Convocatorias
        </NavLink>
      );
    
  };

  return (
    <Navbar>
      <div className="navbar-collapse collapse  ">
        <div className="navbar-nav ">
          <NavLink
            className="navbar-brand text-light font-weight-bold navbar-expand-lg"
            to="/TuServicio/"
          >
            Inicio
          </NavLink>

          <NavLink
            className="navbar-brand text-light font-weight-bold navbar-expand-lg "
            to="/TuServicio/servicios"
          >
            Servicios
          </NavLink>

          <NavLink
          className="navbar-brand text-light font-weight-bold navbar-expand-lg"
          to="/TuServicio/ofertas"
        >
          Ofertas
        </NavLink>
          

          {isLogin() && FConvovatoria()}
        </div>
      </div>
    </Navbar>
  );
};
