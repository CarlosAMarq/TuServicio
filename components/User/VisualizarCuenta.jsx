import React from 'react'
import { useUser } from '../../hooks/useUser'
import Logo from '../Logo'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import "../visual.css"

const VisualizarCuenta = () => {
    const {user, isLogin}=useUser()
    const [usuario, setUsuario] = useState(user)
    const [showPasswordForm, setShowPasswordForm] = useState(false);


    const navigate = useNavigate()
    const handleClose=()=>{
        navigate("/")
      }
      //editar el user
    const updateUsuario = async () => {
        setIsLoading(true);
        try {
          const response = await axios.put(`https://tu-servicio.onrender.com/offers/${id}`, usuario);
          if (response.status === 200) {
            toast('usuario actualizado con éxito');
            console.log("listo")
            // Aquí puedes actualizar el estado local con los datos actualizados si es necesario
          }else throw new Error(response.status)
        } catch (error) {
          toast('Error al actualizar la Servicio:', error);
        } finally {
          setIsLoading(false);
        }
     };


    //cambiar los valores de los imputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prevState => ({ ...prevState, [name]: value }));}


//cambiar contrasena
const SetPassword = ()=>{

    return(
        <div className="form-floating mb-3 input-block">
                        <input type="text"
                         className="input form-control rounded-3"
                          id="floatingPassword"
                          placeholder="Password"
                          name='expiration'
                          value={"user.password"||''}
                          onChange={handleChange}
                          
                          required/>
                        <label form="floatingPassword">Contrasena</label>
                        <div className="invalid-feedback">
                  Por favor seleccione la fecha
                </div>
                <div className="valid-feedback">
                  Listo
                </div>
                    </div>
    )
}

  return (
    <>
      
      <div className='card container border-0'>
        <div id="b" className=" container row about-area section-padding  " style={{ margin:"auto",marginTop:"9rem"}}>
          
          <div  className=" col-lg-6 col-md-12 col-xs-12 info bg-body-tertiary ">

            <div  className="site-heading ">
            <img src="/perfil.svg" alt="Convocatoria" 
            style={{marginTop:"3rem",
                    marginLeft:"13rem"}} />
              <h2 className="section-title" 
              style={{
              marginLeft:"12rem",
              fontSize:"4rem",
              color: "#797979"
              }}
              >Usuario</h2>
            </div>
                 
            <form className="form p-5 ">         
                    
              <div className="container ">
                    <div className="form-floating mb-3 input-block">
                        <input type="text"
                          className="input form-control rounded-3"
                          id="floatingInput" 
                          placeholder="name"
                          name='name'
                          
                          onChange={handleChange}
                          required/>
                          
                        <label form="floatingInput">Nombre</label>
                        <div className="invalid-feedback">
                  Por favor escriba su nombre.
                </div>
                <div className="valid-feedback">
                  Listo
                </div>
                    </div>


                    <div className="form-floating mb-3 input-block">
                            <input type=" email"
                            className="input form-control rounded-3"
                            id="floatingemail "
                            placeholder="asesores"
                            value={"usuario.email"||''}
                            required
                            />
                            <label form="floatingemail">email</label>
                            <div className="invalid-feedback">
                                Por favor escriba su direccion email.
                            </div>
                            <div className="valid-feedback">
                                Listo
                            </div>
                        </div>

                        
                        {showPasswordForm && <SetPassword/>}
                        

                    <div className=' d-flex '>
                        <button
                        style={{boxShadow:"inset 10px 10px 10px rgba(200, 21, 11, 0.315)",
                        border:"#246dff",
                        marginLeft:"1rem"}}
                        type="button"
                        className='btn btn-primary d-flex justify-content-center' 
                        onClick={updateUsuario}
                        >
                        {'Guardar'}
                        </button>

                        <button
                        style={{boxShadow:"inset 10px 10px 10px rgba(165, 163, 163, 0.315),10px 10px 10px rgba(240, 103, 83, 0.315)",
                                border:"#246dff",
                                marginLeft:"1rem",
                                backgroundColor:"#10329f"}}
                        type="button"
                        className='btn d-flex justify-content-center text-white' 
                        onClick={()=>setShowPasswordForm(true)}
                        >
                        {'Cambiar contraseña'}
                        </button>

                    </div>
                </div>
            </form>        
          </div>


        <div className="col-lg-6 col-md-12 col-xs-12 bg-white">
          <button className='btn btn-close d-flex justify-content-end' 
          style={{marginLeft: "auto",
                  paddingTop:"7rem",
                  marginRight:"2rem"}}
                  onClick={handleClose}/>
        
        
        <img src="/info.svg" alt="Convocatoria" />

        </div>
        
              


      </div>
    </div>      
        

      
    </>
  )
}

export default VisualizarCuenta
