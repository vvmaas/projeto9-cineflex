import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header"
import Home from "../Home/Home"
import Seats from "../Seats/Seats"
import Session from "../Sessions/Sessions"
import Success from "../Success/Success"


import "./style.css"


export default function App() {
    return (
        <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:movieId" element={<Session />} />
                <Route path="/assentos/:sessionId" element={<Seats />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>    
        </BrowserRouter>
        </div>
    )
}