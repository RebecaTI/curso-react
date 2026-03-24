import { useState } from "react";
interface DemoProps { }

export default function Demo({ }: DemoProps) {
  const [count, setCount] = useState(0); //Dentro do useState é o estado inicial, ou seja, o valor que a variável de estado vai começar. No caso, 0. O useState retorna um array com dois elementos: o primeiro é a variável de estado (count) e o segundo é a função para atualizar essa variável (setCount). O array é desestruturado para obter essas duas variáveis.
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <button onClick={() => setCount(count - 1)}> Decrement</button>
    </div>
  )
}
