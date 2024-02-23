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
          <div className="ml-5 mr-5">
            <NavLink className="nav-item nav-link text-light md-5" to="/">
              Home
            </NavLink>
          </div>

          <NavLink
            className="nav-item nav-link text-light mr-5 "
            to="/servicios"
          >
            Servicios
          </NavLink>

          <NavLink className="nav-item nav-link text-light" to="/convocatoria">
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
