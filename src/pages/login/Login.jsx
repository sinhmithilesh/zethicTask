import { useState } from "react"
import { Link , useNavigate, useLocation} from "react-router-dom"
import "./login.css"
import Lottie from "lottie-react";

function InputError({data, msg}){

    if(msg){
        return (
            <div>
                <p className="error">username is not matching, or register again</p>
            </div>
        )
    }

    else{
 
    return (
        <div>
            {data < 5 ?
            <p className="error">More {5-Number(data)} characters !</p>
            :
            <p className="success">Great !</p>
            }
        </div>
    )
        }
}


export default function Login(){
   
    const navigate = useNavigate("/")
    const [datafromRegister,setDataFromRegister] = useState(useLocation())
    const [isSuccess , setIsSuccess] = useState(true)
    const [user, setUser] = useState({
        username : "",
        password : ""
    })

    const inputHandler = (e) => {
        setUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }
    
    const loginBtn = (e) => {
        setIsSuccess(true)
        e.preventDefault()
        if(user.username.length < 5 || user.password.length < 5 ){
            alert("username and password must be  minimum 5")
        }
        else{      
            if(user.username === datafromRegister.state || user.username === localStorage.getItem('register')){
                localStorage.setItem("user", user.username)
                navigate("/")
                window.location.reload()
            }
            else{
                setIsSuccess(false)
            }        
        }
    }

    return (
        <div className="login">
            <div className="loginTitle">Login</div>

            <form className="loginForm">
               
                <label>Username</label>                 
                <input 
                    className="loginInput" 
                    name="username"
                    value={user.username}
                    type="text" 
                    placeholder="Enter your username"
                    onChange={inputHandler}
                    />  
                { user.username.length > 0 && <InputError data={user.username.length}/>}
                
               
                <label>Password</label>                 
                <input 
                    className="loginInput" 
                    name="password"
                    value={user.password}
                    type="password" 
                    placeholder="Enter your password"
                    onChange={inputHandler}
                    />
                { user.password.length > 0 && <InputError data={user.password.length}/>}
               
               
                <button 
                    className="loginButton" 
                    onClick={loginBtn}>
                    LOGIN
                </button>
                { !isSuccess && <InputError msg={true}/>}
            </form> 

            <button className="loginRegisterButton">
                <Link className="link" to="/register">REGISTER</Link>
            </button> 
        </div>
    )
} 