import React from "react"
import './List.scss';
import Data from "../Helpers/Data"

//Handler for deleting a todo
function deleteTodo(todo){
    Data.deleteTodo(todo);
    window.location.reload();
}

//Handler for checkbox
function handleChange(todo){
    Data.editTodo(todo);
    window.location.reload();
}

function List(props){
    return(
        <div className="list" >
            {props.todoList.map(todo => //From the list of todos, map each todo to it's own div
                <div className="row" className={todo.completed === 1 ? "row completed" : "row notCompleted"} key={todo.id}>
                    <input type="checkbox" checked={todo.completed === 1 ? "checked" : ""} onChange={() => {handleChange(todo)}}/>
                    <p>{todo.todo}</p>
                    <i className="fa fa-trash fa-2x" onClick={() => {deleteTodo(todo.todo)}}></i>
                </div>
            )}
        </div>
    )
}
export default List