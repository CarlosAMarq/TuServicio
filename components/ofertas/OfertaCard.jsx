import { useUser } from "../../hooks/useUser";

export const OfertasCard = ({ title, necesidad }) => {
  const { user, isLogin } = useUser();

  const paraUser = () => {
    if (user.usertype === "user")
      return (
        <div className="btn-group card-social">
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
  const paraAdvicer = () => {
    if (user.usertype === "asesor") return(
      <div className="card-social">
      <button
            type="button"
            className="btn btn-sm  btn-primary text-light shadow-sm"
          >
            Solicitar
          </button>
          </div>
    )
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
          <div className="card-body p-5">
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