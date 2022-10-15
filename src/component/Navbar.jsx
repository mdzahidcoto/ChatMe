import React from 'react'

const Navbar  = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat Menu</span>

      <div className='user'>
        <img src='hello' alt='DP' />
        <span>user</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar