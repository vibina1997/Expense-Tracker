import React from 'react'
import buge from '../assets/Budget.module.css'
const carddata=[
  {
    id:1,
    
    title:"Current overol budget",
    amount:"$49255",},
    {
      id:2,
      
      title:"Todays Budget Entiries",
      amount:"$49255",},
    {
     id:3,
    
title:"This Month   Budget Entiries",
amount:"$49255",},

]
    
      
const Budget = () => {
  return (
    
    <div className='container d-flex justify-content-center align-items-center flex-column col-6  mt-5'> 
    <div className={buge.budgetmaincontainer}>'


      <h2 className={buge.title}>Welcome to Advanced Budget and Expense Tracker System -PHP</h2>
      <div className={buge.cardcontainer}>
       {carddata.map((data) => (
        <div key={data.id} className={buge.budgetcontainer}>
          
          <h3 className={buge.cardtitle}>{data.title}</h3>
          <p className={buge.cardamount}>{data.amount}</p>
        </div>
        
      ))}
      </div>
    </div>
   
    </div>
    
  )
}

export default Budget
