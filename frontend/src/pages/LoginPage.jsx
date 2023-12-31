import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../utilities"
import { Link } from "react-router-dom"
import { userContext } from "../App"
import img from "../assets/img.png"
import usr from "../assets/user.svg"
import pwd from '../assets/pw.svg'
export const LoginPage=()=>{
    
    const [username, setUsername] = useState("")
    const [pw, setPw] = useState("")
    const {user, setUser} = useContext(userContext);
    let navigate = useNavigate()
    const logIn = async(e)=>{
        e.preventDefault()
        let data={
            email: username,
            password: pw
        }
        let response= await api.post("v1/users/login/", data)
        let user = response.data.user
        let token = response.data.token
        localStorage.setItem("token", token)
        api.defaults.headers.common["Authorization"] = `Token ${token}`
        setUser(user)
        navigate("/", {replace:true})
        console.log(user)
        console.log(token)
    }
    return(
        <div className="loginsignup">
        <div className="mainls">
        <h1 className="title">Welcome back</h1>
        <form onSubmit={(e)=>logIn(e)} >
            <img className="icons" src={usr} width={22}/>
            <input className ="myinput" type="text" value = {username} placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input><br></br>
            <img className="icons" src={pwd} width={22}/>
            <input className ="myinput" type="password" value = {pw} placeholder="password" onChange={(e)=>setPw(e.target.value)}></input><br></br>
            <input id = "submitbtn" type="submit" value="Log in"></input>
        </form>
            <p>Dont have an account? <Link to="/signup">Sign Up!</Link></p>
            <img src={img} width={300}></img>
        </div>
        </div>
    )
}