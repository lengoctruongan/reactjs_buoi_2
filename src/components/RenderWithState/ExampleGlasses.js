import React, { Component } from 'react'
import './styleGlass.css'
export default class ExampleGlasses extends Component {
   state={arrProduct :[

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effectimg.'},
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
       ],
       glassSeclected:null,
    } 
    renderGlass=()=>{
       return  this.state.arrProduct.map((Glass,index)=>{
            return(
                <button className="btn" onClick={()=>this.doiKinh(Glass)} key={index}>
                    <img src={Glass.url}/>
                </button>
            )
        })
    }
    doiKinh=(kinh)=>{
        this.setState({
            glassSeclected:kinh
        },() => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <section className="glasses">
                <div className="glasses__wrapper container my-4">
                    <div className="row">
                        <div className="col-6">
                            <h2>Virtual Glasses</h2>
                            <div className="d-flex flex-wrap">
                                { this.renderGlass()}
                            </div>
                            <div className="card position-relative" style={{ width: 400 }}>
                                <img className="card-img-top img-fluid" src="./img/model.jpg" alt="Card" />
                                {this.state.glassSeclected?(
                                <div className="model__content">
                                    <img src={this.state.glassSeclected.url} alt="hinh" className="glasses__glass" />
                                    <div className="card-body">
                                <h4 className="card-title">{this.state.glassSeclected.name}</h4>
                                        <button type="button" className="btn btn-danger btn-lg">
                                            {this.state.glassSeclected.price}
              </button>
                                        <p className="card-text">
                                            ${this.state.glassSeclected.desc}
              </p>
                                    </div>
                                </div>
                                ):null}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
