import React, { Component } from 'react'
import data from '../../data/data.json'
export default class RenderWithMap extends Component {
    constructor (props) {
        super(props);
        this.state = {
            mangPhim: data
        }
    }
    renderFilm = () => {
        return (
            this.state.mangPhim.map((phim, index) => {
                return (
                    <div className="card col-4" key={index}>
                        <img className="img-fluid" src={phim.hinhAnh} alt />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                            <p className="card-text">{phim.moTa}</p>
                        </div>
                    </div>

                )
            })
        )
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderFilm()}
                </div>
            </div>
        )
    }
}
