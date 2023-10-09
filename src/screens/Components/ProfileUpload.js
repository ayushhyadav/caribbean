import React, { Component } from 'react';
import BaseUrl from '../Server/BaseUrl';

class ProfileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null, 
    };
  }

  handleFileUpload = (e) => {
    const file = e.target.files[0];
 
    this.setState({ selectedImage: URL.createObjectURL(file) });
  };

  sendImageToServer = () => {
    const { selectedImage } = this.state;

   
    if (selectedImage) {
    //   const apiUrl = `BaseUrl.BaseUrl + '/profile/upload'`;

      const formData = new FormData();
      formData.append('profileImage', selectedImage);


      fetch(BaseUrl.BaseUrl + '/profile/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
      
            console.log('Image uploaded successfully');

          } else {
       
            console.error('Image upload failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  render() {
    const { selectedImage } = this.state;

    return (
      <div style={{ width: '75%', padding: 20 }}>
        <label style={{ marginLeft: 20 }}>Step 2/8</label>
        <h4 style={{ fontSize: 25, fontWeight: '700', marginLeft: 20 }}>Upload Profile Picture</h4>
        <label style={{ fontSize: 13, fontWeight: '400', color: '#0F172A', marginLeft: 20 }}>
          Lorem ipsum dolor sit amet consectetur
        </label>
        <div
          style={{
            textAlign: 'center',
            height: '40%',
            borderWidth: 1,
            border: 'dotted',
            borderColor: '#E2E8F0',
            marginTop: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              borderWidth: 1,
              width: 70,
              alignSelf: 'center',
              height: 70,
              border: 'dotted',
              display: 'flex',
              borderColor: '#E2E8F0',
              padding: 3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 35,
              backgroundColor: '#F1F5F9',
            }}
          >
            {selectedImage ? (
              <img src={selectedImage} alt='' style={{ width: 50, height: 50 }} />
            ) : (
              <img src={require('../../assets/profile.png')} alt='' style={{ width: 50, height: 50 }} />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={this.handleFileUpload}
            id="fileInput"
          />
          <label
            htmlFor="fileInput" 
            style={{
              height: 40,
              width: '20%',
              marginTop: 10,
              borderWidth: 0,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E2E8F0',
              cursor: 'pointer', 
            }}
          >
            Upload Photo
          </label>
        </div>
        <div style={{ display: 'flex', marginTop: '1%', alignItems: 'center', justifyContent: 'flex-end' }}>
          <button
            style={{
              width: '10%',
              borderRadius: 10,
              height: '45px',
              borderWidth: 0,
              background: 'white',
              color: 'black',
            }}
            onClick={() =>
              this.props.NextCallBack({ navigationTo: 'Per_info', id: 1, currentid: 2, bt_type: 'Back' })
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
              marginLeft: 10,
            }}
            onClick={() => {
        
              this.sendImageToServer();
              this.props.NextCallBack({ navigationTo: 'Veri_Phone', id: 3, bt_type: 'Next' });
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileUpload;
