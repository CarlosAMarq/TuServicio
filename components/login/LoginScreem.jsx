import { Link, useNavigate } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from 'axios';



export const LoginScreen = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await axios.get('https://tu-servicio.onrender.com/appusers');
                setUser(response.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        obtenerDatos();
    }, []);


    
    const HandleLogin = () => {
        
        const authenticate = ({
            id,
            username,
            mail,
            password: storedPassword, 
            usertype,
            rating
        }) => {
            try {
                if (mail === email && storedPassword === password) {
                    if (usertype === 'admin') {navigate('/')}
    
                    else if (usertype === 'asesor') {navigate('/homeAsesor')}
                    
                    else {navigate('/homeUser')}  
                }
                else console.log("Invalid email or password")
                
            } catch (error) {
                console.error('Error al obtener los datos:', error)
                
            }
            
        } 

        
        
        
        
        user && user.map(usuario => authenticate(usuario))
        
   
    }

    
    return(
        <>

        <div className="modal modal-sheet position-static d-block p-4 py-md-5 "  >
        <div className="modal-dialog">
            <div className="modal-content rounded-4 shadow bg-body-secondary">
            <div className="modal-header p-5 pb-4 border-bottom-0 bg-secondary rounded-4 shadow border-dark ">
                <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder">Tu Servicio</h1>
                
            </div>
            

            <div className="modal-body p-5 pt-0 bg-body-secondary mt-5 ">
                
                <div className="form-floating mb-3">
                    <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label form="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label form="floatingPassword">Password</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" onClick={HandleLogin}>Sign up</button>
                <small className="text-body-secondary">en caso de no tener cuenta haga clik </small>
                <Link to="/register">
                    aqui</Link>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}