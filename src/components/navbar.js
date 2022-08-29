import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import './navbar.css';



export default function Navbar() {
    const [click, setClick]   = useState(false);        // set state initial val to false
    const [button, setButton] = useState(true)
    
    const handleClick = () => setClick(!click);         // set the new click value
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {                          // display button depending on screen size
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {                                   // logic to get rid of button on refresh
        showButton();
    }, []);

    window.addEventListener('resize', showButton)       // show button relative to wndw sz
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Darian Jennings  <i className="fas fa-hands-helping"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>                   
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>    
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Experience
                            </Link>    
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>    
                        </li>
                        <li className='nav-links-img'> 
                        </li>
                    </ul>
                </div>
            </nav>
        </>     
    )
}