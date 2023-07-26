import React, { Component } from 'react'
import Message from './Msg'
import Secondscreen from './Message'
import HomeHeader from '../HomeHeader'

export default class MainMessage extends Component {
  render() {
    return (
    <div>
     <HomeHeader></HomeHeader>
      <div style={{display:'flex',width:'90%',justifyContent:'center',margin:'0 auto',marginTop:20}}>
        <Message/>
        <Secondscreen/>
      </div>
      </div>
    )
  }
}
