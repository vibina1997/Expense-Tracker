
import React from "react";
import main from '../Assets/Sidebar.module.css'

const Sidebar = ({ open }) => {
  return (
    <div className="">
    <aside className={`${main.sidebar} ${open ? main.open : ""}`}>
      <h2 className={main.logo}></h2>
        <nav className={main.nav}>
            <h3>B&E Tracker</h3>
            <ul>
                <h3 className={main.sidebar}>Dashboard</h3>
                <li className={main.active}>
                    <h4>Budget manegement</h4>
                 </li>
                <li>
                <h4>Expense Management</h4>
                <i class="bi bi-alarm-fill"></i>
                </li>

                    <h3 className={main.sidebar}>Reports</h3>
                <li>
                    <h4>Budget Reports</h4>
                </li>
                
                <li>
                    <h4>Expence Reports</h4>
                </li>
                <h3 className={main.sidebar}>Maintenance</h3>
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


