import React from 'react'
import './Newsletter.css'
import {IoMdSend} from 'react-icons/io'

function Newsletter() {
  return (
    <div className='newsletter-container'>
        <h1 className='newsletter-title'>Newsletter</h1>
        <div className='newsletter-desc'>Whats fresh ans New: Updates You Don't Want to Miss</div>
        <div className='input-container'>
            <input type="text" className='newsletter-input' placeholder='You Email' />
            <button className='newsletter-button'>
                <IoMdSend className='icon' />
            </button>
        </div>
    </div>
        
  )
}

export default Newsletter