import React, {useState} from "react";
import answers from "./answers";
import "./EightBall.css"


const EightBall = () => {

    const [msg, setMsg] = useState('Think of a question.') 
    const [color, setColor] = useState('black')
    const [redCount, setRedCount] = useState(0)
    const [yellowCount, setYellowCount] = useState(0)
    const [greenCount, setGreenCount] = useState(0)

    const getRandomIdx = () => Math.floor(Math.random() * answers.length)

    const setNewState = () => {
        const randomIdx = getRandomIdx()

        setMsg(answers[randomIdx].msg)
        setColor(answers[randomIdx].color)

        let currColor = answers[randomIdx].color; 

        if (currColor === 'red') {
            setRedCount(redCount + 1)
        } else if (currColor === 'goldenrod') {
            setYellowCount(yellowCount + 1)
        } else if (currColor === 'green') {
            setGreenCount(greenCount + 1)
        }
    }

    const reset = () => {
        setMsg('Think of a question.')
        setColor('black')
        setGreenCount(0)
        setRedCount(0)
        setYellowCount(0)
    }

    return (
        <>
        <div style={{backgroundColor: color}} onClick={setNewState} className="EightBall-ball">
            <p className="EightBall-text">{msg}</p>
        </div>
        <button onClick={reset}>Reset</button>
        <div>
            <div>Red: {redCount}</div>
            <div>Yellow: {yellowCount}</div>
            <div>Green: {greenCount}</div>
        </div>
        </>
    )
}

export default EightBall;