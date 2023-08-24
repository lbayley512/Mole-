import {useEffect} from 'react'
import moleHillImg from './images/molehill.png'

function Empty(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            alt="img"
            src={moleHillImg}
            />
        </div>
    )
}

export default Empty; 