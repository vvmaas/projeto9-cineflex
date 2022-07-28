import "./style.css"
import { Link } from "react-router-dom";

export default function MoviePoster({posterURL, title, id}) {
    return (
        <>
        <Link to={`/sessoes/${id}`}>
            <div className="movie-poster">
                <img src={posterURL} alt={title} />    
            </div>   
        </Link>          
        </>
    )
}