import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container text-light">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-top pt-5 my-3">
                    <li className="nav-item"><Link className='p-2 footer-link' to='/'>Home</Link></li>
                    <li className="nav-item"><Link className='p-2 footer-link' to='/courses'>Courses</Link></li>
                    <li className="nav-item"><Link className='p-2 footer-link' to='/blog'>Blog</Link></li>
                </ul>
                <p className="text-center text-muted">&copy; 2022 Pro Code Camp</p>
            </footer>
        </div>
    );
};

export default Footer;