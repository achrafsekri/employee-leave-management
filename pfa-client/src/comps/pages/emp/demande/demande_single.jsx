import React from 'react'
import './demande_single.scss'
import Side_bar from '../../../commen comps/side bar/side_bar'
import Nav_bar from '../../../commen comps/nav bar/nav_bar';

function demande_single() {
  return (
    <div className='main'>
      <Side_bar/>
      <div className="right">
        <Nav_bar />
          <div className="content">
            demande single empl
          </div>      
        </div>
      
    </div>
  )
}

export default demande_single