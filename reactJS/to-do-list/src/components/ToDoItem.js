import React from 'react'; 
import styles from './ToDoItem.module.css';

const ToDoItem = ({todo, dispatch}) => {

    return (
        <div className={styles.toDoItem}>
            <input
                type="checkbox"
                checked={!!todo.complete}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: { id: todo.id} })}
            />
            <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
                {todo.name}
            </span>
            <button className={styles.deleteButton} onClick={() => dispatch({ type: 'DELETE_TODO', payload: {id: todo.id}})}>
            Delete
            </button>
        </div>
    )
}

export default ToDoItem;