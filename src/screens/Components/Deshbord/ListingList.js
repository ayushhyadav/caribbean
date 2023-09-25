import React, { Component } from "react";
import "./List.css";
import { Link } from "react-router-dom";

export default class ListingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      data: [
        1,
        2,
        3,
        4,
        5,
        6,

        {
          img: require("../../../assets/BgImage.png"),
          title: "Latimer Grand Oaks",
          rating: "5.0",
          desc: "Tanzaniza-Unguja -Beach View"
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <label className="title">Listings</label>
         <Link to='/AddProperty' ><button className="add-property-button">Add New Property</button></Link>
        </div>
        <div className="grid-container">
          {this.state.data.map((val, index) => (
            <div key={index} className="listing-card">
              <div className="image-container">
                <img
                  src={require("../../../assets/BgImage.png")}
                  alt="Background"
                  className="card-image"
                />
                <button className="edit-button">Edit</button>
              </div>
              <div className="card-content">
                <div className="card-row">
                  <label className="card-heading">Latimer Grand Oaks</label>
                  <label className="card-rating">5.0</label>
                </div>
                <div className="card-row">
                  <label className="card-description">
                    Tanzaniza-Unguja -Beach View
                  </label>
                  <label className="card-location">Middleaze</label>
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


