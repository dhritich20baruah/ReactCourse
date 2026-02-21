import './App.css';
import React, { useState } from 'react';
import Create from './component/Create';
import Nav from './component/Nav';
import Show from './component/Show';
import Edit from './component/Edit';
import Post from './component/Post';
import Createquill from './component/Createquill';
import { Routes, Route } from "react-router-dom";
import { itemStateContext } from './component/Context'

function App() {
  const [singleItem, setsingleItem] = useState([])

  return (
    <>
      <itemStateContext.Provider value={{ singleItem, setsingleItem }}>
        <Nav />
        <Routes>
          <Route path="Create" element={<Create />} />
          <Route path="Createquill" element={<Createquill />} />
          <Route path="Show" element={<Show />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/Post" element={<Post/>} />
        </Routes>
      </itemStateContext.Provider>
    </>
  );
}

export default App;
