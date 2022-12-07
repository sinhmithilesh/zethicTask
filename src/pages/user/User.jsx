import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Place,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import React, { useEffect } from 'react'
import {fakeData} from "../../fakeData"
import { useState } from "react";
import axios from "axios";

export default function User() {

  const [userData, setUserData] = useState({})
  const {userId} = useParams()

  
  useEffect(()=>{
    const findUser = fakeData.find(item => item.id === userId)
    if(findUser) setUserData(findUser)
  },[userId])

 

  return (
    <div className="user">
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src= {userData?.photo ? userData.photo : "https://images.pexels.com/photos//pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{userData?.username}</span>
              <span className="userShowUseroccupation">{userData?.occupation}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{userData?.age} years</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{userData?.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{userData?.username?.split(" ")[0] + userData?.email}</span>
            </div>
            <div className="userShowInfo">
              <Place className="userShowIcon" />
              <span className="userShowInfoTitle">{userData?.country}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Vehicle</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              
              <div className="userVehicleItem">
                <label>Manufacturer</label>
                <input
                  readOnly
                  type="text"
                  placeholder={userData?.vehicle?.Model.split(" ")[0]}
                  className="userVehicleInput"
                />
              </div>

              <div className="userVehicleItem">
                <label>Model</label>
                <input
                  type="text"
                  placeholder={userData?.vehicle?.Model.split(" ")[1]}
                  className="userVehicleInput"
                />
              </div>

              <div className="userVehicleItem">
                <label>Car Age</label>
                <input
                  type="text"
                  placeholder = {userData?.vehicle?.carAge + " years  "}
                  className="userVehicleInput"
                />
              </div>

              <div className="userVehicleItem">
                <label>Color</label>
                <input
                  readOnly
                  type="text"
                  placeholder={userData?.vehicle?.color}
                  className="userVehicleInput"
                />
              </div>
   
            </div>

            <div className="userVehicleRight">
              <div className="">
                <img
                  className="userVehicleImg"
                  // src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
