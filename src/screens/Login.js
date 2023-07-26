import React, { Component } from 'react'
import './Signup.css'
import logo from '../screens/Image/Group.png'
import Facebook from '../screens/Image/Facebook.png'
import Twitter from '../screens/Image/Twitter.png'
import Instagram from '../screens/Image/Instagram.png'
import Google from '../screens/Image/Google.png'
import reCAPTCHA from '../screens/Image/reCAPTCHA.png'
import { NavLink,useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    // event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/TeamsCondition');
  };

  return (
    <button onClick={()=>handleSubmit()}  style={{background: '#F15A29',width:'100%',height:40,marginTop:20,borderWidth:0,borderRadius:4}}>Login</button>
  );
}


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
      console.log('propsss ',this.props)
  return (
    <div className='Main-Container' style={{flex:1,height:window.innerHeight}}>
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
       <p style={{fontWeight:'bold',fontSize:29}}>Login</p>
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
       <div style={{height:'70%' ,marginTop:25}}>
        <div style={{marginBottom:10}}>
        <label>Email</label><br></br>
        <input style={{width:'100%',height:35,borderWidth:0.5,borderRadius:4,paddingLeft:5}} type='Email' placeholder='Enter Email here'/> <br></br>
        </div>
        <label style={{}}>Phone Number</label><br></br>
        <input style={{width:'100%',height:35,borderWidth:0.5,borderRadius:4,paddingLeft:5}}  type='text' placeholder='Enter password here'/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',marginTop:10}}>
        <label style={{fontSize:12,alignSelf:'flex-end'}}>Forget password? </label>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:'50%',marginTop:10,height:45 ,boxShadow:`1px 1px 2px 2px ${'#D3D3D3'}`,borderColor:'#D3D3D3'}}>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <input style={{width:20,height:20}} type="checkbox"/>
        <p style={{fontSize:11}}>i'm not a robot</p>
        </div>
        <img style={{width:35,height:35,marginRight:10 }} src={reCAPTCHA}  alt=''/>

       </div>
      <Home/>
       
       </div>
      <div style={{alignItems:'center',justifyContent:'center',display:'flex',marginTop:15}}>
        <label style={{fontSize:13}}>Don't have an account? </label>
        <NavLink to='/Signup' style={{backgroundColor:'white',border:0,fontSize:13}}>Register</NavLink>
      </div>
      
        </div>
        
    </div>
    </div>
  )
}
}
