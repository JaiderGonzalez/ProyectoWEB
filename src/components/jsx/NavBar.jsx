import { useState } from "react";
import "../css/NavBar.css"
import { BsFillCloudSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
        <nav>
            <div className="nav-logo-container">
                <a href="">AIRSCAPE</a>
            </div>
            <div className="navbar-links-container">
                <a href="">Servicios</a>
                <a href="">Informacion</a>
                <a href="">Centro de Ayuda</a>
                <a href="">
                    <BsFillCloudSunFill className="navbar-cart-icon"/>
                </a>
                <Link className="primary-button" to="/register">Register</Link>
            </div>
        </nav>
        </>
    )
}
export default NavBar;