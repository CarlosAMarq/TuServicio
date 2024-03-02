import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { ModalContext } from "../../context/ModalContext";

export default function NavbarAccount() {
  const { user, isLogin, logout } = useUser();
  const {onOpenLogin} = useContext(ModalContext);

  const handleLoginButton = () => {
    onOpenLogin();
  };

  return (
    <div className=" order-3  d-flex justify-content-end">
      <ul className="navbar-nav ml-auto">
        {isLogin() ? (
          <>
            <Link className="nav-item nav-link text-info md-5   " to="/cuenta">
              {user?.username ?? ""}
            </Link>
            <button
              className="nav-item nav-link btn text-light  rounded "
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="nav-item nav-link btn text-light  rounded "
              onClick={handleLoginButton}
            >
              Log In
            </button>
          </>
        )}
      </ul>
    </div>
  );
}
