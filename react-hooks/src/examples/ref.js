import React, { useState, useEffect, useRef } from "react";

// let renderCount = 1

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState("initial");
  // не значение, а объект
  // если мы хотим изменить объект, то обращаемся .current
  // почему лучше, чем useEffect, - не вызывает повторный рендер компонента, когда его изменяет!(не делает бесконечный цикл)
  // используем тогда, когда не хотим часто перерисовывать
  const renderCount = useRef(1);

  //для получения ссылок на элементы
  const inputRef = useRef(null);

  // также используются для получения предыдущего значения
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
    //смотрим дом элемент(его значение)
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div>
      <h1>Amount of renders: {renderCount.current}</h1>
      <hr />

      <br />
      <br />
      <h2>The previous state: {prevValue.current}</h2>
      <hr />
      <h2>Current state: {value}</h2>

      <input
        // для запоминания ссылки делаем так:
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Focus
      </button>
    </div>
  );
}

export default App;
