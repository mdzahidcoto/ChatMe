import React from 'react'

import image from '../images/addAvatar.png';
import attach from '../images/attach.png';

const Input = () => {
  return (
    <div className="input">
    <input type='text' placeholder='Type something' />
        <div className="send">
        <input type='document' id='document' style={{ display: 'none'}} />
        <label for="document">
            <img src={attach} alt='' />
        </label>
            <input type='file' id='file' style={{ display: 'none'}} />
            <label for="file">
                <img src={image} alt='' />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input