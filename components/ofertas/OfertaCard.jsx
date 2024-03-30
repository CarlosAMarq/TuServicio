import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDialog } from "../../hooks/useDisclosoure";
import { toast } from "react-toastify";
import { useState } from "react";

export const OfertasCard = ({ id, title, necesidad, setDatos, datos }) => {
  const { user, isLogin } = useUser();
  const { onOpen } = useDialog();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleNavigate = (id) => {
    if (isLoading) return;
    navigate(`/TuServicio/visualizarOfertas/${id}`);
  };
  const paraUser = () => {
    if (user.usertype === "Usuario" || user.usertype === "admin")
      return (
        <div className="btn-group card-social">
          <button
            type="button"
            className="btn btn-sm  btn-danger text-light shadow-sm "
            onClick={handleDeleteButton}
            disabled={isLoading}
          >
            Eliminar
          </button>
        </div>
      );
  };
  const paraAdvicer = () => {
    if (user.usertype === "Asesor")
      return (
        <div className="btn-group card-social">
          <button
            type="button"
            className="btn btn-sm  btn-primary text-light shadow-sm"
          >
            Solicitar
          </button>
        </div>
      );
  };

  const eliminarOfertas = async () => {
    // e.stopPropagation();
    //confirmacion de eliminacion
    // const confirmacion = window.confirm(
    //   "¿Estás seguro de que deseas eliminar este Ofertas?"
    // );
    // if (!confirmacion) {
    //   return;
    // }
    //eliminacion de ;a base de datos
    const notification = toast.loading("Eliminando...");
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `https://tu-servicio.onrender.com/offers/${id}`
      );
      if (response.status === 204) {
        toast.update(notification, {
          render: `Oferta ${title} eliminado con éxito`,
          closeOnClick: true,
          isLoading: false,
          autoClose: true,
          type: "success",
        });
        setDatos((prev) => prev.filter(o => o.id != id));
        // console.log("Oferta eliminado con éxito:", response.data);
      } else {
        // console.error("Error al eliminar la oferta:", response.data);
        toast.update(notification, {
          render: `Ocurrio un error eliminado  ${title}`,
          closeOnClick: true,
          autoClose: true,
          isLoading: false,
          type: "error",
        });
      }
    } catch (error) {
      toast.update(notification, {
        render: `Ocurrio un error eliminado  ${title}`,
        closeOnClick: true,
        isLoading: false,
        type: "error",
      });
    }
    setIsLoading(false);
  };
  
  console.log(datos.filter(o => o.id != id))

  const handleDeleteButton = (e) => {
    e.stopPropagation();
    onOpen({
      title: `Eliminar ${title}`,
      onConfirm: eliminarOfertas,
      type: "delete",
      description: "Estas seguro que desea eliminar la oferta " + title,
    });
  };

  return (
    <>
      <div className="col" onClick={() => handleNavigate(id)}>
        <div
          className="service-card card shadow-sm"
          key="{ofertas.id}"
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
              <p className="card-text">{necesidad}</p>
            </div>

            {isLogin() && paraUser()}
            {isLogin() && paraAdvicer()}
          </div>
        </div>
      </div>
    </>
  );
};
