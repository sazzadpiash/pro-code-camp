import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='container text-light'>
            <div className="row hero-row">
                <div className="col-md-6 my-auto">
                    <small className='text-secondary text-uppercase hero-subtitle'>welcome to</small>
                    <h1 className='fw-bold hero-title'>Pro Code<span className='red-text'> Camp</span></h1>
                    <p className='text-secondary hero-details mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat beatae excepturi blanditiis dolorum veniam esse autem explicabo voluptatem quisquam! Consequuntur saepe fugit voluptatibus nisi asperiores non corrupti maxime? Aperiam.</p>
                    <Link className='hero-dark-button-lg' to='/courses'>Our Courses</Link>
                </div>
                <div className="col-md-6">
                    <img src="/images/banner.png" className='img-fluid' alt="" />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;