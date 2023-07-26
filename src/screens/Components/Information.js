import React, { Component } from 'react'
import InputeFiled from './InputeFiled'

export default class Information extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
             <div style={{width:'70%',padding:20,}}>
          <label style={{marginLeft:20}}>Step 1/8</label>
          <h4 style={{fontSize:25,fontWeight:'700',marginLeft:20}}>Personal Information</h4>
          <label style={{fontSize:13,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Lorem ipsum dolor sit emet conseteur</label>
          <div style={{display:'flex',marginTop:20,justifyContent:'space-between' }}>
       <InputeFiled secureTextEntry={false} title={'First Name'} placeHolder="First Name" onChangeText={()=>{}} />
       <InputeFiled secureTextEntry={false} title={'Last Name'} placeHolder="Last Name" onChangeText={()=>{}} />
       </div>
       <div style={{display:'flex',marginTop:10,justifyContent:'space-between'}}>
       <InputeFiled secureTextEntry={false} title={'Email'} placeHolder="Enter Email" onChangeText={()=>{}}/>
       <InputeFiled secureTextEntry={false} title={'Date of Birth'} placeHolder="DD/MM/YYYY" onChangeText={()=>{}}/>
       </div>
       <div style={{display:'flex',marginTop:10,justifyContent:'space-between'}}>
       <InputeFiled secureTextEntry={true} title={'Password'}  placeHolder="Password" onChangeText={()=>{}}/>
       <InputeFiled secureTextEntry={true} title={'Confirm Password'} placeHolder="Confirm Password" onChangeText={()=>{}} />
       </div>
       <div style={{display:'flex', marginTop:'1%',alignItems:'center',justifyContent:'flex-end'}} onClick={()=>this.props.NextCallBack({navigationTo:'Upload_Profile',id:2})}>
                    <button style={{color:'white',background:'#F15A29',width:'10%',borderRadius:10,height:'45px' }}>Next</button>
                    </div>
         </div> 
        )
    }
}