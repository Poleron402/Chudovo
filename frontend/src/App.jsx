import { Outlet } from 'react-router-dom'
import './App.css'
import { api } from './utilities'
import { MyNav } from './components/MyNav'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'
// https://docs.coincap.io/
export const userContext = createContext();
function App() {
  const [user, setUser] = useState(undefined)
  const [list, myList] = useState([])
  const navigate = useNavigate()
   
  const whoAmI = async()=>{
    let token = localStorage.getItem("token")
    if(token){
        api.defaults.headers.common['Authorization'] = `Token ${token}`;
        let response = await api.get("v1/users/info/")
        setUser(response.data)
    }
    else{
        setUser(null)
        navigate("login")
    }
}
useEffect(()=>{
    whoAmI()
}, [])

  return (
    <>
    <MyNav user={user} setUser = {setUser}/>
    <userContext.Provider value = {{user, setUser}}>
      <Outlet context = {{user, setUser, list, myList}}/>
    </userContext.Provider>
    
    </>
  )
}

export default App
