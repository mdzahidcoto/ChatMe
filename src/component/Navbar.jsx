import React, { useContext } from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar  = () => {

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate('/login');
  }

  return (
    <div className='navbar'>
      <span className='logo'>Chat Menu</span>

      <div className='user'>
        <img src={currentUser?.photoUrl} alt='' />
        <span>{currentUser?.displayName}</span>
        <button onClick={handleSignOut}>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar