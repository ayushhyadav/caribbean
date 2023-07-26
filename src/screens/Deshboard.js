import React, { Component } from 'react'
import SceensHeader from './Components/Deshbord/ScreensHeader'
import JobsDetailes from './Components/Deshbord/JobsDetailes'
import Booking from './Components/Deshbord/Booking';
import UserProfile from './Components/Deshbord/UserProfile';
export default class Deshbord extends Component {
  render() {
    return (
        <div>
 <SceensHeader/>
      

<UserProfile/>

      <div style={{  justifyContent:'center',alignItems:'center',borderTop:'1px solid',borderTopColor:'#E2E8F0'}}  >
      <div style={{display:'flex', padding:20}}>
        <div style={{width:'20%',}}>
        <JobsDetailes/>
         </div>
         <div style={{borderLeft:'1px solid',width:'70%'}}>
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












































