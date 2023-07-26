import React, { Component } from 'react'


export default class UserProfile extends Component{
    constructor(props){
        super(props)
        this.state={
            rating:[1,2,3,4,5]
        }
    }
    render(){
        return(
            <div style={{display:'flex', flexDirection:'row',width:'95%',marginBottom:10,alignItems:'center',marginTop:10,justifyContent:'space-between',alignContent:'center'}}>
       
        <div style={{ flexDirection:'row',display:"flex",marginLeft:30,alignItems:'center',justifyContent:'center'}}>
            
        <img style={{width:80,height:80,borderRadius:40}} src={require('../../../assets/Rectangle 61.png')} alt=''/>
        <div style={{marginLeft:20,display:'flex',flexDirection:'column' }}>
            <label style={{fontSize:23,fontWeight:'700',color:'#0F172A'}}>John Doe</label>
            <label style={{color:'#64748B',fontSize:14,fontWeight:'400'}}> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </label>
            <div style={{display:'flex'}}>
                {this.state.rating.map((val)=>
                <img style={{width:19,height:18}} src={require('../../../assets/Vector(1).png')} alt=''/>
                )}
                 <label style={{color:'#64748B',fontSize:17,fontWeight:'600'}}>(200)</label>
            </div>
           
            </div>
            
            <button style={{height:40,fontSize:14,fontWeight:'600',color:'#0F172A',marginLeft:20,border:'1px solid',borderColor:'#0F172A',alignItems:'center',justifyContent:'center'}} class=" me-2 btn btn-outline-dark " type="submit">View Location</button>
        </div>
            <button style={{ height: 50,borderRadius:10,fontSize:18,fontWeight:'600', backgroundColor: '#0F172A', color: 'white' }} className="me-2 btn btn-outline-dark" type="submit">
                My Profile 
            </button>
       
      </div>
        )
    }
}