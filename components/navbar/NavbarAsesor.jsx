import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export const NavbarAsesor = () => {
  const navigate = useNavigate();
  const HandleLogOut = () => {
    navigate("/login", { replace: true });

    console.log("log out");
  };

  return (
    <Navbar>
      <Link
        className="navbar-brand text-light font-weight-bold navbar-expand-lg "
        to="/homeAsesor"
        style={{ fontSize: "1.7rem" }}
      >
        Tu Servicio
      </Link>

      <div className="navbar-collapse collapse show ">
        <div className="navbar-nav ">
          <div className="ml-5 mr-5">
            <NavLink
              className="nav-item nav-link text-light md-5"
              to="/homeAsesor"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </NavLink>
          </div>

          <NavLink
            className="nav-item nav-link text-light "
            to="/homeAsesor/servicios"
          >
            Servicios
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <Link className="nav-item nav-link text-info   " to="/cuenta">
            Carlos
          </Link>

          <button
            className="nav-item nav-link btn text-light  rounded "
            onClick={HandleLogOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          </button>
        </ul>
      </div>
    </Navbar>
  );
};
