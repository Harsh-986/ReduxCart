import React from 'react'
import { newArrivals } from '../../data'
import Products from './Products'

function NewArrivals() {
  return <Products items = {newArrivals} heading = "New Arrivals"/>
}

export default NewArrivals