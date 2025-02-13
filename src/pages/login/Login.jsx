import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login-container'>
        <div className='login-wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password'/>
                </div>
                <div className='remember-forgot'>
                    <label>
                        <input type="checkbox"/>Remember Me
                    </label>
                    <a href="/#">Forget Password</a>
                </div>
                <button type='submit'>Login</button>
                <div className='register-link'>
                    <p>don't have an accoun? <a href="/register">Register</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login