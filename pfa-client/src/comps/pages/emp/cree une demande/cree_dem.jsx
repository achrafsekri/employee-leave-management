import React from 'react'
import './cree_dem.scss'
import Side_bar from '../../../commen comps/side bar/side_bar'
import Nav_bar from '../../../commen comps/nav bar/nav_bar';

function cree_dem() {
  return (
    <div className='main'>
      <Side_bar/>
      <div className="right">
      <Nav_bar />
        <div className="content">
          cree demande
        </div>
      </div>
      
    </div>
  )
}

export default cree_dem