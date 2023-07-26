import React, { Component } from 'react';

export default class ScrollDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[
        {
          img: require('../../assets/Rectangle 6 (1).png'),
          title:'Uptown'
        },
        {
          img: require('../../assets/Rectangle 7.png'),
          title:'Downtown'
        },
        {
          img: require('../../assets/Rectangle8.png'),
          title:'Mountains'
        },
        {
          img: require('../../assets/Rectangle 9.png'),
          title:'Beach'
        },
        {
          img: require('../../assets/Rectangle 10.png'),
          title:'River'
        },
       
      ]
    };
  }
  
  render() {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' ,marginTop:25}}>
        <div style={{ width: '85%' }}>
          <h1>Most popular Caribbean destinations</h1>
          <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'scroll',marginTop:25 }}>
            {this.state.list.map((list) => (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 20px' }}>
                <img style={{ width: '285px' }} src={list.img} alt="logo" />
                <label style={{position: 'absolute',color:'white',fontSize:28,fontWeight:'600'}}>{list.title}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
