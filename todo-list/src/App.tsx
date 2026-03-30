import React, { useState, type ButtonHTMLAttributes } from 'react'
import './App.css'

function App() {
  let listaInicial = [{
    id: '1',
    isDone: false,
    todo: "José casou de calças curtas"
  }, {
    id: '2',
    isDone: false,
    todo: "Me traga calça marrom e camisa vermelha pra guerra"
  }, {
    id: '3',
    isDone: false,
    todo: "Quero comer pizza"
  }]

  const [todoList, setTodoList] = useState<Array<{ id: string, isDone: boolean, todo: string }>>(listaInicial)
  const [task, setTask] = useState<string>("")

  function handleClick() {
    setTodoList([...todoList, { id: (todoList.length + 1).toString(), isDone: false, todo: task }])
    setTask("")
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
  }

  return (
    <div>
      <h1>Todo-list</h1>
      <div>
        <input
          value={task}
          onChange={handleChange}
        />
        <button onClick={handleClick}> Incluir </button>
      </div>
      {todoList.map(todo => <div key={todo.id}>
        <input type="checkbox" checked={todo.isDone} onChange={() => {
          setTodoList(todoList.map(t => t.id === todo.id ? { ...t, isDone: !t.isDone } : t))
        }} />
        <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.todo}</span>
      </div>)}
    </div>

  )
}

export default App
