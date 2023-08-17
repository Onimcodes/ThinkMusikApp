import React from 'react'
import './course.css'
import {AiFillPlayCircle} from 'react-icons/ai'
import {IoMdAddCircle} from 'react-icons/io'
const Course = ({course}) => {
  return (
    
        <div className="overview__course-card">
                  <div className="overview__course-card_content">
                        <div className='overview__course-img'>
                            <img src={course.image} alt="" />
                        </div>
                        <div className="overview__course-title">
                            {course.title}
                        </div>
                        <div className="overview__course-other">
                            <span>{course.about}</span>
                            <div className="overview_course-buttons">
                            <IoMdAddCircle className='overview_course-btn'/>
                            <AiFillPlayCircle className='overview_course-btn'/>
                            </div>
                        </div>
                  </div>
        </div>
  )
}

export default Course