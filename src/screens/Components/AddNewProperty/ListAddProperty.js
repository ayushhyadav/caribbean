import React, { Component } from 'react'
// import InputeFiled from './InputeFiled'
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
export default class ListAddProperty extends Component {
    constructor(props){
        super();
        this.state={

        }
    }
  render() {
    return (
  <div style={{width:'85%',padding:20,justifyContent:'center',display:'flex',flexDirection:'column'}}>
          <label style={{fontSize:17,fontWeight:'500',marginLeft:10}}>Step 1/4</label>
          <h4 style={{fontSize:29,fontWeight:'700',marginLeft:20}}>List Your Property </h4>
          <label style={{fontSize:16,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Please Complete these information for Listing Property</label>
          <div style={{width:'90%', justifyContent:'center',marginLeft:20}}>  
          <div style={{display:'flex',marginTop:15,justifyContent:'space-between'}}>
          <div style={{ width: '50%', maxWidth: '400px' }}>
                <label style={{ color: '#474554',borderColor:'#E2E8F0' }}>Email</label><br />
                <input
                    style={{
                        width: 500,
                        height: '44px',
                        padding: '10px',
                        borderWidth: '0.1px',
                        marginTop: '5px',
                        borderColor: '#E2E8F0',
                        borderRadius: '7px'
                    }}
                    type={this.props.secureTextEntry ? 'password' : 'text'}
                    placeholder='Enter Email'
                />
            </div>
       <div style={{width:'50%'}}>
                <label style={{color:'#474554'}}>What Kind of View are you Listing</label><br/>
                <select style={{width:500,height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7,background:'none',padding:10}}>
                {Data.map((Data) => (   <option>
                {Data.title}
                </option>))}
                </select>
            </div>
       </div>
     
       <div style={{display:'flex',justifyContent:'space-between',width:'84%',marginTop:25}}>
      
       <div style={{width:'50%'}}>
                <label style={{color:'#474554'}}>Property Type</label><br/>
                <select style={{width:500,height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7,background:'none',padding:10}}>
                {Data.map((Data) => (   <option>
                {Data.title}
                </option>))}
                </select>
            </div>
            <div style={{ width: '50%', maxWidth: '400px' }}>
                <label style={{ color: '#474554' }}>Price Per Night</label><br />
                <input
                    style={{
                        width: 500,
                        height: '44px',
                        padding: '10px',
                        borderWidth: '0.1px',
                        marginTop: '5px',
                        borderColor: '#E2E8F0',
                        borderRadius: '7px'
                    }}
                    type={this.props.secureTextEntry ? 'password' : 'text'}
                    placeholder='$0'
                />
            </div>
            {/* <InputeFiled secureTextEntry={false} title={'Price Per Night'} placeHolder="" onChangeText={()=>{}} />    */}

       </div>
       
               
    <div style={{display:'flex',justifyContent:'space-between',width:'95%',marginTop:25}} >
    <div style={{width:'33%'}}>
                <label style={{color:'#474554',fontSize:17}}>How many Guest You can Accomdate</label><br/>
                <input style={{width:'93%',height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder='' />
            </div>
            <div style={{width:'33%'}}>
                <label style={{color:'#474554',fontSize:17}}>How many Bedroom Guest can use</label><br/>
                <input style={{width:'93%',height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder='' />
            </div>
            <div style={{width:'33%'}}>
                <label style={{color:'#474554',fontSize:17}}>How many Bathroom Guest can use</label><br/>
                <input style={{width:'93%',height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder='' />
            </div>   
                </div>
<label style={{marginTop:15,color:'#474554'}}>Property Description</label><br/>
                <textarea style={{width:'92%',padding:10,color:'#E2E8F0',borderColor:'#E2E8F0',borderRadius:10}} id="freeform" name="freeform" rows="4" cols="50">
                Enter Your Property Description
</textarea><br/>
<label style={{marginTop:15,color:'#474554'}}>Property Rules</label><br/>
                <textarea style={{width:'92%',padding:10,color:'#E2E8F0',borderColor:'#E2E8F0' ,borderRadius:10}} id="freeform" name="freeform" rows="4" cols="50">
                Enter Your Property Description
</textarea>
        </div>
        <div style={{display:'flex', marginTop:30,alignItems:'center',justifyContent:'flex-end'}}>
       <button style={{width:'10%',borderRadius:10,height:'45px',borderWidth:0,background:'white' }}
      
       >Back</button>
                    <button style={{color:'white',background:'#F15A29',width:'10%',borderRadius:10,height:'50px',marginLeft:10 }}
                     onClick={()=>this.props.NextCallBack({navigationTo:'property_Location',id:2,bt_type:'Next'})}
                    >Next</button>
                    </div>
     
</div>

      
       
    )
  }
}
