import { TodoItem } from './TodoItem'

export default function TodoList({ todos, changeChecked, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && 'No Todos Available!'}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id} //pass the key becuase we are passing the array (spread out array)
            changeChecked={changeChecked}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
