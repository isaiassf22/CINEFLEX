import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Flyers from "./flyers" 
 
export default function HomePage(){
    const [images,setImages]=useState([])
     
    useEffect(()=>{
        const URL='https://mock-api.driven.com.br/api/v5/cineflex/movies'
    const promise= axios.get(URL)

    promise.then((res)=> {console.log(res.data)
        setImages(res.data)})

    promise.catch((err)=> console.log(err.response.data))
 
    },[])
    
    if(images.length===0){
        return(
            <h2>Carregando...</h2>
        )
    }
    return(
        <>
            
            <Main>
                
                <h1> Selecione o filme</h1>
                <div>
                        {images.map((img)=> <Flyers key={img.id} img={img}/>)}
                </div>
            </Main>

            
        </>
    )
}



const Main = styled.div`
    background-color: white;
    width: 100%;
   display: flex;
   flex-direction: column;
   height: auto;
   align-items: center;
   border-top:  1px solid gray;
   
    h1{
      margin: 50px auto;
      
    }
    div{
        
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border-top: 0.3px solid gray;
        img{
            margin: 40px;
            width: 200px;
            height: 300px;
            border-radius: 8px;
        }
    }
`
