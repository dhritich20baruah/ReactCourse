import React, {useState, Suspense} from "react";
// import User from './User'
// import { BrowserRouter, Link, Route } from 'react-router-dom';
import { useQuery } from 'react-query'
import freeCode from "./FreeCode";
import Lorem from "./Lorem"

//Lazy loading
// const Lorem = React.lazy(()=> import('./Lorem'))

function Button(){
  //isLoading, isError, isSuccess, isIdle
  const { data, error,  } = useQuery('hello-world', ()=>{
    return new Promise(resolve => 
      {
        setTimeout(()=>resolve(Math.random()), 2000)
      })
  })

  console.log(error, data)
  return <button>I am a button {data}</button>
}

const fetcher = () => {
  return new Promise(resolve=>{
    return setTimeout(resolve, 1000)
  })
}
function App(){

  const [state, setState] = useState(false)

  const {isIdle} = useQuery(['todo-single-item', 1], fetcher, {
    enabled: false
  })

  console.log('Is idle?', isIdle)
  const [visible, setVisible] = useState(true)

  function toggleButton(){
    setVisible(visible => !visible)
  }

  return(
    <div>
      {visible && <Button/>}
    <button onClick={toggleButton}>Toggle</button>
    <Suspense fallback={
      <div>
        <h1>Loading... Please wait</h1>
        </div>
    }>    
    <Lorem/>
    </Suspense>
    </div>
  )
}
export default App;






/* <h1>ROUTES</h1>
<BrowserRouter>
<nav>
  <ul>
    <li>
      <Link to="/hello-world">Go to Hello World</Link>
    </li>
    <li><Link to="/">Go Home</Link></li>
    <li><Link to="/user/delta">Delta</Link></li>

  </ul>
</nav>
<Route path="/hello-world" exact>
  <h1>I am on route Hello World</h1>
</Route>
<Route path="/" exact>
  <h1>I am on home page</h1>
</Route>
<Route path="/user/:username" exact>
  <User />
</Route>
</BrowserRouter> */