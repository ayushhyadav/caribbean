import React, { Component } from "react";
import SceensHeader from './Components/Deshbord/ScreensHeader';
import ActiveBookingList from "./Components/Deshbord/ActiveBookingList";

export default class BookingHistry extends Component{
    constructor(props){
        super(props)
        this.state={
            activeBt:'active_booking'
        }
    }
    render(){
        return(
            <div>
                <SceensHeader/>
                <div style={{fontSize:20,fontWeight:'600',color:'#0F172A',padding:10,paddingLeft:30,borderBottom:'1px solid #E2E8F0'}}>Bookings</div>
                <div style={{display:'flex',width:'100%',marginTop:10}}>
                    <div style={{flexDirection:'column',display:'flex'}}>
                        <label style={{fontSize:14,fontWeight:'600',color:'#0F172A',paddingLeft:20}}>All Booking</label>
                        <button onClick={()=>this.setState({activeBt:'active_booking'})} style={{height:29,fontSize:14,fontWeight:'600',border:0,color:'#0F172A',borderLeft:this.state.activeBt =='active_booking'? '4px solid #F15A29':'white'}}>Active Bookings</button>
                        <button onClick={()=>this.setState({activeBt:'cancel_booking'})} style={{height:29,fontSize:14,fontWeight:'600',border:0,color:'#0F172A',borderLeft:this.state.activeBt =='cancel_booking'? '4px solid #F15A29':'white'}}>Canceled Bookings</button>
                    </div>
                    <ActiveBookingList/>
                </div>
                
            </div>
        )
    }
}