import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Logo from "../Logo";

export const CrearCuenta = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accountType, setAccountType] = useState("");

  const validacion = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");
    
    
    
 };
  
  

  const handleFormsumit = async (event) => {
    event.preventDefault();

    const accountData = {
      id: 30,
      username: username,
      email: email,
      password: password,
      accountType: accountType,
    };

    try {
      const response = await axios.post("https://tu-servicio.onrender.com/appusers/",
      accountData);
      if (response.status === 200) {
        // Navega a la página de inicio de sesión si la creación de la cuenta fue exitosa
        
      } else {
        // Maneja los errores aquí
        console.error("Error al crear la cuenta:", response.data);
      }
    } catch (error) {
      // Maneja los errores aquí
      console.error("Error al crear la cuenta:", error);
    }
  };


 (() => {
  
  'use strict'
 const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()&&password.length <= 8) {
        event.preventDefault()
        event.stopPropagation()
      }
      

      form.classList.add('was-validated')
    }, false)
  })
})()

  return ( 
    <>
      <form className="was-validated bg-light rounded"  style={{ width: "500px" }} noValidate>
        <div
          className="modal modal-sheet position-static d-block rounded-4"
          id="modalSignin"
        >
          <div className="modal-content shadow  rounded-3">
            <div className="modal-text d-flex border-bottom-0  p-5   border-dark ">
              <Logo/>
              <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder pt-5">
                Regístrate
              </h1>
            </div>

            <div className="modal-body p-5 pt-0  mt-5 ">
              <div className="form-floating mb-3 has-validation" >
                <input
                  type="user"
                  className="form-control rounded-3"
                  id="name"
                  placeholder="name"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  pattern="[a-zA-Z]+$"
                />
                <label form="floatingInput">Username</label>
                <div className="invalid-feedback">
                  Por favor escriba su nombre.
                </div>
                <div className="valid-feedback">
                  Listo
                </div>
              </div>

              <div className="form-floating imput-group has-validation mb-3">
                <input
                 type="email"
                 className="form-control rounded-3"
                 id="validationCustomUsername"
                 placeholder="name@gmail.com"
                 name="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$"
                 
                 required
                />
                
                <label form="floatingInput">Correo</label>
                <div className="invalid-feedback">
                  Por favor escriba su Direccion de correo
                </div>
                <div className="valid-feedback">
                  Listo
                </div>
              </div>
              <div className="form-floating imput-group has-validation mb-3">
                <input
                 type="password"
                 className="form-control rounded-3"
                 id="Password"
                 placeholder="Password"
                 name="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
                 pattern=".{8,}"
                 
                />
                
                <label form="floatingPassword">Contraseña</label>
                <div className="invalid-feedback">
                La contraseña debe tener más de 8 dígitos
                </div>
                <div className="valid-feedback">
                  Listo
                </div>
              </div>

              <label form="country" className="form-label">
                Tipo de Cuenta
              </label>
              <select
                className="form-select"
                id="Type"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                required
              >
                <option>Usuario</option>
                <option>Ascesor</option>
                <option>Adminisrador</option>
              </select>
              <div className="invalid-feedback"></div>
              <button
                className="w-100 btn btn-primary btn-lg mt-5"
                type="submit"
                onClick={validacion}
                
              >
                Crear Cuenta
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
