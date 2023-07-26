import React, { Component } from 'react'


export default class PropertyDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            PropertyImages:[1]
        }
    }
    render(){
        return(
             <div style={{width:'70%',padding:20,}}>
          <label style={{marginLeft:20}}>Step 7/8</label>
          <h4 style={{fontSize:25,fontWeight:'700',marginLeft:20}}>Personal Information</h4>
          <label style={{fontSize:13,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Lorem ipsum dolor sit emet conseteur</label>
          <div>
            {this.state.PropertyImages.map((val,index)=>
            <button style={{width:180,height:140,borderWidth:0,borderRadius:11,marginLeft:10,marginTop:10}} onClick={()=>{this.state.PropertyImages.push(1)
            this.setState({PropertyImages:this.state.PropertyImages})}}>
                {index != 0?<img style={{width:60,height:60}} src={require('../../assets/gallery.png')} alt=''/>:<img style={{width:60,height:60}} src={require('../../assets/add-square.png')} alt=''/>}
            
          </button>
                )}
          
          </div>
          
          <div style={{display:'flex', marginTop:30,width:'92%',alignItems:'center',justifyContent:'flex-end'}}>
       <button style={{width:'10%',borderRadius:10,height:'45px',borderWidth:0,background:'white' }}
        onClick={()=>this.props.NextCallBack({navigationTo:'property_Images',id:6})}
       >Back</button>
                    <button style={{color:'white',background:'#F15A29',width:'10%',borderRadius:10,height:'45px',marginLeft:10 }}
                     onClick={()=>this.props.NextCallBack({navigationTo:'Extra_Service',id:8})}
                    >Next</button>
                    </div>
         </div> 
        )
    }
}