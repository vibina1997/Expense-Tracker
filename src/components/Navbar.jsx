import React from 'react'

import sty from '../assets/Navbar.module.css'
const Navbar = () => {
  return (
    <div>
      <nav className={sty.navbar}>
        <h2 className={sty.title}>Advance Budget and Expense Tracker System -PHP-Admin</h2>
        <button className={sty.adminButton}>Administrator Admin</button>
      </nav>
       
    </div>
  )
}

export default Navbar
