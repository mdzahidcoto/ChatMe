import React from 'react'

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type='text' placeholder='Find a friend...' />
        </div>

        <div className="userChat">
            <img src='https://drive.google.com/file/d/1z9QKqOGej4zktv2_BbipSonMkk7TwUmY/view?usp=sharing' alt='' />
            <div className='userChatInfo'>
                <span>Name</span>
            </div>
        </div>
    </div>
  )
}

export default Search