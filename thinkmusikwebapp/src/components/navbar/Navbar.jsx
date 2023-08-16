import React from 'react'
import './navbar.css'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai' 
import notificationIcon from '../../assets/notification.png'
import instrumentIcon from '../../assets/guitar.svg'

const Navbar = ({isOpen}) => {
  return (
    <div className='navbar__container' style={{left: isOpen ? "17rem" : "100px",width: isOpen ? "82%" : "93%"}}>
        
        <div className='navbar__instrument-section'>
            <div>
                <img src={instrumentIcon} alt="instrument-icon" />
            </div>
            <p>Bass</p>
            <RiArrowDropDownLine className='navbar__instrument-section_dropdown'/>
        </div>
        <div className='navbar__profile-section'>
            <div className='navbar__profile-section_search'>
                <AiOutlineSearch className='searchIcon'/>
                <input type="text" placeholder='Search' />
            </div>
            <div>
                <img src={notificationIcon} alt="notifications" />
            </div>
            <div className='navbar__profilename'>
                <div>SA</div>
                <RiArrowDropDownLine className='navbar__instrument-section_dropdown'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar