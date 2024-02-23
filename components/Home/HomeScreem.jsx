import { Link } from "react-router-dom"


export const HomeScreen = () =>{
    return(
        <>
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                
            <div className="container py-5  ">
                <h1 className="display-5 fw-bold text-center">Argencia "Tu Servicio"</h1>
                <p className=" fs-4 text-center">Hola binevenido a nuestra Argencia; si necesita ayuda para sacar a 
                    frente su negocio aqui podra contratar un profecionar con el objetivo de que este
                    lo ayude en su negocio</p>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-primary btn-lg "
                        to="/login">Get Started </Link>
                    </div>
                
            </div>
        </div>

        
        
        </>
    )
}