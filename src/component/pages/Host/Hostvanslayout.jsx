import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Hostvanslayout = () => {
  return (
    <div>
    <Outlet/>
        <nav>
            <NavLink to="info"> Details </NavLink>
            <NavLink to="pricing" > Pricing </NavLink>
            <NavLink to="photo"> Photos </NavLink>
        </nav>
    </div>
  )
}

export default Hostvanslayout