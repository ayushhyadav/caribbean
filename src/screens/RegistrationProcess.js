import React, { Component } from 'react'
// import Personalinformation from './Components/Personalinformation'
import Personalinformation from './Components/Personalinformation'
import RegistrationHeader from './Components/RegistrationHeader'
 import PropertyList from './Components/PropertyList';
 import Located from './Components/Location';
import ExtraService from './Components/ExtraService';
 import Information from './Components/Information';
 import ProfileUpload from './Components/ProfileUpload';
 import PassportVarification from './Components/PassportVarification';
 import PropertyDetails from './Components/PropertyDetails';
 import OtpInputeFiled from './Components/OtpInputeFiled'
export default class RegistrationProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowComponentId:{navigationTo: 'per_Info', id: 1}
    };
  }
  render() {
    // const { otp } = this.state;
    return (
     <div>
     <RegistrationHeader/>
     <div style={{  justifyContent:'center',alignItems:'center'}}  >
      <div style={{marginTop:20,marginBottom:5}}>
      <h3 style={{fontSize:30,fontWeight:'700',marginLeft:20}}>Complete these Steps</h3>
      <label style={{fontSize:16,fontWeight:'400',color:'#0F172A',marginLeft:20}}>Lorem ipsum dolor sit emet conseteur</label>
      </div>
      <div style={{display:'flex', padding:20}}>
        <div style={{width:'20%'}}>
         <Personalinformation Highlight={this.state.ShowComponentId}/>
         </div>
         {this.state.ShowComponentId.id ==1?<Information NextCallBack={(value)=>this.setState({ShowComponentId:value})}/>:null}
         
         {this.state.ShowComponentId.id ==2?<ProfileUpload NextCallBack={(value)=>this.setState({ShowComponentId:value})}/>:null}

         {this.state.ShowComponentId.id ==3?<OtpInputeFiled NextCallBack={(value)=>this.setState({ShowComponentId:value})}/>:null}

         {this.state.ShowComponentId.id ==4?<PassportVarification NextCallBack={(value)=>this.setState({ShowComponentId:value})}/>:null}

         {this.state.ShowComponentId.id ==5?<PropertyList NextCallBack={(value)=>this.setState({ShowComponentId:value})}/>:null}

         {this.state.ShowComponentId.id ==6?<Located NextCallBack={(value)=>this.setState({ShowComponentId:value})}/>:null}

         {this.state.ShowComponentId.id ==7?<PropertyDetails NextCallBack={(value)=>this.setState({ShowComponentId:value})}/>:null}

         {this.state.ShowComponentId.id ==8?<ExtraService NextCallBack={(value)=>this.setState({ShowComponentId:value})}/>:null}
      </div>
     </div>
     
     </div>
    )
  }
}