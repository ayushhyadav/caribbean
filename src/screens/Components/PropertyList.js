import React, { Component } from 'react'
import InputeFiled from './InputeFiled'
const Data=[
    {
        title:' Select View'
    },
    {
        title:' Select View2'
    },
    {
        title:' Select View3'
    },
    {
        title:' Select View4'
    }
]
export default class PropertyList extends Component {
    constructor(props){
        super();
        this.state={

        }
    }
  render() {
    return (
  <div style={{width:'100%',padding:20,justifyContent:'center'}}>
          <label style={{marginLeft:20}}>Step 5/8</label>
          <h4 style={{fontSize:25,fontWeight:'700',marginLeft:20}}>List Your Property </h4>
          <label style={{fontSize:13,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Please Complete these information for Listing Property</label>
          <div style={{width:'97%', justifyContent:'center',marginLeft:20}}>  
          <div style={{display:'flex',marginTop:15,justifyContent:'space-between'}}>
       <InputeFiled secureTextEntry={false} title={'Email'} placeHolder="Enter Email" onChangeText={()=>{}}/>
       <div style={{width:'45%'}}>
                <label style={{color:'#474554'}}>What Kind of View are you Listing</label><br/>
                <select style={{width:'100%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}}>
                {Data.map((Data) => (   <option>
                {Data.title}
                </option>))}
                </select>
            </div>
       </div>
     
       <div style={{display:'flex',marginTop:15,justifyContent:'space-between'}}>
      
       <div style={{width:'45%'}}>
                <label style={{color:'#474554'}}>Property Type</label><br/>
                <select style={{width:'100%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}}>
                {Data.map((Data) => (   <option>
                {Data.title}
                </option>))}
                </select>
            </div>
            <InputeFiled secureTextEntry={false} title={'Price Per Night'} placeHolder="" onChangeText={()=>{}} />   

       </div>
       
               
    <div style={{display:'flex',marginTop:15,justifyContent:'space-between'}} >
    <div style={{width:'45%'}}>
                <label style={{color:'#474554'}}>How many Guest You can Accomdate</label><br/>
                <input style={{width:'90%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder='' />
            </div>
            <div style={{width:'45%'}}>
                <label style={{color:'#474554'}}>How many Bedroom Guest can use</label><br/>
                <input style={{width:'90%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder='' />
            </div>
            <div style={{width:'45%'}}>
                <label style={{color:'#474554'}}>How many Bathroom Guest can use</label><br/>
                <input style={{width:'90%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder='' />
            </div>   
                </div>
<label style={{marginTop:15,color:'#474554'}}>Property Description</label><br/>
                <textarea style={{width:'100%',padding:5,color:'#474554'}} id="freeform" name="freeform" rows="4" cols="50">
Enter text here...
</textarea><br/>
<label style={{marginTop:15,color:'#474554'}}>Property Rules</label><br/>
                <textarea style={{width:'100%',padding:5,color:'#474554' }} id="freeform" name="freeform" rows="4" cols="50">
Enter text here...
</textarea>
        </div>
        <div style={{display:'flex', marginTop:30,alignItems:'center',justifyContent:'flex-end'}}>
       <button style={{width:'10%',borderRadius:10,height:'45px',borderWidth:0,background:'white' }}
       onClick={()=>this.props.NextCallBack({navigationTo:'List_property',id:4})}
       >Back</button>
                    <button style={{color:'white',background:'#F15A29',width:'10%',borderRadius:10,height:'45px',marginLeft:10 }}
                     onClick={()=>this.props.NextCallBack({navigationTo:'property_Location',id:6})}
                    >Next</button>
                    </div>
     
</div>

      
       
    )
  }
}
