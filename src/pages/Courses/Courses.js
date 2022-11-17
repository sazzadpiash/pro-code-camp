import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseBar from '../../components/CourseBar/CourseBar';
import CourseCard from '../../components/CourseCard/CourseCard';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='bg-light-dark pb-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-light mt-4 mb-4 course-bar-title p-4'>Our Top Rated Courses</h2>
                    </div>
                    <div className="col-md-3">
                        <div className="sidebar p-4 pb-2">
                            {
                                courses.map(course => <CourseBar key={course.id} course={course}></CourseBar>)
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className='course'>
                            {
                                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;