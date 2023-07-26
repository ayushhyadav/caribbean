import React, { Component } from "react";
import SceensHeader from './Components/Deshbord/ScreensHeader'

export default class EarningScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div >
                <SceensHeader/>
                <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                        <label style={{fontSize:25,fontWeight:'600',color:'#0F172A'}}>Earning</label>
                        <button style={{width:111,height:40,borderRadius:5,borderColor:'#000000',fontSize:16,fontWeight:'600',color:'#0F172A'}}>Withdraw</button>
                    </div>
                </div>
            </div>
        )
    }
}