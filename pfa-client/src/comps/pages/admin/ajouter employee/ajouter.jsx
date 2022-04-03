import React from 'react'
import './ajouter.scss';
import Side_bar from '../../../commen comps/side bar/admin_side_bar';
import Nav_bar from '../../../commen comps/nav bar/nav_bar';

function Ajouter() {
  return (
    <div className='main'>
      <Side_bar/>
      <div className="right">
          <Nav_bar />
        <div className="content">
          ajouter empl
        </div>
       
      </div>
      </div>
  )
}

export default Ajouter;