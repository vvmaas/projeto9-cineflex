import "./style.css"
import { Link } from "react-router-dom";

export default function MoviePoster({posterURL, title, id}) {
    let link = `/sessoes/${id}`
    return (
        <>
        <Link to={link}>
            <div className="movie-poster">
                <img src={posterURL} alt={title} />    
            </div>   
        </Link>          
        </>
    )
}