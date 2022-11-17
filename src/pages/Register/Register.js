import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { OuthContext } from '../../contexts/AuthContext';


const Register = () => {
    const { createUserWithPassword, updateUser, setUser } = useContext(OuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [valid, setValid] = useState(true);


    const btnClicked = () => {
        navigate('/login')
    }

    const registerHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const displayName = event.target.displayName.value;
        const photoURL = event.target.photoUrl.value;

        createUserWithPassword(email, password)
            .then(res => { 
                updateUser({displayName, photoURL})
                .then(res=>{
                    navigate(from, {replace: true});
                    window.location.reload();
                })
                .catch(error=>console.log(error))
            })
            .catch(error => {
                console.error(error);
                setValid(false)
            })
    }
    return (
        <div className='w-100 auth-form-container d-flex justify-content-center align-items-center'>
            <Form onSubmit={registerHandler} className='bg-dark text-light'>
                <h2 className='text-center py-3'>Register Now</h2>
                {
                    !valid &&
                        <Alert variant='danger text-center'>
                            Wrong Username or Password
                        </Alert>
                }
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control name='displayName' type="text" placeholder="Full Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="photo">
                    <Form.Control name='photoUrl' type="text" placeholder="Photo Url" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <div className='row gx-3 mt-4'>
                    <div className='d-grid col-md-6'>
                        <button type='submit' className='red-button text-center text-decoration-none'>Register</button>
                    </div>
                    <div className='d-grid col-md-6'>
                        <button className='red-button text-center text-decoration-none' onClick={btnClicked}>Login</button>

                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Register;