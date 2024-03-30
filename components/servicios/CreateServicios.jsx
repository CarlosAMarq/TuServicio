import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useUser } from "../../hooks/useUser";
import Logo from "../Logo";
import "../Form.css";
import { toast } from "react-toastify";
import { useNotification } from "../../hooks/useNotification";
const CreateServicios = () => {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { updateToast } = useNotification();
  const validacion = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");
    if (form.checkValidity()) {
      form.classList.add("was-validated");
      handleSubmit(event);
    } else {
      form.classList.add("was-validated");
    }
  };

  (() => {
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity() && password.length <= 8) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    //no campos vacios
    if (!title || !description) {
      toast("Por favor, completa todos los campos requeridos.");
      return;
    }

    const serviciosData = {
      title: title,
      description: description,
      advicer_id: user.id,
    };
    const noti = toast.loading("Enviando datos...");
    try {
      const response = await axios.post(
        "https://tu-servicio.onrender.com/advice/",
        serviciosData
      );
      if (response.status === 201) {
        console.log("se ha creado el servicios con exito");
        window.location.reload();
        updateToast({
          toast: noti,
          message: `El serivicio ${title} fue creado con éxito`,
          type: "success",
        });
      } else {
        // Manejar errores de la respuesta
        updateToast({
          toast: noti,
          message: `Error al crear el servicio ${title}`,
          type: "error",
        });
        console.error("Error al crear el servicio:", response.status);
      }
    } catch (error) {
      // Manejar errores de la solicitud
      console.error("Error al crear el servicio:", error);
    }
  };

  return (
    <>
      <form className="need-validation rounded-4 ">
        <div
          className="modal modal-sheet position-static d-block rounded-4"
          id="modalSignin"
        >
          <div className="" role="document">
            <div className="modal-content rounded-4 shadow ">
              <div className="modal-header p-5 pb-4 border-bottom-0  rounded-4  border-dark ">
                <Logo />
                <h1
                  className="fw-bold mb-0 fs-2 fst-italic fw-bolder"
                  id="title"
                >
                  Crear servicios
                </h1>
              </div>

              <div className="modal-body p-5 pt-0  mt-5 ">
                <div className="form-floating mb-3">
                  <input
                    type="user"
                    className="form-control rounded-3"
                    value={title}
                    pattern="[A-Za-z]+$"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <label form="floatingInput">Titulo</label>
                  <div className="invalid-feedback">
                    Por favor escriba el Titulo
                  </div>
                  <div className="valid-feedback">Listo</div>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control rounded-3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="texarea"
                    required
                  ></textarea>
                  <label form="texarea">Informacion</label>
                  <div className="invalid-feedback">
                    Por favor escriba una informacion
                  </div>
                  <div className="valid-feedback">Listo</div>
                </div>

                <button
                  className="w-100 btn btn-primary btn-lg mt-5 rounded-3"
                  type="submit"
                  onClick={validacion}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateServicios;
