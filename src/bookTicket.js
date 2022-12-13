import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BookTicket() {
    let seatNumbers = []
    for (let i = 1; i <= 50; i++) {
        seatNumbers.push(i)
    }
    return (
        <>
            <ToBookUp>
                <h1>selecione os assentos</h1>
                <Seats>
                    {seatNumbers.map((number) => <button key={number}>{number}</button>)}
                </Seats>
                <Subtitle>
                    <span>
                        <button style={{ backgroundColor: "#0E7D71" }} ></button>
                        <p>Selecionado</p>
                    </span>

                    <span>
                        <button style={{ backgroundColor: "#C3CFD9" }} > </button>
                        <p>Disponivel</p>
                    </span>

                    <span>
                        <button style={{ backgroundColor: "#F7C52B" }}></button>
                        <p>Indisponivel</p>
                    </span>

                </Subtitle>
                <Form>
                    <form action="">
                        <label htmlFor="name">Nome do comprador:</label>
                        <input type="text" name="name" placeholder="Digite seu nome.." />
                        <label htmlFor="CPF">CPF do comprador:</label>
                        <input type="number" name="cpf" id="" placeholder="digite seu CPF.." />
                        <button type="submit"> Reservar Assento(s)</button>

                    </form>
                </Form>


                <Link to="/bookedUp" > next</Link>
            </ToBookUp>
            <Footer02>
                <img src="" alt="" />
                <p>Sherlock Holmes</p>
            </Footer02>
        </>
    )
}

const Seats = styled.div`

    width: 90%;
    height: auto;
    margin: 0 auto;
    justify-content: center;
    button{
        width: 38px;
        height: 38px;
        margin: 8px;
        background-color: #C3CFD9;
        border-radius: 50%;
    }
`
const ToBookUp = styled.div`
    width: 100%;
    background-color: white;
    height: 100vh - 100px;
    display: flex;
    flex-direction: column;
    h1{
        text-align: center;
        margin-bottom: 70px;
    }
`
const Subtitle = styled.div`
    margin:  0 auto;
    margin-top: 20px;
    width: 90%;
    height:auto;
    display: flex;
    justify-content: space-around;
    
    span{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
     button{
        width: 28px;
        height: 28px;
        margin-top:8px;
        background-color: aliceblue;
        border-radius: 50%;
    }

`
const Form = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    margin-top: 30px;
   
    form{
        display: flex;
        flex-direction: column;
        label{
            font-size: 23px;
        }
        input{
            height: 50px;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 20px;
        }
    }
    button{
        margin: 0 auto;
        margin-top: 10px;
        background-color:#E8833A ;
        width: 300px;
        height: 70px;
        color: white;
        font-size: 20px;
    }
 `
const Footer02 = styled.div`
    height: 14vh;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: brown;
    img{
        height: 100px;
        width: 70px;
       margin-left: 20px;
    }
    p{
        font-size: 30px;
        margin: 20px;
    }

`