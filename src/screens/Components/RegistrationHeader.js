import React, { Component } from 'react'

export default class RegistrationHeader extends Component {

    constructor(props){
        super(props)
        this.state={
          
        }
    }
  render() {
    return (
        <nav style={{borderBottom:'1px solid #E5E7EB'}} className="navbar navbar-expand-lg navbar-white  ">
        <div style={{width:'90%',height:70}} className="container-fluid">
        <img style={{width:40,height:38,}} alt=''
                          src={require('../Image/Group1.png')}
                        />
          <a style={{color:'#F15A29',fontSize:25,fontWeight:'bold',marginLeft:5 }} className="navbar-brand" href="/">CARIBBEANEAZE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{justifyContent:'flex-end'}} className="collapse navbar-collapse" id="navbar">
            
           
              <button  className=" me-2 btn btn-outline-dark "style={{marginLeft:10,height:48,background:'none',width:'15%'}}  type="submit">Become a User</button>

          </div>
        </div>
      </nav>
    )
  }
}
