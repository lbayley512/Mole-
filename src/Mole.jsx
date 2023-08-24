import {useEffect} from 'react'
import moleImg from './images/mole.png'

const  Mole = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img alt='Moleimg' style={{'width': '30vw'}} src={moleImg} onclick={props.handleClick} />
        </div>
    )
}

export default Mole; 