import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useUser } from "../../hooks/useUser";

export const NavbarAdm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isLogin, logout } = useUser();

  function useIsCurrentRoute(routePath) {
    const location = useLocation();
    return location.pathname === "/TuServicio/" + routePath;
  }

  const FConvovatoria = () => {
    if (user?.usertype != "Usuario")
      return (
        <NavLink
          className="navbar-brand text-light font-weight-bold navbar-expand-lg"
          to="/TuServicio/convocatoria"
        >
          <p className={useIsCurrentRoute("convocatoria") ? "current-link" : "link"}>
            Convocatorias
          </p>
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
            <p className={useIsCurrentRoute("") ? "current-link" : "link"}>
              Inicio
            </p>
          </NavLink>

          <NavLink
            className="navbar-brand text-light font-weight-bold navbar-expand-lg "
            to="/TuServicio/servicios"
          >
            <p
              className={
                useIsCurrentRoute("servicios") ? "current-link" : "link"
              }
            >
              Servicios
            </p>
          </NavLink>

          <NavLink
            className="navbar-brand text-light font-weight-bold navbar-expand-lg"
            to="/TuServicio/ofertas"
          >
            <p
              className={useIsCurrentRoute("ofertas") ? "current-link" : "link"}
            >
              Ofertas
            </p>
          </NavLink>

          {isLogin() && FConvovatoria()}
        </div>
      </div>
    </Navbar>
  );
};
