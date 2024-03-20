import { useUser } from "../../hooks/useUser";

export const ServiciosCard = ({ title, description }) => {
  const { user, isLogin } = useUser();

  const paraUser = () => {
    if (user.userType === "user")
      return (
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-sm  btn-danger text-light shadow-sm "
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

            {isLogin() && paraUser()}
          </div>
        </div>
      </div>
    </>
  );
};