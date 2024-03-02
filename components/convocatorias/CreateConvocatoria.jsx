import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';

export const CreateConvocatoria = () => {
    const navigate = useNavigate();
    const handleClose = () => {navigate('/convocatoria')}
    

    const [name, setName] = useState('');
    const [asesores, setAsesores] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [requisitos, setRequisitos] = useState('');

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
            navigate('/convocatoria', { replace: true });

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
        <form className="was-validated pt-5">
        <div className="modal modal-sheet position-static d-block pt-5 py-md-5 "   >
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow bg-body-secondary">
                <div className="modal-header p-5 pb-4 border-bottom-0 bg-body-secondary rounded-4  border-dark ">
                    <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder">Crear Convovatoria</h1>
                    <button type="button" className="btn-close"  onClick={handleClose}
                    ></button>
                </div>
                <div className="modal-body p-5 pt-0 bg-body-secondary mt-5 ">
                    <div className="form-floating mb-3">
                        <input type="user" className="form-control rounded-3" id="floatingInput" placeholder="name" value={name}
                onChange={(e) => setName(e.target.value)} required/>
                        <label form="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control rounded-3" id="floatingInput " placeholder="asesores" value={asesores}
                onChange={(e) => setAsesores(e.target.value)} required/>
                        <label form="floatingInput">Asesores objetivos</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="date" className="form-control rounded-3" id="floatingPassword" placeholder="Password" value={fechaVencimiento}
                onChange={(e) => setFechaVencimiento(e.target.value)} required/>
                        <label form="floatingPassword">Fecha de vencimiento</label>
                    </div>
                    
                    <div className="input-group">
                        <span className="input-group-text">Requisitos</span>
                        <textarea className="form-control" value={requisitos}
                onChange={(e) => setRequisitos(e.target.value)} required></textarea>
                    </div>
                    <button className="w-100 btn btn-primary btn-lg mt-5" type="submit" onClick={handleSubmit} >
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