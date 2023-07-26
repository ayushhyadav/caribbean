import React, { Component } from 'react'

export default class InputeFiled extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div style={{width:'45%'}}>
                <label style={{color:'#474554'}}>{this.props.title}</label><br/>
                <input style={{width:'100%',height:35,borderWidth:0.1,marginTop:5,borderColor:'#E2E8F0',borderRadius:7}} secureTextEntry={true} placeholder={this.props.placeHolder} />
            </div>
        )
    }
}