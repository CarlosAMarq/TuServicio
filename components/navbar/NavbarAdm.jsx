import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export const NavbarAdm = () => {
  const navigate = useNavigate();
  const HandleLogOut = () => {
    navigate("/login", { replace: true });

    console.log("log out");
  };

  return (
    <Navbar>
      <div className="navbar-collapse collapse  ">
        <div className="navbar-nav ">
          
            <NavLink className="navbar-brand text-light font-weight-bold navbar-expand-lg" to="/">
              Home
            </NavLink>
          

          <NavLink
            className="navbar-brand text-light font-weight-bold navbar-expand-lg "
            to="/servicios"
          >
            Servicios
          </NavLink>

          <NavLink className="navbar-brand text-light font-weight-bold navbar-expand-lg" to="/convocatoria">
            Convocatorias
          </NavLink>
        </div>
      </div>

      <div className=" order-3  d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <Link className="nav-item nav-link text-info md-5   " to="/cuenta">
            user
          </Link>

          <button
            className="nav-item nav-link btn text-light  rounded "
            onClick={HandleLogOut}
          >
            Logout
          </button>
        </ul>
      </div>
    </Navbar>
  );
};
