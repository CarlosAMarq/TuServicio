
import { useState } from 'react';
import axios from 'axios';
import Logo from '../Logo';
import {  toast } from 'react-toastify';
import "./conv.css"

export const CreateConvocatoria = () => {
    const [name, setName] = useState('');
    const [asesores, setAsesores] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [requisitos, setRequisitos] = useState('');

    //variables de validaviones
    const [campV,SetCampV]= useState(false)
    const[malini, setMalini] = useState(false);
    const [existeAses, setExisteAses] = useState(false)
    const[fechaCorrect, setFechaCorrect] = useState(false)


   


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
        const form = event.target;
        form.classList.add('was-validated');


        const ases =document.getElementById("ases")
        const fecha = document.getElementById("fecha")
        const nameI = document.getElementById("name")


        // Verifica si los campos requeridos están llenos
        if (!name || !asesores || !fechaVencimiento || !requisitos) {
          SetCampV(true)
          
          return;
        }else{ SetCampV(false)}

        // Validar que el nombre de usuario comience con una letra mayúscula
    const usernameRegex = /^[A-Z]/;
    if (!usernameRegex.test(name)) {
      nameI.classList.add("is-invalid")
      setMalini(true)
      return
    }else{ 
      nameI.classList.remove('is-invalid')
    nameI.classList.add('is-valid')
      
      setMalini(false)}

        
      //validacion de si existe el ascesor
        const asesorExists = await checkAsesorExists(asesores);
        if (!asesorExists) {
          ases.classList.add('is-invalid')
          setExisteAses(true)  
          return
        }else {
          ases.classList.remove('is-invalid')
          ases.classList.add('is-valid')
          setExisteAses(false)}

        // Validar que la fecha de vencimiento no sea anterior a la fecha actual
        const fechaActual = new Date();
        const fechaVencimientoInput = new Date(fechaVencimiento);
        if (fechaVencimientoInput <= fechaActual) {
          fecha.classList.add('is-invalid')
          toast("Fecha Incorrecta")
          setFechaCorrect(true) 
          return
        }else {
          fecha.classList.remove('is-invalid')
          fecha.classList.add('is-valid')
          setFechaCorrect(false)}

          


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
        <form className="need-validation" noValidate id='miFormulario' onSubmit={handleSubmit}>
        <div className="modal modal-sheet position-static d-block "   >
            <div className="" role="document">
                <div className="modal-content rounded-4 shadow ">
                    <div className="modal-header p-5 pb-4 border-bottom-0  rounded-4  border-dark ">
                        <Logo/>
                        <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder m-5">Crear Convovatoria</h1>
                        
                    </div>
                <div className="modal-body p-5 pt-0  mt-5 " >
                    <div className="form-floating mb-3" >
                        <input type="text"
                         className="form-control rounded-3" 
                         id="name" 
                         placeholder="name" 
                         value={name}
                          onChange={(e) => setName(e.target.value)}
                          name="name"
                          pattern='^[A-Z][a-zA-Z\s]*$'
                          required/>
                        <label form="floatingInput">Name</label>
                       {campV && <div className="invalid-feedback">
                  Por favor escriba el nombre.
                </div>}
                {malini && <div className='invalid-feedback'>Nombre debe empezar com mayuscula</div>}
                
                    </div>


                    <div className="form-floating mb-3">
                        <input type="text"
                        className="form-control rounded-3"
                        id="ases"
                        placeholder="asesores"
                        value={asesores}
                        onChange={(e) => setAsesores(e.target.value)}
                        
                        required/>
                        <label form="floatingInput">Asesores objetivos</label>
                        {campV && <div className="invalid-feedback">Por favor escriba el Ascesor</div>}
                        {existeAses && <div className="invalid-feedback">El asesor seleccionado no existe en la base de datos.</div>}
                        
                    </div>


                    <div className="form-floating mb-3">
                        <input type="date" 
                        className="form-control rounded-3" 
                        id="fecha" 
                        placeholder="fecha" 
                        value={fechaVencimiento}
                        onChange={(e) => setFechaVencimiento(e.target.value)} 
                        pattern='' 
                        required />
                        <label form="floatingPassword">Fecha de vencimiento</label>
                        {campV && <div className="invalid-feedback">
                  Por favor seleccione la fecha
                </div>}
                {fechaCorrect && <div className="invalid-feedback">La fecha de vencimiento no puede ser anterior a la fecha actual.</div>}
               
                    </div>
                    
                    <div className="form-floating mb-3">
                        <textarea 
                        className="form-control" 
                        value={requisitos}
                        onChange={(e) => setRequisitos(e.target.value)} 
                        id ="textarea"
                        required ></textarea>
                <label form="textarea">Requisitos</label>
                {campV && <div className="invalid-feedback">
                  Por favor escriba los requisitos
                </div>}
                
                

                    </div>
                    <button className="w-100 btn btn-primary btn-lg mt-5" type="submit" 
                     >
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
