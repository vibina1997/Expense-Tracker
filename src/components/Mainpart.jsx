import React from 'react'
import Navbar from './Navbar'
import Saidbar from './Saidbar'

import Budget from './Budget'

import Current from './Current'
const Mainpart = () => {
  return (
    <div>
      <Navbar/>
      <Saidbar/>
      <Budget/>
      <Current/>
      
      {/* <Addvalue/> */}
    
    </div>
  )
}

export default Mainpart
