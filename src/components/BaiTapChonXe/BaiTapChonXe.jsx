//B1:dàn layout
//b2 xác định nguồn dữ liệu thay đổi=>tổ chức lưu trữ
//B3 Xử lý chức năng

import React  from 'react'

export default class BaiTapChonXe extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            mauxe: "./img/black-car.jpg"
        }
    }
     changeColor = (color) => {
         let imgColor=`./img/${color}-car.jpg`
        this.setState({
            mauxe:imgColor
        })

     }
    // changeColor=(mauxe)=>{
    //     this.setState({mauxe})
    // }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.mauxe} alt="Xe nè" />
                    </div>
                    <div className="col-6">
                        <button onClick={()=>{this.changeColor('red')}} className="btn btn-primary">Red</button>
                        <button onClick={()=>{this.changeColor('black')}} className="btn btn-dark">Black</button>
                        <button onClick={()=>{this.changeColor('silver')}} className="btn btn-light">Silver</button>
                        <button onClick={()=>{this.changeColor('steel')}} className="btn btn-secondary">Steel</button>
                    </div>
                </div>
            </div>
        )
    }
}
