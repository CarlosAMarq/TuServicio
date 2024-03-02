import {  NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useUser } from "../../hooks/useUser";

export const NavbarAdm = () => {
  const navigate = useNavigate();
  const { user, isLogin, logout } = useUser();
  const FConvovatoria = () => {
    if(user.userType=="admin") 
    return(
      <NavLink
        className="navbar-brand text-light font-weight-bold navbar-expand-lg"
        to="/convocatoria"
      >
        Convocatorias
      </NavLink>
      )
   }
  

  console.log("log out");
  

  return (
    <Navbar>
      <div className="navbar-collapse collapse  ">
        <div className="navbar-nav ">
          <NavLink
            className="navbar-brand text-light font-weight-bold navbar-expand-lg"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className="navbar-brand text-light font-weight-bold navbar-expand-lg "
            to="/servicios"
          >
            Servicios
          </NavLink>

          {isLogin()?(
            <>
            {FConvovatoria()}
            </>
          ):(
            <>
            <NavLink
            className="navbar-brand text-light font-weight-bold navbar-expand-lg"
            to="/convocatoria"
          >
            Convocatorias
          </NavLink>
          </>
          )
          
          }
          
        </div>
      </div>
    </Navbar>
  );
};
