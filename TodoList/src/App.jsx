import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import TodoForm from './TodoListForm'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localItem = localStorage.getItem('ITEMS')
    if (localItem === null) return []
    return JSON.parse(localItem)
  })
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function changeChecked(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id)
    })
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1>To Do List!</h1>
      <TodoList
        todos={todos}
        changeChecked={changeChecked}
        deleteTodo={deleteTodo}
      />
    </>
  )
}
