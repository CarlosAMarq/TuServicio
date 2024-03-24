import React from 'react'
import { useUser } from '../../hooks/useUser'
import Logo from '../Logo'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoIosClose } from "react-icons/io";

export const VisualizarServicio = () => {
  const {user, isLogin}=useUser()
  const { id } = useParams();
  const [Servicio, setServicio] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const handleClose=()=>{
    navigate("/servicios")
  }
 
 useEffect(() => {
  const fetchServicio = async () => {
    try {
      const response = await axios.get(`https://tu-servicio.onrender.com/advice/${id}`);
      setServicio(response.data);
    } catch (error) {
      console.error('Error al cargar la Servicio:', error);
    }
  };

  fetchServicio();
  }, [id]);


  //editar el serv
  const updateServicio = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(`https://tu-servicio.onrender.com/advice/${id}`, Servicio);
      if (response.status === 200) {
        setSuccessMessage('Servicio actualizada con éxito');
        console.log("listo")
        // Aquí puedes actualizar el estado local con los datos actualizados si es necesario
      }
    } catch (error) {
      console.error('Error al actualizar la Servicio:', error);
    } finally {
      setIsLoading(false);
    }
 };

//cambiar los valores de los imputs
  const handleChange = (e) => {
  const { name, value } = e.target;
  setServicio(prevState => ({ ...prevState, [name]: value }));}


 // Verificar si el usuario es Asesoristrador
 const isAsesor = user && user.usertype === "asesor";

 const paraAsesor=()=>{
  if(user.usertype === "asesor"){
    return(
      <div>
    <button
    type="button"
    className='btn btn-primary d-flex justify-content-center' 
    onClick={updateServicio} disabled={!isAsesor}
    >
    {isLoading ? 'Guardando...' : 'Guardar'}
    </button>
    {successMessage && <p>{successMessage}</p>}
    </div>
    )
  }
 }
  return (
    <>
    
      <form className=" container " style={{padding:"6rem" }}>
        <div className="modal modal-sheet position-static d-block "   >
            <div className="" role="document">
                <div className="modal-content rounded-4 shadow ">
                 
                <button onClick={handleClose} className="cmodal-close-button">
                  <IoIosClose size={30} />
                </button>
                    <div className="modal-header p-5 pb-4 border-bottom-0  rounded-4  border-dark ">
                        <Logo/>
                        <h1 className=" title fw-bold mb-0 fs-2 fst-italic fw-bolder">Servicio</h1>
                        
                    </div>
                <div className="modal-body p-5 pt-0  mt-5 ">
                    <div className="form-floating mb-3">
                        <input type="text"
                          className="form-control rounded-3"
                          id="floatingInput" 
                          placeholder="name"
                          name='title'
                          value={Servicio.title || ''}
                          onChange={handleChange}
                          disabled={!isAsesor}
                          required/>
                          
                        <label form="floatingInput">Name</label>
                        <div className="invalid-feedback">
                  Por favor escriba su nombre.
                </div>
                <div className="valid-feedback">
                  Listo
                </div>
                    </div>

   
                    
                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                         value={Servicio.description||''}
                         name='description'
                        onChange={handleChange} 
                        id ="textarea"
                        required
                        disabled={!isAsesor}
                        ></textarea>
                <label form="textarea">Requisitos</label>
                <div className="invalid-feedback">
                  Por favor escriba los requisitos
                </div>
                <div className="valid-feedback">
                  Listo
                </div>

                    </div>
                    {
                      isLogin() && paraAsesor()
                    }
                    
                </div>
                </div>
            </div>
            </div>
        </form>
        
      
    </>
  )
}