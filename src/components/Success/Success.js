import "./style.css"
import { Link, useLocation } from "react-router-dom";


export default function Success() {
    let {cpf, name, ids, sessionId, seatsObjs} = useLocation().state
    console.log(cpf)
    console.log(name)
    console.log(sessionId)
    console.log(seatsObjs)



    return (
        <>
            <span className="success-message">Pedido feito com sucesso!</span>
            <div className="success-info">
                <div className="success-movie">
                    <span>Filme e sessão</span>
                    <div>{seatsObjs[0].movie.title}</div>
                    {seatsObjs[0].day.date}  {seatsObjs[0].name}
                </div>
                <div className="success-seats">
                    <span>Ingressos</span>
                    {ids.map(seat => <div>Assento {(-(sessionId*50) + seat)+ 50}</div>)}
                </div>
                <div className="success-inputs">
                    <span>Comprador</span>
                    <div>Nome: {name}</div>
                    CPF: {cpf[0]}{cpf[1]}{cpf[2]}.{cpf[3]}{cpf[4]}{cpf[5]}.{cpf[6]}{cpf[7]}{cpf[8]}-{cpf[9]}{cpf[10]}
                </div>
            </div>
            <Link to="/">
            <div className="go-home-button">Voltar para Home</div>
            </Link>
        </>
    )
}