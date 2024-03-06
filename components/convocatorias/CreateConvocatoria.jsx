
import { useState } from 'react';
import axios from 'axios';
import Logo from '../Logo';

export const CreateConvocatoria = () => {
    const [name, setName] = useState('');
    const [asesores, setAsesores] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [requisitos, setRequisitos] = useState('');

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

        const convocatoriaData = {
            title: name,
            targets: asesores,
            expiration: fechaVencimiento,
            requirements: requisitos,
        };
        console.log(convocatoriaData);

        try {
            const response = await axios.post('https://tu-servicio.onrender.com/convocatory/', convocatoriaData);
            if (response.status ===  201) {
                console.log('se ha creado la convocatoria con exito')
            

            } else {
            // Manejar errores de la respuesta
            console.error('Error al crear la convocatoria:', response.status);
            }
        } catch (error) {
            // Manejar errores de la solicitud
            console.error('Error al crear la convocatoria:', error);
        }
    };

return(

    <>
        <form className="was-validated ">
        <div className="modal modal-sheet position-static d-block "   >
            <div className="" role="document">
                <div className="modal-content rounded-4 shadow bg-body-secondary">
                    <div className="modal-header p-5 pb-4 border-bottom-0 bg-body-secondary rounded-4  border-dark ">
                        <Logo/>
                        <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder">Crear Convovatoria</h1>
                        
                    </div>
                <div className="modal-body p-5 pt-0 bg-body-secondary mt-5 ">
                    <div className="form-floating mb-3">
                        <input type="user" className="form-control rounded-3" id="floatingInput" placeholder="name" value={name}
                onChange={(e) => setName(e.target.value)}
                pattern="[a-zA-Z]+$"
                required/>
                        <label form="floatingInput">Name</label>
                        <div className="invalid-feedback">
                  Por favor escriba su nombre.
                </div>
                    </div>


                    <div className="form-floating mb-3">
                        <input type="email" className="form-control rounded-3" id="floatingInput " placeholder="asesores" value={asesores}
                onChange={(e) => setAsesores(e.target.value)} required/>
                        <label form="floatingInput">Asesores objetivos</label>
                        <div className="invalid-feedback">
                  Por favor escriba el Ascesor o Asesores
                </div>
                    </div>


                    <div className="form-floating mb-3">
                        <input type="date" className="form-control rounded-3" id="floatingPassword" placeholder="Password" value={fechaVencimiento}
                onChange={(e) => setFechaVencimiento(e.target.value)} required/>
                        <label form="floatingPassword">Fecha de vencimiento</label>
                        <div className="invalid-feedback">
                  Por favor seleccione la fecha
                </div>
                    </div>
                    
                    <div className="form-floating mb-3">
                        <textarea className="form-control" value={requisitos}
                onChange={(e) => setRequisitos(e.target.value)} 
                id ="textarea"
                required></textarea>
                <label form="textarea">Requisitos</label>
                <div className="invalid-feedback">
                  Por favor escriba los requisitos
                </div>

                    </div>
                    <button className="w-100 btn btn-primary btn-lg mt-5" type="submit" onClick={validacion} >
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