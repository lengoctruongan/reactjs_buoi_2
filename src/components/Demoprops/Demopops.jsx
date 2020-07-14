import React, { Component } from 'react'
import data from '../../data/data.json'
import Film_Rcc from './Film_Rcc'
export default class Demopops extends Component {
    constructor(props){
        super(props);
        this.state={
            mangPhim:data
        }
    }
    
   
    
    renderMangPhim=()=>{
        
        return this.state.mangPhim.map((phim,index)=>{
            return(
                <div className="col-4" key={index}>
                    <Film_Rcc phim_input={phim}/>
                    {/* {console.log(this.mangPhim)} */}
                </div>
            )
        })
    }
    render() {
        console.log("moo");
        console.log(this.state.mangPhim);
        return (
            <div className="container">
                <div className="row">
                    {this.renderMangPhim}
                </div>
            </div>
        )
    }
}
