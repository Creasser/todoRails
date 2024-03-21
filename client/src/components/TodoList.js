import React from "react";

function TodoList({ id, title, description, onTodoDelete}){

    function handleDelete(id){
        fetch(`/todos/${id}`, {
            method: 'DELETE'
        })

        onTodoDelete(id)
    }

    return(
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <button onClick={() => {
                handleDelete(id)
            }}>Delete</button>
        </div>
    )
}

export default TodoList