import React from "react"
import Item from "./Item"
import style from './Lista.module.scss'
import { ITarefa } from "../../types/tarefa"

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionado:ITarefa) => void 
}

function Lista({tarefas, selecionaTarefa} : Props){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
               {tarefas.map((item:ITarefa, index)=> (
                   <Item 
                        key={item.id} 
                        {...item}
                        selecionaTarefa={selecionaTarefa}
                   />
               ))}
            </ul>
        </aside>
    )
}

export default Lista