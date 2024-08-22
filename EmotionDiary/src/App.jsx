import { useState } from 'react'
import React from 'react'
import Diary from './Pages/Diary'
import Home from './Pages/Home'
import New from './Pages/New'
import NotFound from './Pages/NotFound'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'



function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    console.log("onClickButton Event");
    nav("/new");
  }

  return (
    <>
    <div>공통</div>

    <button> onClick={onClickButton}
      New 페이지로 이동
    </button>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/diary' element={<Diary />}/>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App
