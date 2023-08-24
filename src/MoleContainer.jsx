import React, {useState} from 'react'
import Mole from './Mole'
import Empty from './EmptySlot'

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)
    const handleClick = (e) => {
        props.setscore(props.score + 1)
        setTheMole(false)
    }
    
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <Empty toggle={setTheMole} />

    return (
        <div style={{'display' : 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer