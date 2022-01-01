/* eslint-disable */
import React from "react";
import { Link } from 'react-router-dom';


const navbar = () => {
    return(
        <>

        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav" style={{fontFamily: "Vujahday Script"}}>
            <div className="container">
                <a className="navbar-brand" href="#page-top">My WebPage</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio"><Link to="/">Portfolio</Link></a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about"><Link to="/about">About</Link></a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact"><Link to="/contact">Contact</Link></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default navbar;