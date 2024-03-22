import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import FilterProducts from './Component/FilterProducts/FilterProducts'
import SingleProd from './Component/SingleProd'

import ShoppingCart from './Component/FilterProducts/ShoppingCart'
import { LoginCard } from './Component/Login/Login'
import {  useSelector } from 'react-redux'



function App() {


  const user=useSelector(state => state.Auth.authUser)
 console.log(user);


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header/>}></Route>
    <Route path='/filter/:type' element={<FilterProducts/>}></Route>
    <Route path='/filter/:type/:id' element={<SingleProd/>}></Route>
    <Route path='/Shoppingcart' element={<ShoppingCart/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
