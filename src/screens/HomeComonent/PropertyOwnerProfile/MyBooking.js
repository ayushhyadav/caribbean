import React, { Component } from 'react'
import RegistrationHeader from '../HomeHeader'

import User from './User'
import JohnProperties from './JohnProperties'
import Map from './Map'


export default class MyBooking extends Component {
  render() {
    return (
      <div>
        <RegistrationHeader/>
        <User/>
        <div style={{display:'flex',borderTop:'1px solid #E2E8F0',width:'90%',margin:'0 auto'}}>
          <Map/>
        <JohnProperties/>
        </div>
       
        
      </div>
    )
  }
}
