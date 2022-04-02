import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MessageIcon from '@mui/icons-material/Message';
import prof from '../../../resources/prof.jpg'
import './nav_bar.scss'
function nav_bar() {
  return (
    <div className='nav'>
      <input type="text" className='search-bar' />
      <div className="right">
        <MessageIcon/>
        <CircleNotificationsIcon/>
        <div className="avatar">
          <img src={prof} alt="professor picture" className='avatar' />
        </div>
        
      </div>
    </div>
  )
}

export default nav_bar