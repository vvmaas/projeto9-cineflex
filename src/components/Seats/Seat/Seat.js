import { useState,useEffect } from "react"
import "./style.css"


export default function Seat({number,available,id,ids}) {
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
            ids.push(id)
            setColor('blue')
            console.log(ids)
        } else {
            for (let i = 0; i<ids.length;i++){
                if (ids[i] === id) {
                    ids.splice(i, 1)
                }
            }
            setColor('gray')
            console.log(ids)
        }
    }
    return (
        <div className={`seat ${color}`} onClick={() => seatClick()}>
            {number}
        </div>
    )
       
    
}