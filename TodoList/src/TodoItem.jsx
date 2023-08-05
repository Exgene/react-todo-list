export function TodoItem({ id, title, completed, changeChecked, deleteTodo }) {
  return (
    <li key={id}>
      <label className="label-Item">
        {title}
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            changeChecked(id, e.target.checked)
          }}
        />
      </label>
      <button className="btn btn-delete" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  )
}
