
 import React from 'react'
import { useUser } from '../../hooks/useUser'
import Logo from '../Logo'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "../visual.css"
import {  toast } from 'react-toastify';

 export const VisualizarOfertas = () => {
    const {user, isLogin}=useUser()
    const { id } = useParams();
    const [Ofertas, setOfertas] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const handleClose=()=>{
      navigate("/Ofertas")
    }
   
   useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const response = await axios.get(`https://tu-servicio.onrender.com/offers/${id}`);
        setOfertas(response.data);
      } catch (error) {
        console.error('Error al cargar la Oferta:', error);
      }
    };
  
    fetchOfertas();
    console.log(id)
    }, [id]);
  
  
    //editar el serv
    const updateOfertas = async () => {
      setIsLoading(true);
      try {
        const response = await axios.put(`https://tu-servicio.onrender.com/offers/${id}`, Ofertas);
        if (response.status === 200) {
          setSuccessMessage('Oferta actualizada con éxito');
          console.log("listo")
          // Aquí puedes actualizar el estado local con los datos actualizados si es necesario
        }else throw new Error(response.status)
      } catch (error) {
        console.error('Error al actualizar la Servicio:', error);
        toast("Error al actualizar los datos")
      } finally {
        setIsLoading(false);
      }
   };
  
  //cambiar los valores de los imputs
    const handleChange = (e) => {
    const { name, value } = e.target;
    setOfertas(prevState => ({ ...prevState, [name]: value }));}
  
  
   // Verificar si el usuario es Usuarioistrador
   const isUsuario = user && user.usertype === "Usuario";
  
   const paraUsuario=()=>{
    if(user.usertype === "Usuario"){
      return(
        <div>
      <button style={{boxShadow:"inset 10px 10px 10px rgba(200, 21, 11, 0.315)",
                        border:"#246dff",
                        marginLeft:"1rem",
                      marginTop:"1rem"}}
                    
      type="button"
      className='btn btn-primary d-flex justify-content-center' 
      onClick={updateOfertas} disabled={!isUsuario}
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
      <div id="b" className=" container row about-area section-padding " style={{ margin:"auto",marginTop:"2rem", padding:"3rem"}}>
        
        <div className='blob'></div>
        <div  className=" col-lg-6 col-md-12 col-xs-12 info bg-body-tertiary ">
          <div  className="site-heading ">
            <h2 className="section-title" 
            style={{paddingTop:"5rem",
                    marginLeft:"4rem",
                    fontSize:"4rem",
                    color: "#797979"
                    }}
            >Ofertas</h2>
          </div>
               
          <form className="form p-5" >         
                  
            <div className="container " style={{paddingTop:"3rem"}}>
                  <div className="form-floating mb-3 input-block">
                      <input type="text"
                        className="input form-control rounded-3"
                        id="floatingInput" 
                        placeholder="name"
                        name='title'
                        value={Ofertas.title || ''}
                        onChange={handleChange}
                        disabled={!isUsuario}
                        required/>
                        
                      <label form="floatingInput">Name</label>
                      <div className="invalid-feedback">
                Por favor escriba su nombre.
              </div>
              <div className="valid-feedback">
                Listo
              </div>
            </div>


                 
                  
                  <div className="form-floating mb-5 input-block" style={{margin:"auto"}}>
                      <textarea className="input form-control"
                       value={Ofertas.description||''}
                       name='description'
                      onChange={handleChange} 
                      id ="textarea"
                      required
                      disabled={!isUsuario}
                      ></textarea>
              <label form="textarea">Requisitos</label>
              <div className="invalid-feedback">
                Por favor escriba los requisitos
              </div>
              <div className="valid-feedback">
                Listo
              </div>

              <div className="form-floating mt-3 input-block">
                      <textarea className=" input form-control"
                       value={Ofertas.targets||''}
                       name='targets'
                      onChange={handleChange} 
                      id ="textarea"
                      required
                      disabled={!isUsuario}
                      ></textarea>
              <label form="textarea">Campos</label>
              <div className="invalid-feedback">
                Por favor escriba los campos
              </div>
              <div className="valid-feedback">
                Listo
              </div>

              </div>
                  {
                    isLogin() && paraUsuario()
                  }
              </div>
            </div>
          </form>        
        </div>


      <div className="col-lg-6 col-md-12 col-xs-12">
        <button className='btn btn-close d-flex justify-content-end' 
        style={{marginLeft: "auto",
                paddingTop:"5rem",
                marginRight:"2rem"}}
                onClick={handleClose}/>
      
      
      <img src="/TuServicio/ofertas.svg" alt="Ofertas" />

      </div>
      
            


    </div>
  </div>      
      
      
    

     </>
   )
 }
 

 