import React, {useReducer, useState, useEffect} from 'react'; 
import ToDoItem from './components/ToDoItem';
import './App.css';

function reducer(toDoList, action) {

    function newToDo(name) {
        return { id: Date.now(), name: name, complete: false }
    }

    switch (action.type) {
        case 'ADD_TODO':
            return [...toDoList, newToDo(action.payload.name)];

        case 'TOGGLE_TODO':
            return toDoList.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, complete: !item.complete }
                }
                return item;
            })
        
        case 'DELETE_TODO':
            return toDoList.filter(item => item.id !== action.payload.id)

        default:
            return toDoList;
    }
}

function App() {

    const [toDoList, dispatch] = useReducer(reducer, [], () => {
        const localData = localStorage.getItem('toDoList');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('toDoList', JSON.stringify(toDoList))
    }, [toDoList]);

    const [name, setName] = useState('');

    function addNewToDo(e) {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: { name: name }});
        setName('');
    }

    return (
        <div className="wrapperDiv">
            <h1>To Do List!</h1> 
            <div className="inputDiv">
                <form onSubmit={addNewToDo}>
                    <input className="formInput" type="text" value={name} onChange={ (e) => setName(e.target.value)} />
                    <button className="formButton" type="submit">Add Task!</button>
                </form>
            </div>
            {toDoList.map(item => {
                return <ToDoItem key={item.id} todo={item} dispatch={dispatch} />
            })}
           
        </div>
    );
}

export default App;
