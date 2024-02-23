import  axios  from "axios"






export const ConvocatoriaCard=({
    id,
    title,
    targets,
    expiration,
    requirements
})=>{
    const handleDelete= async ()=>{
        await axios.delete(`https://tu-servicio.onrender.com/convocatory/`)
        console.log('eliminado exitosamente')
    }
   
       
       
    
    return(
        <>
            <div className="col">
                <div className="card shadow-sm" key="{convocatoria.id}">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                    xmlns="http://www.w3.org/2000/svg" role="img" 
                    aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" 
                    focusable="false"><title>Placeholder</title><rect width="100%" 
                    height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" 
                    dy=".3em">convocatoria</text></svg>

                    <div className="card-body bg-dark text-light rounded-bottom">

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