import './SideBarStyles.css';
import logo from '../Assets/fabrik_logo.png';
import { Person, ExitToApp } from '@mui/icons-material';
import React from 'react';
//import { FaUser, FaArrowAltCircleRight } from 'react-icons/fa';
import { Button } from '@mui/material';

export const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={logo} alt='logo' style={{ width: '40%', marginTop: '40px' }} />
            </div>
            <div className='side-content'>
                <div className='login'>
                    <Button className='btn1' variant='text' ><Person/>Login</Button>
                </div>
                <div className='login'>
                    <Button className='btn2'  variant='text'><ExitToApp/>Register</Button>
                </div>
            </div>
        </div>
    )
}

{/* <div className='content'>
<div className='login'>
    <li><Button className='btn'><Person/>
    Login</Button></li>
</div>
<div className='login'>
    <li><Button className='btn'><ExitToApp/>Register</Button></li>
</div>
</div> */}
