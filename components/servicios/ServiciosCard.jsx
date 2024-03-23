import { useUser } from "../../hooks/useUser";
import axios from "axios";

export const ServiciosCard = ({ id, title, description }) => {
  const { user, isLogin } = useUser();

  const eliminarServicio = async () => {
    //confirmacion de eliminacion
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este servicio?');
    if (!confirmacion) {
      return;}
      //eliminacion de ;a base de datos
    try {
       const response = await axios.delete(`https://tu-servicio.onrender.com/advice/${id}`);
       if (response.status === 204) {
         console.log('Servicio eliminado con éxito:', response.data);
         
       } else {
         console.error('Error al eliminar el servicio:', response.data);
         
       }
    } catch (error) {
       console.error('Error al eliminar el servicio:', error); 
    }
   };

   

  //condicional de vista para ascesor
  const paraAsesor = () => {
    if (user.usertype === "asesor")
      return (
        <div className="btn-group pt-5">
          <button
            type="button"
            className="btn btn-sm  btn-danger text-light shadow-sm "
            onClick={eliminarServicio}
            >
            Eliminar
          </button>
          <button
            type="button"
            className="btn btn-sm  btn-success text-light shadow-sm"
          >
            Editar
          </button>
        </div>
      );
  };
  //condicional de vista para usuario
  const paraUsuario = () => {
    if (user.usertype === "user") {
      return(
      <button
            type="button"
            className="btn btn-sm  btn-success text-light shadow-sm"
      >
            Solicitar
      </button>)

    }
  }

  return (
    <>
      <div className="col">
        <div className="service-card card shadow-sm" key="{servicios.id}" style={{cursor:'pointer'}}>
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
          <div className="card-body">
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
