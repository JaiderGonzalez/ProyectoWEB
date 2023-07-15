import React from 'react';
import "../css/Login.css";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Sign Up</h2>
            </div>
            <form className='form-wrapper'>
                <div className='document'>
                    <label className='label'>Document</label>
                    <input className='input' type='text'></input>
                </div>
                <div className='email'>
                    <label className='label'>Email</label>
                    <input className='input' type='email'></input>
                </div>
                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type='password'></input>
                </div>
                <div className='btn'>
                    <Link className='submit' to="/">Login</Link>
                </div>
                <div className='rut-register'>
                  <h4>No tienes cuenta? <Link className='link-register' to="/register"> Crear cuenta</Link></h4>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Login;