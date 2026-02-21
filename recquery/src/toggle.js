import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query'
import {useState} from 'react'

function Button(){
  const { data, error } = useQuery('hello-world', ()=>{
    return new Promise(resolve => {
      setTimeout(()=>resolve(1337), 1000)
    })
  })

  console.log({ data, error})

  return <button>Query Button</button>
}

const fetcher = () => {
  return new Promise(resolve=>{
    return setTimeout(resolve, 1000);
  })
}
function App() {
  //useQuery(KEY, REQUEST which is actually a function)
  const [visible, setVisible] = useState(true)

  const [state, setState] = useState(false)
  useQuery(['todo-single-item', 1], fetcher, {
    enabled: state
  })
  function toggleButton(){
    setVisible(visible => !visible)
  }

  return (
    <div className="App">
      <header className="App-header">
      {visible && <Button/>}
      <button onClick={toggleButton}>Toggle</button>
      <button onClick={()=>setState(c=>!c)}>Click</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
