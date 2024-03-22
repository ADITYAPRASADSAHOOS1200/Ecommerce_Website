import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Filterpage from './Filterpage'
import Product from './ProductSection/Product'
import Footer from './ProductSection/Footer'

const Header = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Filterpage/>
      <Product/>
      <Footer></Footer>
    </div>
  )
}

export default Header
