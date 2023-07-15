import { useState } from "react";
import "../css/NavBar.css"
import { BsFillCloudSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <nav>
            <div className="nav-logo-container">AIRSCAPE</div>
            <div className={`navbar-links-container ${isOpen && "open"}`}>
                <a href="">Servicios</a>
                <a href="">Informacion</a>
                <a href="">Centro de Ayuda</a>
                <a href=""><BsFillCloudSunFill className="navbar-cart-icon"/></a>
                <Link className="primary-button" to="/register">Sign Up</Link>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </nav>
        </>
    )
}
export default NavBar;