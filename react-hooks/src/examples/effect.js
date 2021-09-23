import React, {useState, useEffect} from 'react'



function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x:0, y:0,
  })

  // происходит каждый раз, когда происходит рендер компонента
  // в массиве передаем то, от чего зависит наш useEffect

  // можно использовать useEffect для наблюдения и для дальнейшего изменения
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setData(json))
  }, [type])



  const mouseMoveHandler = ev=>{
      setPos({
        x:ev.clientX, 
        y:ev.clientY,
      })
    }

   // можно использовать  в качестве lifecycle
   //  в useEffect в return можно передавать callback для удаления слушателей
   useEffect(()=>{
    console.log('componentDidMount')

    window.addEventListener('mousemove', mouseMoveHandler)


    return ()=>{
      window.addEventListener('mousemove', mouseMoveHandler)
    }
  }, [])
  
  return (
    <div>
        <h1>
        resource: {type}
        </h1>
        <button onClick={()=>setType('Users')} className="btn btn-primary">Users</button>
        <button onClick={()=>setType('Todos')} className="btn btn-danger">Todos</button>
        <button onClick={()=>setType('Posts')} className="btn btn-primary">Posts</button>

        {/* <pre>
          {
            JSON.stringify(data, null, 2)
          }
        </pre> */}

      <pre>
          {
            JSON.stringify(pos, null, 2)
          }
        </pre>

    </div>
  );
}

export default App;