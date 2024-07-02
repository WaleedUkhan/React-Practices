import { useState } from "react";
import './ToDoList.css'; 
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    let [toDos, setToDos] = useState([{task: "Sample-Task", id: uuidv4(), done: false}]);
    let [newToDo, setNewToDo] = useState("");

    let addNewTask = () => {
        if (newToDo.trim() !== "") {
            setToDos((preToDo) => {
              return ([...preToDo, { task: newToDo, id: uuidv4(), done: false }]);
            })
            setNewToDo("");
        }
    }

    let updatedTodoValue = (event) => {
        setNewToDo(event.target.value);
    }

    let DeletedToDo = (id) => {
        setToDos((preToDo) => toDos.filter((preToDo) => preToDo.id !== id));
    }

    let toggleTaskDone = (id) => {
        setToDos((preToDo) => 
            preToDo.map((todo) => 
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }

    return (
        <div className="todo-container">
            <h1 className="title">TASKS TO DO</h1>
            <input
                type="text"
                className="input-task"
                placeholder="Add a task"
                value={newToDo}
                onChange={updatedTodoValue}
            />
            <button className="add-button" onClick={addNewTask}>Add Task</button>
            <hr />
            <ul className="task-list">
                {toDos.map((todo) => (
                    <li key={todo.id} className="task-item">
                        <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => DeletedToDo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => toggleTaskDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
