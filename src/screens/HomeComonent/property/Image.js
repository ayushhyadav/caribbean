import React, { Component } from 'react'

const Images =[
  {
    img: require('../../../assets/Rectangle 21.png'),
  },
  {
    img: require('../../../assets/Rectangle 23.png'),
  },
  {
    img: require('../../../assets/Rectangle 24.png'),
  },
]
export default class Image extends Component {
  render() {
    return (
      <div style={{width:'100%'}}>
          {Images.map((Image) => (
            <img
            style={{width:'33%',height:300,}}
            src={Image.img}
            alt=""
          />

          ))}
      </div>
    )
  }
}
