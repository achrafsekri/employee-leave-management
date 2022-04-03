import React from 'react'
import Side_bar from '../../../commen comps/side bar/side_bar'
import './demande.scss';
import Nav_bar from '../../../commen comps/nav bar/nav_bar';
export default function demande() {
  return (
    <div className='main'>
      <Side_bar/>
      <div className="right">
      <Nav_bar />
        <div className="content">
          demande
        </div>
      </div>
      
    </div>
  )
}
