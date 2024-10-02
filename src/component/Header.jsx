import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  // const activeStyle = {
  //   font-weight: bold;
  //         text-decoration: underline;
  //     color: #161616;
  //  }
  //in-line style
  // style={({isActive}) => isActive ? activeStyle : null }
       

  return (
    <div className='Header-container'>
    <NavLink  className='logo-left'>#vanlife</NavLink>
    <div className='Nav-bar-right'>
    <ul className='ul-container'>
        <li className='li-list'>
        <NavLink
         className={({isActive}) => isActive ? "active-link" : "nav-list"}
          to="/"> Home </NavLink>            </li>
        <li className='li-list'>
        <NavLink 
         className={({isActive}) => isActive ? "active-link" : "nav-list"}
          to="about"> About </NavLink>
        </li>
        <li className='li-list'>
        <NavLink 
         className={({isActive}) => isActive ? "active-link" : "nav-list"}
         to="vans"> Vans </NavLink>
        </li>
        {/* <li className='li-list'>
        <NavLink className="nav-list" to="stars"> Stars </NavLink>
        </li> */}
        <li className='li-list'>
        <NavLink 
         className={({isActive}) => isActive ? "active-link" : "nav-list"}
         to="jokes"> Jokes </NavLink>
        </li>
          <li className='li-list'>
        <NavLink 
        className={({isActive}) => isActive ? "active-link" : "nav-list"}
         to="host"> Host </NavLink>
        </li>
    </ul>
    </div>
   </div>
 
  )
}

export default Header