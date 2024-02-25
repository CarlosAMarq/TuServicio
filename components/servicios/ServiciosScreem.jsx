
import { useEffect, useState } from "react";
import { ServiciosCard } from "./ServiciosCard"
import  axios  from "axios";
import {IoMdAdd} from "react-icons/io"
import {useNavigate} from "react-router-dom"

export const ServiciosScreen = () =>{
    
    
        const [datos, setDatos] = useState([]);
      
        useEffect(() => {
          const obtenerDatos = async () => {
            try {
              const response = await axios.get('https://tu-servicio.onrender.com/advice');
              setDatos(response.data);
            } catch (error) {
              console.error('Error al obtener los datos:', error);
            }
          };
      
          obtenerDatos();
        }, []);
      
        console.log('cargando servicios')
      



    return(
        <>
        <div className="container ">
        <div className="container p-5 mt-5 bg-b     ">
            <div className="">
                <div className="container ">
                    <h1 className="text-dark fw-bold display-5 text-center">Servicios</h1>
                    <p className="lead text-body-secondary fst-italic text-center">
                    Aqui podra interactuar con las servicios.
                    </p>
                    
                </div>
            </div>
        </div>

        

        

        <div className="d-flex container" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-dark" type="submit">Search</button>
                <button className="btn btn-primary   "  >
                 <IoMdAdd/>
            </button>
        </div>


    <div className="album pt-5 bg-body-tertiary">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">

                
                {
                    datos && datos.map(advice=>(
                    <ServiciosCard
                        key={advice.name}
                        {...advice}
                    />))
                
                
                }
                

            </div>
        </div>
    </div>
    </div>
        
</>
    )
}