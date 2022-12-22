import React, {useRef, useContext} from 'react'
import styles from './NewTodo.module.css'
import { TodosContext } from '../store/todos-context'

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()

        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText)
    }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor='text'>To Do text</label>
        <input type='text' id='text' ref={todoTextInputRef} />
        <button>Add To Do</button>
    </form>
  )
}

export default NewTodo