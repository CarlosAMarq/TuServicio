import  axios  from "axios"
import { SvgConvocatoria } from "./SvgConvocatoria"






export const ConvocatoriaCard=({ title, expiration})=>{
    const handleDelete= async ()=>{
        await axios.delete(`https://tu-servicio.onrender.com/convocatory/`)
        console.log('eliminado exitosamente')
    }
   
       
       
    
    return(
        <>
            <div className="col">
                <div className="card service-card  shadow-sm" key="{convocatoria.id}" style={{cursor:'pointer'}}>
                <SvgConvocatoria/>

                    <div className="card-body  text-dark rounded-bottom">
                        <div className="card-info">
                            <h4 className="card-text ">{title}</h4>
                            <time className="card-text">{expiration}</time>
                        </div>

                        <div className="btn-group">
                            <button type="button" className="btn btn-sm  btn-danger text-light shadow-sm " onClick={handleDelete}>Eliminar</button>
                            <button type="button" className="btn btn-sm  btn-success text-light shadow-sm">Editar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}