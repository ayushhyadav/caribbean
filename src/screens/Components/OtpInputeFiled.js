import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OTPInput from 'react-otp-input';

export default class OtpInputeFiled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      value: '' 
    };
  }

  render() {
    const { value } = this.state; // Destructure the value from state
    return (
      <div style={{ width: '70%', padding: 30 }}>

        <label style={{ marginLeft: 20 }}>Step 3/8</label>
        <h4 style={{ fontSize: 25, fontWeight: '700', marginLeft: 20 }}>Verify Phone Number</h4>
        <label style={{ fontSize: 13, fontWeight: '400', color: '#0F172A', marginLeft: 20 }}>
          Lorem ipsum dolor sit emet conseteur
        </label>
        <div style={{ height: '40%', borderColor: '#E2E8F0', marginTop: 10, padding: 30 }}>
          <label style={{ color: '#474554' }}>Mobile No</label>
          <br />
          <div style={{ display: 'flex', width: '60%' }}>

            <PhoneInput
              inputStyle={{
                width: "90%",
                height: 40,

                borderColor: '#E2E8F0'
              }}
              buttonStyle={{
                width: 39,
                borderColor: '#E2E8F0',
                height: 40

              }}
              type={this.props.secureTextEntry ? 'password' : 'text'}
              placeholder="Enter phone number"
              value={value}
              onChange={(newValue) => this.setState({ value: newValue })}
              country={"eg"}
              enableSearch={true}
            />
            <button style={{ width: "23%" }} className=" me-2 btn btn-outline-dark " type="submit">Verify</button>


          </div>
          <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Enter 6 Digit Code and Verify your Phone Number</p>
          <OTPInput
            value={this.state.otp}
            onChange={(value) => this.setState({ otp: value })} // Update the otp in state
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: 45,
              height: 45,
              fontSize: '18px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              textAlign: 'center'
            }}
          />
        </div>
        <div style={{ display: 'flex', marginTop: '1%', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button
            style={{ width: '10%', borderRadius: 10, height: '45px', borderWidth: 0, background: 'white' }}
            onClick={() => this.props.NextCallBack({ navigationTo: 'Upload_Profile', id: 2, currentid: 3, bt_type: 'Back' })}
          >
            
            Back
          </button>
          <button
            style={{
              color: 'white',
              background: '#F15A29',
              width: '10%',
              borderRadius: 10,
              height: '45px',
              marginLeft: 10
            }}
            onClick={() => this.props.NextCallBack({ navigationTo: 'Pasport_veri', id: 4, bt_type: 'Next' })}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
