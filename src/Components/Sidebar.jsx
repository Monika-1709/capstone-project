import React, { useState } from 'react';
import {
     FaTh,FaCommentDots,FaListAlt,FaMoneyCheckAlt,FaSleigh,FaBars
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../Style/Sidebar.css';
// import Profile from './Profile';


function Sidebar({children}) {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    
    const menuItem=[
        {
            path:'/dashboard',
            name:"Dashboard",
            icon:<FaTh /> 
        },
        {
            path:'/conversations',
            name:"Conversations",
            icon:<FaCommentDots />
        },
        {
            path:'/orderhistory',
            name:"OrderHistory",
            icon:<FaListAlt />
        },
        {
            path:'/transactions',
            name:"Transactions",
            icon:< FaMoneyCheckAlt />
        },
        {
            path:'/reviews',
            name:"Reviews",
            icon:< FaSleigh />
        }

    ]
  return (
 
    <div className="container">
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">HOME</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            <div className='sidebar__child'>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
            </div>
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar
