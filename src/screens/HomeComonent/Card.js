import React, { Component } from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: require('../../assets/Rectangle 12 (1).png'),
         
        },
        {
          img: require('../../assets/Rectangle 12 (2).png'),
         
        },
        {
          img: require('../../assets/Rectangle 12 (3).png'),
         
        },
        {
          img: require('../../assets/Rectangle 12 (4).png'),
         
        },
        {
          img: require('../../assets/Rectangle 12 (5).png'),
         
        },
        {
          img: require('../../assets/Rectangle 12 (6).png'),
         
        },
        {
          img: require('../../assets/Rectangle 12 (7).png'),
         
        },
        
        {
          img: require('../../assets/Rectangle 12 (8).png'),
         
        },
        {
          img: require('../../assets/Rectangle 12 (9).png'),
         
        },
      ]
    };
  }
  render() {
    return (
     <div style={{width:"100%",height:"100%",padding:15}}>
      <div className="label-container">
          <label className="near-you-label">Near You</label>
        </div>
      <div className="card-container">
     
        {this.state.data.map((data) => (
          <div  className="card">
        <Link to='/PropertyPage '>  <img  src={data.img} alt="Background" /></Link>  
            <div className="card-details">
              <div className="card-title">
                <label className="title">Latimer Grand Oaks</label>
                <label className="rating">5.0</label>
              </div>
              <div className="card-location">
                <label className="location">Tanzaniza-Unguja -Beach View</label>
                <label className="vendor">Middleaze</label>
              </div>
              <div className="card-price">
                <div className="price">
                  <label className="price-label">From</label>
                  <label className="price-value">$1,170</label>
                  <label className="price-unit">/Night</label>
                </div>
                <label className="distance">2000 km Away</label>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
}
