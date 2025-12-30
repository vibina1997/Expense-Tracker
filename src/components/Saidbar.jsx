
import React from "react";
import maino from '../assets/Sidebar.module.css'

const Sidebar = ({ open }) => {
  return (
    <div className="">
    <aside className={`${maino.sidebar} ${open ? main.open : ""}`}>
      <h2 className={maino.logo}></h2>
        <nav className={maino.nav}>
            <h3>B&E Tracker</h3>
            <ul>
                <h3 className={maino.sidebar}>Dashboard</h3>
                <li className={maino.active}>
                    <h4>Budget manegement</h4>
                 </li>
                <li>
                <h4>Expense Management</h4>
                <i class="bi bi-alarm-fill"></i>
                </li>

                    <h3 className={maino.sidebar}>Reports</h3>
                <li>
                    <h4>Budget Reports</h4>
                </li>
                
                <li>
                    <h4>Expence Reports</h4>
                </li>
                <h3 className={maino.sidebar}>Maintenance</h3>
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


