import React, { useState, useEffect, useCallback } from "react";
import ItemsList from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "blue" : "red",
  };

  // основная разница useCallback и useMemo  втом, что
  // useCallback возвращает саму функцию, которую можно вызвать
  // useMemo возвращает результат этой функции
  const generateItemsFromAPI = useCallback(
    (idxNumber) => {
      // return new Array(count).fill('').map((_, indx)=> `Element ${indx+1}`)
      return new Array(count)
        .fill("")
        .map((_, indx) => `Element ${idxNumber + indx}`);
    },
    [count]
  );

  return (
    <>
      <h1 style={styles}>Amount of elems: {count}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
      {/* <button className="btn btn-danger" onClick={()=>setCount(prev => prev-1)}>Decrease</button> */}
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Color
      </button>
      <hr />
      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}

export default App;
