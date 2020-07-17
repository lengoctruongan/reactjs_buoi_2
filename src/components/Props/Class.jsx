import React, { Component } from 'react'

export default class Class extends Component {
    
    render() {
       
      let  {img}=this.props
        return (
            <div className="card">
                <img className="card-img-top" src="./img/hinh.jpg"  alt />
                <div className="card-body">
                    <h3>StateFull Component</h3>
                     <h4 className="card-title">{this.props.girl.ten}</h4>
                     <p className="card-text">Tuổi {this.props.girl.tuoi}</p>
                </div>
            </div>

        )
    }
}
