import React from 'react'
import Admin_side from '../../../commen comps/side bar/admin_side_bar';
import Nav_bar from '../../../commen comps/nav bar/nav_bar';
import './gerer_dem.scss'

function Gerer_dem() {
  return (
    <div className='main'>
      <Admin_side/>
      <div className="right">
        <Nav_bar />
        <div className="content">
          gerer demande
        </div>
        
      </div>
      </div>
  )
}

export default Gerer_dem