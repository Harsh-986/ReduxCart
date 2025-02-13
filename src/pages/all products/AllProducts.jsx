import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'

function AllProducts() {
  return (
    <div>
        <Navbar />
        <Products heading='Products' items={allProducts}/>
        <Footer></Footer>
    </div>
  )
}

export default AllProducts