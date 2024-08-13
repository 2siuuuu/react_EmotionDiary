import { useState } from 'react'
import React from 'react'
import Diary from './Pages/Diary'
import Home from './Pages/Home'
import New from './Pages/New'
import NotFound from './Pages/NotFound'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
    <div>공통</div>
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
