import React, { Component } from 'react'
// import InputeFiled from './InputeFiled'
import OTPInput from 'react-otp-input'

export default class OtpInputeFiled extends Component{
    constructor(props){
        super(props)
        this.state={
            otp: ''
        }
    }
    render(){
        return(
             <div style={{width:'75%',padding:20}}>
          <label style={{marginLeft:20}}>Step 1/8</label>
          <h4 style={{fontSize:25,fontWeight:'700',marginLeft:20}}>Verify Phone Number</h4>
          <label style={{fontSize:13,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Lorem ipsum dolor sit emet conseteur</label>
          <div style={{height:'40%',borderColor:'#E2E8F0',marginTop:10}}>
         
            <label style={{marginLeft:20}}>
              Mobile No
            </label>
        <p style={{fontSize:23,fontWeight:'bold'}}>Enter 6 Digit Code and Verfiy your Phone Number</p>
            <OTPInput
        value={this.state.otp}
        onChange={(value)=>console.log(value)}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{ width: 40, height: 45, fontSize: '18px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', textAlign: 'center' }}
      />
      </div>
       <div style={{display:'flex', marginTop:'1%',alignItems:'center',justifyContent:'flex-end'}}>
       <button style={{width:'10%',borderRadius:10,height:'45px',borderWidth:0,background:'white' }}
        onClick={()=>this.props.NextCallBack({navigationTo:'Upload_Profile',id:2})}
       >Back</button>
                    <button style={{color:'white',background:'#F15A29',width:'10%',borderRadius:10,height:'45px',marginLeft:10 }}
                    onClick={()=>this.props.NextCallBack({navigationTo:'Pasport_veri',id:4})}
                    >Next</button>
                    </div>
         </div> 
        
        )
    }
}