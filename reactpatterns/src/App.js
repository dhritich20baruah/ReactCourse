import React, {useState, useRef, useEffect} from 'react';
import './App.css';

let CustomLI = ({ children, activeIndex, index}) =>{
  const renderedCount = useRef(0)

  useEffect(()=>{
    renderedCount.current += 1
  })

  return (
    <li
      style={{ background: activeIndex === index ? 'green' : 'pink'}}
     
      >
        {children} Renders: {renderedCount.current}
      </li>
  )
}

function compare(prevProps, nextProps){//Compares previous props and next props if there is a difference then will rerender if not won't.
  // return true //If true won't rerender if false will rerender
  if(prevProps.activeIndex !== nextProps.activeIndex){
    //possibility of rerender
    if(nextProps.activeIndex === nextProps.index){
      //NOW RE-RENDER
      return false
    }
    if(nextProps.activeIndex === prevProps.index){
      //NOW RE-RENDER
      return false
    }
  }
  return true
}

CustomLI = React.memo(CustomLI, compare)

function App() {
  const [flip, setFlip] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  return(
    <ul
      style={{ background: flip ? 'orange' : 'white'}}
      onMouseEnter={()=>setFlip(true)}
      onMouseLeave={()=>setFlip(false)}
    >
      <input type="number" 
      value={activeIndex}
      onChange={(e) => setActiveIndex(parseInt(e.target.value))}
      />
      <CustomLI prop1={Math.random()}>Hello world 1</CustomLI>
      <CustomLI activeIndex={activeIndex} index={1}>Hello world 2</CustomLI>
      <CustomLI activeIndex={activeIndex} index={2}>Hello world 3</CustomLI>
      <CustomLI activeIndex={activeIndex} index={3}>Hello world 4</CustomLI>
      <CustomLI activeIndex={activeIndex} index={4}>Hello world 5</CustomLI>
      <CustomLI activeIndex={activeIndex} index={5}>Hello world 6</CustomLI>
      <CustomLI activeIndex={activeIndex} index={6}>Hello world 7</CustomLI>
    </ul>
  )
}

export default App;
