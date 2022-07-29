import "./style.css"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Seat from "./Seat/Seat"
import SeatsChart from "./SeatsChart/SeatsChart"
import axios from "axios";


export default function Seats() {
    const { sessionId } = useParams()
    const [seatsObjs, setSeatsObjs] = useState([])
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [ids, setIds] = useState([])

    function submitInput(e) {
        e.preventDefault();
        console.log(name, cpf, ids)



        if (ids.length === 0){
            alert('Selecione seus assentos.')
        } else {
        const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', 
        {
            ids,
            name,
            cpf,
        })
        setCpf('')
        setName('')
        setIds([])
    }
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`)
        promise.then((res) => setSeatsObjs([res.data]))
    }, [])

    return (
        <>
        <span className="title">Selecione o(s) assento(s)</span>
        <div className="seats-display">
        {seatsObjs.map(seats => seats.seats.map(seat => <Seat number={seat.name} available={seat.isAvailable} id={seat.id} ids={ids} />))}
        </div>

        <SeatsChart />

        <form onSubmit={submitInput}>

        <div className="seats-input">
            <div className="name">
                Nome do comprador:
                <input type='text' className="name-input" placeholder="  Digite seu nome..." required value={name} onChange={e=>setName(e.target.value)}></input>
            </div>

            <div className="cpf">
                CPF do comprador:
                <input type='text' className="cpf-input" placeholder="  Digite seu CPF (apenas numeros)..." required value={cpf} onChange={e=>setCpf(e.target.value)}></input>
            </div>
        </div>

        
        <button className="final-button" type="submit">Reservar assento(s)</button>
   
        </form>

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