import "./style.css"

export default function SeatsChart() {
    return (
        <>
        <div className="seat-chart">
            <div className="unavailable">
                <div className="circle"></div>
                Indisponível
            </div>

            <div className="available">
            <div className="circle"></div>
            Disponível
            </div>

            <div className="selected">
            <div className="circle"></div>
            Selecionado
            </div>
        </div>
        </>
    )
}