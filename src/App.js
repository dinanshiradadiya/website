import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'
import Product1 from '../src/pages/Product1'
import Collections from '../src/pages/Collection'
import Blogs from '../src/pages/Blogs'



function App() {
  return (
    <div>
      {/* <Product />
      <Productprops />
      <Productdescreption />
      <Reletedproduct /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product1' element={<Product1/>}/>
        <Route path='/collection' element={<Collections/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </div>
  )
}

export default App
