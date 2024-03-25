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
        Toast('Servicio actualizada con éxito');
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
 const isAsesor = user && user.usertype === "Asesor";

 const paraAsesor=()=>{
  if(user.usertype === "Asesor"){
    return(
      <div>
    <button style={{marginRight: "auto",
                  marginTop:"5rem",
                  marginRight:"2rem"}}
                  
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
    
      <div className='card container border-0'>
        <div id="b" className=" container row about-area section-padding bg-body-tertiary border rounded-5" style={{ margin:"auto",marginTop:"2rem", padding:"3rem"}}>
          
          <div className='blob'></div>
          <div  className=" col-lg-6 col-md-12 col-xs-12 info ">
            <div  className="site-heading ">
              <h2 className="section-title" 
              style={{paddingTop:"5rem",
                      marginLeft:"4rem",
                      fontSize:"4rem",
                      color: "#797979"
                      }}
              >Servicios</h2>
            </div>
                 
            <form className="p-5" >         
                    
              <div className="container " style={{paddingTop:"3rem"}}>
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
            </form>        
          </div>


        <div className="col-lg-6 col-md-12 col-xs-12">
          <button className='btn btn-close d-flex justify-content-end' 
          style={{marginLeft: "auto",
                  paddingTop:"5rem",
                  marginRight:"2rem"}}
                  onClick={handleClose}/>
        
        
        <img src="/serv.svg" alt="Servicio" />

        </div>
        
              


      </div>
    </div>      
        
        
      
    </>
  )
}