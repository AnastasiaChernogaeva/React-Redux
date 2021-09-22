import React from "react";
import TodoList from "./Todo/TodoList.js";
import Context from "./context.js";

function App() {
  const [todos, setTodos] = React.useState(
     [
    {id:1, completed:false, title:'To buy a loaf of bread' },
    {id:2, completed:true, title:'To buy a bottle of milk' },
    {id:3, completed:false, title:'To buy a bottle of wine' },
    {id:4, completed:false, title:'To buy a piece of cheese' },
    {id:5, completed:false, title:'To sleep' },

  ]
  )

  function toggleTodo(id){
    setTodos(todos.map( todo=>{
      if(todo.id===id){
        todo.completed =!todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id){
    setTodos(todos.filter(
      todo=>todo.id !== id
    ))
  }

  return (
    <Context.Provider value={{removeTodo,}}>
    <div className="wrapper">
      <h1>
        React tutorial
      </h1>
      <TodoList todos={todos} onToggle={toggleTodo}/> 
    </div>
    </Context.Provider>
  );
}

export default App;
