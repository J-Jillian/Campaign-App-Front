import React from "react";
import { NavLink} from 'react-router-dom';

function NavBar () {
    return (
        <nav>
            <ul>
            <NavLink to="/" className={({ isActive }) => isActive ? "selected"
                :""} >Home</NavLink>
            <NavLink to="/campaign" className={({ isActive }) => isActive ? "selected"
                :""} >All Campaign</NavLink>
            <NavLink to="/new-campaign" className={({ isActive }) => isActive ? "selected"
                :""} >Create a Campaign</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? "selected"
                :""} >Login</NavLink>
            </ul>
            <NavLink to="/signup" className={({ isActive }) => isActive ? "selected"
                :""} >Sing up</NavLink>
            {/* <NavLink to="/profile" className={({ isActive }) => isActive ? "selected"
                :""} >Profile</NavLink> */}
                        
        </nav>
    )
}

export default NavBar ;