import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../Account/Signin'
import Signup from '../Account/Signup'
import Home from '../Home/Home'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/dashboard' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Signin />} />
        </Routes>
    </div>
  )
}

export default AllRoutes