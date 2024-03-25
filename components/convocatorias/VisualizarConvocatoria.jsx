import React from 'react'
import { useUser } from '../../hooks/useUser'
import Logo from '../Logo'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const VisualizarConvocatoria = () => {
  const {user, isLogin}=useUser()
  const { id } = useParams();
  const [convocatoria, setConvocatoria] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const handleClose=()=>{
    navigate("/convocatoria")
  }
 
 useEffect(() => {
  const fetchConvocatoria = async () => {
    try {
      const response = await axios.get(`https://tu-servicio.onrender.com/convocatory/${id}`);
      setConvocatoria(response.data);
    } catch (error) {
      console.error('Error al cargar la convocatoria:', error);
    }
  };

  fetchConvocatoria();
  }, [id]);

  const updateConvocatoria = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(`https://tu-servicio.onrender.com/convocatory/${id}`, convocatoria);
      if (response.status === 200) {
        setSuccessMessage('Convocatoria actualizada con éxito');
        // Aquí puedes actualizar el estado local con los datos actualizados si es necesario
      }
    } catch (error) {
      console.error('Error al actualizar la convocatoria:', error);
    } finally {
      setIsLoading(false);
    }
 };

//cambiar los valores de los imputs
  const handleChange = (e) => {
  const { name, value } = e.target;
  setConvocatoria(prevState => ({ ...prevState, [name]: value }));}


 // Verificar si el usuario es administrador
 const isAdmin = user && user.usertype === "admin";

 const paraAdmin=()=>{
  if(user.usertype === "admin"){
    return(
      <div>
    <button
    type="button"
    className='btn btn-primary d-flex justify-content-center' 
    onClick={updateConvocatoria} disabled={!isAdmin}
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
        <div id="b" className=" container row about-area section-padding bg-body-tertiary border rounded-5" style={{ margin:"auto",marginTop:"8rem"}}>
          
          <div className='blob'></div>
          <div  className=" col-lg-6 col-md-12 col-xs-12 info ">
            <div  className="site-heading ">
              <h2 className="section-title" 
              style={{paddingTop:"5rem",
              marginLeft:"4rem",
              fontSize:"4rem",
              color: "#797979"
              }}
              >Convocatorias</h2>
            </div>
                 
            <form className="p-5">         
                    
              <div className="container ">
                    <div className="form-floating mb-3">
                        <input type="text"
                          className="form-control rounded-3"
                          id="floatingInput" 
                          placeholder="name"
                          name='title'
                          value={convocatoria.title || ''}
                          onChange={handleChange}
                          disabled={!isAdmin}
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
                        <input type="email"
                         className="form-control rounded-3"
                          id="floatingemail "
                          placeholder="asesores"
                          name='targets'
                          value={convocatoria.targets||''}
                          onChange={handleChange}
                          disabled={!isAdmin}
                          required/>
                        <label form="floatingemail">Asesores Objetivos</label>
                        <div className="invalid-feedback">
                  Por favor escriba el Ascesor o Asesores objetivos.
                </div>
                <div className="valid-feedback">
                  Listo
                </div>
                    </div>


                    <div className="form-floating mb-3">
                        <input type="date"
                         className="form-control rounded-3"
                          id="floatingPassword"
                          placeholder="Password"
                          name='expiration'
                          value={convocatoria.expiration||''}
                          onChange={handleChange}
                          disabled={!isAdmin}
                          required/>
                        <label form="floatingPassword">Fecha</label>
                        <div className="invalid-feedback">
                  Por favor seleccione la fecha
                </div>
                <div className="valid-feedback">
                  Listo
                </div>
                    </div>
                    
                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                         value={convocatoria.requirements||''}
                         name='requirements'
                        onChange={handleChange} 
                        id ="textarea"
                        required
                        disabled={!isAdmin}
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
                      isLogin() && paraAdmin()
                    }
                </div>
            </form>        
          </div>


        <div className="col-lg-6 col-md-12 col-xs-12">
          <button className='btn btn-close d-flex justify-content-end' 
          style={{marginLeft: "auto",
                  paddingTop:"7rem",
                  marginRight:"2rem"}}
                  onClick={handleClose}/>
        
        
        <img src="/conv.svg" alt="Convocatoria" />

        </div>
        
              


      </div>
    </div>      
        
        
      
    </>
  )
}


