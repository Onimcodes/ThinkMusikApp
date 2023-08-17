import React, {useState} from 'react'
import {RxDashboard} from 'react-icons/rx'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {MdPersonOutline} from 'react-icons/md'
import {MdOutlineVideoLibrary} from 'react-icons/md'
import {CiMusicNote1} from 'react-icons/ci'
import {PiClipboardTextLight} from 'react-icons/pi'
import {GiCrossroad} from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './sidebar.css'
//import instructorIcon from '../assets/instructors.png'
//import learningIcon from '../assets/learningpath.png'
//import exploreIcon from '../assets/explorecourses.png'
//import quickIcon from '../assets/quicktips.png'
import {MdMenu} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo1.png'
import darkMode from '../../assets/darkMode.png'
import Navbar from '../navbar/Navbar'
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
        icon : <svg width="21"  height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_3592)">
        <path d="M1.67041 10.5001C1.67041 6.57175 1.67041 4.60758 2.89041 3.38675C4.11208 2.16675 6.07541 2.16675 10.0037 2.16675C13.9321 2.16675 15.8962 2.16675 17.1162 3.38675C18.3371 4.60841 18.3371 6.57175 18.3371 10.5001C18.3371 14.4284 18.3371 16.3926 17.1162 17.6126C15.8971 18.8334 13.9321 18.8334 10.0037 18.8334C6.07541 18.8334 4.11124 18.8334 2.89041 17.6126C1.67041 16.3934 1.67041 14.4284 1.67041 10.5001Z" stroke="#D1D2D6" stroke-width="1.5"/>
        <path d="M9.37891 15.5C9.37891 15.6658 9.44475 15.8248 9.56196 15.942C9.67918 16.0592 9.83815 16.125 10.0039 16.125C10.1697 16.125 10.3286 16.0592 10.4458 15.942C10.5631 15.8248 10.6289 15.6658 10.6289 15.5H9.37891ZM15.0039 7.16671L15.4456 7.60838C15.5626 7.49119 15.6284 7.33234 15.6284 7.16671C15.6284 7.00109 15.5626 6.84223 15.4456 6.72505L15.0039 7.16671ZM14.1956 5.47505C14.1384 5.41364 14.0694 5.36439 13.9927 5.33023C13.916 5.29607 13.8333 5.2777 13.7493 5.27622C13.6654 5.27474 13.5821 5.29018 13.5042 5.32161C13.4264 5.35305 13.3557 5.39983 13.2964 5.45918C13.237 5.51853 13.1902 5.58922 13.1588 5.66705C13.1274 5.74487 13.1119 5.82823 13.1134 5.91215C13.1149 5.99607 13.1333 6.07883 13.1674 6.15549C13.2016 6.23216 13.2508 6.30116 13.3122 6.35838L14.1956 5.47505ZM13.3122 7.97505C13.2508 8.03227 13.2016 8.10127 13.1674 8.17793C13.1333 8.2546 13.1149 8.33736 13.1134 8.42128C13.1119 8.5052 13.1274 8.58855 13.1588 8.66638C13.1902 8.7442 13.237 8.8149 13.2964 8.87424C13.3557 8.93359 13.4264 8.98038 13.5042 9.01182C13.5821 9.04325 13.6654 9.05869 13.7493 9.05721C13.8333 9.05573 13.916 9.03736 13.9927 9.0032C14.0694 8.96904 14.1384 8.91979 14.1956 8.85838L13.3122 7.97505ZM10.6289 15.5V10.5H9.37891V15.5H10.6289ZM13.3372 7.79171H15.0039V6.54171H13.3372V7.79171ZM15.4456 6.72505L14.1956 5.47505L13.3122 6.35838L14.5622 7.60838L15.4456 6.72505ZM14.5622 6.72505L13.3122 7.97505L14.1956 8.85838L15.4456 7.60838L14.5622 6.72505ZM10.6289 10.5C10.6289 9.78175 10.9142 9.09288 11.4222 8.58497C11.9301 8.07706 12.6189 7.79171 13.3372 7.79171V6.54171C12.2874 6.54171 11.2806 6.95875 10.5383 7.70108C9.79594 8.44341 9.37891 9.45023 9.37891 10.5H10.6289Z" fill="#D1D2D6"/>
        <path d="M9.37884 15.5001C9.37884 15.6659 9.44469 15.8248 9.5619 15.9421C9.67911 16.0593 9.83808 16.1251 10.0038 16.1251C10.1696 16.1251 10.3286 16.0593 10.4458 15.9421C10.563 15.8248 10.6288 15.6659 10.6288 15.5001H9.37884ZM5.00384 7.16678L4.56218 6.72512C4.44514 6.8423 4.37939 7.00116 4.37939 7.16678C4.37939 7.33241 4.44514 7.49126 4.56218 7.60845L5.00384 7.16678ZM6.69551 6.35845C6.80591 6.23997 6.86601 6.08327 6.86316 5.92135C6.8603 5.75943 6.79471 5.60494 6.6802 5.49043C6.56569 5.37592 6.4112 5.31033 6.24928 5.30747C6.08736 5.30461 5.93066 5.36472 5.81218 5.47512L6.69551 6.35845ZM5.81218 8.85845C5.8694 8.91986 5.9384 8.96911 6.01506 9.00327C6.09173 9.03743 6.17449 9.0558 6.25841 9.05728C6.34233 9.05876 6.42569 9.04332 6.50351 9.01189C6.58133 8.98045 6.65203 8.93366 6.71138 8.87431C6.77073 8.81497 6.81751 8.74427 6.84895 8.66645C6.88038 8.58862 6.89582 8.50527 6.89434 8.42135C6.89286 8.33743 6.87449 8.25467 6.84033 8.178C6.80617 8.10134 6.75692 8.03234 6.69551 7.97512L5.81218 8.85845ZM10.6288 15.5001V10.5001H9.37884V15.5001H10.6288ZM6.67051 6.54178H5.00384V7.79178H6.67051V6.54178ZM5.44551 7.60845L6.69551 6.35845L5.81218 5.47512L4.56218 6.72512L5.44551 7.60845ZM4.56218 7.60845L5.81218 8.85845L6.69551 7.97512L5.44551 6.72512L4.56218 7.60845ZM10.6288 10.5001C10.6288 9.4503 10.2118 8.44348 9.46948 7.70115C8.72714 6.95882 7.72033 6.54178 6.67051 6.54178V7.79178C7.38881 7.79178 8.07768 8.07712 8.58559 8.58504C9.0935 9.09295 9.37884 9.78182 9.37884 10.5001H10.6288Z" fill="#D1D2D6"/>
        </g>
        <defs>
        <clipPath id="clip0_1_3592">
        <rect width="20" height="20" fill="white" transform="translate(0.00390625 0.5)"/>
        </clipPath>
        </defs>
        </svg>
        },

        {path : '/explorecourses',
        name : 'Explore Courses',
        icon : <MdOutlineVideoLibrary/>
        },
        {path : '/quicktips',
        name : 'Quick Tips',
        icon : <HiOutlineLightBulb/>
        },
        {path : '/instructors',
        name : 'Instructors',
        icon : <MdPersonOutline/>
        }
       
    ]

    const secondMenuList = [
        {path : '/songssheet',
        name : 'Song Sheet',
        icon : <CiMusicNote1/>
        },
        {path : '/mylist',
        name : 'My List',
        icon : <PiClipboardTextLight/>
        }
       
    ]
    const shopObject = {path : '/shop',
                        name : 'Shop',
                        icon : <AiOutlineShoppingCart/>
                        }
    

  return (
    <div className='container'>
        <div style={{width: isOpen ? "17rem" : "100px"}} className='sidebar'>
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
                                    <div className='sidebar__navlink'>
                                    <div className="icon">{item.icon}</div>
                                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                                    </div>
                            </NavLink>
                            ))
                }
            </div>
            <div style={{display: isOpen ? "block" : "none"}} className='sidebar__navlinks-line'></div>
            <div className="sidebar__navlinks sidebar__navlink-bottom">
                {
                    secondMenuList.map((item, index)=>(
                            <NavLink to={item.path} key={index} className= "link" activeclassName="active">
                                <div className='sidebar__navlink'>
                                <div className="icon">{item.icon}</div>
                                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                                </div>
                            </NavLink>
                        ))
                }
                   <NavLink to={shopObject.path}  className= "link" activeclassName="active">
                                    <div className='sidebar__navlink '>
                                        <div className="icon">{shopObject.icon}</div>
                                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{shopObject.name}</div>
                                        <button type='button' className='sidebar__navlink-shopbtn' style={{display: isOpen ? "block" : "none"}}>Coming Soon</button>
                                    </div>
                    </NavLink>
            </div>
            <div style={{display: isOpen ? "block" : "none"}} className='sidebar__navlinks-line'></div>
            <div className='sidebar__darkmode' style={{display: isOpen ? "block" : "none"}}>
                <img src={darkMode} alt="darkmode" />
            </div>

        </div>
        <main style={{marginLeft: isOpen ? "16rem" : "0"}}>
            <Navbar isOpen= {isOpen}/>
            {children}
        </main>

    </div>
  )
}

export default Sidebar;