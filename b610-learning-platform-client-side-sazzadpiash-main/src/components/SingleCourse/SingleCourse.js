import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './SingleCourse.css';

const SingleCourse = () => {
    const course = useLoaderData();
    const { id, course_name, durations, image, price, ratings, total_lessons, views } = course;
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12 mx-auto">
                    <div className="custom-alert" role="alert">
                        <span>Download Course Details Now!</span><span className='red-button'>Download</span>
                    </div>
                </div>
                <div className="col-md-6 ps-md-5 pe-md-0 pt-0">
                    <img className='img-fluid rounded ps-md-5' src={image} alt={course_name} />
                </div>
                <div className="col-md-6 ps-md-5 mt-2 my-auto">
                    <h3><strong>{course_name}</strong></h3>
                    <h4 className='mt-3'><strong>${price}</strong></h4>
                    <div className="card-ratings d-flex align-items-center fw-bold">
                        <FaStar className='me-1 text-warning'></FaStar>{ratings}
                    </div>
                    <strong className='d-block mt-2'>Duration: {durations} min</strong>
                    <strong className='d-block mt-2'>Lessions: {total_lessons}</strong>
                    <strong className='d-block mt-2'>Views: {views}</strong>
                    <Link to={`/checkout/${id}`}><button className='red-button mt-4 fs-6 py-3 px-4'>Get Premium Access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;