import React, { Component } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default class PassportVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      options: countryList().getData(),
      selectedFile: null, 
    };
  }

  changeHandler = (selectedOption) => {
    this.setState({ value: selectedOption });
  };

  handleFileChange = (event) => {
    
    this.setState({ selectedFile:event.target.files[0] });
  };

  render() {
    const { value, options } = this.state;

    return (
      <div style={{ width: '60%', padding: 30, justifyContent: 'center' }}>
        <label style={{ marginLeft: 20 }}>Step 4/8</label>
        <h4 style={{ fontSize: 30, fontWeight: '700', marginLeft: 20, color: '#000000' }}>
          Passport/ID Verification
        </h4>
        <label
          style={{
            fontSize: 16,
            fontWeight: '400',
            width: '70%',
            color: '#0F172A',
            marginLeft: 20,
          }}
        >
          Upload a government-issued ID that clearly shows your full name and complete photo. The document must be a
          cleared high-resolution color copy of the complete (uncropped) original document with no information obscured
          by the camera's flash.
        </label>
        <div style={{ width: '80%', height: '20%', padding: 20 }}>
          <label style={{ color: '#474554' }}>Country</label>
          <br />
          <Select options={options} value={value} onChange={this.changeHandler} />
          <br />

          <input
            type="radio"
            id="passport"
            name="idType"
            value="passport"
            onChange={this.idTypeChangeHandler}
          />{' '}
          Passport <br />

          <input
            type="radio"
            id="nationalId"
            name="idType"
            value="nationalId"
            onChange={this.idTypeChangeHandler}
          />{' '}
          National ID <br />
        </div>
        <div style={{ width: '100%', height: '30%', padding: 20 }}>
          {/* Wrap the file input in a label element to make it clickable */}         
          <label
            htmlFor="fileInput"
            style={{
              width: '100%',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: 114,
              borderWidth: 0.1,
              marginTop: 5,
              borderColor: '#94A3B8',
              color: '#94A3B8',
              border: '1.5px dashed',
              borderRadius: 7,
              cursor: 'pointer', 
            }}
          >
            <div style={{ display: 'flex' }}>
              <label style={{ fontSize: 16, fontWeight: '600', color: '#94A3B8' }}>Drag your files or Browse</label>
              <input type="file" id="fileInput" style={{ display: 'none' }} onChange={this.handleFileChange} />
              {this.state.selectedFile && <p>Selected file: {this.state.selectedFile.name}</p>}
            </div>
            <label style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8' }}>Add Both Side Image of Certificate</label>
          </label>
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
          <button
            style={{ width: '9%', border: 'none', background: 'white',color:'black' }}
            onClick={() =>
              this.props.NextCallBack({ navigationTo: 'Veri_Phone', id: 3, currentid: 4, bt_type: 'Back' })
            }
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
            }}
            onClick={() => this.props.NextCallBack({ navigationTo: 'List_property', id: 5, bt_type: 'Next' })}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
