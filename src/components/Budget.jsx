import React from 'react'
import styl from '../Assets/Budget.module.css'
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
    <div className={styl.budgetmaincontainer}>'


      <h2 className={styl.title}>Welcome to Advanced Budget and Expense Tracker System -PHP</h2>
      <div className={styl.cardcontainer}>
       {carddata.map((data) => (
        <div key={data.id} className={styl.budgetcontainer}>
          
          <h3 className={styl.cardtitle}>{data.title}</h3>
          <p className={styl.cardamount}>{data.amount}</p>
        </div>
        
      ))}
      </div>
    </div>
   
    </div>
    
  )
}

export default Budget
