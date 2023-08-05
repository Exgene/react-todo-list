import { useState } from 'react'

export default function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem == '') return
    onSubmit(newItem)
    setNewItem('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-list-form">
      <div className="OneRow">
        <label htmlFor="item">New Todo</label>
        <input
          id="item"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value)
          }}
          type="text"
        />
      </div>
      <button className="btn" type="submit">
        addItem
      </button>
    </form>
  )
}
