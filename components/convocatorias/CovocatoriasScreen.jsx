import { useContext, useEffect, useState } from "react";
import { ConvocatoriaCard } from "./ConvocatoriaCard";
import axios from 'axios';
import { ModalContext } from "../../context/ModalContext";
import { convocatories } from "../../mocks/convocatory";



export const CovocatoriasScreen = () => {
    const [conv, setConv] = useState([]);
    const [search, setSearch] = useState();
    const { onOpenCrearConvocatoria } = useContext(ModalContext);
    const [filterConv, setFilterConv] = useState([]);


    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        console.log(search);
        setFilterConv(
            conv.filter(convocatory => convocatory.title.toLowerCase().includes(search.toLowerCase()))
         );

    }, [search]);


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
        // obtenerDatos();

    }, []);


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




                <button className="btn btn-primary "
                    onClick={onOpenCrearConvocatoria}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                </button>
            </div>

            <div className="album p-5 bg-body-tertiary container">
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
