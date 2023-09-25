import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '20%', // Set the width to 100% for responsiveness
//   height: '300px', // Set a fixed or percentage-based height

//   // borderRight: '1px solid red'
// };

export class MapContainer extends Component {
  render() {
    return (
      <div style={{ width: '35%', maxWidth: '350px', margin: '0 auto' }}>
        <label style={{ marginTop: 30, fontSize: 30, fontWeight: '600', width: "100%" }}> Property Location</label><br></br>
        <Map
          google={this.props.google}
          zoom={15}
          style={{width:'12%',height:'300px',marginRight:90}}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAVvI3SO5ejMv89g0MeDaYODFycXPEy7a8'
})(MapContainer);
