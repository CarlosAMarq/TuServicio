
import { useState } from 'react';
import axios from 'axios';
import Logo from '../Logo';
import {  toast } from 'react-toastify';


export const CreateConvocatoria = () => {
    const [name, setName] = useState('');
    const [asesores, setAsesores] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [requisitos, setRequisitos] = useState('');

    //variables de validaviones
    const [campV,SetCampV]= useState(false)
    const [existAsesores, setExistAsesores] = useState(false);
    const [fecha, setFecha] = useState(false);

    


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


      const checkAsesorExists = async (asesores) => {//pedido al back de los usuarios
        try {
            const response = await axios.get(`https://tu-servicio.onrender.com/appuser/`);
            const p=response.data.filter(user=>user.username==asesores)//si existe el asesor
            console.log(p)
            return p.length>0;
        
          } catch (error) {
            return false;
        }
        
        
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        // Verifica si los campos requeridos están llenos
        if (!name || !asesores || !fechaVencimiento || !requisitos) {
          SetCampV(true)
          toast('Por favor, completa todos los campos requeridos.');
          return;
        }else SetCampV(false)

        console.log(asesores)
        
      //validacion de si existe el ascesor
        const asesorExists = await checkAsesorExists(asesores);
        if (!asesorExists) {
          setExistAsesores(true);
            
        }else setExistAsesores(false)

        // Validar que la fecha de vencimiento no sea anterior a la fecha actual
        const fechaActual = new Date();
        const fechaVencimientoInput = new Date(fechaVencimiento);
        if (fechaVencimientoInput < fechaActual) {
          setFecha(true)  
        }else setFecha(false)

        //parada de las validaviones
        if(asesorExists || fecha){
          return;
        }
        


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
              toast("Creada")
                console.log('se ha creado la convocatoria con exito')
            

            } else {
            // Manejar errores de la respuesta
            throw  new Error(response.status)
            
            console.error('Error al crear la convocatoria:', response.status);
            }
        } catch (error) {
            // Manejar errores de la solicitud
            toast("Error al crear la convocatoria")
            console.error('Error al crear la convocatoria:', error);
        }
    };

return(

    <>
        <form className="need-validation ">
        <div className="modal modal-sheet position-static d-block "   >
            <div className="" role="document">
                <div className="modal-content rounded-4 shadow ">
                    <div className="modal-header p-5 pb-4 border-bottom-0  rounded-4  border-dark ">
                        <Logo/>
                        <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder m-5">Crear Convovatoria</h1>
                        
                    </div>
                <div className="modal-body p-5 pt-0  mt-5 ">
                    <div className="form-floating mb-3">
                        <input type="user" className="form-control rounded-3" id="floatingInput" placeholder="name" value={name}
                onChange={(e) => setName(e.target.value)}
                
                required/>
                        <label form="floatingInput">Name</label>
                       {campV && <div className="invalid-feedback">
                  Por favor escriba su nombre.
                </div>}
                <div className="valid-feedback">
                  Listo
                </div>
                    </div>


                    <div className="form-floating mb-3">
                        <input type="text" className="form-control rounded-3" id="floatingInput " placeholder="asesores" value={asesores}
                onChange={(e) => setAsesores(e.target.value)} required/>
                        <label form="floatingInput">Asesores objetivos</label>
                        {campV && <div className="invalid-feedback">
                  Por favor escriba el Ascesor o Asesores
                </div>}
                { existAsesores && <div className="invalid-feedback">El asesor seleccionado no existe en la base de datos.</div>}
                <div className="valid-feedback">
                  Listo
                </div>
                    </div>


                    <div className="form-floating mb-3">
                        <input type="date" className="form-control rounded-3" id="floatingPassword" placeholder="Password" value={fechaVencimiento}
                onChange={(e) => setFechaVencimiento(e.target.value)} required/>
                        <label form="floatingPassword">Fecha de vencimiento</label>
                        {campV && <div className="invalid-feedback">
                  Por favor seleccione la fecha
                </div>}
                {fecha && <div className="invalid-feedback">La fecha de vencimiento no puede ser anterior a la fecha actual.</div>}
                <div className="valid-feedback">
                  Listo
                </div>
                    </div>
                    
                    <div className="form-floating mb-3">
                        <textarea className="form-control" value={requisitos}
                onChange={(e) => setRequisitos(e.target.value)} 
                id ="textarea"
                required></textarea>
                <label form="textarea">Requisitos</label>
                {campV && <div className="invalid-feedback">
                  Por favor escriba los requisitos
                </div>}
                <div className="valid-feedback">
                  Listo
                </div>

                    </div>
                    <button className="w-100 btn btn-primary btn-lg mt-5" type="submit" 
                    onClick={handleSubmit} >
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