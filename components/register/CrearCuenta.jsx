import axios from "axios";
import { useContext, useState } from "react";
import Logo from "../Logo";
import "../Form.css";
import { useUser } from "../../hooks/useUser";
import { toast } from "react-toastify";
import { toastRejectProps, toastSuccessProps } from "../../global.config";
import { ModalContext } from "../../context/ModalContext";

export const CrearCuenta = () => {
  const { login } = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const { onCloseRegister } = useContext(ModalContext);

  const crearUsuario = async (event) => {
    event.preventDefault();


    // Agrega la clase 'was-validated' a los formularios
 const forms = document.querySelectorAll(".needs-validation");
 Array.from(forms).forEach((form) => {
    form.classList.add("was-validated");
 });
    (() => {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
  
      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
  
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();

    // Verifica si los campos requeridos están llenos
    if (!username || !email || !password || !accountType) {
      toast("Por favor, completa todos los campos requeridos.");
      return;
    }

    // Validar que el nombre de usuario comience con una letra mayúscula
    const usernameRegex = /^[A-Z]/;
    if (!usernameRegex.test(username)) {
      toast("El nombre de usuario debe comenzar con una letra mayúscula.");
      return;
    }
    //verificar si el usuario contiene  cracteres extrannos
    const usernamePattern = /^[a-zA-Z0-9-_.]+$/;
    if (!usernamePattern.test(username)) {
      toast(
        "El nombre de usuario solo puede contener letras, números, guiones, puntos y guiones bajos."
      );
      return;
    }

    //validar que la el email empiece con minuscula
    const mailMin = /^[a-z]/;
    if (!mailMin.test(email)) {
      toast("El email no puenen empezar con mayuscula");
      return;
    }

    // validar que la contrasena tiene mas de 8 caracteres
    if (password.length <= 8) {
      toast("la contrasena debe tener mas de 8 caracteres");
      return;
    }
    //verifica que existe el @
    if (!email.includes("@")) {
      toast("El correo electrónico debe contener un @");
      return;
    }

    //validacion de que el email termine en .com o .cu
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|cu)$/;
    if (!regex.test(email)) {
      toast("El correo electrónico debe terminar en .com o .cu");
      return;
    }

    const datosUsuario = {
      username: username,
      mail: email,
      password: password,
      usertype: accountType,
    };
    const notification = toast.loading("Enviando datos...");
    try {
      const respuesta = await axios.post(
        "https://tu-servicio.onrender.com/register",
        datosUsuario
      );
      if (respuesta.status === 201 || respuesta.status === 200) {
        toast.update(notification, {
          render: "Usuario creado con éxito",
          ...toastSuccessProps,
        });
        login(respuesta.data);
        onCloseRegister();
      } else {
        throw new Error("Error al crear el usuario");
      }
    } catch (error) {
      toast.update(notification, {
        render: "Error al crear el usuario",
        ...toastRejectProps,
      });
    }
  };

  

  return (
    <>
      <form
        className="need-validation bg-light rounded-4"
        style={{ width: "500px" }}
        noValidate
        onSubmit={crearUsuario}
      >
        <div
          className="modal modal-sheet position-static d-block rounded-4"
          id="modalSignin"
        >
          <div className="modal-content shadow  rounded-4">
            <div className="modal-text d-flex border-bottom-0  px-5   border-dark ">
              <Logo size={"0.75"} />
              <h1
                className="fw-bold mb-0 fs-2 fst-italic fw-bolder pt-5"
                id="title"
              >
                Regístrate
              </h1>
            </div>

            <div className="modal-body p-5 pt-0  mt-5 ">
              <div className="form-floating mb-3 ">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="name"
                  placeholder="name"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  pattern="^[A-Z][a-zA-Z]*$"
                />
                <label form="floatingInput">Username</label>
                <div className="invalid-feedback">
                  Por favor escriba su nombre.
                </div>
                <div className="valid-feedback">Listo</div>
              </div>

              <div className="form-floating imput-group  mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="validationCustomUsername"
                  placeholder="name@gmail.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|cu)$"
                  required
                />

                <label form="floatingInput">Correo</label>
                <div className="invalid-feedback">
                  Por favor escriba su Direccion de correo
                </div>
                <div className="valid-feedback">Listo</div>
              </div>
              <div className="form-floating imput-group  mb-3">
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
                <div className="valid-feedback">Listo</div>
              </div>

              <div className="form-floating imput-group  mb-3">
                <select
                  className="form-select country"
                  id="Type"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  required
                  placeholder={"asdsad"}
                >
                  <option></option>
                  <option>Usuario</option>
                  <option>Asesor</option>
                  
                </select>
                <label form="country" className="form-label">
                  Tipo de Cuenta
                </label>
                <div className="invalid-feedback">Seleccione el tipo de usuario</div>
              </div>

              <button
                className="w-100 btn btn-primary btn-lg mt-5"
                type="submit"
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
