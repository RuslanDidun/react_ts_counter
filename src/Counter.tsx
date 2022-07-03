import React from 'react';
import style from './Counter.module.css'

type MeaningPropsType = {
    value: number
    maxValue: number
}

export const Counter: React.FC<MeaningPropsType> = ({value, maxValue}) => {
    return (
        <div className={value === maxValue ? style.redText : style.classicText}>
            {value}
        </div>
    )
}