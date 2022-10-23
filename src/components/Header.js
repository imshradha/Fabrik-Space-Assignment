import './HeaderStyles.css';
import React from 'react';
import image from '../Assets/bg-image1.png';
import search from '../Assets/search1.png';
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const Header = () => {
    return (
        <div className='header'>
            <div className='mask'>
                <img className='img' src={image} alt='img' />
            </div>
            <div className='content'>
                <h1>Community</h1>
                <p>Ideas of the open world</p>
            </div>
            <div className='search-bar'>
                <img src={search} alt='simg' style={{ width: '4%', height: '4%' }} />
                <input placeholder='Search' />
            </div>
            <div className="btn-group" style={{backgroundColor:"#343a40"}}>
                <a href="#" className="btn btn-dark"><FormatListBulletedIcon style={{ color: '#fff', marginLeft: '12px' }} /></a>
                <a href="#" className="btn btn-dark"><AppsIcon style={{ color: '#000', marginRight: '12px' }} /></a>
            </div>
            <div className='container'>
                <div className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-dark" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }} >TestVR</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }} >diwali</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }} >Adidas</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }} >hotspot</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }} >3d model</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }} >Animation</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }} >practice 2</a>
                </div>
            </div>
        </div>
    )
}

