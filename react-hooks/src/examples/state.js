import React, { useState } from "react";

function computedInitialCounter() {
  console.log("Some calculations...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counterState, setCounterState ]= useState(0)
  //для оптимизации вызываем коллбек
  const [counterState, setCounterState] = useState(() => {
    return computedInitialCounter();
  });

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now(),
  });

  function increment() {
    // setCounterState(counterState+1)
    setCounterState((prevCounter) => {
      return prevCounter + 1;
    });
    // setCounterState((prevCounter)=>{
    //   return prevCounter+1
    // })
  }
  function decrement() {
    setCounterState(counterState - 1);
  }
  function update() {
    setState((prev) => {
      return {
        ...prev,
        title: "New name",
      };
    });
  }
  return (
    <div>
      <h1>Counter:{counterState}</h1>
      <button className="btn btn-success" onClick={increment}>
        increase
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        decrease
      </button>
      <button className="btn btn-default" onClick={update}>
        change title
      </button>

      <br></br>
      <br></br>
      <button
        className="btn btn-success"
        onClick={() => setCounterState(counterState + 1)}
      >
        increase +1
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setCounterState(counterState - 1)}
      >
        decrease -1
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
