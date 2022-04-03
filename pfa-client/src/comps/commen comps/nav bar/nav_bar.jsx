import React from 'react'
import './nav_bar.scss'
import AccountMenu from './nav_comps/Avatar_menu';

function nav_bar() {
  return (
    <React.Fragment>
    <div className='nav'>
      <div className='left-side'></div>
      <div className="right-side">
          <AccountMenu /> 
      </div>
     
    </div>
    <hr />
    </React.Fragment>
  )
}

export default nav_bar