import React, { Component } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import HomeHeader from '../HomeHeader';


export default class VarifyBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      options: countryList().getData(),
      
 
    };
  }

  changeHandler = (selectedOption) => {
    this.setState({ value: selectedOption });
    console.log(selectedOption)
  };

  render() {
    const { value, options } = this.state;
   console.log('options ',options)
    return (
        <div>
            <HomeHeader/>
            <div style={{margin:'0 auto',display:'grid',justifyContent:'center',marginTop:"5vh"}}>
                <h2 style={{color:'#000000',fontSize:"3.8vh",fontWeight:'bold'}}>Verify Before Booking</h2>
                <label style={{height:'8vh',textAlign:'center',fontSize:20,color: '#0F172A'
}}>Lorem ipsum dolor sit emet conseteur</label>
            </div>
      <div style={{ width: '60%', padding: 30, justifyContent: 'center',display:'grid' ,margin:'0 auto'}}>

        <div style={{textAlign:'center',}}>
        <h4 style={{ fontSize: 30, fontWeight: '700',color:'#000000',textAlign:'center' }}>Passport/ID Verification</h4>
        <label style={{ fontSize: 19, fontWeight: '400',width:'80%', color: '#0F172A', }}>
          Upload a government-issued ID that clearly shows your full name and complete photo. The document must be a
          cleared high-resolution color copy of the complete (uncropped) original document with no information obscured
          by the camera's flash.
        </label>
        </div>
        <div style={{ width: '80%', height: '20%', padding:20 ,margin:'0 auto'}}>
          <label style={{ color:'#474554'}}>Country</label>
          <br />
          <Select 
          
           options={options} value={value} onChange={this.changeHandler} />
          <br />

          <input type="radio" /> Passport <br />
          <input type="radio" /> National ID <br />

          
        </div>
        <div style={{width:'80%',height:'30%',padding:20,margin:'0 auto'}}>
                <label style={{color:'#474554'}}>{this.props.title}</label><br/>
                <div style={{width:'100%',justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',height:114,borderWidth:0.1,marginTop:5,borderColor:'#94A3B8',color:'#94A3B8',border:'1.5px dashed',borderRadius:7}}>
                    <div style={{display:'flex'}}>
                        <label style={{fontSize:16,fontWeight:'600',color:'#94A3B8'}}>Drag your files or Browse</label>
                        <label style={{fontSize:16,fontWeight:'600',color:'#474554'}}>Browse</label>
                    </div>
                    <label style={{fontSize:12,fontWeight:'400',color:'#94A3B8'}}>Add Both Side Image of Certificate</label>
                </div>
            </div>
        <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '1%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <button style={{ width: '9%', border: 'none', background: 'white' }}
            onClick={()=>this.props.NextCallBack({navigationTo:'Veri_Phone',id:3,currentid:4,bt_type:'Back'})}
            >Back</button>

            <button style={{ color: 'white', background: '#F15A29', width: '10%', borderRadius: 10, height: '45px' }}
            onClick={()=>this.props.NextCallBack({navigationTo:'List_property',id:5,bt_type:'Next'})}
            >
              Next
            </button>
          </div>
      </div>
      </div>
    );
  }
}
