import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from './scoreBoard/Scoreboard';

export type AppPropsType = {
    startValue: number
    maxValue: number
}

const App: React.FC<AppPropsType> = ({startValue, maxValue}) => {

    let [count, setCount] = useState<number>(startValue)

    const Increment = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const Decrement = () => {
        if (count < maxValue) {
            setCount(count - 1)
        }
    }

    const Reset = () => {
        setCount(startValue)
    }

    return (
        <>
            <Scoreboard value={count}
                        Inc={Increment}
                        Dec={Decrement}
                        Reset={Reset}
                        startValue={startValue}
                        maxValue={maxValue}
            />
        </>
    );
}

export default App;
