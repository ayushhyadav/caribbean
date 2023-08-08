import React, { Component } from 'react';

const Data = [
  {
    title: 'Personal Information',
    desc: 'Enter and Complete',
    img: require('../../assets/profile.png'),
    id: 1,
  },
  {
    title: 'Upload Profile Picture',
    desc: 'Upload Information',
    img: require('../../assets/camera.png'),
    id: 2,
  },
  {
    title: 'Verify Phone Number',
    desc: 'Register Phone Number',
    img: require('../../assets/mobile.png'),
    id: 3,
  },
  {
    title: 'Passport/ID Verification',
    desc: 'Verify yourself',
    img: require('../../assets/personalcard.png'),
    id: 4,
  },
  {
    title: 'List your Property',
    desc: 'Fill Property info',
    img: require('../../assets/house.png'),
    id: 5,
  },
  {
    title: 'Property Location',
    desc: 'Choose Property Location',
    img: require('../../assets/location.png'),
    id: 6,
  },
  {
    title: 'Property Images',
    desc: 'Upload Property images',
    img: require('../../assets/gallery.png'),
    id: 7,
  },
  {
    title: 'Amenities & Services',
    desc: 'Choose Amenities & Services',
    img: require('../../assets/home-wifi.png'),
    id: 8,
  },
];

export default class PersonalInformation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log('show values ',this.props.Highlight)
    return (
      <div>
        <div>
          <div style={{ borderRight: '1px solid', borderColor: '#94A3B8'}}>
            {Data.map((data) => (
              <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '100%', padding: '0.625rem' }}>
                  <li style={{ fontSize: '1.125rem', fontWeight: 'bold', textAlign: 'end' }}>
                    {data.title}
                  </li>
                  <p style={{ fontSize: '0.875rem', textAlign: 'end' }}>{data.desc}</p>
                </div>
                <div style={{ display: 'flex', width: '35%', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '2.8125rem',
                      height: '2.8125rem',
                      borderRadius: '1.125rem',
                      marginTop: '0.5rem',
                      backgroundColor: this.props.Highlight.includes(data.id)? '#FEF0EC' : '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      style={{
                        width: '1.25rem',
                        height: '1.25rem',
                        filter: this.props.Highlight.includes(data.id) ? 'invert(37%) sepia(93%) saturate(7471%) hue-rotate(356deg) brightness(91%) contrast(95%)' : null,
                      }}
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <div style={{}}>
                    <div
                      style={{
                        width: '0.625rem',
                        height: '0.625rem',
                        marginRight: '-0.3125rem',
                        marginTop: '0.625rem',
                        border: 'none',
                        borderRadius: '0.625rem',
                        borderColor: this.props.Highlight.includes(data.id) ? '#FEF0EC' : '#94A3B8',
                        border: '1px solid',
                        backgroundColor: this.props.Highlight.includes(data.id) ? '#F15A29' : '#94A3B8',
                        marginLeft: '-0.25rem',
                      }}
                    ></div>
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
