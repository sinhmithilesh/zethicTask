import "./sidebar.css";
import React from 'react'

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  BarChart,
  PieChart,
  
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li aria-disabled={true} className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
    
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/barchart" className="link">
              <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
                Bar Chart
              </li>
            </Link>
            <Link to="piechart" className="link">
              <li className="sidebarListItem">
                <PieChart className="sidebarIcon" />
                Pie Chart
              </li>
            </Link>
          </ul>
        </div>
      
 
      </div>
    </div>
  );
}
