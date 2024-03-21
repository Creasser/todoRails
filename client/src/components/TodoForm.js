import React, { useState } from "react";

function TodoForm(){
    const [todo, setTodo] = useState({
        title: '',
        description: ''
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value
        setTodo({
            ...todo,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo.title}
                    name="title"
                    placeholder="Enter Todo Title"
                    onChange={handleChange}>
                </input>
                <input
                    type="text"
                    value={todo.description}
                    name="description"
                    placeholder="Enter Description"
                    onChange={handleChange}>
                </input>
                <input
                type="submit"
                name="submit"
                ></input>
            </form>
        </div>
    )
}

export default TodoForm