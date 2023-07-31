import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class HomeHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <nav style={{ borderBottom: '1px solid #E5E7EB' }} class="navbar navbar-expand-lg navbar-white  ">
                <div style={{ width: '90%' ,height:70,justifyContent:'space-between'}} class="container-fluid">
                   <div>
                   <img style={{ width: 40, height: 35, }} alt='' src={require('../Image/Group1.png')} />
                    <a style={{ color: '#F15A29', fontSize: 25, fontWeight: 'bold', marginLeft: 5,fontFamily:'cursive' ,width:'20%'}} class="navbar-brand" href="/">CARIBBEANEAZE</a>
                   </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a style={{fontSize:18,fontWeight:'500',width:'5'}} class="nav-link active" aria-current="page" href="/MyBooking">My Booking</a>
                            </li>
                            <li class="nav-item">
                                <a style={{fontSize:18,fontWeight:'500',width:'5'}} class="nav-link" href="/EmailSupport">Support</a>
                            </li>
                           

                        </ul>
                    </div>

                    <div style={{ justifyContent: 'flex-end', }} class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link to='/Message'>   <img src={require('../../assets/sms.png')} alt=''/></Link>
                        <img style={{marginLeft:15}} src={require('../../assets/notification.png')} alt=''/>
                       <Link to='/Registration'> <button style={{marginLeft:15,height:48}} class=" me-2 btn btn-outline-dark " type="submit">Become a User</button></Link>
                      <Link to='/Signup'> <button style={{marginLeft:15,height:48,width:'130%',border:'none',borderRadius:11,color:'white',background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)'}} class=" me-2 btn btn-outline-dark " type="submit">Signup</button></Link> 
                        

                    </div>
                </div>
            </nav>
            
        )
    }
}
