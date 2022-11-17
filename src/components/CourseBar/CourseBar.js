import React from 'react';
import { Link } from 'react-router-dom';
import './CourseBar.css';
import {TbChevronRight} from 'react-icons/tb'

const CourseBar = ({course}) => {
    const { id, course_name} = course; 
    return (
        <Link to={`/course/${id}`} className='course-bar text-light p-4 mb-4 d-flex justify-content-between'>
            <strong>{course_name}</strong> <small className='course-bar-btn'>Get Now<TbChevronRight className='fw-bold fs-4 course-bar-arrow'></TbChevronRight></small> 
        </Link>
    );
};

export default CourseBar;