import React, { Component } from 'react'
import InputeFiled from './InputeFiled'

export default class ProfileUpload extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
             <div style={{width:'75%',padding:20}}>
          <label style={{marginLeft:20}}>Step 1/8</label>
          <h4 style={{fontSize:25,fontWeight:'700',marginLeft:20}}>Upload Profile Picture</h4>
          <label style={{fontSize:13,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Lorem ipsum dolor sit emet conseteur</label>
          <div style={{textAlign:'center',height:'40%',borderWidth:1,border:'dotted',borderColor:'#E2E8F0',marginTop:10,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <div style={{borderWidth:1,width:70,alignSelf:'center',height:70,border:'dotted',display:'flex',borderColor:'#E2E8F0',padding:3,alignItems:'center',justifyContent:'center',borderRadius:35,backgroundColor:'#F1F5F9'}}>
                <img src={require('../../assets/profile.png')} style={{width:50,height:50}} />
            </div>
            <button style={{height:40,width:'20%',marginTop:10,borderWidth:0,textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#E2E8F0'}} 
            >
                <label >Upload Photo</label>
            </button>
          </div>
       <div style={{display:'flex', marginTop:'1%',alignItems:'center',justifyContent:'flex-end'}}>
       <button style={{width:'10%',borderRadius:10,height:'45px',borderWidth:0,background:'white' }}
       onClick={()=>this.props.NextCallBack({navigationTo:'Per_info',id:1})}
       >Back</button>
                    <button style={{color:'white',background:'#F15A29',width:'10%',borderRadius:10,height:'45px',marginLeft:10 }}
                    onClick={()=>this.props.NextCallBack({navigationTo:'Veri_Phone',id:3})}
                    >Next</button>
                    </div>
         </div> 
        
        )
    }
}