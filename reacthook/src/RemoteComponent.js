import React, { useContext } from 'react';
import Context from './Store'

function RemoteComponent() {

  const { state, dispatch } = useContext(Context)

  const background = state.theme === 'dark'?'black':'yellow'
  const color = state.theme === 'dark'?'white':'black'

  return(
    <div className="App">
        <div>
            <h1 style={{ background, color }}>I am remote</h1>
            <RemoteComponent2/>
        </div>
    </div>
  )
}

function RemoteComponent2(){

    const {state, dispatch} = useContext(Context)

    return <div>
        <h3 onClick={()=>{
            if(state.theme === 'dark'){
                dispatch({ type: 'SET_LIGHT_THEME' })
            }else{
                dispatch({ type: 'SET_DARK_THEME' })
            }
        }}>Mode: {state.theme}</h3>
    </div>
}

export default RemoteComponent;
