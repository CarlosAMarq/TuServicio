import { useUser } from "../../hooks/useUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../card.css";
import { useDialog } from "../../hooks/useDisclosoure";
import { toast } from "react-toastify";
import { useNotification } from "../../hooks/useNotification";
import { useState } from "react";
export const ServiciosCard = ({ id, title, description, setDatos }) => {
  const { user, isLogin } = useUser();
  const { onOpen } = useDialog();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { updateToast } = useNotification();
  const handleNavigate = (id) => {
    if (loading) return;
    navigate(`/TuServicio/visualizarServicio/${id}`);
  };

  //eliminar servicio
  const eliminarServicio = async (e) => {
    //confirmacion de eliminacion
    const noti = toast.loading("Eliminando...");
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://tu-servicio.onrender.com/advice/${id}`
      );
      if (response.status === 204) {
        console.log("Servicio eliminado con éxito:", response.data);
        setDatos((prev) => prev.filter((item) => item.id !== id));
        updateToast({
          toast: noti,
          message: `Servicio ${title} eliminado con éxito`,
          type: "success",
        });
      } else {
        updateToast({
          toast: noti,
          message: `Ha ocurrido un error desconocido al eliminar`,
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error al eliminar el servicio:", error);
    }

    setLoading(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();

    onOpen({
      title: `Elminar ${title}`,
      description: `¿Seguro que desea eliminar ${title}`,
      type: "delete",
      onConfirm: eliminarServicio,
    });
  };

  //condicional de vista para ascesor
  const paraAsesor = () => {
    if (user.usertype === "Asesor" || user.usertype === "admin")
      return (
        <div className="btn-group card-social">
          <button
            type="button"
            className="btn btn-sm  btn-danger text-light shadow-sm "
            onClick={handleDelete}
            disabled={loading}
          >
            Eliminar
          </button>
        </div>
      );
  };
  //condicional de vista para usuario
  const paraUsuario = () => {
    if (user.usertype === "Usuario") {
      return (
        <div className="btn-group card-social">
          <button
            type="button"
            className="btn btn-sm  btn-success text-light shadow-sm"
          >
            Solicitar
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <div
        className="col card-social__item  "
        onClick={() => handleNavigate(id)}
      >
        <div
          className="service-card card shadow-sm bg"
          key="{servicios.id}"
          style={{ cursor: "pointer" }}
        >
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="280"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <defs>
              <pattern id="image-pattern" x="0" y="0" width="1" height="1">
                <image
                  href="https://th.bing.com/th/id/OIP.ZdziyvJZTRCkta6kFx0xBQHaD4?rs=1&pid=ImgDetMain"
                  width="100%"
                  height="100%"
                />
              </pattern>
            </defs>
            <rect width="110%" height="100%" fill="url(#image-pattern)" />
          </svg>
          <div
            className="card-body p-5"
            style={{ width: "100%", height: "100%" }}
          >
            <div className="card-info">
              <h4 className="card-text ">{title}</h4>
              <p className="card-text">{description}</p>
            </div>
            {isLogin() && paraAsesor()}
            {isLogin() && paraUsuario()}
          </div>
        </div>
      </div>
    </>
  );
};
