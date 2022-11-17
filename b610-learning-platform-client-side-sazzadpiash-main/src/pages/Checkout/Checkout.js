import React from 'react';
import { Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../components/CourseCard/CourseCard';
import './Checkout.css';

const Checkout = () => {
    const course = useLoaderData()
    const tax = course.price / 78
    const saletax = 2
    const total = tax + saletax + course.price
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8 mt-5 mb-4">
                    <div className='pro-card'>
                        <form className='addressForm'>
                            <h4>Shipping Address</h4>
                            <Form.Group className="mb-3" controlId="forName">
                                <Form.Control name='name' type="text" placeholder="Enter Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control name='email' type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="forAddress">
                                <Form.Control name='address' type="text" placeholder="Enter Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="forCity">
                                <Form.Control name='city' type="text" placeholder="City" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="forPostCode">
                                <Form.Control name='postcode' type="text" placeholder="Enter Post Code" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="for Phone">
                                <Form.Control name='phone' type="text" placeholder="Enter Phone Number" />
                            </Form.Group>
                        </form>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='mt-5'>
                        <CourseCard course={course}></CourseCard>
                    </div>
                    <div className="checkoutInfo mt-3 mb-4 p-4 pro-card">
                        <div className='d-flex justify-content-between mb-2 align-items-center'>
                            <span>Subtotal: </span><span>$ {course.price}</span>
                        </div>
                        <div className='d-flex justify-content-between mb-2 align-items-center'>
                            <span>Tax Total: </span><span>$ {tax.toFixed(2)}</span>
                        </div>
                        <div className='d-flex justify-content-between mb-2 align-items-center'>
                            <span>Sales Tax: </span><span>$ {saletax.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between mb-2 align-items-center'>
                            <span>Total (incl. tax) </span><span>$ {total.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className='hero-dark-button-lg w-100'>Confirm Order</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;