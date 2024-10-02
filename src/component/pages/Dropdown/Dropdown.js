import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    return (
      <div className="dropdown-menu">
        <button onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBars}/>
        </button>
        {isOpen && (
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/nested">Nested Routes</NavLink>
              <ul>
                <li>
                  <NavLink to="/nested/route1">Nested Route 1</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        )}
      </div>
    );
  };
  
  export default DropdownMenu;
  