import React, { Component } from 'react'
import SceensHeader from './ScreensHeader'
import JobsDetailes from './JobsDetailes'
import Booking from './Booking';
import UserProfile from './UserProfile';
export default class Deshbord extends Component {
  render() {
    return (
        <div>
 <SceensHeader/>
      

<UserProfile/>

      <div style={{margin:'0 auto,',width:'100%',display:'flex',justifyContent:'center' }}  >
     
      <div style={{display:'flex',width:'85%',borderTop:'1px solid #E2E8F0',justifyContent:'center',margin:'0 auto,',}}>
        <div style={{width:'25%',}}>
        <JobsDetailes/>
         </div>
         <div style={{borderLeft:'1px solid',width:'75%'}}>
         <Booking/>
         </div>
      
      </div>
     </div>
      <div>
       
      </div>



      </div>
    )
  }
}












































