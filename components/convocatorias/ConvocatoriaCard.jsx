import  axios  from "axios"
import { SvgConvocatoria } from "./SvgConvocatoria"
import { useUser } from "../../hooks/useUser";
import { useNavigate } from 'react-router-dom';
import "../card.css"
import { useDialog } from "../../hooks/useDisclosoure";
import { useNotification } from "../../hooks/useNotification";
import { toast } from "react-toastify";


export const ConvocatoriaCard=({id, title,targets, expiration,requirements})=>{
  const { onOpen } = useDialog();
  const {isLogin, user} =useUser()
  const navigate = useNavigate()
  const { updateToast } = useNotification();

    const handleNavigate=(id)=> navigate(`/TuServicio/visualizarConvocatoria/${id}`)
    
    //eliminar convocatoria
    const eliminarConv = async (e) => {
        //e.stopPropagation();
        const noti = toast.loading("Eliminando...");
        try {
           const response = await axios.delete(`https://tu-servicio.onrender.com/convocatory/${id}`);
           if (response.status === 204) {
             console.log('Eliminado con éxito:', response.data);
             toast.update(noti, {
              render: `Convocatoria ${title} eliminada con éxito`,
              closeOnClick: true,
              isLoading: false,
              autoClose: true,
              type: "success",
        });
        window.location.reload();
        setDatos((prev) => prev.filter((item) => item.id != id));
           } else {
            toast.update(noti, {
              render: `Ocurrio un error eliminado  ${title}`,
              closeOnClick: true,
              autoClose: true,
              isLoading: false,
              type: "error",
            });
            
             
           }
        } catch (error) {
           console.error('Error al eliminar:', error);
           
        }
       };

       const handleDelete = (e) => {
        e.stopPropagation();
    
        onOpen({
          title: `Elminar ${title}`,
          description: `¿Seguro que desea eliminar ${title}`,
          type: "delete",
          onConfirm: eliminarConv,
        });
      };
       const paraAdvicer = () => {
        if (user.usertype === "Asesor") return ( 
          <div className="btn-group card-social">
          <button
                type="button"
                className="btn btn-sm  btn-success text-light shadow-sm"
              >
                Solicitar
              </button>
              </div>
        )
      }
        const paraAdmin=()=>{
            if(user.usertype === 'admin')
            return(<div className="btn-group card-social ">
            <button type="button" className="btn btn-sm  btn-danger text-light shadow-sm "
             onClick={handleDelete}
             >Eliminar</button>
            
        </div>)
        }
       
       
    
    return(
        <> 
            <div className="col" onClick={()=>handleNavigate(id)}>
              
                <div className="card service-card  shadow-sm bg " key="{convocatoria.id}" style={{cursor:'pointer'}}>
                <SvgConvocatoria/>

                    <div className="card-body  text-dark rounded-bottom " style={{width:"100%", height:"100%"}}>
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