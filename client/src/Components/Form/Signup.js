import React from 'react'

const Signup = () => {
  return (
    <div className='signup'>
        <form>
            <div className='signup-title'>
                <h3>Register</h3>
            </div>
            <div className='input-box'>
    <input type='email' name='email'/>
    <label>Enter your email</label>
            </div>
            <div className='input-box'>
    <input type='password' name='password'/>
    <label>password</label>
            </div>
            <div className='signup-btn'>
                <button>Signup</button>
            </div>
        </form>

    </div>
  )
}

export default Signup