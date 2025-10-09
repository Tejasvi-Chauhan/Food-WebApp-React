import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState("Login");


return (
  <div className="header">
    <div className="logo">
      <img
        className="logo-img"
        alt="logo"
        src= {LOGO_URL}
      />
    </div>
    <div className="nav-items">
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact Us</Link></li>
        <li>Cart</li>
        <li> <button className="login-btn"
           onClick={()=>{ setIsLoggedIn(isLoggedIn==="Login" ? "Logout" : "Login")
          

           }}>{isLoggedIn}</button> </li>
      </ul>
    </div>
  </div>
)};

export default Header;
