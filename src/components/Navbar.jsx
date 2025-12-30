import React from 'react'

import navoo from '../assets/Navbar.module.css'
const Navbar = () => {
  return (
    <div>
      <nav className={navoo.navbar}>
        <h2 className={navoo.title}>Advance Budget and Expense Tracker System -PHP-Admin</h2>
        <button className={navoo.adminButton}>Administrator Admin</button>
      </nav>
       
    </div>
  )
}

export default Navbar
