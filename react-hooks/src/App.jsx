import React, {useEffect, useState} from "react";

function useLogger(value){
  useEffect(()=>{
    console.log('Value changed: ', value)
  }, [value])
}

function useInput(initalValue){
  const [value, setValue]=useState(initalValue)
  const onChange=(ev)=>{
    setValue(ev.target.value)
  }
  const clear =()=>{
    setValue('')
  }
  return {
    // value, onChange,
    bind:{value, onChange},
    value,
    clear,
    

  }
}


function App() {
  const input = useInput('')
  const lastName = useInput('')

  // const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')


  // const changeHandler = (ev) =>{
  //   setName(ev.target.value)
  // }
  // const changeHandlerLastName = (ev) =>{
  //   setLastName(ev.target.value)
  // }

  useLogger(input.value)

  return (
    <div className={'container pt-3'}>
      {/* <input type="text" value={input.value} onChange={input.onChange}/> */}

      <input type="text" {...input.bind}/>
      <button className="btn btn-warning" onClick={()=>input.clear()}>Clear</button>
      <input type="text" {...lastName.bind} onClick={()=>lastName.clear()}/>
      <button className="btn btn-warning">Clear</button>


      {/* <input type="text" value={lastName} onChange={changeHandlerLastName}/> */}
    <hr />
      <h1>{input.value}</h1>
      <h1>{lastName.value}</h1>

      {/* <h1>{lastName}</h1> */}

    </div>
  );
}

export default App;
