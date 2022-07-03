import React from 'react';
import {Button} from '../Button/Button';
import {Counter} from '../Counter';
import style from './Scoreboard.module.css'
import {AppPropsType} from '../App';

export type ScoreboardPropsType = AppPropsType & {
    value: number
    Inc: () => void
    Reset: () => void
    Dec: () => void
}

export const Scoreboard: React.FC<ScoreboardPropsType> =
    ({value, Inc, Reset, Dec, startValue, maxValue}) => {
        return (
            <div className={style.scoreboard}>
                <div className={style.counter}>
                    <Counter value={value} maxValue={maxValue}/>
                </div>
                <div className={style.buttons}>
                    <Button name={'Inc'}
                            callBack={Inc}
                            disabled={value === maxValue}/>
                    <Button name={'Dec'}
                            callBack={Dec}
                            disabled={false}/>
                    <Button name={'Reset'}
                            callBack={Reset}
                            disabled={value === startValue}/>

                </div>
            </div>
        )
    }
