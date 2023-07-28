import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Tirth from '../pages/Tirth'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tirth' element={<Tirth/>} />
    </Routes>
  )
}

export default AllRoutes;