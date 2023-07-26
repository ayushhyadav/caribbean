import React, { Component } from 'react'

export default class RegistrationHeader extends Component {

    constructor(props){
        super(props)
        this.state={
          
        }
    }
  render() {
    return (
        <nav style={{borderBottom:'1px solid #E5E7EB'}} class="navbar navbar-expand-lg navbar-white  ">
        <div style={{width:'90%'}} class="container-fluid">
        <img style={{width:20,height:20,}} alt=''
                          src={require('../Image/Group1.png')}
                        />
          <a style={{color:'#F15A29',fontSize:15,fontWeight:'bold',marginLeft:5 }} class="navbar-brand" href="/">CARIBBEANEAZE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div style={{justifyContent:'flex-end'}} class="collapse navbar-collapse" id="navbarSupportedContent">
            
           
              <button  class=" me-2 btn btn-outline-dark " type="submit">Become a User</button>

          </div>
        </div>
      </nav>
    )
  }
}
