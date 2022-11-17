import React, { useContext } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { OuthContext } from '../../contexts/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
    const [wrongPass, setWrongPass] = useState(false);
    const { googleSignIn, signInWithPassword } = useContext(OuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const rBtnClicked = () => {
        navigate('/register')
    }

    const loginHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithPassword(email, password)
            .then(res => {
                navigate(from, { replace: true });
            })
            .catch(error => { 
                console.error(error);
                setWrongPass(true)
            })
    }

    const googleProvider = new GoogleAuthProvider();

    const gSignIn = (event) => {
        event.preventDefault()
        googleSignIn(googleProvider)
            .then(res => {
                navigate(from, { replace: true });
            })
            .catch(error => { console.error(error) })
    }

    const gitProvider = new GithubAuthProvider();
    const gitHubSignIn = (event) => {
        event.preventDefault()
        googleSignIn(gitProvider)
            .then(res => {
                navigate(from, { replace: true });
            })
            .catch(error => { console.error(error) })
    }

    return (
        <div className='w-100 auth-form-container d-flex justify-content-center align-items-center'>
            <Form onSubmit={loginHandler} className='bg-dark text-light'>
                <h2 className='text-center py-3'>Login Here</h2>
                {
                    wrongPass &&
                        <Alert variant='danger text-center'>
                            Wrong Username or Password
                        </Alert>
                }

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <div className='row gx-3 mt-4'>
                    <div className='d-grid col-md-6'>
                        <button type='submit' className='red-button text-center text-decoration-none'>Login</button>
                    </div>
                    <div className='d-grid col-md-6'>
                        <button className='red-button text-center text-decoration-none' onClick={rBtnClicked}>Register</button>
                    </div>
                </div>

                <div className='position-relative mt-3'>
                    <p className='or text-center'>or</p>
                </div>
                <div className='row gx-3 mt-4'>
                    <div className='d-grid col-md-6'>
                        <button onClick={gSignIn} className='btn btn-lg btn-light'>{<FcGoogle></FcGoogle>}</button>
                    </div>
                    <div className='d-grid col-md-6'>
                        <button onClick={gitHubSignIn} className='btn btn-lg btn-light'>{<FaGithub></FaGithub>}</button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Login;