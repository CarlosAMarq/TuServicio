import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const CuentaScream = () => {
  // console.log('CrearCuenta')
  // const navigate= useNavigate();
  const salida = () => {
    navigate("/login", { relative: true });
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const accountData = {
      username,
      email,
      password,
      accountType,
    };

    try {
      const response = await axios.post(
        "https://tu-servicio.onrender.com/appusers",
        accountData
      );
      if (response.status === 200) {
        // Navega a la página de inicio de sesión si la creación de la cuenta fue exitosa
        () => navigate("/login", { relative: true });
      } else {
        // Maneja los errores aquí
        console.error("Error al crear la cuenta:", response.data);
      }
    } catch (error) {
      // Maneja los errores aquí
      console.error("Error al crear la cuenta:", error);
    }
  };

  return (
    <>
      <div
        className="modal modal-sheet position-static d-block p-4 py-md-5 "
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow bg-body-secondary">
            <div className="modal-header p-5 pb-4 border-bottom-0 bg-secondary rounded-4 shadow border-dark ">
              <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder">
                {username}
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={salida}
              ></button>
            </div>

            <div className="modal-body p-5 pt-0 bg-body-secondary mt-5 ">
              <div className="form-floating mb-3">
                <input
                  type="user"
                  className="form-control rounded-3"
                  id="UserName"
                  placeholder="name"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label form="floatingInput">{username}</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="Email"
                  placeholder="name@gmail.com "
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label form="floatingInput">{email}</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="Password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label form="floatingPassword">{password}</label>
              </div>

              <label form="country" className="form-label">
                {accountType}
              </label>

              <div className="invalid-feedback"></div>
              <button
                className="w-100 btn btn-primary btn-lg mt-5"
                type="submit"
                onClick={handleFormSubmit}
              >
                Guardar
              </button>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CuentaScream;
