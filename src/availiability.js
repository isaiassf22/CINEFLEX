import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session() {

    return (
        <>
            <Availiability>
                <h1 >Selecione o horario</h1>

                <p>Quinta -feira  - 24/05/1990</p>
                <Buttons>
                    <Link to="/bookTicket"> <button>15:00</button></Link>
                    <Link to="/bookTicket"> <button>15:00</button></Link>
                </Buttons>


                <p> Sexta- feira 25/05/2010</p>
                <Buttons>
                    <Link to="/bookTicket"> <button>15:00</button></Link>
                    <Link to="/bookTicket"> <button>15:00</button></Link>
                </Buttons>

            </Availiability>
            <Footer01>
                <img src="" alt="" />
                <p>Sherlock Holmes</p>
            </Footer01>
        </>
    )
}
const Availiability = styled.div`
    width: 100%;
    height: 70vh;
    background-color: white;
    border: 1px solid gray;
    h1{
        text-align: center;
    }
    p{
        margin: 30px;
        font-weight: 600;
        font-size: 30px;
    }
    

 `
const Buttons = styled.div`
    display: flex;
    margin: 30px;
    
    button{
            height: 50px;
            width: 90px;
            margin-left: 10px;
            background-color: #E8833A;
            color: #FFFFFF;
        }
 `
const Footer01 = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    img{
        height: 150px;
        width: 90px;
       margin-left: 20px;
    }
    p{
        font-size: 40px;
        margin: 20px;
    }
 `