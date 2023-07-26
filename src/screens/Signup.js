import React from 'react'
import './Signup.css'
import logo from '../screens/Image/Group.png'
import Facebook from '../screens/Image/Facebook.png'
import Twitter from '../screens/Image/Twitter.png'
import Instagram from '../screens/Image/Instagram.png'
import Google from '../screens/Image/Google.png'
import InputeFiled from './Components/InputeFiled'
import { NavLink } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='Main-Container' style={{flex:1,height:window.innerHeight,width:window.innerWidth}}>
    <div className='Container' style={{ width:window.innerWidth/2}}>
       <div className='detail' style={{padding:10}}>
        <div style={{flexDirection:'row',display:'flex',marginTop:30,textAlign:'center',alignItems:'center',justifyContent:'space-between',}}>
        <div style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img style={{width:30,height:25,marginTop:11}} src={logo}  alt=''/>
        <h5 style={{color:'white'}}>CARIBBEANEAZE</h5>
        </div>
         <div style={{flexDirection:'row',display:'flex'}}>
            <img style={{width:20,height:20,marginRight:10 }} src={Facebook}  alt=''/>
        <img style={{width:21,height:21,marginRight:10}} src={Twitter}  alt=''/>
        <img style={{width:20,height:20,marginRight:10}} src={Instagram}  alt=''/>
        </div>
       
        </div>
        <div style={{color:'white',fontSize:12,alignItems:'center',justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at elit in eu augue nulla porttitor interdum. Eu aliquet sit nisl amet, hac quisque turpis. Sit ut mattis amet a quis augue lacus, morbi lorem. Est dui rhoncus blandit massa sed ipsum felis. </div> 
       </div>
      
    </div>
    <div style={{height: '100%',display:"flex",background:'white',width:window.innerWidth/2,justifyContent:'center',alignItems:'center'}}>
       <div style={{width:'70%'}}>
        <div style={{flexDirection:'row',height:50,alignItems:'center',display:'flex',justifyContent:'space-between'}}>
       <p style={{fontWeight:'bold',fontSize:29}}>Registration</p>
       <button style={{height:35,borderRadius:7,background:'white',width:'30%',borderWidth:1.4}}>Become a Host</button>
       </div>
       <label style={{height:26}}>Lorem ipsum dolor sit emet conseteur</label>
       <div style={{display:'flex',flexDirection:'row',marginTop:5 ,alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'row' ,borderColor:'#C4C4C4', backgroundColor:"#F8FAFC",border:'1px solid Gray', width:'35%',height:35 ,borderRadius:10, alignItems:'center',justifyContent:'flex-start'}}>
        <img style={{width:20,height:20,marginLeft:10}} src={Facebook}  alt=''/>
            <label style={{marginLeft:10,fontSize:15}}>Facebook</label>
        </div>
        <div style={{display:'flex',flexDirection:'row',borderColor:'#C4C4C4' , backgroundColor:"#F8FAFC",border:'1px solid Gray', width:'35%',height:35,marginLeft:10,borderRadius:10,alignItems:'center',justifyContent:'flex-start' }}>
        <img style={{width:20,height:20,marginLeft:10}} src={Google}  alt=''/>
            <label style={{marginLeft:10,fontSize:15}}>Google</label>
        </div>
       </div>
       <div style={{display:'flex',marginTop:20,justifyContent:'space-between'}}>
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
       <button style={{background: '#F15A29',width:'100%',height:40,marginTop:40,borderWidth:0,borderRadius:4,fontSize:15,color:'white'}}>Register</button>
       <div style={{alignItems:'center',justifyContent:'center',display:'flex',marginTop:15}}>
        <label style={{fontSize:13,color:'#0F172A'}}>Already have an account?</label>
        <NavLink to='/' style={{backgroundColor:'white',fontSize:13,color:'#0F172A',fontWeight:'bold'}}>Login</NavLink>
      </div>
      
        </div>
        
    </div>
    </div>
  )
}
