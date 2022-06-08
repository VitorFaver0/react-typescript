import React, { useState } from "react"
import { ITarefa } from "../../types/tarefa"
import Botao from "../Botao"
import style from './Formulario.module.scss'
import {v4 as uuidv4} from 'uuid'

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

const Formulario: React.FC<Props> = ({setTarefas}:Props) =>{
    const [state, setValue] = useState({
        tarefa: "",
        tempo: "00:00:00"
    })

    function adicionarTarefa(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {   ...state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                },  
            ]
        )
        setValue({tarefa: "", tempo: "00:00:00"})
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                    value={state.tarefa}
                    onChange={(e) => setValue({tarefa: e.target.value, tempo: state.tempo })}
                    />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={state.tempo}
                    onChange={(e) => setValue({tarefa: state.tarefa, tempo: e.target.value})}
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )

}

export default Formulario