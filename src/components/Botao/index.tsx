import React, { ReactFragment } from "react"
import style from './Botao.module.scss'

interface Props  {
    type?: "button" | "submit" | "reset" | undefined;
    children?: ReactFragment | undefined;
    onClick?: () => void;
}

const Botao: React.FC<Props> = ({onClick, type, children}:Props) =>{   
    return(
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Botao