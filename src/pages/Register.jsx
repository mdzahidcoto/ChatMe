import React from 'react'

import avatar from '../images/addAvatar.png';

const Register = () => {

    const handleSubmit = () => {
  
    }
    
  return (
    <div className='fromContainer'>
        <div className='formWrapper'>
            <h2 className='logo'>Chat Me</h2>
            <h5 className='title'>Registration</h5>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Display Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input type='file' id='id' style={{display: 'none'}}/>
                <label for='id'>
                    <img src={avatar} alt='' />
                    <span>add an image</span>
                </label>
                <button>Sign Up</button>
            </form>

            <p>Already have an account? <span>Login</span></p>
        </div>
    </div>
  )
}

export default Register