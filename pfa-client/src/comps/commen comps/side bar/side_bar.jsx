import React from 'react'
import './side_bar.scss';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function side_bar() {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className='logo'>Congé PFA</span>
            </div>
            <div className="center">
                <ul className='menu'>
                    <li>
                        <FactCheckIcon/>
                        <Link to={'/emp/demande'} className='link'>Consulter vos demandes</Link>
                    </li>
                    <li>
                        <AddIcon></AddIcon>
                        <Link to={'/emp/cree_demande'} className='link'>Cree une demande </Link>
                    </li>
                </ul>
            </div>
            <div className="buttom">
            <Button variant="text" className='logout' onClick={()=>{
                localStorage.setItem('role','not');
                console.log(localStorage.getItem('role'));
                window.location.reload(false);
    
                }}>
            log out</Button>
            </div>
        </div>
      )
    }
export default side_bar