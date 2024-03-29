import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/useUser";
import { ModalContext } from "../../context/ModalContext";
import { ofertas } from "../../mocks/ofertas";
import { OfertasCard } from "./OfertaCard";


export const OfertasScreem = () => {
  const navigate = useNavigate();
  const handlecreate = () => {
    navigate("/createService");
  };
  const { user, isLogin, logout } = useUser();
  const [datos, setDatos] = useState([]);
  const [serch, setSearch] = useState("");
  const { onOpenCrearOfertas } = useContext(ModalContext);
  //obtener datod del backend
  useEffect(() => {
    
    const obtenerDatos = async () => {
      try {
        const response = await axios.get(
          "https://tu-servicio.onrender.com/offers/"
        );
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    // Descomentar cuando se desee traer los datos del  backend
     obtenerDatos();
  }, []);

  useEffect(() => {
    setDatos(datos.filter((s) => user == null ||user.usertype != 'Usuario' ||  user.id == s.user_id));
  }, [user]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterOfertas = datos.filter((ofer) => ofer.title.toLowerCase().includes(serch.toLowerCase()));

  const paraUser = () => {
    if (user.usertype === "Usuario")
      return (
        <>
          <button
            className="btn btn-primary d-flex"
            onClick={onOpenCrearOfertas}
          >
            +
          </button>
        </>
      );
  };

  return (
    <>
      <div className="container ">
        <div className="container mt-5 pt-5  bg-b     ">
          <div className="">
            <div className="container ">
              <h1 className="text-dark fw-bold display-5 ">
                {user?.usertype == "Usuario"
                  ? "Mis Ofertas"
                  : "Buscar Ofertas"}
              </h1>
            </div>
          </div>
        </div>

        <div className="d-flex container" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={serch}
            onChange={handleSearch}
          />

          {isLogin() ? (
            paraUser()
          ) : (
            <div/>
          )}
        </div>

        <div className="album">
          <div className="">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
              {
                filterOfertas &&
                 filterOfertas.map(ofer=>(<OfertasCard
                 key={ofer.id}
                 {...ofer}/>))


              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};