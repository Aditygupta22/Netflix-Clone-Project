import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
const Header=()=>{
    return <nav className="Header">
        <img src={logo} alt="netlfix.icon"></img>
      <div>
        <Link  to="/">Tv Shows</Link>
        <Link to="/Movies"> Movies</Link>
        <Link to="/Recently Added">Recently Added</Link>
        <Link to="/My List">My List</Link>
     </div>
     <GrSearch/>
      
    </nav>
}
export default Header;