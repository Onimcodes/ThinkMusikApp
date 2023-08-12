import React, {useState} from 'react'
import {RxDashboard} from 'react-icons/rx'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {MdPersonOutline} from 'react-icons/md'
import {MdOutlineVideoLibrary} from 'react-icons/md'
import {GiCrossroad} from 'react-icons/gi'

//import instructorIcon from '../assets/instructors.png'
//import learningIcon from '../assets/learningpath.png'
//import exploreIcon from '../assets/explorecourses.png'
//import quickIcon from '../assets/quicktips.png'
import {MdMenu} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo1.png'
const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
    const menuList = [
        {path : '/',
        name : 'Overview',
        icon : <RxDashboard/>
        },
        {path : '/learningpath',
        name : 'Learning Path',
        icon : <GiCrossroad/>
        },
        {path : '/quicktips',
        name : 'Quick Tips',
        icon : <HiOutlineLightBulb/>
        },
        {path : '/instructors',
        name : 'Instructors',
        icon : <MdPersonOutline/>
        },
        {path : '/explorecourses',
        name : 'Explore Courses',
        icon : <MdOutlineVideoLibrary/>
        }
    ]

  return (
    <div className='container'>
        <div style={{width: isOpen ? "17rem" : "50px"}} className='sidebar'>
            <div className="top_section">
                <div style={{marginLeft: isOpen ? "0px" : "0px"}} className='bars'>
                <MdMenu onClick={toggle}/>
                </div>
                <div style={{display: isOpen ? "block" : "none"}} className="logo">
                  <img src={logo} alt="logo" />
                </div>
               
            </div>
            <div className="sidebar__navlinks">
                {
                        menuList.map((item, index)=>(
                             <NavLink to={item.path} key={index} className= "link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                            </NavLink>
                            ))
                }
            </div>
            <div className='sidebar__navlinks-line'></div>
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Sidebar