import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__item">
                <NavLink to="/Profile">Profile</NavLink>
            </div>
            <div className="nav__item">
                <NavLink to="/Dialogs">Messages</NavLink>
            </div>
            <div className="nav__item">
                <NavLink to="#">News</NavLink>
            </div>
            <div className="nav__item">
                <NavLink to="#">Music</NavLink>
            </div>
            <div className="nav__item">
                <NavLink to="#">Settings</NavLink>
            </div>
        </nav>
    );
}


export default Navbar;