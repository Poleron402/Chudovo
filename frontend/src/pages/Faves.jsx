import { useOutletContext, useNavigate, useLocation} from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import {userContext} from "../App"
import axios from "axios"
import { Row} from "react-bootstrap";
import { MyCards } from "../components/MyCards";
import stacks from "../assets/stacks.gif"
export const Faves=()=>{
    // const lastVisited = useRef();
    const{user, setUser} = useContext(userContext)
    const {list, myList} = useOutletContext()
    let navigate = useNavigate()
    let token = localStorage.getItem("token")
    const getFaves=async()=>{   
        if (token){
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        let response = await axios.get("http://127.0.0.1:8000/api/v1/watchlist/")
        myList(response.data['My Coins'])
        console.log(list)
        }else{
            setUser(null)
        }
    }
    const logOut = async() =>{
        let response = await axios.post("http://127.0.0.1:8000/api/v1/users/logout/")
        if(response.status === 204){
            localStorage.removeItem("token");
            delete axios.defaults.headers.common["Authorization"];
            setUser(null);
            navigate("/login", {replace: true})
        }
    }

    // const getCoin = async()=>{
    //     if(!coin){
    //       return;
    //     }else{
    //       try{
    //         let response = await axios(`https://api.coincap.io/v2/assets/${coin.replace(" ", "-")}`)
    //         setData(response.data)
    //         console.log(response.data)
    //       }catch (e){
    //         console.log("Error fetching data: ", e)
    //       }
    //     }
    //   }
    //   useEffect(()=>{
    //     const intervalId = setInterval(() => {
    //       getCoin()
    //     }, 4000);
    //     return () => {
    //       clearInterval(intervalId);
    //     };
    //   }, [])
    const removeCard = (rmCard)=>{
        myList((prevCards) => prevCards.filter((card)=>card.name !==rmCard))
      }
    useEffect(()=>{
        getFaves()
    }, [user])
    return(
        <>
            {user?(<><h1 className="main">Hello, {user.email}</h1>
            <button onClick={()=>logOut()}>Logout</button>
            <Row className = "myrow">
            {list && list.length > 0 ? (
            list.map((coin) => (<MyCards rmCard = {removeCard} data={coin}/>))
          ) : (
            <p>No coins found</p>
          )} </Row>
            </>):(<div className="main"><h1 id="lgn">Login or Sign up to use the app</h1>
            <img id="stacks" src={stacks} ></img></div>)}
           
        </>
    );
}