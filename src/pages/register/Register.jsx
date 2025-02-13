import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='register-container'>
        <div className='register-wrapper'>
            <form action="">
                <h1>Create Your Account</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' />
                </div>
                <div className='input-box'>
                    <input type="email" placeholder='E-Mail' />
                </div>
                <div className='input-box'>
                    <input type="tel" placeholder='Phone Number' />
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Country' />
                </div>
                <div className='register-agreement'>
                    <label type="checkbox">I Agree to the <b>Terms</b> and <b>Private Policy</b></label>
                </div>
                <button type='submit'>Create Account</button> 
            </form>
        </div>
    </div>
  )
}

export default Register