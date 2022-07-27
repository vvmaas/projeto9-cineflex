import "./style.css"

export default function MoviePoster({posterURL, title, key}) {
    return (
        <>
            <div className="movie-poster">
                <img src={posterURL} alt={title} />    
            </div>        
        </>
    )
}