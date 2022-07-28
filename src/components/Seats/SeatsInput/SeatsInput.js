import "./style.css"

export default function SeatsInput() {
    return (

        <div className="seats-input">
            <div className="name">
                Nome do comprador:
                <input className="name-input" placeholder="  Digite seu nome..."></input>
            </div>

            <div className="cpf">
                CPF do comprador:
                <input className="cpf-input" placeholder="  Digite seu CPF..."></input>
            </div>
        </div>
    )
}