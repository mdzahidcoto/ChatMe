import React from 'react'

const Register = () => {

    const handleSubmit = () => {
  
    }
    
  return (
    <div className='fromContainer'>
        <div className='formWrapper'>
            <h2 className='logo'>Chat Me</h2>
            <h4 className='title'>Registration</h4>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Display Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input type='file' />
                <button>Sign Up</button>
            </form>

            <p>Already have an account? <span>Login</span></p>
        </div>
    </div>
  )
}

export default Register