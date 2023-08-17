import React from 'react'
import './'
import badgeImage from '../assets/badge.png'
const LearningPath = () => {
  return (
    <div className='overview__container'>
        <div className="learningpath__header">
        <a className="learningpath__header-link">
            Home   /   Learning Path
        </a>
        </div>
       <div className="learningpath__progress-div">
       <div className="learningpath__badge-img">
            <img src={badgeImage} alt="" />
        </div>
        <p>Beginner</p>
        <div className="learningpath__progressbar">
            <div className="learningpath__progress">

            </div>
        </div>
        <p>Advance</p>
       </div>
    </div>
  )
}

export default LearningPath