
import { useEffect, useState } from "react";
import { ServiciosCard } from "./ServiciosCard"
import  axios  from "axios";
import {useNavigate} from "react-router-dom"
import {IoMdAddCircleOutline} from "react-icons/io"
export const ServiciosScreen = () =>{
    const navigate=useNavigate()
    
    const [datos, setDatos] = useState([]);
    const [serch,setSearch] = useState('');  
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
      
        console.log('cargando servicios');

        const handleSearch = (event) => {
            setSearch(event.target.value);}
    
        const filterServ = datos.filter(serv=>
            serv.title.includes(serch))



    return(
        <>
        <div className="container ">
        <div className="container pt-5 mt-5 bg-b     ">
            <div className="">
                <div className="container ">
                    <h1 className="text-dark fw-bold display-5 ">Servicios</h1>  
                </div>
            </div>
        </div>

        

        

        <div className="d-flex container" role="search">
                <input className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                value={serch}
                onChange={handleSearch}/>
                
                
                <button className="btn btn-primary d-flex"
                
                >
                    <IoMdAddCircleOutline/>
                    
                </button>
        </div>


    <div className="album pt-5 bg-body-tertiary">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">

                
                {
                    filterServ && filterServ.map(advice=>(
                    <ServiciosCard
                        key={advice.id}
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