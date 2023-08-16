import React from 'react'
import './songsheet.css'
const Songsheet = ({songsheet}) => {
  return (
    <div className="overview__course-card">
        <div className="overview__course-card_content">
                <div className='overview__course-img'>
                    <img src={songsheet.image} alt="" />
                </div>
                <div className="overview__course-title songsheet__title">
                    {songsheet.title}
                </div>
                
        </div>
    </div>
  )
}

export default Songsheet