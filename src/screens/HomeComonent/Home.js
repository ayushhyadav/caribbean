import React, { Component } from 'react'
 import HomeHeader from './HomeHeader'
import Crousel from './Crousel'
import ScrollDestination from './ScrollDestination'
import Card from './Card'
import './Home.css'


export default class Home extends Component {
  render() {
    return (
      <div style={{width:'100%',height:'100%'}}>
        <HomeHeader/>
        <Crousel/>
        <ScrollDestination/>
        <Card/> 
   
      </div>
    )
  }
}
