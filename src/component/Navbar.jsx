import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'

const Navbar  = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat Menu</span>

      <div className='user'>
        <img src='https://drive.google.com/file/d/1z9QKqOGej4zktv2_BbipSonMkk7TwUmY/view?usp=sharing' alt='' />
        <span>user</span>
        <button onClick={()=> signOut(auth)}>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar