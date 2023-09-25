import React, { Component } from 'react'
import FileBrowser from './FileBrowser'
import { Link } from 'react-router-dom'
const Amenities=[
    {
     Item:'Wifi'
    },
    {
     Item:'Washer'
    },
    {
     Item:'Kitchen'
    },
    {
     Item:'dryer'
    },
    {
     Item:'Air Conditioning'
    },
    {
     Item:'Heating'
    },
    {
     Item:'Dedicated Workspace'
    },
   
  ]
  const user=[
    {
     Item2:'Hair Dryer'
    },
    {
     Item2:'Iron'
    },
    {
      Item2:'TV'
     },
    
  ]
  const Extra=[
  {
    item:'Rafting'
  }
  ,
  {
    item:'Exotic Food'
  },
  {
    item:'Pick and Drop'
  },
  {
    item:'BBQ'
  },
  {
    item:'Breakfast'
  },
  
 
  
]
const img=[
    {
      img: require('../../assets/plus.png'),
    }

  ]
export default class ExtraService extends Component {
  render() {
    return (
        <div style={{width:'100%',padding:20}}>
        <label style={{marginLeft:20}}>Step 8/8</label>
        <h4 style={{fontSize:35,fontWeight:'700',marginLeft:20}}>Choose Amenties and Extra Services</h4>
        <label style={{fontSize:13,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Choose   Amenties & Extra Service which you are providing</label>
        <div style={{width:'90%',height:'80%',justifyContent:'center',marginLeft:20}}>  
        <div style={{justifyContent:'space-between'}} >
        <div style={{marginTop:6,width:'100%'}}> 
        <label style={{marginTop:20,fontSize:20,fontWeight:'500'}}>Amenities</label>
<div style={{display:'flex',width:'100%',marginTop:10}}>
{Amenities.map((Amenities) => (
       <ul style={{ listStyleType:'none',padding:0,margin:0, width:'15%',alignItems:'center',textAlign:'center',display:'flex',justifyContent:'center'}}>

<li style={{background:'#F3F4F6',width:'90%',height:45,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:15,display:'flex',alignItems:'center',justifyContent:'center'}}>{Amenities.Item}</li>
</ul>
       ))}
</div>
<div style={{display:'flex',marginTop:20,}}>
{user.map((user) => (
       <ul style={{ listStyleType:'none',width:"12%",}}>

<li style={{background:'#F3F4F6',width:'90%',height:45,borderRadius:5,color:'#6B7280',fontSize:16,textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>{user.Item2}</li>

       </ul>
       ))}
</div>
        </div>
        <div style={{marginTop:6,width:'100%',}}> 
        <label  style={{fontSize:20,fontWeight:'550'}}>
        Extra Service
        </label>
       <div style={{display:'flex',}}> <div style={{display:'flex',width:'60%',marginTop:10}}>
{Extra.map((Extra) => (
       <ul style={{ listStyleType:'none',padding:0,margin:0, width:'100%',alignItems:'center',textAlign:'center',display:'flex',justifyContent:'center'}}>

<li style={{background:'#F3F4F6',width:'80%',height:45,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:16,display:'flex',alignItems:'center',justifyContent:'center'}}>
  {Extra.item}</li>
 
  {/* <li style={{border:'none',background:'none'}}>
  <img
                      style={{ width:35,height:35}}
                      src={Extra.img}
                      alt=""
                    />
  </li> */}
  


       </ul>
       
       ))}
      
</div> <img style={{width:40,height:40,marginLeft:50,marginTop:10}} src={require('../../assets/plus.png')}/></div>
        </div>
        <div style={{padding:20}}>
        <label style={{borderTop:'1px solid',borderColor:'#E2E8F0',marginTop:20 ,width:'90%',fontSize:18,fontWeight:'600'}}>Rafting</label><br/>
        <div style={{display:'flex',width:'55%',justifyContent:'space-between'}}>
            
            <div style={{width:'45%',marginTop:15}}>
                <label style={{color:'#474554',fontSize:15}}>Select Service for Number of Guest</label><br/>
                <input style={{width:'100%',height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder={this.props.placeHolder} />
            </div>
            <div style={{width:'45%',marginTop:15}}>
                <label style={{color:'#474554',fontSize:15}}>Price </label><br/>
                <input style={{width:'100%',height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder={this.props.placeHolder} />
            </div>

        </div>
        <label style={{marginTop:15,color:'#474554',width:'55%',}}>Rafting Description</label><br/>
                <textarea style={{width:'55%',padding:5,color:'#94A3B8',height:90,borderRadius:10,borderColor:'#E2E8F0'}} id="freeform" name="freeform" rows="4" cols="50">
                Enter your Property Descroption
</textarea><br/>
<FileBrowser title={'Rafting Certifcate'}/>
{/* <label style={{marginTop:10,color:'#474554',width:'55%'}}>Rafting Certifcate</label><br/> */}

<label style={{borderTop:'1px solid',borderColor:'#E2E8F0',marginTop:20 ,width:'90%'}}>Exotic Food</label><br/>
        <div style={{display:'flex',width:'55%',justifyContent:'space-between'}}>
            
            <div style={{width:'45%',marginTop:15}}>
                <label style={{color:'#474554',fontSize:15}}>Select Service for Number of Guest</label><br/>
                <input style={{width:'100%',height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder={this.props.placeHolder} />
            </div>
            <div style={{width:'45%',marginTop:15}}>
                <label style={{color:'#474554',fontSize:15}}>Price </label><br/>
                <input style={{width:'100%',height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder={this.props.placeHolder} />
            </div>

        </div>
        <label style={{marginTop:15,color:'#474554',width:'55%',fontSize:15}}>Exotic Food  Description</label><br/>
                <textarea style={{width:'55%',color:'#94A3B8',height:90,borderColor:'#E2E8F0',borderRadius:10,padding:10}} id="freeform" name="freeform" rows="4" cols="50">
                Enter your Property Descroption
</textarea><br/>
<FileBrowser  title={'Upload Certifcate'}/>
{/* <label style={{marginTop:10,color:'#474554',width:'55%'}}>Upload Certifcate</label><br/> */}

        </div>
        <div style={{display:'flex', marginTop:'1%',alignItems:'center',justifyContent:'flex-end'}}>
       <button style={{width:'10%',borderRadius:10,height:'45px',borderWidth:0,background:'white' }}
         onClick={()=>this.props.NextCallBack({navigationTo:'Extra_Service',id:7,currentid:8,bt_type:'Back'})}
           >Back</button>
                 <Link style={{width:'10%'}}to="/Deshbord">   <button style={{color:'white',background:'#F15A29',borderRadius:10,height:'45px',marginLeft:10 }}>Finish</button></Link>
                    </div>
        </div>
        </div>
      
        </div>
    )
  }
}
