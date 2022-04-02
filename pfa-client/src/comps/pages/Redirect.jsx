import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";

export default function Redirect() {
    const navigate=useNavigate();
    useEffect(()=>{
        let role =localStorage.getItem('role');
        if(role=='user'){
            navigate('/emp');
        }else {if(role=='admin'){
            navigate('/admin');
        }else{
            if(role=='not'){
                navigate('/signin');
        }}}
        window.location.reload(false);
    },[])
  return (
    <div>Redirecting...</div>
  )
}
