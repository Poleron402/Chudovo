import { Card, Button} from "react-bootstrap";
import { useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import { userContext } from "../App";
import axios from "axios";
import { api } from "../utilities";

export const MyCard = ({data, list, myList})=>{
    
    const [liked, setLiked] = useState()
    let mydata = {
        name: data.id.toLowerCase(),
        symbol: data.symbol,
        purchased: false,
        purchase_price: data.priceUsd,
    }
    let token = localStorage.getItem("token")
    const addRemove = async()=>{
        if (token){
            if(liked === true){
                api.defaults.headers.common['Authorization'] = `Token ${token}`;
                let response = await api.delete(`v1/coin/rm/${data.id}`)
                console.log("Coin deleted")
                setLiked(false)
            }else{
                api.defaults.headers.common['Authorization'] = `Token ${token}`;
                let response = await api.post(`v1/coin/`, mydata)
                console.log("Coin added")
                setLiked(true)
            }
        }
    }
    useEffect(()=>{
        setLiked(list.some(obj=>obj.name === data.id))
        console.log(list)
    }, [data])
    console.log(list.some(obj=>obj.name === data.id))

    const onClickHandler=()=>{
        addRemove()
        // setLiked(!liked)
    }
    return(
        <>
        <Card id="mycard" style={{ width: '18rem' }}>
            <Card.Img id="bsimg" variant="top" style={{width: '10rem'}} src={`https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`} />
            <Card.Body>
                    <Card.Title >{data.id.charAt(0).toUpperCase() + data.id.slice(1)} ({data.symbol})</Card.Title>
                    <Card.Text>
                        24hr Change: {data.changePercent24Hr>0?(<span className="statsUp">{data.changePercent24Hr}%</span>):(<span className="statsDown">{data.changePercent24Hr}%</span>)}
                    </Card.Text>  
                    <Card.Text>
                        Current price: {data.changePercent24Hr>0?(<span className="statsUp">${data.priceUsd}</span>):(<span className="statsDown">${data.priceUsd}</span>)}
                    </Card.Text> 
                    <Card.Text>
                        Supply: {data.supply}
                    </Card.Text> 
                    <Button id="mybutton" variant="primary" onClick={()=>onClickHandler()}>
                    {!liked ? '♥' : '✅'}
                    </Button>
            </Card.Body>
        </Card>
        </>
    )

}