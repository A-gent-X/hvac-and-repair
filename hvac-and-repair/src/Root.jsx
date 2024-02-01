import { Outlet, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Root.scss'

import React from 'react'

const Root = () => {
  return (
    <div className='main-root'>
      <nav className='navbar'>
        <NavLink className='navlink' to='/home'><h1>Home</h1></NavLink>
        <NavLink className='navlink' to='/services'><h1>Services</h1></NavLink>
        <NavLink className='navlink' to='/testimonials'><h1>Testimonials</h1></NavLink>
        <NavLink className='navlink' to='/contactus'><h1>Contact Us</h1></NavLink>
        <NavLink className='navlink' to='/aboutus'><h1>About Us</h1></NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Root