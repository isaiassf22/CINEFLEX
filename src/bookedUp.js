import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BookedUp () {
    return(
        <Receipt>

        <h1>
            Pedido feito <br />
            com sucesso!
        </h1>

        <p1>
            Filme e sessão
        </p1>

        <p> shoreline</p>

        <p1>
            Ingresos
        </p1>

        <p> shoreline</p>


        <p1>
            Comprador
        </p1>

        <p> shoreline</p>


        <Link to="/">
            <ToHome>Voltar pra Home</ToHome>
        </Link>
        </Receipt>
    )
}

const Receipt =styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;

    h1{
        text-align: center;
        color: #247A6B;
        font-size: 40px;
    }
    p1{
        margin-left: 35px;
        font-size: 25px;
        font-weight: 600;
    }
    p{
        margin-left: 40px;
        font-size: 20px;
    }
     
`
const ToHome =styled.button`
        margin-left: 25%;
        margin-top: 10px;
        background-color:#E8833A ;
        width: 300px;
        height: 70px;
        color: white;
        font-size: 20px;
`