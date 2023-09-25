import React, { Component } from 'react'

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
export default class PropertyLocation extends Component {
    constructor(props){
        super();
        this.state={

        }
    }
  render() {
    return (
  <div style={{width:'90%',padding:20}}>
          <label style={{fontSize:17,fontWeight:'500',marginLeft:20}}>Step 2/4\
          </label>
          <h4 style={{fontSize:25,fontWeight:'700',marginLeft:20}}>Where are you Located </h4>
          <label style={{fontSize:16,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Please Complete these Location info of your property</label>
          <div style={{width:'90%',justifyContent:'center',marginLeft:20,height:500}}>  
          <div style={{flexDirection:'row',display:'flex',justifyContent:'space-between',marginTop:30,}} >
          <div style={{marginTop:6,width:'30%'}}> 
                <label>Select Country/Region</label>
                <select style={{width:'98%',height:'2.6rem',borderColor:'#E2E8F0',borderRadius:7,background:'none'}}>
             {Data.map((Data) => (   <option>
                {Data.title}
                </option>))}
               
            </select>
            </div>
            <div style={{marginTop:15,width:'30%'}}> 
                <label>State</label>
                <select style={{width:'98%',height:'2.2rem',borderColor:'#E2E8F0',borderRadius:7,background:'none'}}>
             {Data.map((Data) => (   <option>
                {Data.title}
                </option>))}
               
            </select>
            </div>
            <div style={{marginTop:15,width:'30%'}}> 
                <label>City</label>
                <select style={{width:'100%',height:'2.2rem',borderColor:'#E2E8F0',borderRadius:7,background:'none'}}>
             {Data.map((Data) => (   <option>
                {Data.title}
                </option>))}
               
            </select>
            </div>

  </div>
  <div style={{width:'100%',marginTop:25,}}>
                <label style={{color:'#474554' ,fontSize:17}}>Street Address</label><br/>
                <input style={{width:'100%',height:45,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder='Enter Your Street Address' />
            </div>
            <button style={{color:'white',height:45,width:'100%',marginTop:25,borderRadius:10,border:'none',background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)'
}}>Use current Location</button>
  </div>
        <div style={{display:'flex', marginTop:30,width:'92%',alignItems:'center',justifyContent:'flex-end'}}>
       <button style={{width:'10%',borderRadius:10,height:'45px',borderWidth:0,background:'white' }}
        onClick={()=>this.props.NextCallBack({navigationTo:'property_Location',id:1,currentid:2,bt_type:'Back'})}
       >Back</button>
                    <button style={{color:'white',background:'#F15A29',width:'10%',borderRadius:10,height:'45px',marginLeft:10 }}
                     onClick={()=>this.props.NextCallBack({navigationTo:'property_Images',id:3,bt_type:'Next'})}
                    >Next</button>
                    </div>


     
</div>

      
       
    )
  }
}
