import React from "react";
import { useUser } from "../../hooks/useUser";
import Logo from "../Logo";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../visual.css";
import "./account.css";
import Spinner from "../icon/Spinner";

const VisualizarCuenta = () => {
  const { user, isLogin, isUserLoading, login, setIsUserLoading } = useUser();
  const [usuario, setUsuario] = useState();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleClose = () => {
    navigate("/TuServicio/");
  };



  useEffect(() => {
    setUsuario({
      ...user,
      password: "",
    });
    setUsuario((prev) => ({ ...prev, username: user?.username }));
    setId((prev) => ({ ...prev, id: user?.id }));
  }, [user]);


  useEffect(() => {
    if (!isLogin()) {
      handleClose();
    }
 }, [isLogin]); // Cambia 'user' por 'isLogin'

  //editar el user
  const updateUsuario = async () => {
    setIsLoading(true);
    const notification = toast.loading("Enviando datos");
    const body = {
      username: user.username,
      password: user.password,
      newusername: usuario.username != user.username ? usuario.username : undefined,
      newpassword: usuario.password != "" ? usuario.password : user.password,
    };
    const response = await fetch(
      `https://tu-servicio.onrender.com/appuser/edit/`,
      {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!data.error) {
      toast.update(notification, {
        render: "Datos actualizados con éxito",
        type: "success",
        isLoading: false,
        autoClose: true,
        closeOnClick: true,
      });

      // const response = await axios.get("https://tu-servicio.onrender.com/appusers/");
      setIsUserLoading(true);
      const response = await fetch("https://tu-servicio.onrender.com/login", {
        body: JSON.stringify({ username: body.newusername ?? user.username, password: body.newpassword ?? user.password }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      let data = await response.json();
      console.log(data);
      data.user.password = body.newpassword;
      login(data);
      setIsUserLoading(false);
    } else {
      toast.update(notification, {
        render: data.error,
        type: "error",
        isLoading: false,
        autoClose: true,
        closeOnClick: true,
      });
    }
    // if (response.status === 201) {

    //   // Aquí puedes actualizar el estado local con los datos actualizados si es necesario
    // } else {
    //   console.log(response.data);
    //   toast("Error al actualizar la ususario:", error);
    // }

    setIsLoading(false);
  };

  //cambiar los valores de los imputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({ ...prevState, [name]: value }));
  };
  //cambiar contrasena
  const SetPassword = () => {
    return (
      <div className="form-floating mb-3 input-block">
        <input
          type="password"
          className="input form-control rounded-3"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          value={usuario?.password}
          onChange={handleChange}
          required
        />
        <label form="floatingPassword">Contrasena</label>
        <div className="invalid-feedback">Por favor seleccione la fecha</div>
        <div className="valid-feedback">Listo</div>
      </div>
    );
  };
  return (
    <>
      <div className="card container border-0">
        <div
          id="b"
          className="account container row about-area section-padding  "
          style={{ margin: "auto", marginTop: "7rem" }}
        >
          <div className=" col-lg-6 col-md-12 col-xs-12 info bg-body-tertiary ">
            <div className="site-heading ">
              <img
                src="/TuServicio/perfil.svg"
                alt="Convocatoria"
                style={{ aspectRatio: 1, width: "250px" }}
              />
              <h2
                className="section-title"
                style={{
                  margin: "0",
                  fontSize: "4rem",
                  color: "#797979",
                }}
              >
                <span>{user?.username ?? "Usuario"}</span>
                <span className="user-sub">{user?.usertype}</span>
              </h2>
            </div>
            {!isUserLoading ? (
              <form className="form p-5 ">
                <div className="container ">
                  <div className="form-floating mb-3 input-block">
                    <input
                      type="text"
                      className="input form-control rounded-3"
                      id="floatingInput"
                      placeholder="name"
                      name="username"
                      onChange={handleChange}
                      required
                      value={usuario?.username}
                    />

                    <label form="floatingInput">Nombre</label>
                    <div className="invalid-feedback">
                      Por favor escriba su nombre.
                    </div>
                    <div className="valid-feedback">Listo</div>
                  </div>

                  <div className="form-floating mb-3 input-block">
                    <input
                      type=" email"
                      className="input form-control rounded-3"
                      id="floatingemail "
                      placeholder="asesores"
                      name="email"
                      value={user?.email}
                      onChange={handleChange}
                      required
                      disabled
                      style={{ opacity: 0.7 }}
                    />
                    <label form="floatingemail">email</label>
                    <div className="invalid-feedback">
                      Por favor escriba su direccion email.
                    </div>
                    <div className="valid-feedback">Listo</div>
                  </div>

                  {showPasswordForm && (
                    <div className="form-floating mb-3 input-block">
                      <input
                        type="password"
                        className="input form-control rounded-3"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        value={usuario?.password}
                        onChange={handleChange}
                        required
                      />
                      <label form="floatingPassword">Contrasena</label>
                      <div className="invalid-feedback">
                        Por favor seleccione la fecha
                      </div>
                      <div className="valid-feedback">Listo</div>
                    </div>
                  )}

                  <div className=" d-flex ">
                    <button
                      style={{
                        boxShadow:
                          "inset 10px 10px 10px rgba(200, 21, 11, 0.315)",
                        border: "#246dff",
                        marginLeft: "1rem",
                      }}
                      type="button"
                      className="btn btn-primary d-flex justify-content-center"
                      onClick={updateUsuario}
                    >
                      {"Guardar"}
                    </button>

                    <button
                      style={{
                        boxShadow:
                          "inset 10px 10px 10px rgba(165, 163, 163, 0.315),10px 10px 10px rgba(240, 103, 83, 0.315)",
                        border: "#246dff",
                        marginLeft: "1rem",
                        backgroundColor: "#10329f",
                      }}
                      type="button"
                      className="btn d-flex justify-content-center text-white"
                      onClick={() => setShowPasswordForm(true)}
                    >
                      {"Cambiar contraseña"}
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="loading">
                <Spinner color={"#0d6efd"} size={100} />
              </div>
            )}
          </div>

          <div className="col-lg-6 col-md-12 col-xs-12 bg-white">
            <button
              className="btn btn-close d-flex justify-content-end"
              style={{
                marginLeft: "auto",
                paddingTop: "7rem",
                marginRight: "2rem",
              }}
              onClick={handleClose}
            />

            <img src="/TuServicio/info.svg" alt="Convocatoria" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VisualizarCuenta;
