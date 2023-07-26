import React, { Component } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default class PassportVerification extends Component {
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
      <div style={{ width: '60%', padding: 20, justifyContent: 'center' }}>
        <label style={{ marginLeft: 20 }}>Step 4/8</label>
        <h4 style={{ fontSize: 25, fontWeight: '700', marginLeft: 20 }}>Passport/ID Verification</h4>
        <label style={{ fontSize: 13, fontWeight: '400', color: '#0F172A', marginLeft: 20 }}>
          Upload a government-issued ID that clearly shows your full name and complete photo. The document must be a
          cleared high-resolution color copy of the complete (uncropped) original document with no information obscured
          by the camera's flash.
        </label>
        <div style={{ width: '100%', height: '100%' }}>
          <label style={{ marginLeft: 20 }}>Country</label>
          <br />
          <Select options={options} value={value} onChange={this.changeHandler} />
          <br />

          <input type="radio" /> Passport <br />
          <input type="radio" /> National ID <br />

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
            onClick={()=>this.props.NextCallBack({navigationTo:'Veri_Phone',id:3})}
            >Back</button>

            <button style={{ color: 'white', background: '#F15A29', width: '10%', borderRadius: 10, height: '45px' }}
            onClick={()=>this.props.NextCallBack({navigationTo:'List_property',id:5})}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
