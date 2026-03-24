import { useState } from "react";
// import Demo from "./hookComponent/1-useState";

function App() {
  const [count, setCount] = useState(0); //Dentro do useState é o estado inicial

  return (
    <>
      {/* <Demo /> */}
      <div className="classeInicial">
        <p>Thiago</p>
        <button onClick={() => setCount(count + 1)}>
          Count {count}
        </button>
      </div>
    </>
  )
}

export default App
