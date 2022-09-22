import styles from './NewTask.module.css'
import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return(
    <div className={styles.container}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button>
        Criar
        <PlusCircle color='#F2F2F2' size={20} weight="bold" />
      </button>
    </div>
  )
}