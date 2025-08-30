import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";
const Header= () => {
    const [btnName,setBtnName] = useState("Login");

    useEffect( () => {
        console.log("useeffect called");
    },[btnName])
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={()=>{
                       btnName === "Login" ?  setBtnName("Logout") :
                       setBtnName("Login")
                       ;
                       
                    }}
                    >{btnName}</button>
                  
                </ul>
            </div>
             
        </div>
    )
}

export default Header;