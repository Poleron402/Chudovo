import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import { userContext } from "../App"

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
        let response= await axios.post("http://127.0.0.1:8000/api/v1/users/login/", data)
        let user = response.data.user
        let token = response.data.token
        localStorage.setItem("token", token)
        axios.defaults.headers.common["Authorization"] = `Token ${token}`
        setUser(user)
        navigate("/watchlist", {replace:true})
        console.log(user)
        console.log(token)
    }
    return(
        <div className="main">
        <h1 className="title">Welcome back</h1>
        <form onSubmit={(e)=>logIn(e)} >
            <input className ="myinput" type="text" value = {username} placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input><br></br>
            <input className ="myinput" type="password" value = {pw} placeholder="password" onChange={(e)=>setPw(e.target.value)}></input><br></br>
            <input id = "submitbtn" type="submit" value="Log in"></input>
        </form>
            <p>Dont have an account? <Link to="/signup">Sign Up!</Link></p>
        </div>
    )
}