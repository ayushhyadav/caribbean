import React, { Component } from 'react'
import RegistrationHeader from './HomeHeader'
import { Link } from 'react-router-dom'

export default class Checkout extends Component {
  render() {
    return (

      <div>
        <RegistrationHeader/>

      <div style={{display:'flex'}}>
        <div style={{border:'2px groove #E2E8F0', width:'20%',height:550,marginTop:'2.5%',borderRadius:10,marginLeft:'10%'}}>
          <div style={{display:'flex',justifyContent:'center',marginTop:20}}>
        <div >
          <img src={require('../../assets/Rectangle 12.png')}/><br/>
         
          </div>
          <div style={{marginLeft:15}}>
          <label style={{fontSize:'120%',fontWeight:550}}>Latimer Grand Oaks</label><br/>
       <div>
      <label style={{fontSize:'80%'}}>From</label>
          <label style={{fontSize:'170%',color:'#F15A29',fontWeight:750}}>$1,119</label>
          <label style={{fontSize:'80%'}}>/night</label><br/>
          </div>
          <img src={require('../../assets/Vector (1).png')}/>
          <label style={{}}>(200)</label>
          </div>
          </div>
          <div style={{display:'flex',marginTop:'9%'}}>
          <div style={{color:'#474554',marginLeft:22}}>
          Check In
          </div>
          <div style={{color:'#474554',marginLeft:'52%'}}>
          9/12/2022
          </div>
          </div>
          <div style={{display:'flex',marginTop:'2%'}}>
          <div style={{color:'#474554',marginLeft:22,marginTop:'2%'}}>
          Check Out
          </div>
          <div style={{color:'#474554',marginLeft:'48%',marginTop:'2%'}}>
          9/12/2022
          </div>
          </div>
          <h4 style={{marginLeft:'5.5%',marginTop:20}}>Billing</h4>
          <div style={{display:'flex',marginTop:15}}>
          <div style={{color:'#474554',marginLeft:22}}>
          5 Nights
          </div>
          <div style={{color:'#474554',marginLeft:'59.5%'}}>
          $5,595
          </div>
          </div>
          <div style={{display:'flex',marginTop:12}}>
          <div style={{color:'#474554',marginLeft:22}}>
          Rafting
          </div>
          <div style={{color:'#474554',marginLeft:'64.5%'}}>
          $200
          </div>
          </div>
          <div style={{display:'flex',marginTop:12}}>
          <div style={{color:'#474554',marginLeft:22}}>
          Break Fast
          </div>
          <div style={{color:'#474554',marginLeft:'58.5%'}}>
          $500
          </div>
          </div>
          <div style={{display:'flex',marginTop:22}}>
          <div style={{color:'#474554',marginLeft:22}}>
          Service Fee
          </div>
          <div style={{color:'#474554',marginLeft:'57.5%'}}>
          $400
          </div>
          </div>
          <hr style={{color:'#474554',width:'92%'}}/>
          <div style={{display:'flex',marginTop:'2%'}}>
          <div style={{color:'#474554',marginLeft:22}}>
          Subtotal
          </div>
          <div style={{marginLeft:'59%'}}>
          <label style={{fontSize:'130%',fontWeight:750}}>$6,695</label>
          </div>
          </div>
        <Link to='/VarifyBooking'><button style={{border:'1px solid black',width:'92%',marginTop:'3.5%',height:40,border:'none',background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)',color:'#FFFFFF',marginLeft:'3.5%',textAlign:'center',borderRadius:10}}>
Pay $6,695
         </button></Link> 
        </div>
        
      <div> 
       
        <h1 style={{marginLeft:'15%',marginTop:35}}>Payment Option</h1>
        <div style={{marginTop:20}}>
          <div style={{marginTop:'2.5%',justifyContent:" ",display:'flex',marginLeft:'22.5%'}}>
        <input type='radio' style={{height:24,width:24,marginLeft:'-10%',accentColor:'#F15A29'}}></input>&nbsp;&nbsp;
        <label style={{fontSize:'125%'}}>Creadit Card</label>&nbsp;&nbsp;
        <img src={require('../../assets/Visa.png')}/>&nbsp;&nbsp;
        <img src={require('../../assets/Mastercard.png')}/>
        </div>
        <div style={{marginLeft:'15%',display:'flex'}}>
            <div style={{marginTop:20}}>
            <label>First Name</label><br/>
            <input style={{width:450,height:45,borderRadius:10,border:'2px solid #E2E8F0',marginTop:20,paddingLeft:10}} type='text' placeholder='First Name'/>
            </div>
            <div style={{marginLeft:'2%',marginTop:'2.5%'}}>
            <label>Last Name</label><br/>
            <input style={{width:450,height:45,borderRadius:10,border:'1px solid #E2E8F0',marginTop:20,paddingLeft:10}} type='text' placeholder='Last Name'/>
            </div>
         
        </div>
        <div style={{marginLeft:'15%',marginTop:20}}>
                <label>Card Number</label><br/>
                <input style={{width:920,height:45,border:'2px solid #E2E8F0',borderRadius:10,marginTop:20,paddingLeft:10}} type='number' placeholder=''/>
            </div>
            <div style={{display:'flex',marginLeft:'15%',marginTop:20}}>
            <div>
                <label>Expiration Date</label><br/>
                <input style={{width:450,height:45,border:'2px solid #E2E8F0',borderRadius:10,marginTop:'2%',paddingLeft:10}} type='text'/>
            </div>
            <div style={{marginLeft:20}} >
                <label style={{color:'#474554'}} >Security Code</label><br/>
                <input style={{width:450,height:45,border:'2px solid #E2E8F0',borderRadius:10,marginTop:20,paddingLeft:10}} type='text'/>
            </div>
            </div>
        </div> 
        <hr style={{width:743,marginTop:40,marginLeft:'15%'}}/>
        <div style={{marginTop:40,justifyContent:" ",display:'flex',marginLeft:'14%'}}>
        <input type='radio' style={{border:"1px solid black",height:24,width:24,borderRadius:'100%'}}></input>&nbsp;&nbsp;
        <label style={{fontSize:'125%'}}>PayPal</label>&nbsp;&nbsp;
        <img src={require('../../assets/PayPal.png')}/>




        </div>
      </div>
      </div>
      </div>
    )
  }
}