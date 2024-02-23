import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';


export const CrearCuenta = () => {
        console.log('CrearCuenta')
    const navigate= useNavigate();
    const salida= () =>{
        navigate('/login',{relative:true});
    }
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');

    

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const accountData = {
            id:30,
            username: username,
            email: email,
            password: password,
            accountType: accountType
        };

        try {
        const response = await axios.post('https://tu-servicio.onrender.com/appusers', accountData);
        if (response.status ===  200) {
            // Navega a la página de inicio de sesión si la creación de la cuenta fue exitosa
            ()=>navigate('/login',{relative:true});
        } else {
            // Maneja los errores aquí
            console.error('Error al crear la cuenta:', response.data);
        }
        } catch (error) {
        // Maneja los errores aquí
        console.error('Error al crear la cuenta:', error);
        }
    };

    

  return (
    <>

        <div className="modal modal-sheet position-static d-block p-4 py-md-5 "   id="modalSignin">
        <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow bg-body-secondary">
            <div className="modal-header p-5 pb-4 border-bottom-0 bg-secondary rounded-4 shadow border-dark ">
                <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder">Register</h1>
                <button type="button" className="btn-close" onClick={salida} 
                ></button>
            </div>
            

            <div className="modal-body p-5 pt-0 bg-body-secondary mt-5 ">
                <div className="form-floating mb-3">
                    <input type="user" className="form-control rounded-3" id="UserName" placeholder="name" name='username' value={username}
      onChange={(e) => setUsername(e.target.value)}/>
                    <label form="floatingInput">Username</label>
                </div>
                
                <div className="form-floating mb-3">
                    <input type="email" className="form-control rounded-3" id="Email" placeholder="name@gmail.com " name='email' value={email}
      onChange={(e) => setEmail(e.target.value)}/>
                    <label form="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control rounded-3" id="Password" placeholder="Password" name='password' value={password}
      onChange={(e) => setPassword(e.target.value)}/>
                    <label form="floatingPassword">Password</label>
                </div>
                
                <label form="country" className="form-label" name='accountType' value={accountType}
      onChange={(e) => setAccountType(e.target.value)}>Tipo de Cuenta</label>
                <select className="form-select" id="Type" >
                  <option>...</option>
                  <option>Usuario</option>
                  <option>Ascesor</option>
                  <option>Adminisrador</option>
                </select>
                <div className="invalid-feedback">
                  
                </div>
                <button className="w-100 btn btn-primary btn-lg mt-5"
                    type="submit"
                    onClick={handleFormSubmit}
                    >Registre</button>
                <div>

                </div>
                
            </div>
            </div>
        </div>
        </div>
        </>
  )
      

}
  



