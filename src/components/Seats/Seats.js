import "./style.css"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Seat from "./Seat/Seat"
import SeatsInput from "./SeatsInput/SeatsInput"
import SeatsChart from "./SeatsChart/SeatsChart"
import axios from "axios";


export default function Seats() {
    const { sessionId } = useParams()
    const [seatsObjs, setSeatsObjs] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
        promise.then((res) => setSeatsObjs([res.data]))
    }, [])

    return (
        <>
        <span className="title">Selecione o(s) assento(s)</span>
        <div className="seats-display">
        {seatsObjs.map(seats => seats.seats.map(seat => <Seat number={seat.name} available={seat.isAvailable} id={seat.id}/>))}
        </div>

        <SeatsChart />

        <SeatsInput />

        <Link to="/sucesso">
            <div className="final-button">Reservar assento(s)</div>
        </Link>

        <div className="bottom-bar-seat">
            {seatsObjs.map(seats => <img className="movie-poster-seat" src={seats.movie.posterURL} alt={seats.movie.title} />)}
            <div className="bottom-bar-text">
            {seatsObjs.map(seats => <span className="movie-title-seat"> {seats.movie.title} </span>)}
            {seatsObjs.map(seats => <span className="movie-time-seat"> {seats.day.weekday} - {seats.name} </span>)}
            </div>
        </div>
        </>
    )
}