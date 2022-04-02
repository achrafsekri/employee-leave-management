import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Signin from './sign in/sign-in';
const useauth=()=>{
    const [user,setuser]=useState('not_logged');
    // setuser(localStorage.getItem("user"));
}

function protectedroutes() {
    console.log(user);
//   return user=='not_logged'?<Signin/>:<Outlet/>;
   return user=='not_logged'?<div>hhhhh</div>:<Outlet/>;
  
}

export default protectedroutes