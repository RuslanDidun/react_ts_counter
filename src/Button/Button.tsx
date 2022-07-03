import React from 'react'
import style from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = ({name, callBack, disabled}) => {
    return (
        <>
            <button className={style.button}
                    onClick={callBack}
                    disabled={disabled}
            >{name}</button>
        </>
    )
}