import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { OuthContext } from '../../contexts/AuthContext';
import './Header.css'

function Header() {
    const { user, logOut } = useContext(OuthContext);
    const [theme, setTheme] = useState(false);

    const themeToggler = () => {
        if (theme) {
            return (<button onClick={() => setTheme(!theme)} className='themeToggler themeDark'>Dark</button>);
        }
        else {
            return (<button onClick={() => setTheme(!theme)} className='themeToggler themeLight'>Light</button>);
        }
    }


    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='py-4 shadow'>
            <Container>
                <Link className='text-light text-decoration-none me-3' to='/'><h6 className='header-logo'>Pro Code Camp</h6></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-light text-decoration-none me-3 header-link' to='/'>Home</Link>
                        <Link className='text-light text-decoration-none me-3 header-link' to='/courses'>Courses</Link>

                    </Nav>
                    <Nav>

                        {
                            user ?
                                <>
                                    <div className="userInfo d-flex align-items-center" data-toggle="tooltip" data-placement="bottom">
                                        <OverlayTrigger
                                            key='left'
                                            placement='left'
                                            overlay={
                                                <Tooltip id={`tooltip-left`}>
                                                    Hi! I am <strong>{user.displayName}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <img src={user?.photoURL} className='user-image' alt="" /></OverlayTrigger><strong className=' mx-2 d-flex flex-column'>
                                            <span>{user?.displayName}</span>
                                            <span className='small-font'>{user?.email}</span>
                                        </strong>
                                    </div>
                                    <button onClick={logOut} className='red-button ms-2'>Log Out</button>
                                </>
                                :
                                <Link className='red-button text-decoration-none' to='/login'>Log In / Sign Up</Link>
                        }
                        {themeToggler()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;