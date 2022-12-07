import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react"
import "./Register.css"
import Lottie from "lottie-react";


function InputError({data, forEmail, email}){

    if(forEmail){
        return(
            <div>
                {!email.includes("@") ?
                 <p className="error">@ should be included</p>
                 : 
                 <p className="success">Great !</p>
                 }
            </div>
        )
    }

    return (
        <div>
            {data < 5 ?
            <p className="error">{!forEmail && `More ${5-Number(data)} characters !`} {forEmail && " @ should be included"}</p>
            :
            <p className="success">Great !</p>
            }
        </div>
    )
}


export default function Register(){

    const navigate = useNavigate()

    const [user, setUser] = useState({
        username : "",
        email : "",
        password : ""
    })

    const handleInput = (e) => {
        setUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }

    const registerBtn = (e) => {
        e.preventDefault()
        if(user.username.length < 5 || !user.email.includes("@") || user.password.length < 5){
            alert("username and password required minimum 5 chars and email should have '@' ")
        }
        else{
            console.log(user)
            localStorage.setItem("register", user.username)
            navigate("/login", {
                state: user.username
            })
        }
    }

    
    return(
        <div className="register">
            <div className="registerTitle">Register</div>
            <form className="registerForm">
               
                <label>Username</label>                 
                <input 
                    className="registerInput" 
                    type="text" 
                    placeholder="Enter your name"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    />  
                { user.username.length > 0 && 
                <InputError forEmail={false} data={user.username.length}/>}

                <label>Email</label>                 
                <input 
                    className="registerInput" 
                    type="email" 
                    placeholder="Enter your email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    />  
                { user.email.length > 0 
                && <InputError forEmail={true} data={user.email.length} email={user.email}/>}

                <label>Password</label>                 
                <input 
                    className="registerInput" 
                    type="password" 
                    placeholder="Enter your password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    />
                { user.password.length > 0 && 
                <InputError  forEmail={false} data={user.password.length}/>}


                <button 
                    className="registerButton"
                    onClick={registerBtn}
                    >Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Log in</Link>
            </button>
        </div>
    )
} 