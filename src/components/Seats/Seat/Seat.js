import { useState,useEffect } from "react"
import "./style.css"


export default function Seat({number,available,id}) {
    let [color, setColor] = useState('gray')
    
    useEffect(() => {
        if (available === false) {
            setColor('yellow')
        }
    }, [])

    function seatClick(){
        if (color === 'yellow'){
            alert('Esse assento já foi comprado')
        } else if (color === 'gray'){
            setColor('blue')
        } else {
            setColor('gray')
        }
    }
    return (
        <div className={`seat ${color}`} onClick={() => seatClick()}>
            {number}
        </div>
    )
       
    
}