import React, { useState } from 'react'
import './Slider.css'
import  {IoMdArrowDropleft,IoMdArrowDropright} from 'react-icons/io'
import {sliderItems} from '../../data'
import {Link} from 'react-router-dom' ;


function Slider() {

    const [slideIndex, setSliderIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSliderIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else {
            setSliderIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <div className='slider-container'>
        <div className='arrow' direction='left' onClick={()=>handleClick("left")}>
            <IoMdArrowDropleft className='icon' />
        </div>

        <div className='slider-wrapper' style={{transform :`translatex(${slideIndex * -100}vw)`}}>
            {sliderItems.map((item)=> (
                <div 
                    key={item.id} 
                    className='slide' 
                    style={{backgroundColor: `#${item.bg}`}}
                >
                    <div className='img-container'>
                        <img src={item.img} alt="" className='img' />
                    </div>
                    <div className='info-container'>
                        <h1 className='title'>{item.title}</h1>
                        <p className='desc'>{item.desc}</p>
                        <Link to='/products'><button className='button'>Shop Now</button></Link>
                    </div>
                </div>
                    
            ))}
        </div>
        <div className='arrow' direction='right' onClick={()=>handleClick("right")}>
            <IoMdArrowDropright className='icon'/>
        </div>

    </div>
  )
}

export default Slider