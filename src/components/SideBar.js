import './SideBarStyles.css';
import logo from '../Assets/fabrik_logo.png';
import { Person, ExitToApp } from '@mui/icons-material';
import React from 'react';
//import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const SideBar = () => {

    const navigate = useNavigate();

    const login = async () => {
        // await addUser(user);
        navigate('/login');
    }

    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={logo} alt='logo' style={{ width: '40%', marginTop: '40px' }} />
            </div>
            <div className='side-content'>
                <div className='login'>
                    <button type="button" className="btn person" onClick={() => login()}><Person style={{ marginRight: "25px", marginBottom: "3px" }} />Login</button>
                </div>
                <div className='login'>
                    <button type="button" className="btn "><ExitToApp style={{ marginRight: "10px", marginBottom: "3px" }} />Register</button>
                </div>
            </div>
        </div>

    )
}

