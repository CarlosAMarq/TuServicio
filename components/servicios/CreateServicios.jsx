import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';


const CreateServicios = () => {
    const navigate = useNavigate();
    const handleClose = () => {navigate('/servicios')}
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")
    const id= "30"

    const handleSubmit = async (event) => {
        event.preventDefault();

        const serviciosData = {
            title,
            description,
            advicer_id: id,
        };
        console.log(serviciosData);

        try {
            const response = await axios.post('https://tu-servicio.onrender.com/advice/', serviciosData);
            if (response.status ===  201) {
                console.log('se ha creado el servicios con exito')
            navigate('/ServiciosAsesor', { replace: true });

            } else {
            // Manejar errores de la respuesta
            console.error('Error al crear el servicio:', response.status);
            }
        } catch (error) {
            // Manejar errores de la solicitud
            console.error('Error al crear el servicio:', error);
        }
    };

  return (
    <>
        <div className="modal modal-sheet position-static d-block p-4 py-md-5 "   id="modalSignin">
            <div className="modal-dialog" role="document">
                
                <div className="modal-content rounded-4 shadow bg-body-secondary">
                <div className="modal-header p-5 pb-4 border-bottom-0 bg-secondary rounded-4 shadow border-dark ">
                    <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder">Crear servicios</h1>
                    <button type="button" className="btn-close"  onClick={handleClose}
                    ></button>
                </div>
                
                
                <div className="modal-body p-5 pt-0 bg-body-secondary mt-5 ">
                    <div className="form-floating mb-3">
                        <input type="user" className="form-control rounded-3" id="floatingInput"  value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                        <label form="floatingInput">Titulo</label>
                    </div>

                    <div className="input-group">
                        <span className="input-group-text">Descripcion</span>
                        <textarea className="form-control" value={description}
                onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    
                    
                    
                    <button className="w-100 btn btn-primary btn-lg mt-5" type="submit" onClick={handleSubmit} >
                        Create
                    </button>                    
                </div>
                </div>
            </div>
            </div>
                  
        </>
  )
}

export default CreateServicios