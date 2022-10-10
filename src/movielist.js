export default function Flyers({img}) {
    function selectedMovie(){
        alert ('selected')
    }
    return (
        <>
            <img src={img.posterURL} alt="kakashi" onClick={selectedMovie} />
        </>
    )
}