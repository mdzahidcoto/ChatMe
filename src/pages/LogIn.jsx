import React from 'react'

const LogIn = () => {

    const handleSubmit = () => {
  
    }
    
  return (
    <div className='fromContainer'>
        <div className='formWrapper'>
            <h2 className='logo'>Chat Me</h2>
            <h4 className='title'>Log In</h4>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button>Login</button>
            </form>

            <p>Does not have an account? <span>SignUp</span></p>
        </div>
    </div>
  )
}

export default LogIn