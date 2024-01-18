import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  return (
    <header>
        <div className='header-wrapper'>
            {/* use a tag for logo */}
            <button className='header-logo'>
                <img src='' alt=''></img>
                logo
            </button>
            <nav className='header-nav'>
                <ul className='header-nav-items'>
                    <li className='nav-item'>
                        <Link to='/home'>Our Collection</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li className='nav-item'>
                        <span>Discover</span>
                    </li>
                    <li className='nav-item'>
                        <span>About Us</span>
                    </li>
                    <li className='nav-item'>
                        <span>Contact</span>
                    </li>
                    <li className='nav-item'>
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                    </li>
                    <li className='nav-item'>
                        <span><FontAwesomeIcon icon={faCartPlus} /></span>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-item-sign-in'>
                            <span>Sign In</span>
                            <span><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
