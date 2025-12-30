
import React from "react";
import styles from '../assets/Sidebar.module.css'

const Sidebar = ({ open }) => {
  return (
    <div className="">
    <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
      <h2 className={styles.logo}></h2>
        <nav className={styles.nav}>
            <h3>B&E Tracker</h3>
            <ul>
                <h3 className={styles.sidebar}>Dashboard</h3>
                <li className={styles.active}>
                    <h4>Budget manegement</h4>
                 </li>
                <li>
                <h4>Expense Management</h4>
                <i class="bi bi-alarm-fill"></i>
                </li>

                    <h3 className={styles.sidebar}>Reports</h3>
                <li>
                    <h4>Budget Reports</h4>
                </li>
                
                <li>
                    <h4>Expence Reports</h4>
                </li>
                <h3 className={styles.sidebar}>Maintenance</h3>
                <li>
                    <h4>Category List</h4>
                </li>
                <li>
                    <h4>settings</h4>
                </li>
            </ul>
        </nav>
    </aside>
    </div>
  );
};

export default Sidebar;


