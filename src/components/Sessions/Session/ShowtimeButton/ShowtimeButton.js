import { Link } from "react-router-dom"
import "./style.css"

export default function ShowtimeButton({ time, id }) {
    return (
        <Link to={`/assentos/${id}`}>
            <div className="showtime-button">
                {time}
            </div>
        </Link>
    )
}