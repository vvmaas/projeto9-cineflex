import "./style.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Session from "./Session/Session";
import MoviePoster from "../Home/MoviePoster/MoviePoster"
import axios from "axios";


export default function Sessions() {

    const { movieId } = useParams()
    const [sessionObjs, setSessionObjs] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
        promise.then((res) => setSessionObjs([res.data]))
    }, [])

    return (
        <>
        <span className="title">Selecione o horário</span>
        <div className="sessions">
            {sessionObjs.map(session => session.days.map(day => <Session weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>))}
        </div>
        <div className="bottom-bar">
            {sessionObjs.map(session => <MoviePoster posterURL={session.posterURL} title={session.title} id={session.id}/>)}
            {sessionObjs.map(session => <span className="movie-title"> {session.title} </span>)}
        </div>
        </>
    )
}