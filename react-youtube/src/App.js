import React,{useEffect} from "react";
import TodoList from "./Todo/TodoList.js";
import Context from "./context.js";
import Loader from "./Loader.js";
import Modal from "./Modal/Modal.js";
// import AddTodo from "./Todo/AddTodo.js";

const AddTodo = React.lazy(()=>
  import('./Todo/AddTodo')
)
// const AddTodo = React.lazy(()=> new Promise(resolve =>{
//   setTimeout(()=>{
//     resolve(import('./Todo/AddTodo'))
//   }, 3000)
// })
  
// )

function App() {
  const [todos, setTodos] = React.useState([]
  //    [
  //   {id:1, completed:false, title:'To buy a loaf of bread' },
  //   {id:2, completed:true, title:'To buy a bottle of milk' },
  //   {id:3, completed:false, title:'To buy a bottle of wine' },
  //   {id:4, completed:false, title:'To buy a piece of cheese' },
  //   {id:5, completed:false, title:'To sleep' },

  // ]
  )
  const [loading, setLoading] = React.useState(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(response => response.json())
  .then(todos => {
    setTimeout(()=>{
      setTodos(todos)
      setLoading(false)
    }, 2000)
    
  })
  }, [])

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
  function addTodo(title){
      setTodos(todos.concat([{
        title,
        id:Date.now(),
        completed:false,
      }]))
  }

  return (
    <Context.Provider value={{removeTodo,}}>
    <div className="wrapper">
      <h1>
        React tutorial
      </h1>
      {/* Для лейзи лоудинга используем реакт саспенз */}
      <Modal/>
      <React.Suspense fallback={<p>Loading...</p>}>
         <AddTodo onCreate={addTodo}/>
      </React.Suspense>
     
      {
        loading && <Loader/>
      }
      {
        todos.length?(<TodoList todos={todos} onToggle={toggleTodo}/> ):
        (loading?null:<p>No todos</p>)
      }
      
    </div>
    </Context.Provider>
  );
}

export default App;
