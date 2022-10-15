import React from 'react'

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type='text' placeholder='Find a friend...' />
        </div>

        <div className="userChat">
            <img src='userDP' alt='userDP' />
            <div className='userChatInfo'>
                <span>Name</span>
            </div>
        </div>
    </div>
  )
}

export default Search