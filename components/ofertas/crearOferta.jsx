import { useState } from 'react';
import axios from 'axios';
import { useUser } from "../../hooks/useUser";
import {  toast } from 'react-toastify';

 export const CreateOfertas = () => {
    const {user} = useUser()
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [targents, setTargets] = useState("")
    const validacion = (event) => {
        event.preventDefault();
        const form = event.target.closest("form");
        if(form.checkValidity()) {
          form.classList.add("was-validated");
          handleSubmit(event)
        }
          else {
            form.classList.add("was-validated");
        }
        
        
     };
      
    (() => {
  
        'use strict'
       const forms = document.querySelectorAll('.needs-validation')
      
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()&&password.length <= 8) {
              event.preventDefault()
              event.stopPropagation()
            }
            
      
            form.classList.add('was-validated')
          }, false)
        })
      })()



  

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Asumiendo que tienes campos de título y descripción que son requeridos
        if (!title || !description || !targents) {
          toast('Por favor, completa todos los campos requeridos.');
          return;
        }
        //validar que el titulo empece con mayuscula
        const titleRegex = /^[A-Z]/;
        if (!titleRegex.test(title)) {
            toast('El titulo debe comenzar con una letra mayúscula.');
            return;
        }


        

        const OfertasData = {
            title:title,
            description:description,
            targets:targents,
            id_user: user.id
        };
        console.log(OfertasData);

        try {
            const response = await axios.post('https://tu-servicio.onrender.com/offers/', OfertasData);
            if (response.status ===  201) {
                toast('se ha creado el Ofertas con exito')
            

            } else {throw new Error(response.status)
            // Manejar errores de la respuesta
            toast('Error al crear el oferta:', response.status);
            }
        } catch (error) {
            // Manejar errores de la solicitud
            toast('Error al crear el servicio:', error);
        }
    };

  return (
    <>
    <form className="need-validation ">
        <div className="modal modal-sheet position-static d-block rounded-4"   id="modalSignin">
            <div className="" role="document">
                
                <div className="modal-content rounded shadow ">
                <div className="modal-header p-5 pb-4 border-bottom-0  rounded-3  border-dark ">
                    <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder p-5">Crear Ofertas</h1>
                    
                </div>
                
                
                <div className="modal-body p-5 pt-0   ">
                    <div className="form-floating mb-3">
                        <input type="user" className="form-control rounded-3"
                           value={title}
                           pattern="[A-Za-z0-9 ]+$"
                onChange={(e) => setTitle(e.target.value)} required/>
                        <label form="floatingInput">Titulo</label>
                        <div className="invalid-feedback">
                  Por favor escriba el Titulo
                </div>
                <div className="valid-feedback">
                    Listo
                    </div>
                    </div>

                    <div className="form-floating mb-3">
                    <textarea className="form-control" value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                        id ="texarea2"
                        required
                        >
                    </textarea>
                        <label form="texarea">Necesidad</label>
                        <div className="invalid-feedback">
                    Por favor escriba su necesida
                    </div>
                    <div className="valid-feedback">
                    Listo
                    </div>
                    </div>


                    <div className="form-floating mb-3">
                    <textarea className="form-control" value={targents}
                        onChange={(e) => setTargets(e.target.value)} 
                        id ="texarea2"
                        required
                        >
                    </textarea>
                        <label form="texarea">Campos a trabajar</label>
                        <div className="invalid-feedback">
                    Por favor escriba su campos
                    </div>
                    <div className="valid-feedback">
                    Listo
                    </div>
                    </div>
                    
                    
                    
                    <button className="w-100 btn btn-primary btn-lg mt-5" type="submit"
                     onClick={validacion} >
                        Create
                    </button>                    
                </div>
                </div>
            </div>
            </div>
            </form>   
        </>
  )
}

