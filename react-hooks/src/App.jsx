import React, { useState, useEffect, useMemo } from "react";

//useMemo используется для автоматизации

function complexComputed(num){
  let i = 0
  while(i<1000000000) i++
  return num * 2
}

function App() {

  const [colored, setColored] = useState(false)

  const [number, setNumber] = useState(42)

  //если будут какие-то изменения с number, тогда и будет вызываться эта тяжелая функция, а если нет, то поменяется только тот стейт, который изменился
  const computed = useMemo(()=>{
    return complexComputed(number)
  },[number])



  //при работе с объектами useMemo применяется для того, чтобы кэшировалась ссылка на объект
  // Если так не сделать, то каждый раз при изменении/рендере создается новый объект с другой ссылкой
  const style= useMemo(()=>{
    return {color: colored? 'blue': 'black',}
  }, [colored])
  
  useEffect(()=>{
    console.log('Styles changed')
  }, [style])

  return (
    <>
    <h1 style={style}>Changeable number: {computed}</h1>
    <button className="btn btn-success" onClick={()=>setNumber(prev => prev+1)}>Increase</button>
    <button className="btn btn-danger" onClick={()=>setNumber(prev => prev-1)}>Decrease</button>
    <button className="btn btn-warning" onClick={()=>setColored(prev => !prev)}>Color</button>


    </>
  );
}

export default App;
