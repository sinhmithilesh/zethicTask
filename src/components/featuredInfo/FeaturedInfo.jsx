import "./featuredInfo.css";
import React, { useEffect, useMemo } from 'react'

import { ArrowDownward, ArrowUpward, Co2Sharp } from "@mui/icons-material";
import Lottie from "lottie-react";
import person from "./people.json"
import carAge from "./carAge.json"

export default function FeaturedInfo({fakeData}) {


  const avarageCarAge =  useMemo(()=>{ 
       function avarage(){
        let carAge = 0
        if(fakeData){
          fakeData.forEach(item =>  {
            carAge += item.vehicle.carAge
          })         
        }
        return Math.floor(carAge/fakeData.length-1)
      }
     return avarage()
  }, [fakeData])


  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredMContainer">
          <div className="featuredMLeft">
            <span className="featuredTitle">Total</span>
            <span className="featuredM">{fakeData.length}
            <span className="featuredMSideText">users</span>
            </span>
            
            {/* <span className="featuredSub">Compared to last month</span> */}
          </div>

          <div className="featuredMRight">
          <Lottie className='personGif' animationData={person} loop={true} />
          </div>
      </div>
      </div>

      <div className="featuredItem">
        <div className="featuredMContainer">
          <div className="featuredMLeft">
            <span className="featuredTitle">Verified Cars</span>
            <span className="featuredM">{avarageCarAge}
            <span className="featuredMSideText">{avarageCarAge > 1 ? "Average Years" : " Average Year"}</span>
            </span>
            
            {/* <span className="featuredSub">Compared to last month</span> */}
          </div>

          <div className="featuredMRight">
          <Lottie className='personGif' animationData={carAge} loop={true} />
          </div>
      </div>
      </div>

      {/* <div className="featuredItem">
        <span className="featuredTitle">Average Car Age</span>
        <div className="featuredMContainer">
          <span className="featuredM">{avarageCarAge}</span>
          <span className="featureYears"
          >{avarageCarAge > 1 ? "Years" : "Year"}</span>
          <span className="featuredRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">down Compared to last month</span>
      </div> */}


      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMContainer">
          <span className="featuredM">₹ 20</span>
          <span className="featuredMSideText"> Lacs avarage price</span>

          <span className="featuredRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
