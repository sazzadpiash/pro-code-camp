import React from 'react';
import Card from 'react-bootstrap/Card';
import './CourseCard.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, course_name, total_lessons, ratings, views, author, durations, price, image } = course;
    return (
        // <Card>
        //     <Card.Body>

        //     </Card.Body>
        // </Card>
        <div className='pro-card text-light p-3'>
            <img className='img-fluid mb-3' src={image} alt="thumbnail" />
            <div className="card-top d-flex justify-content-between align-items-center">
                <Card.Title className='card-title mb-2'>
                    {course_name}
                    {/* <br /> */}
                    <small className='small-font ms-2'>by {author}</small>
                </Card.Title>
                <div className="card-ratings d-flex align-items-center fw-bold">
                    <FaStar className='me-1 text-warning'></FaStar>{ratings}
                </div>
            </div>
            <div className='card-top d-flex justify-content-between align-items-center'>
                <div>
                    <b className='small-text fs-6 me-1'>{total_lessons} Chapter</b>
                    <small className='small-font'>({durations} min)</small>
                </div>
                <div>
                    <small className='small-font'>{views} views</small>
                </div>
            </div>
            <div className="card-bottom d-flex justify-content-between align-items-center mt-3">
                <Link to={`/course/${id}`}><button className='red-button'>Course Details</button></Link>
                
                <h4 className='fw-bold'>${price}</h4>
            </div>
        </div>
    );
};

export default CourseCard;