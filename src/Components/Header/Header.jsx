import React from 'react';
import Slider from '../Slider';
import './Header.css'
import logo from './logo.png'



const Header = () => {
    return (
        <div>
            <nav className='nav-body'>
                <div className='logo'>
                    <img src={logo} alt="" />
                    <span>BD Shop</span>
                </div>
                <ul className='ul-responsive'>
                    <li className='nav-link'>Home</li>
                    <li className='nav-link'>Search</li>
                    <li className='nav-link'>Product</li>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Contact</li>
                    <button className='btn btn-primary'>Login</button>
                    <button className='btn btn-success'>Register</button>
                </ul>
            </nav>
            <Slider></Slider>
        </div >
    );
};

export default Header;