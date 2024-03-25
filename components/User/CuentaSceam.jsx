import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const CuentaScream = () => {
  // console.log('CrearCuenta')
  // const navigate= useNavigate();
  const salida = () => {
    navigate("/login", { relative: true });
  };
  
  return (
    <>
  <div class="container">
        <div class="left">
            <form class="form">
                <div class="input-block">
                    <input class="input" type="text" id="email" required=""></input>
                    <label form="email">Username</label>
                </div>
                <div class="input-block">
                    <input class="input" type="password" id="pass" required=""></input>
                    <label form="pass">Password</label>
                </div>
                <div class="input-block">
<span class="forgot"><a href="#">Forgot Password?</a></span>
                <button>Submit</button>
            </div>
            </form>
        </div>
        
    </div> 
    </>
  );
};
export default CuentaScream;
