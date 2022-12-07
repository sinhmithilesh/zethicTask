import { Person, VerifiedUser } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./topbar.css";
import Lottie from "lottie-react";
import car from "./car1.json"


export default function Topbar() {

  const user = localStorage.getItem('user')
  const navigate = useNavigate()

  const logoutBtn = () => {
    localStorage.setItem("user", 'No'); 
    window.location.reload()
    navigate("/login");  
  }


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" onClick={()=>navigate("/")}>Zethic</span>
          <Lottie className='carGif' animationData={car} loop={true} />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          { user !== 'No' && <p style={{cursor:"pointer"}} onClick={logoutBtn}>Logout</p>}
          </div>
          <p>{user !== 'No' && user}</p>
          {user !== 'No' && <Person className="topAvatar"/>}
        </div>
      </div>
    </div>
  );
}
