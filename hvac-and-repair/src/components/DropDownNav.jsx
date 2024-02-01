import React from 'react'
import './DropDownNav.scss'

const DropDownNav = () => {
  return (
    <nav className='dropdown-navbar'>
    <ul className='dropdown-navlist'>
      <li>Repair</li>
      <li>Ductwork</li>
      <li>Refrigerant</li>
      <li>Maintenance</li>
      <li>Installation</li>
    </ul>
  </nav>
  )
}

export default DropDownNav