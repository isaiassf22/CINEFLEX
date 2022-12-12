import HomePage from "./homePage"
import styled from "styled-components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Session from "./availiability"
import BookTicket from "./bookTicket"
import BookedUp from "./bookedUp"


export default function App() {


    return (
        <>
            <BrowserRouter>
                <Bigbox>
                    <Header>
                        <h1>CINEFLEX</h1>
                    </Header>
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/session" element={<Session/>}/>
                        <Route path="/bookTicket" element={<BookTicket/>}/>
                        <Route path="/bookedUp" element={<BookedUp/>}/>
                    </Routes>
                    
                </Bigbox>
            </BrowserRouter>

        </>
    )
}
const Bigbox = styled.div`
    width: 600px;
    min-height: 100vh;
    background-color: aliceblue;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 0.5px solid grey;
`

const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: #E8833A;
        margin: 0 auto;
        font-size: 40px;
        border: 1px sol;
    }
    margin-bottom: 20px;
`
