import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../index.scss'
import { auth } from '../firebase';

const LogIn = () => {

  const navigate = useNavigate();
  const [ err, setErr ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    }
    catch(error) {
        setErr(error.message);
    }
      
  };
    
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <h2 className='logo'>Chat Me</h2>
            <h4 className='title'>Log In</h4>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button>Login</button>
              </form>
                { err && (<span style={{color: 'red'}}>{err}</span>)}

            <p>Does not have an account? <span><Link to='/registration'>SignUp</Link></span></p>
        </div>
    </div>
  )
}

export default LogIn