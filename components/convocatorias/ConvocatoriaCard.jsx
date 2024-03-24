import  axios  from "axios"
import { SvgConvocatoria } from "./SvgConvocatoria"
import { useUser } from "../../hooks/useUser";
import { useNavigate } from 'react-router-dom';




export const ConvocatoriaCard=({id, title,targets, expiration,requirements})=>{

    const {isLogin, user} =useUser()
    const navigate = useNavigate()

    const handleNavigate=(id)=> navigate(`/visualizarConvocatoria/${id}`)
    
    //eliminar convocatoria
    const eliminarConv = async () => {
        const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta convocatoria?');
        if (!confirmacion) {
          return;}
    
        try {
           const response = await axios.delete(`https://tu-servicio.onrender.com/convocatory/${id}`);
           if (response.status === 204) {
             console.log('Eliminado con éxito:', response.data);
             
           } else {
             console.error('Error al eliminar', response.data);
             
           }
        } catch (error) {
           console.error('Error al eliminar:', error);
           
        }
       };
       const paraAdvicer = () => {
        if (user.usertype === "asesor") return(
          <button
                type="button"
                className="btn btn-sm  btn-primary text-light shadow-sm"
              >
                Solicitar
              </button>
        )
      }
        const paraAdmin=()=>{
            if(user.usertype === 'admin')
            return(<div className="btn-group">
            <button type="button" className="btn btn-sm  btn-danger text-light shadow-sm "
             onClick={eliminarConv}
             >Eliminar</button>
            <button type="button" className="btn btn-sm  btn-success text-light shadow-sm"
            onClick={()=>handleNavigate(id)}
            >Visualizar</button>
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

                        {isLogin() && paraAdmin()}
                        {isLogin() && paraAdvicer()}
                    </div>
                </div>
            </div>
        </>
    )
}