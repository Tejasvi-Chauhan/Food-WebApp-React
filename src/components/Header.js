import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatusq from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  const onlineStatus = useOnlineStatusq();

  const {LoggedInUser} = useContext(UserContext);

  console.log(LoggedInUser);


return (
  <div className="header flex justify-between bg-red-100 shadow-lg shadow-gray-400">
    <div className="logo">
      <img
        className="logo-img w-56 h-28 p-2"
        alt="logo"
        src= {LOGO_URL}
      />
    </div>

    <div className="nav-items flex items-center">
      <ul className="flex p-4 m-4 gap-7" >
        <li><Link to={"/grocery"}>Grocery</Link></li>
        <li>Status={onlineStatus?"🟢":"❤️"}</li>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact Us</Link></li>
        <li>Cart</li>
        <li> <button className="login-btn"
           onClick={()=>{ setIsLoggedIn(isLoggedIn==="Login" ? "Logout" : "Login")
          

           }}>{isLoggedIn}</button> </li>

        <li>{LoggedInUser}</li>
      </ul>
    </div>
  </div>
)};

export default Header;
