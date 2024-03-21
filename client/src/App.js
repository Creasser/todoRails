import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    fetch('/todos')
    .then(r => r.json())
    .then(data => setTodoList(data))
  }, [])

  function handleNewTodo(newTodo){
    setTodoList([...todoList, newTodo])
  }

  function handleTodoDelete(id){
    const updatedTodos = todoList.filter((todo) => todo.id !== id)
    setTodoList(updatedTodos)
  }

  let todoComponents = todoList.map(todo => {
    return <TodoList key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              onTodoDelete={handleTodoDelete}
    />

  })

  return (
    <div className="App">
      <Navbar />
      <TodoForm handleNewTodo={handleNewTodo} />
      <div>
        {todoComponents}
      </div>
    </div>
  );
}

export default App;
