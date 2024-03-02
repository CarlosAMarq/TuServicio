import { Link, useNavigate } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from 'axios';
import { useUser } from "../../hooks/useUser";



export const LoginScreen = () =>{
   
    const navigate = useNavigate();
    const {currentUser, setCurrentUser} = useUser();

   
    
    
    return(
        <>
        <form className="was-validated" >
        <div className="modal modal-sheet position-static d-block p-4 py-md-5 "  >
        <div className="modal-dialog">
            <div className="modal-content rounded-4 shadow ">
            <div className="modal-header p-5 pb-4 border-bottom-0 rounded-4  border-dark ">
                <h1 className="fw-bold mb-0 fs-2 fst-italic fw-bolder">Tu Servicio</h1>
                
            </div>
            

            <div className="modal-body p-5 pt-0  mt-5 ">
                
                <div className="form-floating imput-group has-validation mb-3">
                    <input type="email" className="form-control rounded-3 "  placeholder="name@example.com" aria-describedby="inputGroupPrepend" required/>
                    <label form="floatingInput">Email address</label>
                    
                    
                </div>
                <div className="form-floating imput-group has-validation mb-3">
                    <input type="password" className="form-control rounded-3"  placeholder="Password" required />
                    <label form="floatingPassword">Password</label>
                    
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
                <small className="text-body-secondary">en caso de no tener cuenta haga clik </small>
                <Link to="/register">
                    aqui</Link>
            </div>
            </div>
        </div>
        </div>
        </form>
        </>
    )
}