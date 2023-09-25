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
      <div style={{width:'102%'}}>
          {Images.map((Image) => (
            <img
            style={{width:'31.7%',height:300, float: 'left',
            margin: '0 30px 0 0',}}
            src={Image.img}
            alt=""
          />

          ))}
      </div>
    )
  }
}
