import React, { Component } from 'react'
import Class from './Class'
import Function from './Function'

export default class DemoProps extends Component {
     Girl={
        ten:"Thi Thi",
        tuoi:21,
        
     }
    render() {
        return (
            <div className="container">
                <h2>Một hai ba bốn năm sáu bảy</h2>
                <Class girl={this.Girl}/>
                <Function girl={this.Girl}/>
            </div>
        )
    }
}
