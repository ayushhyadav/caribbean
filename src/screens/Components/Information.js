import React, { Component } from 'react';
import InputField from './InputeFiled'

export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ width: '70%', padding: '2rem',}}>
        <label style={{ width:'8%',display:'flex',justifyContent:'flex-end' ,color:'#0F172A'}}>Step 1/8</label>
        <h4 style={{width:'28.6%',display:'flex',justifyContent:'flex-end' ,fontSize:30, fontWeight: '700',}}>Personal Information</h4>
        <h5 style={{ width:'27%',display:'flex',justifyContent:'flex-end' ,fontSize:16, fontWeight: '400', color: '#0F172A', }}>
          Lorem ipsum dolor sit amet consetetur
        </h5>
        <div
          style={{
           marginLeft:20,
            display: 'flex',
            marginTop: '1.25rem',
            justifyContent: 'space-between',
            padding: '1.25rem',
            width: '80%',
            boxSizing: 'border-box',
          }}
        >
          <InputField secureTextEntry={false} title={'First Name'} placeHolder="First Name" onChangeText={() => {}} />
          <InputField secureTextEntry={false} title={'Last Name'} placeHolder="Last Name" onChangeText={() => {}} />
        </div>
        <div
          style={{
            marginLeft:20,
            display: 'flex',
            marginTop: '0.625rem',
            justifyContent: 'space-between',
            padding: '1.25rem',
            width: '80%',
            boxSizing: 'border-box',
          }}
        >
          <InputField secureTextEntry={false} title={'Email'} placeHolder="Enter Email" onChangeText={() => {}} />
          <InputField secureTextEntry={false} title={'Date of Birth'} placeHolder="DD/MM/YYYY" onChangeText={() => {}} />
        </div>
        <div
          style={{
            marginLeft:20,
            display: 'flex',
            marginTop: '0.625rem',
            justifyContent: 'space-between',
            padding: '1.25rem',
            width: '80%',
            boxSizing: 'border-box',
          }}
        >
          <InputField secureTextEntry={true} title={'Password'} placeHolder="Password" onChangeText={() => {}} />
          <InputField
            secureTextEntry={true}
            title={'Confirm Password'}
            placeHolder="Confirm Password"
            onChangeText={() => {}}
          />
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '0.625rem',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          onClick={() => this.props.NextCallBack({ navigationTo: 'Upload_Profile', id: 2,type:'Next' })}
        >
          <button
            style={{
              color: 'white',
              background: '#F15A29',
              width: '10%',
              borderRadius: '0.625rem',
              height: '45px',
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
