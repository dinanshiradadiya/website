import React from 'react'
import Home from './pages/Home'
import Product1 from './pages/Product1'
import Blogs from './pages/Blogs'
import Collection from './pages/Collection'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Product1 /> */}
        {/* <Collection /> */}
      {/* <Blogs /> */}
      {/* <Footer /> */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product1' element={<Product1 />}></Route>
        <Route path='/collection' element={<Collection />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
      </Routes>
    </div>
  )
}

export default App
