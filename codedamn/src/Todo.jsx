// import React, { useState } from "react";


// let globalID = 0

// function Todo() {
//   const [task, setTask] = useState("")
//   const [todos, setTodos] = useState([])

//   function createTodo(event) {
//     event.preventDefault()
//     setTodos(oldTodos => {
//       setTask('')
//       return [...oldTodos, {todo: task, id: globalID++ }]
//     })
//   }

//   function deleteItem(itemID){
//     setTodos(oldTodos=>oldTodos.filter(item=>item.id!==itemID))
//   }

//   // function checkEnter(e) {
//   //   if (e.keyCode === 13) {
//   //     createTodo()
//   //   }
//   // }
//   // onKeyDown={checkEnter} Don't need this if it is a form 

//   return (
//     <>
//       <div><h1> To Do App</h1>
//         <form onSubmit={createTodo}>
//           <input type="text" name="item" id="entry" value={task} onChange={event => {
//               setTask(event.target.value)
//             }} />
//           <button type="submit">Create task</button>
//         </form>
//         <ul>
//           {todos.map((item, index) => {
//             return <div key={item.id}>
//                <li>{item.todo} {item.id}</li>
//                <button onClick={()=>deleteItem(item.id)}>Delete</button>
//             </div>
//           })}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default Todo;