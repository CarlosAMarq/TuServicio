import { useContext, useEffect, useState } from "react";
import { ConvocatoriaCard } from "./ConvocatoriaCard";
import axios from 'axios';
import { ModalContext } from "../../context/ModalContext";
import { convocatories } from "../../mocks/convocatory";
import { useUser } from "../../hooks/useUser";


export const CovocatoriasScreen = () => {
    const [conv, setConv] = useState([]);
    const [search, setSearch] = useState("");
    const { onOpenCrearConvocatoria } = useContext(ModalContext);
  
    const {isLogin, user} =useUser()

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

  
   const filterConv = conv.filter(convocatory => convocatory.title.toLowerCase().includes(search.toLowerCase()))


    useEffect(() => {
        setConv(convocatories)
        const obtenerDatos = async () => {
            try {
                const response = await axios.get('https://tu-servicio.onrender.com/convocatory/');
                setConv(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        console.log("effect loaded");
        obtenerDatos();

    }, []);

    const paraAdmin =()=>{
        if(user.usertype === 'admin')
        return(
    <div>
        <button className="btn btn-primary "
                    onClick={onOpenCrearConvocatoria}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                </button>
    </div>)

    }


    return (
        <>
            <div className="container pt-5 mt-5 bg-b">
                <div className="">
                    <div className="container ">
                        <h1 className="text-dark fw-bold display-5 ">Convocatorias</h1>

                    </div>
                </div>
            </div>

            <div className="d-flex container " role="search">
                <input className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={handleSearch} />

                {
                    isLogin()?paraAdmin():(<div/>)
                }



                
            </div>

            <div className="album p-5  container">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                        {filterConv && filterConv.map(convocatory => (
                            <ConvocatoriaCard
                            
                                key={convocatory.id}
                                {...convocatory} />))}
                    </div>
                </div>
            </div>
        </>
    );
};
