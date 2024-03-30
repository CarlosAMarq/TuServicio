import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../hooks/useUser";
import { ModalContext } from "../../context/ModalContext";
import { users } from "../../mocks/user";
import Logo from "../Logo";
import "../Form.css";
import { toast } from "react-toastify";

export const LoginScreen = () => {
  const { login } = useUser();
  const { onCloseLogin, onOpenRegister } = useContext(ModalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeForm = () => {
    onCloseLogin();
    onOpenRegister();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const notification = toast.loading("Verificando datos...");
    try {
      // const response = await axios.get("https://tu-servicio.onrender.com/appusers/");
      const response = await fetch("https://tu-servicio.onrender.com/login", {
        body: JSON.stringify({ username: username, password }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      if (response.status != 200) throw new Error("Error durante validacion");
      let data = await response.json();
      data.user.password = password;
      login(data);
      onCloseLogin();
      toast.update(notification, {
        render: "Inicio de sesion con éxito",
        type: "success",
        isLoading: false,
        autoClose: true,
        closeOnClick: true,
      });
    } catch (error) {
      console.error("Error al buscar el usuario:", error);
      toast.update(notification, {
        render: "Usuario o contraseña incorrecto/s",
        type: "error",
        isLoading: false,
        autoClose: true,
        closeOnClick: true,
      });
    } finally {
      setIsLoading(false);
    }

    // Convert the FormData to JSON
    /*const data = Object.fromEntries(new FormData(e.target).entries());
    const matchedUser = users.filter((user) => user.email === data.email)[0];
    */

    //utilizar este codigo para validar contrasenna
    /*users.find(
      (user) => user.email === userData.email && user.password === userData.password
    );*/

    /*if (matchedUser) {

      console.log(matchedUser);
      onCloseLogin();
      login(matchedUser)
    }*/
  };

  return (
    <>
      <div className="container">
        <form className="was-validated" onSubmit={handleSubmit}>
          <div className="modal modal-sheet position-static d-block">
            <div>
              <div className="modal-content rounded-5 shadow ">
                <div className="modal-header p-5 pb-4 border-bottom-0 rounded-5  border-dark ">
                  <Logo />
                  <h1
                    className="fw-bold mb-0 fs-2 fst-italic fw-bolder"
                    id="title"
                  >
                    Tu Servicio
                  </h1>
                </div>

                <div className="modal-body p-5 pt-0  mt-5 ">
                  <div className="form-floating imput-group has-validation mb-3">
                    <input
                      className="form-control rounded-4 "
                      placeholder="Juan123"
                      aria-describedby="inputGroupPrepend"
                      required
                      id="username"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label form="floatingInput">Usuario</label>
                  </div>
                  <div className="form-floating imput-group has-validation mb-4">
                    <input
                      type="password"
                      className="form-control rounded-4"
                      placeholder="Password"
                      required
                      id="password"
                      name="password"
                      pattern=".{8,}"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label form="floatingPassword">Contraseña</label>
                  </div>
                  <button
                    className="w-100 mb-2 btn btn-lg rounded-3 btn-primary "
                    type="submit"
                  >
                    {isLoading ? "Accediendo..." : "Acceder"}
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
      </div>
    </>
  );
};
