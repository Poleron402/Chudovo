import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { userContext } from "../App"

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
        <h1 className="main">Welcome</h1>

        <form onSubmit={(e)=>signUp(e)} className = "main">
            <label for="1">Email</label>
            <input className ="myinput" id= "1" type="text" value = {username} placeholder="janedoe@eample.com" onChange={(e)=>setUsername(e.target.value)}></input><br></br>
            <label for="2">Password</label>
            <input className ="myinput" id="2" type="password" value = {pw} placeholder="password" onChange={(e)=>setPw(e.target.value)}></input><br></br>
            <label for="3">Re-enter password</label>
            <input className ="myinput" id="3" type="password" value = {pw2} placeholder="password" onChange={(e)=>setPw2(e.target.value)}></input><br></br>
            <input id = "submitbtn" type="submit" value="SignUp"></input>
        </form>
        </>
    )
}