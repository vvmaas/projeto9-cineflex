import "./style.css"
import { useState, useEffect } from 'react'
import MoviePoster from "./MoviePoster/MoviePoster"
import axios from 'axios'

export default function Home() {

    const [movieObjs, setMovieObjs] = useState([])
    console.log(movieObjs)
    useEffect(() => {    
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        promise.then((res) => {setMovieObjs([...res.data]);})
        }, []);






    return (
        <>
        <span>Selecione o filme</span>
        <div className="movie-posters">
            {movieObjs.map((movie, index) => <MoviePoster title={movie.title} posterURL={movie.posterURL} id={index+1}/>)}
        </div>
        </>
    )
}