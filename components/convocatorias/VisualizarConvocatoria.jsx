import React from 'react'
import { useUser } from '../../hooks/useUser'
import Logo from '../Logo'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export const VisualizarConvocatoria = () => {
  const {user, isLogin}=useUser()
  const { id } = useParams();
  const [convocatoria, setConvocatoria] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

 
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

  return (
    <>
    
      <form className=" container" style={{padding:"6rem" }}>
        <div className="modal modal-sheet position-static d-block "   >
            <div className="" role="document">
                <div className="modal-content rounded-4 shadow ">
                  
                    <div className="modal-header p-5 pb-4 border-bottom-0  rounded-4  border-dark ">
                        <Logo/>
                        <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder">Convovatoria</h1>
                        
                    </div>
                <div className="modal-body p-5 pt-0  mt-5 ">
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
                    <button
                     type="button"
                    className='btn btn-primary d-flex justify-content-center' 
                    onClick={updateConvocatoria} disabled={!isAdmin}
                    >
                      {isLoading ? 'Guardando...' : 'Guardar'}
                    </button>
        {successMessage && <p>{successMessage}</p>}
                </div>
                </div>
            </div>
            </div>
        </form>
        
      
    </>
  )
}


