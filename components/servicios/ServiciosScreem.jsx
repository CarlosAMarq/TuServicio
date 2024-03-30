import { useContext, useEffect, useState } from "react";
import { ServiciosCard } from "./ServiciosCard";
import Spinner from "../../components/icon/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useUser } from "../../hooks/useUser";
import { ModalContext } from "../../context/ModalContext";
import { services } from "../../mocks/services";
import "./services.css";
import { toast } from "react-toastify";
import Loading from "../Loading";
export const ServiciosScreen = () => {
  const { user, isLogin, logout } = useUser();
  const [datos, setDatos] = useState([]);
  const [serch, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { onOpenCrearServicios } = useContext(ModalContext);

  const obtenerDatos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://tu-servicio.onrender.com/advice/"
      );
      setLoading(false);

      return response.data;
    } catch (error) {
      setLoading(false);

      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    const loadServices = async () => {
      const data = await obtenerDatos();
      if (isLogin() && user.usertype == "Asesor")
        setDatos(data.filter((serv) => serv.advicer_id == user.id));
      else setDatos(data);
    };

    loadServices();
  }, [user]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterServ = datos?.filter((serv) =>
    serv.title.toLowerCase().includes(serch.toLowerCase())
  );

  const paraAsesor = () => {
    if (user.usertype === "Asesor")
      return (
        <>
          <button
            className="btn btn-primary d-flex"
            onClick={onOpenCrearServicios}
          >
            +
          </button>
        </>
      );
  };

  return (
    <>
      <div className="container ">
        <div className="container pt-5 mt-5 bg-b     ">
          <div className="">
            <div className="container ">
              <h1 className="text-dark fw-bold display-5 ">
                {user?.usertype == "advicer"
                  ? "Mis Servicios"
                  : "Buscar Servicio"}
              </h1>
            </div>
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="d-flex container" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={serch}
                onChange={handleSearch}
              />

              {isLogin() ? paraAsesor() : <div />}
            </div>

            <div className="album pt-5 ">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                  {filterServ &&
                    filterServ.map((advice) => (
                      <ServiciosCard key={advice.id} {...advice} setDatos={setDatos}/>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
