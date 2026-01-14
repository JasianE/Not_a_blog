import React from "react";
import { Link } from "react-router";

function Navbar(){
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/projects'>Projects</Link>
                <Link to ='/me'>Me!</Link>
            </nav>
            
        </header>
    )
}

export default Navbar;