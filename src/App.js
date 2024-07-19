import React from 'react'
import Product from './component/Product'
import Productprops from './component/Productprops'
import Productdescreption from './component/Productdescreption'
import Reletedproduct from './component/Reletedproduct'
import { Route, Routes } from 'react-router-dom'
import Product1 from './pages/Product1'
import Home from "./pages/Home"
import Collections  from './pages/Collection'
import Blogs from "./pages/Blogs"

function App() {
  return (
    <div>
      <Product />
      <Productprops />
      <Productdescreption />
      <Reletedproduct />
    </div>
  )
}

export default App;
