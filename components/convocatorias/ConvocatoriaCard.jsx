import  axios  from "axios"
import { SvgConvocatoria } from "./SvgConvocatoria"
import { useUser } from "../../hooks/useUser";





export const ConvocatoriaCard=({ title, expiration})=>{

    const {isLogin, user} =useUser()

    const handleDelete= async ()=>{
        await axios.delete('https://tu-servicio.onrender.com/convocatory/')
        
    }
   const paraAdmin=()=>{
    if(user.userType === 'admin')
    return(<div className="btn-group">
    <button type="button" className="btn btn-sm  btn-danger text-light shadow-sm " onClick={handleDelete}>Eliminar</button>
    <button type="button" className="btn btn-sm  btn-success text-light shadow-sm">Editar</button>
</div>)
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

                        {isLogin() ? paraAdmin():(<div/>)
                            
                        }
                    </div>
                </div>
            </div>
        </>
    )
}