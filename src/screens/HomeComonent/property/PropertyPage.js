import React, { Component } from 'react'
import HomeHeader from '../HomeHeader'
import Image from './Image'
import UserDetails from './UserDetails'
import PropertyBooking from './PropertyBooking'

export default class PropertyPage extends Component {
  render() {
    return (
      <div>
        <HomeHeader/>
        <Image/>
<div className='main' style={{display:'flex',width:'90%',margin: '0 auto',marginTop:25}}> 
<UserDetails/>
<PropertyBooking/>
</div>
      </div>
    )
  }
}
