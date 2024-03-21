import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../hooks/useUser";
import { ModalContext } from "../../context/ModalContext";
import { users } from "../../mocks/user";
import Logo from "../Logo";
export const LoginScreen = () => {
 
  const { login } = useUser();
  const { onCloseLogin, onOpenRegister } = useContext(ModalContext);


  
  const handleChangeForm = () => {
    onCloseLogin();
    onOpenRegister();
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    




    // Convert the FormData to JSON
    const data = Object.fromEntries(new FormData(e.target).entries());
    const matchedUser = users.filter((user) => user.email === data.email)[0];
    if (matchedUser) {

      console.log(matchedUser);
      onCloseLogin();
      login(matchedUser)
    }
  };

  return (
    <>
      <form className="was-validated" onSubmit={handleSubmit}>
        <div className="modal modal-sheet position-static d-block">
          <div>
            <div className="modal-content rounded-4 shadow ">
              <div className="modal-header p-5 pb-4 border-bottom-0 rounded-4  border-dark ">
                <Logo/>
                <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder">
                  Tu Servicio
                </h1>
              </div>

              <div className="modal-body p-5 pt-0  mt-5 ">
                <div className="form-floating imput-group has-validation mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3 "
                    placeholder="name@example.com"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="email"
                    onChange={(e) => 
                      setEmail(e.target.value)}
                  />
                  <label form="floatingInput">Correo</label>
                </div>
                <div className="form-floating imput-group has-validation mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    placeholder="Password"
                    required
                    name="password"
                    pattern=".{8,}"
                  />
                  <label form="floatingPassword">Contraseña</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Acceder 
                </button>
                <small className="text-body-secondary">
                  ¿No tienes cuenta?{" "}
                  <span
                    onClick={handleChangeForm}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    haga clik
                  </span>
                </small>
                {/* <Link to="/register">aqui</Link> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
