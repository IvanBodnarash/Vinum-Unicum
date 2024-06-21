import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  return (
    <header>
        <div className='header-wrapper'>
            {/* use a tag for logo */}
            <span className='header-logo'>
                {/* <img src='' alt=''></img> */}
                VINUM UNICUM
            </span>
            <nav className='header-nav'>
                <div className='header-nav-items'>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                    >
                        Our Collection
                    </NavLink>
                    <NavLink 
                        to='/shop' 
                        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                    >
                        Shop
                    </NavLink>
                    <NavLink 
                        to='/discover' 
                        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                    >
                        Discover
                    </NavLink>
                    <NavLink 
                        to='/aboutUs' 
                        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                    >
                        About Us
                    </NavLink>
                    <NavLink 
                        to='/contact' 
                        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                    >
                        Contact
                    </NavLink>
                    <span className='nav-item'>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <span className='nav-item'>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </span>
                    <div className='nav-item'>
                        <div className='nav-item-sign-in'>
                            <span>Sign In</span>
                            <span><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}
