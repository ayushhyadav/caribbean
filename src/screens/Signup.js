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
       <div className='detail' style={{padding:20}}>
        <div style={{flexDirection:'row',display:'flex',marginTop:30,textAlign:'center',alignItems:'center',justifyContent:'space-between',width:'100%',padding:20}}>
        <div style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img style={{width:45,height:40,marginTop:5,}} src={logo}  alt=''/>
        <h5 style={{color:'white'}}>CARIBBEANEAZE</h5>
        </div>
         <div style={{flexDirection:'row',display:'flex'}}>
            <img style={{width:25,height:25,marginRight:10 }} src={Facebook}  alt=''/>
        <img style={{width:25,height:25,marginRight:10}} src={Twitter}  alt=''/>
        <img style={{width:25,height:25,marginRight:10}} src={Instagram}  alt=''/>
        </div>
       
        </div>
        <div style={{color:'white',fontSize:18,alignItems:'center',justifyContent:'center',width:'100%',padding:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at elit in eu augue nulla porttitor interdum. Eu aliquet sit nisl amet, hac quisque turpis. Sit ut mattis amet a quis augue lacus, morbi lorem. Est dui rhoncus blandit massa sed ipsum felis. </div> 
       </div>
      
    </div>
    <div style={{height: '90%',display:"flex",background:'white',width:window.innerWidth/2,justifyContent:'center',alignItems:'center'}}>
       <div style={{width:'70%'}}>
        <div style={{flexDirection:'row',height:40,alignItems:'center',display:'flex',justifyContent:'space-between'}}>
       <p style={{fontWeight:'bold',fontSize:29}}>Registration</p>
       <button style={{height:50,color:'#000000',borderRadius:7,background:'white',width:'23%',borderWidth:2.4}}>Become a Host</button>
       </div>
       <label style={{fontSize:20}}>Lorem ipsum dolor sit emet conseteur</label>
       <div style={{display:'flex',flexDirection:'row',marginTop:20 ,alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'row' ,borderColor:'#C4C4C4', backgroundColor:"#F8FAFC", width:'25%',height:45 ,borderRadius:10, alignItems:'center',justifyContent:'flex-start'}}>
        <img style={{width:25,height:25,marginLeft:10}} src={Facebook}  alt=''/>
            <label style={{marginLeft:10,fontSize:20,color:'#474554'}}>Facebook</label>
        </div>
        <div style={{display:'flex',flexDirection:'row',borderColor:'#C4C4C4' , backgroundColor:"#F8FAFC", width:'25%',height:45,marginLeft:10,borderRadius:10,alignItems:'center',justifyContent:'flex-start' }}>
        <img style={{width:25,height:25,marginLeft:10}} src={Google}  alt=''/>
            <label style={{marginLeft:10,fontSize:20,color:'#474554'}}>Google</label>
        </div>
       </div>
       <div style={{display:'flex',marginTop:20,justifyContent:'space-between'}}>
       {/* <InputeFiled secureTextEntry={false} title={'First Name'} placeHolder="First Name" onChangeText={()=>{}} /> */}
       <div style={{ width: '48%', maxWidth: '400px' }}>
                <label style={{ color: '#474554' }}>First Name</label><br />
                <input
                    style={{
                        width: '100%',
                        height: '54px',
                        padding: '10px',
                        borderWidth: '0.1px',
                        marginTop: '5px',
                        borderColor: '#E2E8F0',
                        borderRadius: '7px'
                    }}
                    
                    placeholder='First Name'
                />
            </div>
            <div style={{ width: '48%', maxWidth: '400px' }}>
                <label style={{ color: '#474554' }}>Last Name</label><br />
                <input
                    style={{
                        width: '100%',
                        height: '54px',
                        padding: '10px',
                        borderWidth: '0.1px',
                        marginTop: '5px',
                        borderColor: '#E2E8F0',
                        borderRadius: '7px'
                    }}
                    
                    placeholder='Last Name'
                />
            </div>
       {/* <InputeFiled style={{width:'10%'}} secureTextEntry={false} title={'Last Name'} placeHolder="Last Name" onChangeText={()=>{}} /> */}
       </div>
       <div style={{display:'flex',marginTop:20,justifyContent:'space-between'}}>
       <div style={{ width: '48%', maxWidth: '400px' }}>
                <label style={{ color: '#474554' }}>Email</label><br />
                <input
                    style={{
                        width: '100%',
                        height: '54px',
                        padding: '10px',
                        borderWidth: '0.1px',
                        marginTop: '5px',
                        borderColor: '#E2E8F0',
                        borderRadius: '7px'
                    }}
                    
                    placeholder='Enter Email'
                />
            </div>
            <div style={{ width: '48%', maxWidth: '400px' }}>
                <label style={{ color: '#474554' }}>Date of Birth</label><br />
                <input
                    style={{
                        width: '100%',
                        height: '54px',
                        padding: '10px',
                        borderWidth: '0.1px',
                        marginTop: '5px',
                        borderColor: '#E2E8F0',
                        borderRadius: '7px'
                    }}
                    
                    placeholder='DD/MM/YYYY'
                />
            </div>
       {/* <InputeFiled secureTextEntry={false} title={'Email'} placeHolder="Enter Email" onChangeText={()=>{}}/> */}
       {/* <InputeFiled secureTextEntry={false} title={'Date of Birth'} placeHolder="DD/MM/YYYY" onChangeText={()=>{}}/> */}
       </div>
       <div style={{display:'flex',marginTop:20,justifyContent:'space-between'}}>
       <div style={{ width: '48%', maxWidth: '400px' }}>
                <label style={{ color: '#474554' }}>Password</label><br />
                <input
                    style={{
                        width: '100%',
                        height: '54px',
                        padding: '10px',
                        borderWidth: '0.1px',
                        marginTop: '5px',
                        borderColor: '#E2E8F0',
                        borderRadius: '7px'
                    }}
                    
                    placeholder='Password'
                />
            </div>
            <div style={{ width: '48%', maxWidth: '400px' }}>
                <label style={{ color: '#474554' }}>Confirm Password</label><br />
                <input
                    style={{
                        width: '100%',
                        height: '54px',
                        padding: '10px',
                        borderWidth: '0.1px',
                        marginTop: '5px',
                        borderColor: '#E2E8F0',
                        borderRadius: '7px'
                    }}
                    
                    placeholder='Confirm Password'
                />
            </div>
       {/* <InputeFiled secureTextEntry={true} title={'Password'}  placeHolder="Password" onChangeText={()=>{}}/> */}
       {/* <InputeFiled secureTextEntry={true} title={'Confirm Password'} placeHolder="Confirm Password" onChangeText={()=>{}} /> */}
       </div>
       <button style={{background: '#F15A29',width:'100%',height:64,marginTop:90,borderWidth:0,borderRadius:8,fontSize:25,color:'white',fontWeight:'500'}}>Register</button>
       <div style={{alignItems:'center',justifyContent:'center',display:'flex',marginTop:25}}>
        <label style={{fontSize:20,color:'#0F172A'}}>Already have an account?</label>
        <NavLink to='/Login' style={{backgroundColor:'white',fontSize:20,borderBottom:'none',color:'#0F172A',fontWeight:'bold',padding:5}}>Login</NavLink>
      </div>
      
        </div>
        
    </div>
    </div>
  )
}
