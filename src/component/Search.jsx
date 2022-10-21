import React, { useState } from 'react'

const Search = () => {

  const [ error, setError ] = useState('');
  const [ searchUser, setSearchUser ] = useState();
  const [ user, setUser ] = useState();

  const handleSearch = () => {

  }
  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  }

  return (
    <div className="search">
        <div className="searchForm">
            <input type='text' placeholder='Find a friend...'
              onChange={(e)=> setSearchUser(e.target.value)}
              onKeyDown={handleKey} />
        </div>

        <div className="userChat">
            <img src='le.c' alt='' />
            <div className='userChatInfo'>
                <span>Name</span>
            </div>
        </div>
    </div>
  )
}

export default Search