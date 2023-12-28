import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { userContext } from "../App"
import { Link } from "react-router-dom"
export const SignUp=()=>{
    const [username, setUsername] = useState("")
    const [pw, setPw] = useState("")
    const [pw2, setPw2] = useState("")
    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate()
    const signUp = async(e)=>{
        e.preventDefault()
        if(pw===pw2){
            let data = {
                email: username,
                password: pw
            }
            let response=await axios.post("http://127.0.0.1:8000/api/v1/users/signup/", data)
            let user = response.data.user
            let token = response.data.token
            axios.defaults.headers.common["Authorization"] = `Token ${token}`
            setUser(user)
            navigate("/watchlist", {replace: true})
        }else{
            alert("Passwords must match")
        }
    }
    return (
        <>
        <div className = "main">
        <h1 className="title">Welcome</h1>

        <form onSubmit={(e)=>signUp(e)} >   
            <input className ="myinput Email" id= "Email" type="text" value = {username} placeholder="Email" onChange={(e)=>setUsername(e.target.value)}></input><br></br>
            <input className ="myinput password" type="password" value = {pw} placeholder="Password" onChange={(e)=>setPw(e.target.value)}></input><br></br>
            <input className ="myinput password" type="password" value = {pw2} placeholder="Repeat Password" onChange={(e)=>setPw2(e.target.value)}></input><br></br>
            <input id = "submitbtn" type="submit" value="SignUp"></input>
            
        </form>
        <p>Already have an account? <Link to="/login">Log in!</Link></p>
        </div> 
        </>
    )
}