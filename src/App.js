import axios from "axios"
import styled from "styled-components"
import Flyers from "./movielist"
import { useEffect, useState } from "react"


export default function App(){
    const [image,setImage]=useState([])
    useEffect(()=>{
        const URL='https://mock-api.driven.com.br/api/v5/cineflex/movies'
    const promise= axios.get(URL)

    promise.then((res)=> {console.log(res.data)
        setImage(res.data)})
    

    

    promise.catch((err)=> console.log(err.response.data))
 
    },[])
    

    return(
        <>
            <Bigbox>
            <Footer>
                <h1>CINEFLEX</h1>
            </Footer>

            <Main>
                
                <h1> Selecione o filme</h1>
                <div>
                    {image.map((img)=> <Flyers key={img.id} img={img}/>)}
                </div>
            </Main>

            </Bigbox>
            
        </>
    )
}



const Bigbox=styled.div`
    width: 600px;
    min-height: 100vh;
    background-color: aliceblue;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const Footer=styled.div`
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
    }
    margin-bottom: 20px;
`

const Main = styled.div`
    background-color: white;
    width: 100%;
   display: flex;
   flex-direction: column;
   height: auto;
   align-items: center;
   
    h1{
      margin: 50px auto;
    }
    div{
        background-color: aqua;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        img{
            margin: 40px;
            width: 200px;
            height: 300px;
            border-radius: 8px;
        }
    }
`