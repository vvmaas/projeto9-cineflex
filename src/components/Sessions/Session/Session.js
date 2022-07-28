import ShowtimeButton from "./ShowtimeButton/ShowtimeButton"
import './style.css'

export default function Session({weekday, date, showtimes}) {



    return (
        <>
            <span className="day-date">{weekday} - {date}</span>
            <div className="showtimes">
            {showtimes.map(showtime => <ShowtimeButton time={showtime.name} id={showtime.id}/>)}
            </div>
        </>
    )
}