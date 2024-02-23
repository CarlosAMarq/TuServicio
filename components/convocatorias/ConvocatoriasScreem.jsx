
import { useEffect, useState } from "react";
import { ConvocatoriaCard } from "./ConvocatoriaCard";
import { useNavigate } from "react-router-dom"

import axios from 'axios';



export const CovocatoriasScreen = () => {
    

    const navigate = useNavigate();
    const HandleCreateConvocatoria = () => {
        navigate("/convocatoria/createconvoactoria", { replace: true });
    }


    const [conv, setConv] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await axios.get('https://tu-servicio.onrender.com/convocatory');
                setConv(response.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        console.log("effect loaded")
        obtenerDatos();
    }, []);


    return (
        <> 
            <div className="container p-5 mt-5 bg-b">
                <div className="">
                    <div className="container ">
                        <h1 className="text-dark fw-bold display-5 text-center">Convocatorias</h1>
                        <p className="lead text-body-secondary fst-italic text-center">
                            Aqui podra interactuar con las covocatorias.
                        </p>

                    </div>
                </div>
            </div>

            <div className="d-flex " role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                <button className="btn btn-outline-secondary rounded-start" type="submit">
                    Search</button>


                <button className="btn btn-primary "
                    onClick={HandleCreateConvocatoria}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                </button>
            </div>
            
            <div className="album p-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                        {

                            conv && conv.map(convocatory => (
                                <ConvocatoriaCard
                                    key={convocatory.id}
                                    {...convocatory}
                                />))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}