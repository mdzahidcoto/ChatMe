import React from 'react'

import cam from '../images/cam.png'
import add from '../images/add.png'
import about from '../images/more.png'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>userName</span>
        <div className="chatIcon">
          <img src={cam} alt='' />
          <img src={add} alt='' />
          <img src={about} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Chat