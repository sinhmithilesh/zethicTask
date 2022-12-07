import React from 'react'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ChartPie from './pages/chartPie/ChartPie';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register';
import ChartBar from './pages/chartBar/ChartBar';

function App() {

  const user = localStorage.getItem("user") 

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={ user !== "No" ? <Home /> : <Login/>}/>
          <Route path="/users" element={<UserList /> }/>
          <Route path='/register' element={user !== "No"  ? <Home/> : <Register/>}/>
          <Route path='/login' element={ user !== "No" ? <Home/> : <Login/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/piechart" element={  user !=="No" ? <ChartPie/> : <Login/>}/>  
          <Route path="/barchart" element={  user !=="No" ? <ChartBar/> : <Login/>}/>  
          </Routes>
      </div>
    </Router>
  );
}

export default App;
