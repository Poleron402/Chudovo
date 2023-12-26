import axios from "axios"
import { MyCard } from '../components/MyCard'
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';
export const Home = ()=>{
    const {list, myList} = useOutletContext()
    const [coin, setCoin] = useState(undefined)
    const [data, setData] = useState(null)
    const [about, setAbout] = useState("")
    const onSubmitHandler = (e)=>{
      e.preventDefault()
      getCoin()
    }
    const getCoin = async()=>{
      if(!coin){
        return;
      }else{
        try{
          let response = await axios(`https://api.coincap.io/v2/assets/${coin.replace(" ", "-")}`)
          setData(response.data)
          console.log(response.data)
        }catch (e){
          console.log("Error fetching data: ", e)
        }
      }
    }
    const getAbout = async()=>{
      let response = await axios(`http://127.0.0.1:8000/api/v1/prompt/${data.data.id}`)
      setAbout(response.data[1][1][0][2][1][0][1])
      console.log(response.data)
    }
    const getTheList = async()=>{
      let token = localStorage.getItem("token")
      if(token){
          axios.defaults.headers.common['Authorization'] = `Token ${token}`;
          let response = await axios.get("http://127.0.0.1:8000/api/v1/watchlist/")
          myList(response.data["My Coins"])
      }
  }
  useEffect(()=>{
    getTheList()
  }, [])
    // useEffect(()=>{
    //   getAbout()
    // }, [data])
    // useEffect(()=>{
    //   const intervalId = setInterval(() => {
    //     getCoin()
    //   }, 4000);
    //   return () => {
    //     clearInterval(intervalId);
    //   };
    // }, [coin])
    
    return (
      <div className="main">
      <h3 className="title">Get coin stats</h3>
      <form  onSubmit={(e)=>onSubmitHandler(e)}>
        <input className ="myinput"
        type="text" 
        placeholder = "enter a coin" 
        value = {coin} 
        onChange={(e)=>setCoin(e.target.value.toLowerCase())}></input>
        <br></br>
        <input id = "submitbtn" type="submit" ></input>
      </form>
      {data?(<>
      <MyCard data = {data.data} list = {list} myList={myList}></MyCard>
      {about?
      <Accordion  defaultActiveKey="0">
      <Accordion.Item eventKey="0" id="infodion">
        <Accordion.Header id="dionheader">About {data.data.id.toUpperCase()}</Accordion.Header>
        <Accordion.Body>
          {about}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>:<Spinner id = "myspin" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
      </>):(<h4 className="title">Enter the name of the currency to view</h4>)}
    </div>
    )
}