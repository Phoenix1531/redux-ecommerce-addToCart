import React from 'react'
import Navbar from './component/Navbar'
import Content from './component/Content'
import Cart from './component/Cart'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App