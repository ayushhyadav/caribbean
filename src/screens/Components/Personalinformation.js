import React, { Component } from 'react'
const Data=[
    {
        title:'Personal Information',
        desc:'Enter and Complete',
        img:require('../../assets/profile.png'),
        id:1

    },
    {
        title:'Upload Profile Picture',
        desc:'Upload Information',
        img:require('../../assets/camera.png'),
        id:2
    },
    {
        title:'Verify Phone Number',
        desc:'Register Phone Number',
        img:require('../../assets/mobile.png'),
        id:3
    },
    {
        title:'Passport/ID Verfication ',
        desc:'Verfiy youself',
        img:require('../../assets/personalcard.png'),
        id:4
    },
    {
      title:'List your Property',
      desc:'Fill Property info',
      img:require('../../assets/house.png'),
      id:5

    },
    {
        title:'Property Location',
        desc:'Choose Property Location',
        img:require('../../assets/location.png'),
        id:6
  
      },
      {
        title:'Property Images',
        desc:'Upload Property images',
        img:require('../../assets/gallery.png'),
        id:7
  
      },
      {
        title:'Amenties & Services',
        desc:'Choose Amenties & Services',
        img:require('../../assets/home-wifi.png'),
        id:8
  
      }

]
export default class Personalinformation  extends Component {
    constructor(){
        super();
        this.state={

        }
    }
  render() {
    return (
      <div>
        <div>
            <div>
            {Data.map((Data) => (
            <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between'}}>
                <div>
                <li style={{fontSize:14,fontWeight:'bold'}}>
                    {Data.title}
                </li>
                
                <li style={{fontSize:10}}>{Data.desc}</li>
                </div>
                <div style={{display:'flex',width:70,justifyContent:'space-between'}}>
                    <div style={{width:40,height:40,borderRadius:20,backgroundColor:this.props.Highlight.id == Data.id?'#FEF0EC':'#F1F5F9',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img style={{width:20,height:20,filter:this.props.Highlight.id == Data.id? 'invert(37%) sepia(93%) saturate(7471%) hue-rotate(356deg) brightness(91%) contrast(95%)':null}}
                      src={Data.img} alt=''
                    />
                    </div>
                    <div style={{borderWidth:1,border:'solide'}}>
                        <div style={{height:20,width:0,borderWidth:0.3,border:'solid',borderColor:'#94A3B8'}}></div>
                        <div style={{width:10,height:10,borderRadius:5,borderColor:this.props.Highlight.id == Data.id?'#FEF0EC':'#94A3B8',border:'1px solid',backgroundColor:this.props.Highlight.id == Data.id?'#F15A29':'#94A3B8',marginLeft:-4}}></div>
                        <div style={{height:20,width:0,borderWidth:0.3,border:'solid',borderColor:'#94A3B8'}}></div>
                    </div>
                </div>
            </ul>
            
            
          ))}
            </div>





        </div>
      </div>
    )
  }
}
