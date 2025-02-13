import React from 'react'
import { bestsellers } from '../../data'
import Products from './Products'

function Bestsellers() {
  return <Products items = {bestsellers} heading = "Bestseller" />
  
}

export default Bestsellers