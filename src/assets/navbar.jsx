import React from "react";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg py-0 px-0" data-bs-theme="dark">
        <div className="container-fluid bg-dark">
            <a className="navbar-brand text-white my-2" href="#">Bootstrap Start</a>
            <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end my-2" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link text-white" href="#">Home</a>
                    <a className="nav-link text-white" href="#">About</a>
                    <a className="nav-link text-white" href="#">Services</a>
                    <a className="nav-link text-white" href="#">Contact</a>
                </div>
            </div>
        </div> 
    </nav>
)};

export default NavBar;