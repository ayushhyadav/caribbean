import React, { Component } from 'react'

export default class RegistrationHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <nav style={{ borderBottom: '1px solid #E5E7EB' }} class="navbar navbar-expand-lg navbar-white  ">
                <div style={{ width: '95%' ,height:70,justifyContent:'space-between'}} class="container-fluid">
                    <img style={{ width: 20, height: 20, }} alt='' src={require('../../Image/Group1.png')} />
                    <a style={{ color: '#F15A29', fontSize: 20, fontWeight: 'bold', marginLeft: 5 }} class="navbar-brand" href="/">CARIBBEANEAZE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Booking History</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Earning</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">My Listing</a>
                            </li>

                        </ul>
                    </div>

                    <div style={{ justifyContent: 'flex-end', }} class="collapse navbar-collapse" id="navbarSupportedContent">
                        <img src={require('../../../assets/sms.png')} alt=''/>
                        <img style={{marginLeft:15}} src={require('../../../assets/notification.png')} alt=''/>
                        <button style={{marginLeft:15,height:48}} class=" me-2 btn btn-outline-dark " type="submit">Become a User</button>
                        

                    </div>
                </div>
            </nav>
            
        )
    }
}
