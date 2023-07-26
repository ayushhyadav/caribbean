import React, { Component } from 'react'
import FileBrowser from './FileBrowser'
export default class ExtraService extends Component {
  render() {
    return (
        <div style={{width:'100%',padding:20}}>
        <label style={{marginLeft:20}}>Step 8/8</label>
        <h4 style={{fontSize:25,fontWeight:'700',marginLeft:20}}>Choose Amenties and Extra Services</h4>
        <label style={{fontSize:13,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Choose   Amenties & Extra Service which you are providing</label>
        <div style={{width:'90%',height:'80%',justifyContent:'center',marginLeft:20}}>  
        <div style={{justifyContent:'space-between'}} >
        <div style={{marginTop:6,width:'100%'}}> 
        <label>
        Amenties
        </label>
        <ul style={{ listStyleType:'none',padding:0,margin:0,display:'flex',flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
           
        <li style={{background:'#F3F4F6',width:'6%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:14}}>
                Wifi
            </li>
            <li style={{background:'#F3F4F6',width:'8%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
            Washer
            </li>
            <li style={{background:'#F3F4F6',width:'8%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
            Kitchen
            </li>
            <li style={{background:'#F3F4F6',width:'7%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
            Dryer
            </li>
            <li style={{background:'#F3F4F6',width:'15%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
            Air Conditioning
            </li>
            <li style={{background:'#F3F4F6',width:'8%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
            Heating

            </li>
            <li style={{background:'#F3F4F6',width:'20%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
            Dedicated Workspace
            </li>
        </ul>
        <ul style={{ listStyleType:'none',width:'25%',padding:0,margin:0,marginTop:20,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
           
           <li style={{background:'#F3F4F6',width:'33%',height:25,borderRadius:8,textAlign:'center',color:'#6B7280',fontSize:12}}>
           Hair Dryer
               </li>
               <li style={{background:'#F3F4F6',width:'33%',height:25,marginLeft:10,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
              Iron
               </li>
               <li style={{background:'#F3F4F6',width:'33%',height:25,marginLeft:10,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12,justifyContent:'center'}}>
              Tv
               </li>
               </ul>
        </div>
        <div style={{marginTop:6,width:'100%',}}> 
        <label>
        Extra Service
        </label>
        <ul style={{ listStyleType:'none',padding:0,margin:0,display:'flex',marginTop:20,flexDirection:'row',justifyContent:'space-between',width:'50%'}}>
           
           <li style={{background:'#F3F4F6',width:'15%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:14}}>
           Rafting
               </li>
               <li style={{background:'#F3F4F6',width:'20%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
               Exotic Food
               </li>
               <li style={{background:'#F3F4F6',width:'25%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
               Pick and Drop
               </li>
               <li style={{background:'#F3F4F6',width:'12%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
               BBQ
               </li>
               <li style={{background:'#F3F4F6',width:'17%',height:25,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:12}}>
               Breakfast
               </li>
               </ul>
        </div>
        <label style={{borderTop:'1px solid',borderColor:'#E2E8F0',marginTop:20 ,width:'90%'}}>Rafting</label><br/>
        <div style={{display:'flex',width:'55%',justifyContent:'space-between'}}>
            
            <div style={{width:'45%',marginTop:15}}>
                <label style={{color:'#474554',fontSize:12}}>Select Service for Number of Guest</label><br/>
                <input style={{width:'100%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder={this.props.placeHolder} />
            </div>
            <div style={{width:'45%',marginTop:15}}>
                <label style={{color:'#474554',fontSize:12}}>Price </label><br/>
                <input style={{width:'100%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder={this.props.placeHolder} />
            </div>

        </div>
        <label style={{marginTop:15,color:'#474554',width:'55%'}}>Rafting Description</label><br/>
                <textarea style={{width:'55%',padding:5,color:'#94A3B8',height:90}} id="freeform" name="freeform" rows="4" cols="50">
                Enter your Property Descroption
</textarea><br/>
<FileBrowser  title={'Rafting Certifcate'}/>
{/* <label style={{marginTop:10,color:'#474554',width:'55%'}}>Rafting Certifcate</label><br/> */}

<label style={{borderTop:'1px solid',borderColor:'#E2E8F0',marginTop:20 ,width:'90%'}}>Exotic Food</label><br/>
        <div style={{display:'flex',width:'55%',justifyContent:'space-between'}}>
            
            <div style={{width:'45%',marginTop:15}}>
                <label style={{color:'#474554',fontSize:12}}>Select Service for Number of Guest</label><br/>
                <input style={{width:'100%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder={this.props.placeHolder} />
            </div>
            <div style={{width:'45%',marginTop:15}}>
                <label style={{color:'#474554',fontSize:12}}>Price </label><br/>
                <input style={{width:'100%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder={this.props.placeHolder} />
            </div>

        </div>
        <label style={{marginTop:15,color:'#474554',width:'55%'}}>Exotic Food  Description</label><br/>
                <textarea style={{width:'55%',padding:5,color:'#94A3B8',height:90}} id="freeform" name="freeform" rows="4" cols="50">
                Enter your Property Descroption
</textarea><br/>
<FileBrowser  title={'Upload Certifcate'}/>
{/* <label style={{marginTop:10,color:'#474554',width:'55%'}}>Upload Certifcate</label><br/> */}

        </div>
        <div style={{display:'flex', marginTop:'1%',alignItems:'center',justifyContent:'flex-end'}}>
       <button style={{width:'10%',borderRadius:10,height:'45px',borderWidth:0,background:'white' }}
         onClick={()=>this.props.NextCallBack({navigationTo:'Extra_Service',id:7})}
       >Back</button>
                    <button style={{color:'white',background:'#F15A29',width:'10%',borderRadius:10,height:'45px',marginLeft:10 }}>Finish</button>
                    </div>
        
        </div>
      
        </div>
    )
  }
}
