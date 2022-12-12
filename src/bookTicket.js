import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BookTicket () {
    let seatNumbers=[]
    for(let i=1; i<=50;i++){
        seatNumbers.push(i)
    }
    return(
        <>
        <ToBookUp>
            <h1>selecione os assentos</h1>
            <Seats>
                {seatNumbers.map((number)=><button>{number}</button>)}
            </Seats>
            <Link to="/bookedUp" > next</Link>
        </ToBookUp>
      
        </>
    )
}

const Seats=styled.div`

    width: 90%;
    height: auto;
    margin: 0 auto;
    background-color: beige;
    justify-content: center;
    button{
        width: 38px;
        height: 38px;
        margin: 8px;
        background-color: aliceblue;
        border-radius: 50%;
    }
`
const ToBookUp=styled.div`
    width: 100%;
    background-color: white;
    height: 80vh;
    display: flex;
    flex-direction: column;
    h1{
        text-align: center;
        margin-bottom: 70px;
    }
`