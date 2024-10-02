import React, { Component } from 'react'
import { Navigate } from 'react-router'
import { NavLink, Outlet } from 'react-router-dom'



export class HostLayout extends Component {
   

    render() {
        return (
            <>
                <nav className='host-nav'>

                    <NavLink
                        className={({ isActive }) => isActive ? "active-link1" : "nav-list1"}
                        end
                        to="."
                        >Dashboard</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "active-link1" : "nav-list1"}
                        to="income"
                         >Income</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "active-link1" : "nav-list1"}
                        to="vans"
                       
                        > Vans</NavLink>

                    
                    <NavLink
                        className={({ isActive }) => isActive ? "active-link1" : "nav-list1"}
                        to="reviews"
                       
                        > Reviews</NavLink>
<NavLink
                        className={({ isActive }) => isActive ? "active-link1" : "nav-list1"}
                        to="info"
                       
                        > Details </NavLink>

                </nav>

                <Outlet />

            </>

        )
    }
}

export default HostLayout
