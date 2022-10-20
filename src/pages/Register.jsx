import React, { useState } from "react";
import { storage, auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import avatar from "../images/addAvatar.png";

const Register = () => {

    const [ err, setErr ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value[0];

    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const storageRef = ref(storage, displayName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            setErr(error.message);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then( async (downloadURL) => {
                try {
                  await updateProfile(res.user, {
                    displayName,
                    photoUrl: downloadURL,
                  });
  
                  await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL: downloadURL,
                  });
                }
                catch (error) {
                  setErr(error.message)
                }
            });
          }
        );
    }
    catch(error) {
        setErr(error.message);
    }
      
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2 className="logo">Chat Me</h2>
        <h5 className="title">Registration</h5>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="id" style={{ display: "none" }} />
          <label for="id">
            <img src={avatar} alt="" />
            <span>add an image</span>
          </label>
          <button>Sign Up</button>
          { err && (<span style={{color: 'red'}}>{err}</span>)}
        </form>

        <p>
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
