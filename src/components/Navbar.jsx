import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo-jumbo.png'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">  
                    <Link className="navbar-brand" href="#">
                        <img src={Logo} alt="logo" className="img-thumbnail" style={{ width: '200%', height: '80px' }} />
                    </Link>                       
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='productos' className="nav-link active" aria-current="page">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='about'className="nav-link">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='contacts'className="nav-link">Contáctanos</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                                <button className="btn btn-outline-inicio de sesión" type="submit">Registrate</button>
                        </form>
                        <form className="d-flex" role="search">
                                <button className="btn btn-outline-inicio de sesión" type="submit">Inicio de sesión</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar