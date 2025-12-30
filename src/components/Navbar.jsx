import React from 'react'

import style from '../assets/Navbar.module.css'
const Navbar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <h2 className={style.title}>Advance Budget and Expense Tracker System -PHP-Admin</h2>
        <button className={style.adminButton}>Administrator Admin</button>
      </nav>
       
    </div>
  )
}

export default Navbar
