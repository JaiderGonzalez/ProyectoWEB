import React from 'react';
import "../css/Register.css";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Create Account</h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Full Name</label>
                    <input className='input' type='text'></input>
                </div>
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
                    <Link className='submit' to="/">Submit</Link>
                </div>
                <div className='rut-login'>
                  <h4>Ya tienes cuenta? <Link className='link-login' to="/login"> Login</Link></h4>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Register;