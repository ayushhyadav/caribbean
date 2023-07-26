import React, { Component } from 'react'
import SceensHeader from './Components/Deshbord/ScreensHeader'
import UserProfile from './Components/Deshbord/UserProfile';
import ListingList from './Components/Deshbord/ListingList';
export default class MyListing extends Component {
  render() {
    return (
        <div>
            <SceensHeader/>
            <UserProfile/>
            <ListingList/>
        </div>
    )
  }
}