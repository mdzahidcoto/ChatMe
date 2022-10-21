import React, { useState, useContext } from "react";
import { collection, query, where, getDocs, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [error, setError] = useState("");
  const [searchUser, setSearchUser] = useState();
  const [user, setUser] = useState();

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where('displayName', '==', searchUser));

    try{
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        setUser(doc.data());
      });
    }catch(error) {
      setError(error.message);
    };
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async (e) => {
    // create new id for userchat
    const id = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const res = await getDocs(doc(db, 'chats', id));

      if(!res.exists()) {
        // create a chat in userChats
        await setDoc(doc(db, 'chats', id), { message: [] });
        // create user chats
        await updateDoc(doc(db, 'userChat', currentUser.uid), { 
          [id + '.userInfo'] : {
            uid: user.uid,
            displayN: user.displayName,
            photoURL: user.photoURL,
          },
          [id + '.date'] : serverTimestamp()
        } )
        await updateDoc(doc(db, 'userChat', user.uid), { 
          [id + '.userInfo'] : {
            uid: currentUser.uid,
            displayN: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [id + '.date'] : serverTimestamp()
        } )
    }
      
    } catch (error) {
      setError(error.message);
    }

    // setUser(null);
    // setSearchUser('')
  }
  console.log(error)

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a friend..."
          onChange={(e) => setSearchUser(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      {error && (<p style={{color: 'white'}}>User not found...</p>)}
      {user && (
        <div className="userChat" onClick={handleSelect}>
        <img src={user?.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user?.displayName}</span>
        </div>
      </div>)}
    </div>
  );
};

export default Search;
