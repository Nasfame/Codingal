import {useEffect, useState} from "react"
import './Timer.css'


const display = (number) => (number < 10 ? '0' : '') + number //pad a number
const toMin = (sec) => display(Math.floor(sec / 60))
const toSec = (sec) => display(sec % 60)
const time = (sec) => `${toMin(sec)}:${toSec(sec)}`


const Timer = () => {
    const [seconds, setSeconds] = useState(600)
    const [isActive, setIsActive] = useState(true)
    let interval = null

    const toggle = () => setIsActive(!isActive)

    const reset = () => {
        setSeconds(seconds)
        setIsActive(false)
    }

    useEffect(() => {
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(sec => sec - 1)
            }, 1000)
        } else if (!isActive && seconds != 0)
            clearInterval(interval)
        if (seconds == 0) reset()
        return () => clearInterval(interval)
    }, [isActive, seconds])

    return (
        // <div>
            <strong className="time">
                {time(seconds)}
            {/*<div className="row">*/}
            {/*    <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}*/}
            {/*            onClick={toggle}>*/}
            {/*        {isActive ? 'Pause' : 'Start'}*/}
            {/*    </button>*/}
            {/*    <button className="button" onClick={reset}>*/}
            {/*        Reset*/}
            {/*    </button>*/}
            {/*</div>*/}
                    </strong>

    )
}

export default Timer