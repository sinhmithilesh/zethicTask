import React from 'react'
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { fakeData } from '../../fakeData';


export default function Home() {

  return (
    <div className="home">
      <FeaturedInfo  fakeData={fakeData}/>
      <div className="homeWidgets">
        <WidgetLg/>
      </div>
    </div>
  );
}
