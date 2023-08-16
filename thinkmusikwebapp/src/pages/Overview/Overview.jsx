import React, {useState} from 'react'
import './overview.css'
import smiley from '../../assets/smiley.png'
import learningIcon from '../../assets/learningpath2.svg'
import musicIcon from '../../assets/ps_music.svg'
import exploreIcon from '../../assets/explorecourses2.svg'
import rocketIcon from '../../assets/rocket.svg'
import moneyIcon from '../../assets/moneybag.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Advert from '../../components/advert/Advert';
import { courseList } from '../../components/course';
import { songSheets } from '../../components/course'
import {modals} from '../../components/course'
import Course from '../../components/course/Course' ;
import Songsheet from '../../components/songsheet/Songsheet'
import modalImg from '../../assets/modal1.png'
import closebtn from '../../assets/close.png'
import Modal from '../../components/modal/Modal'
const Overview = () => {

    const [isModalActive, setIsModalActive] = useState(false)
    const toggleModal = () => {
        setIsModalActive(!isModalActive);
      };
  return (
    <div className='overview__container section__padding'>
        <div className="overview__welcome-text">
            <span ><img src={smiley} alt="smiley"  /><span>Welcome, Samuel!</span></span>
            <p>Take your first steps towards building successful learning habits.</p>
        </div>
        {/* cards */}
        <div className="overview__cards">
            <div className="overview__card">
                <img src={learningIcon} alt="learning path" />
                <h3  className='overview__cta'>Learning Path</h3>
                <div className="overview__card_cta">
                    <span className='card__cta'>Start<AiOutlineArrowRight/></span>
                </div>
            </div>
            <div className="overview__card">
                <img src={exploreIcon} alt="learning path" />
                <h3  className='overview__cta'>Learning Path</h3>
                <div className="overview__card_cta">
                    <span className='card__cta'>Start<AiOutlineArrowRight/></span>
                </div>
            </div>
            <div className="overview__card">
                <img src={musicIcon} alt="learning path" />
                <h3  className='overview__cta'>Learning Path</h3>
                <div className="overview__card_cta">
                    <span className='card__cta'>Start<AiOutlineArrowRight/></span>
                </div>
            </div>
        </div>
        {/* buttons */}
        <div className='overview__buttons'>
            <div className='overview__invite' onClick={toggleModal}>
               <img src={moneyIcon} alt="" /><span>Invite a friend</span>
            </div>
            <div className='overview__invite'>
                <img src={rocketIcon} alt="" /><span>Request a feature</span>
            </div>
        </div>
        {/* Carousel */}
        <Advert/>
        {/* active courses */}
        <div className="overview__active-course">
            <h1>Continue learning</h1>
           
            <div className='overview__course-box'>
                <h3>You don’t have any active courses</h3>
                <p>Browse courses to start learning.</p>
            </div>
        </div>
        {/* New Courses */}
        <div className="overview__courses section__margin">
            <div className="overview__courses-header">
                <h1>New Courses</h1>
                <p>View all</p>
            </div>
            <div className="overview__courses-container">
                {
                    courseList.map((item, index)=>(
                        <Course course = {item}  key={index}/>
                    ))
                }
            </div>
        </div>
        {/* SongSheets */}

        <div className="overview__songsheets section__margin">
            <div className="overview__courses-header">
                    <h1>New Song Sheet</h1>
                    <p>View all</p>
            </div>

            <div className="overview__courses-container">
               {
                songSheets.map((item, index)=>(
                    <Songsheet songsheet = {item}  key={index}/>
                ))
               }
            </div>
        </div>
               {/* my list */}

        <div className="overview__active-course">
            <h1>My List</h1>
           
            <div className='overview__course-box'>
                <h3>You haven't added any lessons yet</h3>
                <p>once you add a lesson to My List, it will show up here for you to access later.</p>
            </div>
        </div>

        {/* Modal */}
        <Modal modal = {modals[0]} isModalActive= {isModalActive} toggleModal={toggleModal}/>
        
        {/*<Modal modal = {modals[1]} />*/}
    </div>
  )
}

export default Overview