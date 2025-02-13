import React from 'react'
import './Categories.css'
import { categories } from '../../data'
import {Link} from 'react-router-dom' ;


function Categories() {
  return (
    <div className='categories-container'>
        {categories.map((item) => (
            <div key={item.id} className='category-container'>
                <img src={item.img} alt="" />
                <div className='category-info'>
                    <h1>{item.title}</h1>
                    <Link to='/products'><button>Shop Now</button></Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Categories