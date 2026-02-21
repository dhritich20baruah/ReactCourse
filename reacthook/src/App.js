import React, { useState, useReducer } from 'react';
import './App.css';
import RemoteComponent from './RemoteComponent'
import Context from './Store';
import { useCounter, useLocalStorage } from './hooks';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DARK_THEME': {
      return {
        ...state,
        theme: 'dark'
      }
    }
    case 'SET_LIGHT_THEME': {
      return {
        ...state,
        theme: 'light'
      }
    }
  }
}

function App() {

  const { count, add, sub } = useCounter(100)

  const [name, setName] = useLocalStorage('user-name', 'Dhriti')

  const [email, setEmail] = useLocalStorage('email', 'dhriti.baruah20@gmail.com')


  const [state, dispatch] = useReducer(reducer, {
    theme: 'dark'
  })

  return (
    <div className="App">
      {/* JSX element provided by createContext helps to inject a value that can be accssed by any child down the line*/}
      <Context.Provider value={{ state, dispatch }}>
        <h2>I am local</h2>
        <RemoteComponent />
      </Context.Provider>
      <h1 onClick={sub}>Counter 1 @ {count}</h1>

      <h1>Local Storage Hook</h1>
      <h2>Name: {name}</h2>
      <input type="text" value={name} onChange={(e) => {
        setName(e.target.value)
      }} />

      <h2>Email: {email}</h2>
      <input type="email" value={email} onChange={(e) => {
        setName(e.target.value)
      }} />
    </div>
  )

}

export default App;
