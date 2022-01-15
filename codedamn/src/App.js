import react, { useState, useEffect } from "react";

function App() {
  const [task, settask] = useState("")
  const [todos, setTodos] = useState([
    'Bravo', 'Charli'
  ])

  return (
    <>
      <div><h1> To Do App</h1>
        <input type="text" name="item" id="entry" />
        <button onClick={createTodo} value={task}>Create task</button>
        <ul>
          {todos.map(todo =>{
            return <li>{todo}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App;