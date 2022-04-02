import React from 'react'
import './side_bar.scss';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link } from 'react-router-dom';

export default function admin_side_bar() {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className='logo'>Congé PFA</span>
            </div>
            <div className="center">
                <ul className='menu'>
                <li>
                        <FactCheckIcon/>
                        <Link to={'/admin/gerer-demande'} className='link'>Consulter les demandes</Link>
                    </li>
                    <li>
                        <AddIcon></AddIcon>
                        <Link to={'/admin/ajouter-employee'} className='link'>Ajouter un employee </Link>
                    </li>
                    <li>
                        <CalendarTodayIcon></CalendarTodayIcon>
                        <Link to={'/admin/planifier-date'} className='link'>Planifier une date de rattrapage </Link>
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
    
