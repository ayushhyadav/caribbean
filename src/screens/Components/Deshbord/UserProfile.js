import React, { Component } from 'react';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: [1, 2, 3, 4, 5]
    };
  }

  render() {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center',marginTop:'20px',height:"180px" ,}}>
        <div style={{ width: '80%',display:'flex',justifyContent:'space-between',}}>
          <div style={{ display: 'flex',width:'50%', alignItems: 'center', marginBottom: 20 ,}}>
            <img style={{ width: 120, height: 120,}} src={require('../../../assets/Ellipse 11 (1).png')} alt='' />
            <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: 23, fontWeight: '700', color: '#0F172A' }}>John Doe</label>
              <label style={{ color: '#64748B', fontSize: 14, fontWeight: '400' }}>2972 Westheimer Rd. Santa Ana, Illinois 85486</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {this.state.rating.map((val, index) =>
                  <img key={index} style={{ width: 19, height: 18 }} src={require('../../../assets/Vector(1).png')} alt='' />
                )}
                <label style={{ color: '#64748B', fontSize: 17, fontWeight: '600' }}>(200)</label>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent:'end',width:'28%' , marginBottom: 20 }}>
            <button style={{ height: 44,width:'75%', fontSize: 15, fontWeight: '600', color: '#0F172A', border: '1px solid', borderColor: '#0F172A', alignItems: 'center', justifyContent: 'center' }} className="me-2 btn btn-outline-dark" type="submit">View Location</button>
          </div>
          </div>
         
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={{ height: 50, borderRadius: 10, fontSize: 18, fontWeight: '600', backgroundColor: '#0F172A', color: 'white' }} className="me-2 btn btn-outline-dark" type="submit">
              My Profile
            </button>
          </div>
        </div>
      </div>
    );
  }
}
