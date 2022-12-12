import { Link } from "react-router-dom"

export default function Flyers({img}) {
    function selectedMovie(){
        
    }
    return (
        <>
            <Link to="/Session">
            <img src={img.posterURL} alt="kakashi" onClick={selectedMovie} />
            </Link>
            
        </>
    )
}