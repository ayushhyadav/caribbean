import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <div style={{width:'15%',margin:'0 auto'}}>
        <label style={{marginTop:30,fontSize:20,fontWeight:'600'}}> Property Location</label><br></br>
        <img style={{marginTop:30}} src={require('../../../assets/Group 35621.png')}/>
      </div>
    )
  }
}
