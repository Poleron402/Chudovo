import { Card, Button} from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { userContext } from "../App";
import { api } from "../utilities";
export const MyCards = ({data, rmCard})=>{
    const {user, setUser} = useContext(userContext)
    const onClickHandler = async(e)=>{
        try {
            let response = await api.delete(`v1/coin/rm/${data.name}`);
            console.log("Post response:", response.data);
            rmCard(data.name)
            // Handle success, update state, etc.
          } catch (error) {
            console.error("Error posting data:", error);
            // Handle error, show an alert, etc.
          }
    }


    return (
        <>
        <Card id="mycard" style={{ width: '18rem' }}>
            <Card.Img id="bsimg" variant="top" style={{width: '10rem'}} src={`https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`} />
            <Card.Body>
                    <Card.Title >{data.name}</Card.Title>
                    <Card.Text>
                        Started watching at ${data.purchase_price}
                    </Card.Text>
                <Button variant="danger" onClick={(e)=>onClickHandler(e)}>Remove</Button>
            </Card.Body>
        </Card>
        </>
    )
}